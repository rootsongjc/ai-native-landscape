import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { setTimeout as sleep } from 'node:timers/promises';
import { loadProjects } from './lib.mjs';
import { SITE } from '../src/lib/landscape.mjs';

const locales = ['en', 'zh'];
const dayMs = 86400000;

export function collectionInventory(projects, requestedRepos) {
  const catalog = new Map(projects
    .filter((project) => project.repoSlug)
    .map((project) => [project.repoSlug.toLowerCase(), project]));
  const selected = requestedRepos?.map((repo) => repo.toLowerCase());
  const unknown = selected?.filter((repo) => !catalog.has(repo)) || [];
  if (unknown.length > 0) throw new Error(`Repositories not in the catalog: ${unknown.join(', ')}`);
  const skipped = selected ? [] : [...catalog]
    .filter(([, project]) => project.status === 'unavailable')
    .map(([repo]) => ({ repo, reason: 'Catalog status is unavailable' }));
  const skippedRepos = new Set(skipped.map((entry) => entry.repo));
  const repos = [...catalog.keys()].filter((repo) =>
    selected ? selected.includes(repo) : !skippedRepos.has(repo));
  return { repos, skipped, catalogCount: catalog.size };
}

export function refreshReasons(repo, snapshots, now, maxAgeDays) {
  return locales.flatMap((locale) => {
    const entry = snapshots[locale].get(repo);
    if (!entry) return [`${locale}: missing`];
    const analyzedAt = Date.parse(entry.analyzedAt);
    if (!Number.isFinite(analyzedAt) || analyzedAt > now + 300000) {
      return [`${locale}: invalid collection date`];
    }
    if (!Number.isFinite(entry.scores?.health) || !Number.isFinite(entry.metrics?.stars)) {
      return [`${locale}: incomplete data`];
    }
    return now - analyzedAt > maxAgeDays * dayMs ? [`${locale}: stale`] : [];
  });
}

async function requestJson(url, init = {}) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    let response;
    try {
      response = await fetch(url, { ...init, signal: AbortSignal.timeout(120000) });
    } catch (error) {
      if (attempt === 2) throw new Error(`Request failed: ${url.pathname}`, { cause: error });
      console.warn(`Retrying ${url.pathname}: ${error.message}`);
      await sleep(2000 * (attempt + 1));
      continue;
    }
    if (!response.ok) {
      if ((response.status === 429 || response.status >= 500) && attempt < 2) {
        console.warn(`Retrying ${url.pathname}: HTTP ${response.status}`);
        const retryAfter = Number(response.headers.get('retry-after'));
        const retryDelay = Number.isFinite(retryAfter) ? Math.min(retryAfter * 1000, 60000) : 0;
        await sleep(Math.max(2000 * (attempt + 1), retryDelay));
        continue;
      }
      throw new Error(`${url.pathname}: HTTP ${response.status}`);
    }
    return response.json();
  }
}

async function readScores(repos, request, apiBase) {
  const snapshots = {};
  for (const locale of locales) {
    const url = new URL('/api/health', apiBase);
    url.searchParams.set('repos', repos.join(','));
    url.searchParams.set('locale', locale);
    url.searchParams.set('v', String(Date.now()));
    const payload = await request(url);
    if (!Array.isArray(payload.projects) || payload.projects.some((entry) => typeof entry.repo !== 'string')) {
      throw new Error(`Invalid ${locale} score API response`);
    }
    snapshots[locale] = new Map(payload.projects.map((entry) => [entry.repo.toLowerCase(), entry]));
  }
  return snapshots;
}

export async function refreshRepository(repo, before, request = requestJson, apiBase = SITE.scoreApiBase) {
  const startedAt = Date.now();
  const url = new URL('/recalculate', apiBase);
  const payload = await request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ repos: [repo] }),
  });
  const summary = payload.summary;
  if (
    payload.success !== true ||
    summary?.success !== 1 ||
    !Array.isArray(summary.failures) ||
    summary.failures.length !== 0 ||
    !summary.processedRepos?.some((processedRepo) => processedRepo.toLowerCase() === repo)
  ) {
    const details = summary?.failures?.map((failure) => failure.error).join('; ');
    throw new Error(details || payload.error || 'Repository was not collected; check the deployed worker manifest');
  }

  const after = await readScores([repo], request, apiBase);
  const reasons = refreshReasons(repo, after, Date.now(), 7);
  for (const locale of locales) {
    const timestamp = Date.parse(after[locale].get(repo)?.analyzedAt);
    const previous = Date.parse(before[locale].get(repo)?.analyzedAt);
    if (timestamp < startedAt - 300000 || (Number.isFinite(previous) && timestamp <= previous)) {
      reasons.push(`${locale}: persisted collection date did not advance`);
    }
  }
  if (reasons.length > 0) throw new Error(reasons.join('; '));
  return { repo, analyzedAt: Object.fromEntries(locales.map((locale) => [locale, after[locale].get(repo).analyzedAt])) };
}

async function main() {
  const { values } = parseArgs({
    options: {
      'dry-run': { type: 'boolean', default: false },
      'max-age-days': { type: 'string', default: '7' },
      repo: { type: 'string', multiple: true },
      report: { type: 'string' },
    },
  });
  const maxAgeDays = Number(values['max-age-days']);
  if (!values['max-age-days'].trim() || !Number.isFinite(maxAgeDays) || maxAgeDays < 0) {
    throw new Error('--max-age-days must be a non-negative number');
  }
  const { repos, skipped, catalogCount } = collectionInventory(loadProjects(), values.repo);

  const before = Object.fromEntries(locales.map((locale) => [locale, new Map()]));
  for (let index = 0; index < repos.length; index += 40) {
    const snapshots = await readScores(repos.slice(index, index + 40), requestJson, SITE.scoreApiBase);
    for (const locale of locales) {
      for (const [repo, entry] of snapshots[locale]) before[locale].set(repo, entry);
    }
  }
  const now = Date.now();
  const candidates = repos
    .map((repo) => ({ repo, reasons: refreshReasons(repo, before, now, maxAgeDays) }))
    .filter((entry) => entry.reasons.length > 0);
  const report = {
    startedAt: new Date(now).toISOString(),
    maxAgeDays,
    dryRun: values['dry-run'],
    catalogCount,
    total: repos.length,
    skipped,
    candidates,
    updated: [],
    failures: [],
  };
  const saveReport = () => {
    if (values.report) writeFileSync(resolve(values.report), JSON.stringify(report, null, 2) + '\n');
  };
  saveReport();
  console.log(`Checked ${repos.length} repositories in both languages; ${candidates.length} need collection.`);
  for (const entry of skipped) console.log(`Skipped: ${entry.repo}: ${entry.reason}`);
  if (values['dry-run']) {
    for (const entry of candidates) console.log(`${entry.repo}: ${entry.reasons.join('; ')}`);
    return;
  }

  for (let index = 0; index < candidates.length; index += 2) {
    await Promise.all(candidates.slice(index, index + 2).map(async ({ repo }) => {
      try {
        const updated = await refreshRepository(repo, before);
        report.updated.push(updated);
        console.log(`Updated and verified: ${repo}`);
      } catch (error) {
        report.failures.push({ repo, error: error.message });
        console.error(`Failed: ${repo}: ${error.message}`);
      }
    }));
    saveReport();
    if (index + 2 < candidates.length) await sleep(2000);
  }
  report.finishedAt = new Date().toISOString();
  saveReport();
  console.log(`Updated ${report.updated.length}; failed ${report.failures.length}; unchanged ${repos.length - candidates.length}; skipped ${skipped.length}.`);
  if (report.failures.length > 0) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
