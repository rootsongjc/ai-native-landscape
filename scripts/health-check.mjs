#!/usr/bin/env node
/**
 * health-check.mjs — Scan listed projects and remove the ones whose repo is gone.
 *
 * Usage:
 *   node scripts/health-check.mjs [--dry-run]
 *
 * Checks each project's GitHub repo via the GitHub API.
 * - If the repo returns 404 or is archived on GitHub → deletes both language files
 * - If the repo was renamed or transferred → rewrites `repo` to the new location
 * - Outputs a summary of changes
 *
 * Dead projects are removed from the repository, not kept under another status.
 * The script only edits the working tree: the health-check workflow turns the
 * result into a pull request, so a maintainer reviews every removal.
 *
 * With --dry-run, prints what would change without writing files.
 * GITHUB_TOKEN enables authenticated requests (higher rate limit).
 * HEALTH_CHECK_REPORT is a path that receives the changes as a Markdown list.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const projectsDir = path.join(root, 'data', 'projects');

const dryRun = process.argv.includes('--dry-run');
const token = process.env.GITHUB_TOKEN || '';
const reportPath = process.env.HEALTH_CHECK_REPORT || '';

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*['"]?(.+?)['"]?\s*$/);
    if (m) fm[m[1]] = m[2];
  }
  return fm;
}

function setRepo(content, ownerRepo) {
  return content.replace(/^repo:\s*\S+/m, `repo: https://github.com/${ownerRepo}`);
}

function repoSlug(fm) {
  return ((fm?.repo || '').match(/github\.com\/([^/]+\/[^/]+)/) || [])[1];
}

// Drops owners that no remaining project uses from data/avatars.json.
function pruneAvatars() {
  const file = path.join(root, 'data', 'avatars.json');
  if (!fs.existsSync(file)) return;
  const owners = new Set(fs.readdirSync(projectsDir)
    .filter((name) => name.endsWith('.en.md'))
    .map((name) => repoSlug(parseFrontmatter(fs.readFileSync(path.join(projectsDir, name), 'utf-8')))?.split('/')[0].toLowerCase()));
  const avatars = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const kept = Object.fromEntries(Object.entries(avatars).filter(([owner]) => owners.has(owner)));
  fs.writeFileSync(file, `${JSON.stringify(kept, null, 2)}\n`);
}

function describe(change) {
  return change.removed
    ? `Removed ${change.name} (\`${change.slug}\`, https://github.com/${change.repo}): ${change.reason}`
    : `Rewrote repo of \`${change.slug}\`: ${change.from} → ${change.to} (${change.reason})`;
}

async function checkRepo(ownerRepo) {
  const headers = { 'User-Agent': 'ai-native-landscape-health-check' };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${ownerRepo}`, { headers });
    if (res.status === 404) return { available: false, reason: 'not_found' };
    if (res.status === 403) return { available: false, reason: 'rate_limited' };
    if (!res.ok) return { available: true, reason: `http_${res.status}` };

    const data = await res.json();
    // fetch follows GitHub's redirect for renamed or transferred repositories,
    // so full_name is where the repository lives now.
    return { available: true, reason: 'ok', archived: Boolean(data.archived), fullName: data.full_name };
  } catch (err) {
    return { available: false, reason: `error: ${err.message}` };
  }
}

async function main() {
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.en.md'));
  console.log(`Scanning ${files.length} projects...`);

  const results = { ok: 0, removed: 0, renamed: 0, skipped: 0, rate_limited: 0, errors: [] };
  const changes = [];
  const listed = new Map();
  for (const file of files) {
    const slug = repoSlug(parseFrontmatter(fs.readFileSync(path.join(projectsDir, file), 'utf-8')));
    if (slug) listed.set(slug.toLowerCase(), file.replace('.en.md', ''));
  }

  for (const enFile of files) {
    const slug = enFile.replace('.en.md', '');
    const zhFile = `${slug}.zh.md`;
    const enPath = path.join(projectsDir, enFile);
    const zhPath = path.join(projectsDir, zhFile);

    const enContent = fs.readFileSync(enPath, 'utf-8');
    const fm = parseFrontmatter(enContent);
    if (!fm) { results.skipped++; continue; }

    // Extract owner/repo from repo URL
    const ownerRepo = repoSlug(fm);
    if (!ownerRepo) { results.skipped++; continue; }

    const check = await checkRepo(ownerRepo);

    if (check.reason === 'rate_limited') {
      results.rate_limited++;
      results.errors.push(`${slug}: rate limited`);
      continue;
    }

    const updates = [];
    const gone = check.reason === 'not_found' ? 'repo returns 404' : check.archived ? 'archived on GitHub' : '';
    if (gone) {
      changes.push({ slug, name: fm.name || slug, repo: ownerRepo, removed: true, reason: gone });
      results.removed++;
    } else {
      const movedTo = check.fullName && check.fullName.toLowerCase() !== ownerRepo.toLowerCase()
        ? check.fullName : null;
      const duplicate = movedTo && listed.get(movedTo.toLowerCase());
      if (duplicate) {
        results.errors.push(`${slug}: ${ownerRepo} now redirects to ${movedTo}, already listed as ${duplicate}`);
      } else if (movedTo) {
        changes.push({ slug, from: ownerRepo, to: movedTo, reason: 'renamed or transferred' });
        results.renamed++;
        listed.set(movedTo.toLowerCase(), slug);
        updates.push((content) => setRepo(content, movedTo));
      }
      if (updates.length === 0 && !duplicate) results.ok++;
    }

    if (!dryRun) {
      for (const file of gone ? [enPath, zhPath] : []) fs.rmSync(file, { force: true });
      for (const file of updates.length > 0 ? [enPath, zhPath] : []) {
        if (!fs.existsSync(file)) continue;
        const content = fs.readFileSync(file, 'utf-8');
        fs.writeFileSync(file, updates.reduce((next, update) => update(next), content));
      }
    }

    // Small delay to avoid rate limits
    if (!token) await new Promise(r => setTimeout(r, 1200));
  }

  if (!dryRun && results.removed > 0) pruneAvatars();

  console.log('\n--- Health Check Summary ---');
  console.log(`OK: ${results.ok}`);
  console.log(`Removed (404 or archived): ${results.removed}`);
  console.log(`Renamed or transferred: ${results.renamed}`);
  console.log(`Skipped (no GitHub repo): ${results.skipped}`);
  console.log(`Rate limited: ${results.rate_limited}`);
  console.log(`Errors: ${results.errors.length}`);
  for (const error of results.errors) console.log(`${process.env.GITHUB_ACTIONS ? '::warning::' : '  '}${error}`);

  if (changes.length > 0) {
    console.log('\nChanges:');
    for (const c of changes) console.log(`  ${describe(c)}`);
    if (reportPath) fs.writeFileSync(reportPath, changes.map((c) => `- ${describe(c)}`).join('\n') + '\n');
  }

  if (dryRun && changes.length > 0) {
    console.log('\n[DRY RUN] No files were modified.');
  }

  // Exit with error if there were changes (so CI can create a PR)
  process.exit(changes.length > 0 ? 1 : 0);
}

main().catch(err => { console.error(err); process.exit(2); });
