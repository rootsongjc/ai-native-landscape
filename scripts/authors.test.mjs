import assert from 'node:assert/strict';
import test from 'node:test';
import { buildAuthors, projectAuthorKey } from '../src/lib/authors.mjs';

test('groups canonical authors across languages, owners, categories and statuses', () => {
  const projects = [
    { name: 'MCP Servers', slug: 'mcp-servers', author: 'Anthropic', authorLocalized: { zh: '安思' }, repoSlug: 'modelcontextprotocol/servers', category: 'coding-devtools', status: 'tracked' },
    { name: 'Archived tool', slug: 'archived-tool', author: '  ANTHROPIC  ', repoSlug: 'anthropics/tool', category: 'agents', status: 'archived' },
    { name: 'Other', slug: 'other', author: 'Anthropic community', repoSlug: 'anthropics/community' },
  ];
  const authors = buildAuthors(projects);
  const author = authors.find((item) => item.key === projectAuthorKey(projects[0]));
  assert.equal(author.slug, 'anthropic');
  assert.equal(author.names.zh, '安思');
  assert.deepEqual(author.projects.map((project) => project.slug), ['archived-tool', 'mcp-servers']);
  assert.equal(authors.length, 2);
});

test('keeps punctuation collisions separate with order-independent URLs', () => {
  const projects = [
    { name: 'First', author: 'Agent Field' },
    { name: 'Second', author: 'agent-field' },
    { name: 'Third', author: 'Kai Dröge / 开源' },
  ];
  const authors = buildAuthors(projects);
  assert.equal(new Set(authors.map((author) => author.slug)).size, 3);
  assert.ok(authors.every((author) => !/[/?#\s]/.test(author.slug)));
  const urls = (items) => Object.fromEntries(items.map(({ key, slug }) => [key, slug]));
  assert.deepEqual(urls(authors), urls(buildAuthors([...projects].reverse())));
  for (const project of projects) {
    assert.equal(buildAuthors([project])[0].slug, urls(authors)[projectAuthorKey(project)]);
  }
});

test('normalizes whitespace and omits unknown authors', () => {
  const authors = buildAuthors([
    { name: 'First', author: 'Example   Team' },
    { name: 'Second', author: ' example team ' },
    { name: 'Unknown' },
    { name: 'Blank', author: '  ' },
  ]);
  assert.equal(authors.length, 1);
  assert.equal(authors[0].projects.length, 2);
  assert.equal(projectAuthorKey({}), '');
});
