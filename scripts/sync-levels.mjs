import { appendFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { loadProjects, loadSignals, writeJson } from './lib.mjs';
import { requestJson } from './refresh-scores.mjs';
import { evaluateLevel, levelRank, toSignals } from '../src/lib/levels.mjs';
import { SITE } from '../src/lib/landscape.mjs';

// Builds the next snapshot from score API entries. A repository whose collection is
// missing or incomplete keeps its previous signals, so a failed collection cannot change a level.
export function buildSnapshot(projects, entries, previous = {}) {
  const collected = new Map(entries.map((entry) => [String(entry.repo).toLowerCase(), entry]));
  const next = {};
  const changes = [];
  for (const project of projects) {
    const repo = project.repoSlug?.toLowerCase();
    if (!repo) continue;
    const signals = toSignals(collected.get(repo)) || previous[repo] || null;
    if (signals) next[repo] = signals;
    const from = evaluateLevel(previous[repo]).level;
    const to = evaluateLevel(signals).level;
    if (from !== to) changes.push({ slug: project.slug, name: project.name, repo, from, to });
  }
  changes.sort((a, b) => levelRank(b.to) - levelRank(a.to) || a.slug.localeCompare(b.slug));
  return {
    projects: Object.fromEntries(Object.entries(next).sort(([a], [b]) => a.localeCompare(b))),
    changes,
  };
}

export function changeReport(changes) {
  if (changes.length === 0) return 'No level changes.\n';
  const rows = changes.map((change) => {
    const direction = levelRank(change.to) > levelRank(change.from) ? 'Promoted' : 'Demoted';
    return `| [${change.name}](https://github.com/${change.repo}) | ${change.from} | ${change.to} | ${direction} |`;
  });
  return ['| Project | From | To | Change |', '|---|---|---|---|', ...rows].join('\n') + '\n';
}

async function main() {
  const { values } = parseArgs({
    options: {
      'dry-run': { type: 'boolean', default: false },
      report: { type: 'string' },
    },
  });
  const projects = loadProjects();
  const repos = projects.filter((project) => project.repoSlug).map((project) => project.repoSlug);
  const entries = [];
  for (let index = 0; index < repos.length; index += 40) {
    const url = new URL('/api/health', SITE.scoreApiBase);
    url.searchParams.set('repos', repos.slice(index, index + 40).join(','));
    url.searchParams.set('locale', 'en');
    url.searchParams.set('v', String(Date.now()));
    const payload = await requestJson(url);
    if (!Array.isArray(payload.projects)) throw new Error('Invalid score API response');
    entries.push(...payload.projects);
  }

  const snapshot = buildSnapshot(projects, entries, loadSignals().projects);
  const counts = {};
  for (const project of projects) {
    const level = evaluateLevel(snapshot.projects[project.repoSlug?.toLowerCase()]).level;
    counts[level] = (counts[level] || 0) + 1;
  }
  console.log(`Levels: ${Object.entries(counts).map(([level, count]) => `${level} ${count}`).join(', ')}.`);
  console.log(`${snapshot.changes.length} level change(s).`);
  for (const change of snapshot.changes) console.log(`  ${change.slug}: ${change.from} → ${change.to}`);

  if (values.report) writeFileSync(resolve(values.report), changeReport(snapshot.changes));
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `changes=${snapshot.changes.length}\n`);
  if (values['dry-run']) return;
  writeJson('data/signals.json', { syncedAt: new Date().toISOString().slice(0, 10), projects: snapshot.projects });
  console.log(`Wrote data/signals.json with ${Object.keys(snapshot.projects).length} repositories.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
