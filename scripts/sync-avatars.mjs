// Resolves each GitHub owner in the catalog to its numeric avatar id and stores the
// result in data/avatars.json. The landscape map needs the direct
// avatars.githubusercontent.com/u/<id> URL because, unlike github.com/<owner>.png,
// it is served with CORS headers and can be drawn into the PNG / PDF export.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { setTimeout as sleep } from 'node:timers/promises';
import { getRoot, loadProjects } from './lib.mjs';

const CONCURRENCY = 8;
const ATTEMPTS = 3;
const TIMEOUT_MS = 10000;

export function parseAvatarId(location) {
  const match = /^https:\/\/avatars\.githubusercontent\.com\/u\/(\d+)(?:[/?#]|$)/.exec(location || '');
  return match ? Number(match[1]) : null;
}

export function catalogOwners(projects) {
  return [...new Set(projects
    .map((project) => project.repoSlug?.split('/')[0]?.toLowerCase())
    .filter(Boolean))].sort();
}

async function resolveAvatarId(owner) {
  for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(`https://github.com/${encodeURIComponent(owner)}.png`, {
        method: 'HEAD',
        redirect: 'manual',
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if (response.status === 404) return null;
      const id = parseAvatarId(response.headers.get('location'));
      if (id) return id;
    } catch {
      // Retried below.
    }
    await sleep(1000 * attempt);
  }
  return undefined;
}

async function main() {
  const { values } = parseArgs({ options: { force: { type: 'boolean', default: false } } });
  const file = resolve(getRoot(), 'data/avatars.json');
  const known = !values.force && existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {};
  const owners = catalogOwners(loadProjects());
  const pending = owners.filter((owner) => !known[owner]);
  const failed = [];

  let cursor = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < pending.length) {
      const owner = pending[cursor];
      cursor += 1;
      const id = await resolveAvatarId(owner);
      if (id) known[owner] = id;
      else if (id === undefined) failed.push(owner);
    }
  }));

  const result = Object.fromEntries(owners.filter((owner) => known[owner]).map((owner) => [owner, known[owner]]));
  writeFileSync(file, `${JSON.stringify(result, null, 2)}\n`);
  console.log(`Avatars: ${Object.keys(result).length}/${owners.length} owners resolved, ${pending.length - failed.length} checked, ${failed.length} failed.`);
  if (failed.length > 0) {
    console.error(`Could not resolve: ${failed.join(', ')}`);
    process.exitCode = 1;
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] || '').href) {
  await main();
}
