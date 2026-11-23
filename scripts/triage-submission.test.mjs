import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { INCLUSION } from '../src/lib/landscape.mjs';
import {
  classifyPullRequestFiles, decideOutcome, evaluateRepository, extractRepository, isSubmission, renderComment,
} from './triage-submission.mjs';

const now = Date.parse('2026-11-23T00:00:00Z');
const daysAgo = (days) => new Date(now - days * 86400000).toISOString();
const repository = (overrides = {}) => ({
  name: 'tool',
  full_name: 'Acme/tool',
  html_url: 'https://github.com/Acme/tool',
  private: false,
  fork: false,
  archived: false,
  license: { spdx_id: 'MIT' },
  stargazers_count: INCLUSION.minStars,
  created_at: daysAgo(INCLUSION.minAgeDays),
  pushed_at: daysAgo(INCLUSION.maxInactiveDays),
  language: 'Rust',
  topics: [],
  ...overrides,
});
const evaluate = (overrides, options = {}) => {
  const checks = evaluateRepository(repository(overrides), { requested: 'acme/tool', listed: new Set(), now, ...options });
  const project = { requested: 'acme/tool', repo: repository(overrides), checks };
  return { checks, project, outcome: decideOutcome([project]), failed: checks.filter((check) => !check.ok).map((check) => check.id) };
};

test('reads the repository from the issue form before any other link in the body', () => {
  const body = 'See https://github.com/other/thing\n\n### GitHub repository\n\nhttps://github.com/Acme/tool.git\n\n### Homepage';
  assert.equal(extractRepository(body), 'Acme/tool');
  assert.equal(extractRepository('Docs: https://github.com/acme/tool/tree/main/docs.'), 'acme/tool');
  assert.equal(extractRepository('https://github.com/orgs/acme/repositories and https://github.com/acme'), null);
});

test('only treats project submissions as submissions', () => {
  assert.equal(isSubmission({ title: '[Project]: Tool', body: '' }), true);
  assert.equal(isSubmission({ title: 'Add Tool to agents', body: 'https://github.com/acme/tool' }), true);
  assert.equal(isSubmission({ title: 'Search is broken', body: 'See https://github.com/acme/tool' }), false);
});

test('accepts a repository exactly at every threshold and rejects one just below', () => {
  assert.equal(evaluate().outcome, 'eligible');
  assert.deepEqual(evaluate({ stargazers_count: INCLUSION.minStars - 1 }).failed, ['stars']);
  assert.deepEqual(evaluate({ created_at: daysAgo(INCLUSION.minAgeDays - 1) }).failed, ['age']);
  assert.deepEqual(evaluate({ pushed_at: daysAgo(INCLUSION.maxInactiveDays + 1) }).failed, ['activity']);
  assert.equal(evaluate({ stargazers_count: 3 }).outcome, 'not-yet-eligible');
});

test('rejects forks, unlicensed repositories and curated lists, but not an unrecognized license file', () => {
  assert.deepEqual(evaluate({ fork: true }).failed, ['repository']);
  assert.deepEqual(evaluate({ license: null }).failed, ['license']);
  assert.deepEqual(evaluate({ license: { spdx_id: 'NOASSERTION' } }).failed, []);
  assert.deepEqual(evaluate({ language: null }).failed, ['software']);
  assert.deepEqual(evaluate({ name: 'awesome-agents' }).failed, ['software']);
  assert.deepEqual(evaluate({ topics: ['awesome-list'] }).failed, ['software']);
});

test('a maintainer exception waives popularity and age but nothing else', () => {
  const young = { stargazers_count: 5, created_at: daysAgo(3) };
  assert.equal(evaluate(young, { exception: true }).outcome, 'eligible');
  assert.equal(evaluate({ ...young, license: null }, { exception: true }).outcome, 'not-yet-eligible');
});

test('detects duplicates under the submitted name or the name GitHub redirects to', () => {
  assert.equal(evaluate({}, { listed: new Set(['acme/tool']) }).outcome, 'duplicate');
  assert.equal(evaluate({ full_name: 'NewOrg/tool' }, { listed: new Set(['neworg/tool']) }).outcome, 'duplicate');
  assert.equal(evaluate({ stargazers_count: 1 }, { listed: new Set(['acme/tool']) }).outcome, 'not-yet-eligible');
});

test('limits each author to two open submissions and asks for information when nothing can be checked', () => {
  assert.deepEqual(evaluate({}, { openByAuthor: 2 }).failed, ['author-limit']);
  assert.equal(evaluate({}, { openByAuthor: 1 }).outcome, 'eligible');
  assert.equal(decideOutcome([], ['No repository']), 'needs-info');
  assert.equal(decideOutcome([evaluate().project], ['Unrelated files']), 'needs-info');
});

test('separates added project files from unrelated changes in a pull request', () => {
  const { slugs, unrelated } = classifyPullRequestFiles([
    { filename: 'data/projects/tool.en.md', status: 'added' },
    { filename: 'data/projects/tool.zh.md', status: 'added' },
    { filename: 'data/projects/other.en.md', status: 'modified' },
    { filename: '.github/workflows/ci.yml', status: 'modified' },
  ]);
  assert.deepEqual([...slugs], [['tool', { en: 'data/projects/tool.en.md', zh: 'data/projects/tool.zh.md' }]]);
  assert.deepEqual(unrelated, ['.github/workflows/ci.yml']);
});

test('the comment reports each requirement and the issue form states the same thresholds', () => {
  const { project } = evaluate({ stargazers_count: 12 });
  const comment = renderComment({ kind: 'issue', outcome: 'not-yet-eligible', projects: [project], problems: [] });
  assert.match(comment, /At least 200 stars \| ❌ Not met \| 12 stars/);
  assert.match(comment, /\/recheck/);
  const form = readFileSync(new URL('../.github/ISSUE_TEMPLATE/add-project.yml', import.meta.url), 'utf8');
  assert.match(form, new RegExp(`at least ${INCLUSION.minStars} GitHub stars`));
  assert.match(form, new RegExp(`at least ${INCLUSION.minAgeDays} days ago`));
  assert.match(form, new RegExp(`last ${INCLUSION.maxInactiveDays} days`));
});
