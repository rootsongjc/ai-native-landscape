import assert from 'node:assert/strict';
import test from 'node:test';
import { catalogOwners, parseAvatarId } from './sync-avatars.mjs';

test('parseAvatarId reads the numeric id from the avatar redirect', () => {
  assert.equal(parseAvatarId('https://avatars.githubusercontent.com/u/126733545?v=4'), 126733545);
  assert.equal(parseAvatarId('https://avatars.githubusercontent.com/u/42'), 42);
  assert.equal(parseAvatarId('https://github.com/login?return_to=%2Fu%2F42'), null);
  assert.equal(parseAvatarId(null), null);
});

test('catalogOwners deduplicates owners case-insensitively', () => {
  const projects = [{ repoSlug: 'OpenAI/whisper' }, { repoSlug: 'openai/evals' }, { repoSlug: '' }, { repoSlug: 'apache/tvm' }];
  assert.deepEqual(catalogOwners(projects), ['apache', 'openai']);
});
