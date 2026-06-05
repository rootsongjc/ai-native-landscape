#!/usr/bin/env node
/**
 * health-check.mjs — Scan tracked projects and detect unavailable/archived repos.
 *
 * Usage:
 *   node scripts/health-check.mjs [--dry-run] [--token $GITHUB_TOKEN]
 *
 * Checks each tracked project's GitHub repo via the GitHub API.
 * - If the repo returns 404 → sets status to "unavailable"
 * - If the repo is archived on GitHub → sets status to "archived"
 * - Outputs a summary of changes
 *
 * With --dry-run, prints what would change without writing files.
 * With --token, uses authenticated requests (higher rate limit).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const projectsDir = path.join(root, 'data', 'projects');

const dryRun = process.argv.includes('--dry-run');
const token = process.env.GITHUB_TOKEN || '';

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

function setStatus(content, status) {
  return content.replace(/^status:\s*\S+/m, `status: ${status}`);
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
    if (data.archived) return { available: true, reason: 'archived_on_github', archived: true };
    return { available: true, reason: 'ok' };
  } catch (err) {
    return { available: false, reason: `error: ${err.message}` };
  }
}

async function main() {
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.en.md'));
  console.log(`Scanning ${files.length} projects...`);

  const results = { ok: 0, unavailable: 0, archived: 0, skipped: 0, rate_limited: 0, errors: [] };
  const changes = [];

  for (const enFile of files) {
    const slug = enFile.replace('.en.md', '');
    const zhFile = `${slug}.zh.md`;
    const enPath = path.join(projectsDir, enFile);
    const zhPath = path.join(projectsDir, zhFile);

    const enContent = fs.readFileSync(enPath, 'utf-8');
    const fm = parseFrontmatter(enContent);
    if (!fm) { results.skipped++; continue; }

    // Skip already archived/unavailable
    if (fm.status === 'archived' || fm.status === 'unavailable') {
      results.skipped++;
      continue;
    }

    // Extract owner/repo from repo URL
    const repoMatch = (fm.repo || '').match(/github\.com\/([^/]+\/[^/]+)/);
    if (!repoMatch) { results.skipped++; continue; }
    const ownerRepo = repoMatch[1];

    const check = await checkRepo(ownerRepo);

    if (check.reason === 'rate_limited') {
      results.rate_limited++;
      results.errors.push(`${slug}: rate limited`);
      continue;
    }

    if (check.reason === 'not_found') {
      changes.push({ slug, from: fm.status, to: 'unavailable', reason: 'repo 404' });
      results.unavailable++;

      if (!dryRun) {
        fs.writeFileSync(enPath, setStatus(enContent, 'unavailable'));
        if (fs.existsSync(zhPath)) {
          const zhContent = fs.readFileSync(zhPath, 'utf-8');
          fs.writeFileSync(zhPath, setStatus(zhContent, 'unavailable'));
        }
      }
    } else if (check.archived) {
      changes.push({ slug, from: fm.status, to: 'archived', reason: 'archived on GitHub' });
      results.archived++;

      if (!dryRun) {
        fs.writeFileSync(enPath, setStatus(enContent, 'archived'));
        if (fs.existsSync(zhPath)) {
          const zhContent = fs.readFileSync(zhPath, 'utf-8');
          fs.writeFileSync(zhPath, setStatus(zhContent, 'archived'));
        }
      }
    } else {
      results.ok++;
    }

    // Small delay to avoid rate limits
    if (!token) await new Promise(r => setTimeout(r, 1200));
  }

  console.log('\n--- Health Check Summary ---');
  console.log(`OK: ${results.ok}`);
  console.log(`Newly unavailable: ${results.unavailable}`);
  console.log(`Newly archived: ${results.archived}`);
  console.log(`Skipped (already tomb): ${results.skipped}`);
  console.log(`Rate limited: ${results.rate_limited}`);
  console.log(`Errors: ${results.errors.length}`);

  if (changes.length > 0) {
    console.log('\nChanges:');
    for (const c of changes) {
      console.log(`  ${c.slug}: ${c.from} → ${c.to} (${c.reason})`);
    }
  }

  if (dryRun && changes.length > 0) {
    console.log('\n[DRY RUN] No files were modified.');
  }

  // Exit with error if there were changes (so CI can create a PR)
  process.exit(changes.length > 0 ? 1 : 0);
}

main().catch(err => { console.error(err); process.exit(2); });
