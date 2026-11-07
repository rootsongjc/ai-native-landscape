import assert from 'node:assert/strict';
import test from 'node:test';
import { collectionInventory, refreshReasons, refreshRepository } from './refresh-scores.mjs';

const repo = 'project-hami/hami';
const now = Date.now();
const dayMs = 86400000;
const entry = (timestamp) => ({
  repo,
  analyzedAt: new Date(timestamp).toISOString(),
  scores: { health: 78 },
  metrics: { stars: 4958 },
});
const snapshots = (en, zh = en) => ({
  en: new Map(en ? [[repo, en]] : []),
  zh: new Map(zh ? [[repo, zh]] : []),
});

test('reports known unavailable repositories as skipped but allows an explicit manual check', () => {
  const projects = [
    { repoSlug: repo, status: 'tracked' },
    { repoSlug: 'owner/gone', status: 'unavailable' },
    { repoSlug: 'owner/archived', status: 'archived' },
  ];
  const inventory = collectionInventory(projects);
  assert.deepEqual(inventory.repos, [repo, 'owner/archived']);
  assert.deepEqual(inventory.skipped, [{ repo: 'owner/gone', reason: 'Catalog status is unavailable' }]);
  assert.deepEqual(collectionInventory(projects, ['owner/gone']).repos, ['owner/gone']);
  assert.throws(() => collectionInventory(projects, ['owner/unknown']), /not in the catalog/);
});

test('refreshes past the exact age threshold and checks both languages', () => {
  assert.deepEqual(refreshReasons(repo, snapshots(entry(now - 7 * dayMs)), now, 7), []);
  assert.deepEqual(refreshReasons(repo, snapshots(entry(now), entry(now - 7 * dayMs - 1)), now, 7), ['zh: stale']);
  assert.deepEqual(refreshReasons(repo, snapshots(entry(now), null), now, 7), ['zh: missing']);
  assert.deepEqual(refreshReasons(repo, snapshots({ ...entry(now), analyzedAt: 'invalid' }), now, 7), [
    'en: invalid collection date', 'zh: invalid collection date',
  ]);
  assert.deepEqual(refreshReasons(repo, snapshots({ ...entry(now), metrics: {} }), now, 7), [
    'en: incomplete data', 'zh: incomplete data',
  ]);
});

test('does not treat HTTP-success-shaped failed or skipped collections as updates', async () => {
  const before = snapshots(entry(now - 10 * dayMs));
  await assert.rejects(refreshRepository(repo, before, async () => ({
    success: true, summary: { success: 0, failures: [], processedRepos: [] },
  })), /not collected/);
  await assert.rejects(refreshRepository(repo, before, async () => ({
    success: true, summary: { success: 0, failures: [{ error: 'Repository not found (404)' }], processedRepos: [] },
  })), /404/);
});

test('verifies persisted timestamps in both locales after collection', async () => {
  const old = entry(now - 10 * dayMs);
  const before = snapshots(old);
  const request = async (url, init) => {
    if (url.pathname === '/recalculate') {
      assert.deepEqual(JSON.parse(init.body), { repos: [repo] });
      return { success: true, summary: { success: 1, failures: [], processedRepos: [repo] } };
    }
    return { projects: [entry(Date.now())] };
  };
  const result = await refreshRepository(repo, before, request);
  assert.equal(result.repo, repo);
  assert.ok(Date.parse(result.analyzedAt.en) > Date.parse(old.analyzedAt));
  assert.ok(Date.parse(result.analyzedAt.zh) > Date.parse(old.analyzedAt));
  await assert.rejects(refreshRepository(repo, before, async (url, init) =>
    url.pathname === '/recalculate' ? request(url, init) : { projects: [old] }
  ), /persisted collection date did not advance/);
  await assert.rejects(refreshRepository(repo, before, async (url, init) =>
    url.pathname === '/recalculate' ? request(url, init) :
      url.searchParams.get('locale') === 'zh' ? { projects: [] } : { projects: [entry(Date.now())] }
  ), /zh: missing/);
});
