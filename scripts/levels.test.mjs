import assert from 'node:assert/strict';
import test from 'node:test';
import { compareProjects, evaluateLevel, toSignals } from '../src/lib/levels.mjs';
import { buildSnapshot } from './sync-levels.mjs';

const full = { health: 85, contributors: 150, commitsLastYear: 300, daysSinceLastCommit: 30, ageDays: 730 };

test('health carries the most weight and full marks on every dimension is Mature', () => {
  assert.deepEqual(evaluateLevel(full), {
    level: 'mature',
    points: { health: 4, contributors: 2, activity: 2, trackRecord: 2 },
    total: 10,
  });
  assert.deepEqual([84, 80, 79, 70, 69, 60, 59].map((health) => evaluateLevel({ ...full, health }).points.health), [3, 3, 2, 2, 1, 1, 0]);
});

test('missing a single point anywhere keeps a project out of Mature', () => {
  for (const change of [{ health: 84 }, { contributors: 149 }, { commitsLastYear: 299 }, { daysSinceLastCommit: 31 }, { ageDays: 729 }]) {
    const result = evaluateLevel({ ...full, ...change });
    assert.equal(result.total, 9, JSON.stringify(change));
    assert.equal(result.level, 'growing', JSON.stringify(change));
  }
});

test('Growing needs a health score of 70 and recent activity, however many points the rest add up to', () => {
  assert.equal(evaluateLevel({ ...full, health: 69 }).total, 7);
  assert.equal(evaluateLevel({ ...full, health: 69 }).level, 'emerging');
  assert.equal(evaluateLevel({ ...full, daysSinceLastCommit: 91 }).total, 8);
  assert.equal(evaluateLevel({ ...full, daysSinceLastCommit: 91 }).level, 'emerging');
  const minimal = { health: 70, contributors: 30, commitsLastYear: 50, daysSinceLastCommit: 90, ageDays: 365 };
  assert.equal(evaluateLevel(minimal).level, 'growing');
  assert.equal(evaluateLevel({ ...minimal, contributors: 29 }).level, 'emerging');
});

test('a project without signals is Emerging', () => {
  assert.deepEqual(evaluateLevel(null), {
    level: 'emerging',
    points: { health: 0, contributors: 0, activity: 0, trackRecord: 0 },
    total: 0,
  });
});

test('toSignals rejects an incomplete collection and ignores stars', () => {
  const entry = {
    analyzedAt: '2026-01-11T00:00:00Z',
    metrics: { stars: 10, contributors: 2, commitsLastYear: 5, daysSinceLastCommit: 1, createdAt: '2026-01-01T12:00:00Z' },
    scores: { health: 60 },
  };
  assert.deepEqual(toSignals(entry), { health: 60, contributors: 2, commitsLastYear: 5, daysSinceLastCommit: 1, ageDays: 9 });
  assert.equal(toSignals({ ...entry, scores: {} }), null);
  assert.equal(toSignals({ ...entry, metrics: { ...entry.metrics, contributors: null } }), null);
  assert.equal(toSignals(undefined), null);
});

test('projects are ordered by level, then points, then health, then name', () => {
  const projects = [
    { name: 'b-emerging', level: 'emerging', levelTotal: 4, signals: { health: 60 } },
    { name: 'unscored', level: 'emerging', levelTotal: 1, signals: null },
    { name: 'growing', level: 'growing', levelTotal: 8, signals: { health: 99 } },
    { name: 'mature-9', level: 'mature', levelTotal: 9, signals: { health: 99 } },
    { name: 'mature-10', level: 'mature', levelTotal: 10, signals: { health: 86 } },
    { name: 'a-emerging', level: 'emerging', levelTotal: 4, signals: { health: 60 } },
    { name: 'healthy-emerging', level: 'emerging', levelTotal: 4, signals: { health: 61 } },
  ];
  assert.deepEqual(projects.sort(compareProjects).map((project) => project.name), [
    'mature-10', 'mature-9', 'growing', 'healthy-emerging', 'a-emerging', 'b-emerging', 'unscored',
  ]);
});

test('buildSnapshot keeps previous signals when a collection is incomplete and reports level changes', () => {
  const projects = [
    { slug: 'kept', name: 'Kept', repoSlug: 'Org/Kept' },
    { slug: 'promoted', name: 'Promoted', repoSlug: 'org/promoted' },
    { slug: 'new', name: 'New', repoSlug: 'org/new' },
  ];
  const entry = (repo, signals) => ({
    repo,
    analyzedAt: '2026-06-01T00:00:00Z',
    metrics: { ...signals, createdAt: new Date(Date.parse('2026-06-01T00:00:00Z') - signals.ageDays * 86400000).toISOString() },
    scores: { health: signals.health },
  });
  const previous = { 'org/kept': full, 'org/promoted': { ...full, contributors: 40 }, 'org/removed': full };
  const { projects: next, changes } = buildSnapshot(
    projects,
    [{ repo: 'org/kept', metrics: {}, scores: {} }, entry('org/promoted', full)],
    previous,
  );
  assert.deepEqual(Object.keys(next), ['org/kept', 'org/promoted']);
  assert.deepEqual(next['org/kept'], full);
  assert.deepEqual(changes.map(({ slug, from, to }) => [slug, from, to]), [['promoted', 'growing', 'mature']]);
});
