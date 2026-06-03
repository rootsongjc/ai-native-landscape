#!/usr/bin/env node
/**
 * Sync project licenses from GitHub API.
 *
 * For every project whose license is "Unknown" or empty, fetches the
 * repository metadata from https://api.github.com/repos/{owner}/{repo}
 * and updates the YAML front-matter in data/projects/{slug}.{lang}.md.
 *
 * Usage:
 *   node scripts/sync-licenses.mjs            # fetch & update
 *   node scripts/sync-licenses.mjs --dry-run  # preview only, no writes
 *
 * GitHub unauthenticated rate limit is 60 req/hr.
 * Set GITHUB_TOKEN env var for 5 000 req/hr.
 */

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { loadProjectDocuments, normalizeRepoSlug } from './lib.mjs';

const root = path.resolve(process.cwd());
const projectsDir = path.join(root, 'data', 'projects');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const CONCURRENCY = 8;
const dryRun = process.argv.includes('--dry-run');

// ── helpers ──────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizeLicenseName(value) {
  const text = String(value || '').trim();
  if (!text) return null;

  const normalized = text
    .replace(/^the\s+/i, '')
    .replace(/\s+license$/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  const lower = normalized.toLowerCase();
  if (lower === 'view license') return 'Other';
  if (lower === 'mit') return 'MIT';
  if (lower === 'apache 2.0' || lower === 'apache-2.0' || lower === 'apache license 2.0') return 'Apache-2.0';
  if (lower === 'other') return 'Other';

  return normalized;
}

function extractLicenseFromRepoPage(html) {
  if (!html) return null;

  const patterns = [
    /### License\s+([A-Za-z0-9.+\- ]+?)\s+license/i,
    /This project is licensed under the\s+(?:\[[^\]]*\]\()?([A-Za-z0-9.+\- ]+?)(?:\s+License)?(?:\)|\.|\s|<)/i,
    /\[License:\s*([A-Za-z0-9.+\- ]+?)\]/i,
    /- \[([A-Za-z0-9.+\- ]+?) license\]\(https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+#/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    const license = normalizeLicenseName(match?.[1]);
    if (license) return license;
  }

  if (/### License\s+View license/i.test(html) || />View license</i.test(html)) {
    return 'Other';
  }

  return null;
}

async function fetchGitHubLicenseFromPage(repoSlug) {
  const res = await fetch(`https://github.com/${repoSlug}`, {
    headers: {
      'User-Agent': 'ai-native-landscape-sync',
    },
  });
  if (!res.ok) return null;

  const html = await res.text();
  return extractLicenseFromRepoPage(html);
}

async function fetchGitHubLicense(repoSlug) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'ai-native-landscape-sync',
  };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const res = await fetch(`https://api.github.com/repos/${repoSlug}`, { headers });
  if (res.status === 403) {
    const remaining = res.headers.get('x-ratelimit-remaining');
    if (remaining === '0') {
      return fetchGitHubLicenseFromPage(repoSlug);
    }
    return fetchGitHubLicenseFromPage(repoSlug);
  }
  if (!res.ok) return fetchGitHubLicenseFromPage(repoSlug);

  const data = await res.json();
  const license = data.license;
  if (!license) return fetchGitHubLicenseFromPage(repoSlug);

  const apiLicense = normalizeLicenseName(
    license.spdx_id && license.spdx_id !== 'NOASSERTION' ? license.spdx_id : license.name,
  );

  return apiLicense || fetchGitHubLicenseFromPage(repoSlug);
}

function updateLicenseInFile(filePath, newLicense) {
  const source = fs.readFileSync(filePath, 'utf8');
  const normalized = source.replace(/^﻿/, '');
  if (!normalized.startsWith('---\n')) return false;

  const endIdx = normalized.indexOf('\n---\n', 4);
  if (endIdx === -1) return false;

  const fmText = normalized.slice(4, endIdx);
  const body = normalized.slice(endIdx + 5);

  const fm = yaml.load(fmText) || {};
  if (fm.license && fm.license !== 'Unknown' && fm.license !== '') return false;

  fm.license = newLicense;
  const newFmText = yaml.dump(fm, { lineWidth: 120, noRefs: true, sortKeys: false }).trimEnd();

  fs.writeFileSync(filePath, `---\n${newFmText}\n---${body}`, 'utf8');
  return true;
}

// ── main ─────────────────────────────────────────────────────────────

async function main() {
  const projects = loadProjectDocuments();
  const needLicense = projects.filter(
    (p) => (!p.license || p.license === 'Unknown') && normalizeRepoSlug(p.repo),
  );

  console.log(`Projects total: ${projects.length}`);
  console.log(`Need license:   ${needLicense.length}`);
  if (needLicense.length === 0) {
    console.log('All projects have licenses. Nothing to do.');
    return;
  }

  let updated = 0;
  let failed = 0;
  let skipped = 0;

  // Process in batches for concurrency control
  for (let i = 0; i < needLicense.length; i += CONCURRENCY) {
    const batch = needLicense.slice(i, i + CONCURRENCY);
    const results = await Promise.allSettled(
      batch.map(async (project) => {
        const repoSlug = normalizeRepoSlug(project.repo);
        const license = await fetchGitHubLicense(repoSlug);
        return { project, repoSlug, license };
      }),
    );

    for (const result of results) {
      if (result.status === 'rejected') {
        console.error(`  ✗ ${result.reason?.message || result.reason}`);
        failed++;
        continue;
      }

      const { project, repoSlug, license } = result.value;
      if (!license) {
        console.log(`  ╌ ${project.slug} (${repoSlug}) — no license on GitHub`);
        skipped++;
        continue;
      }

      const langs = ['zh', 'en'];
      let changed = false;
      for (const lang of langs) {
        const filePath = path.join(projectsDir, `${project.slug}.${lang}.md`);
        if (!fs.existsSync(filePath)) continue;
        if (dryRun) {
          console.log(`  ✓ [dry-run] ${project.slug}.${lang}.md: Unknown → ${license}`);
          changed = true;
        } else {
          const ok = updateLicenseInFile(filePath, license);
          if (ok) {
            console.log(`  ✓ ${project.slug}.${lang}.md: Unknown → ${license}`);
            changed = true;
          }
        }
      }

      if (changed) updated++;
      else skipped++;
    }

    // Small delay between batches to be respectful to GitHub API
    if (i + CONCURRENCY < needLicense.length) {
      await sleep(500);
    }
  }

  console.log('\n── Summary ──');
  console.log(`Updated:  ${updated}`);
  console.log(`Skipped:  ${skipped}`);
  console.log(`Failed:   ${failed}`);
  if (dryRun) console.log('(dry-run mode — no files were changed)');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
