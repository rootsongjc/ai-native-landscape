/**
 * File write/append/install logic with marker-based idempotent updates.
 */
import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const MARKER_START = '<!-- landscape-search-start -->';
const MARKER_END = '<!-- landscape-search-end -->';

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export async function installTarget(target, options = {}) {
  const { cwd = process.cwd(), force = false } = options;
  const filePath = target.scope === 'global'
    ? target.globalPath
    : join(cwd, target.projectPath);

  const content = target.wrap(
    (await import('./instructions.mjs')).getCoreInstruction()
  );
  const wrappedContent = `${MARKER_START}\n${content}\n${MARKER_END}`;

  // Ensure parent directory exists
  await mkdir(dirname(filePath), { recursive: true });

  if (existsSync(filePath)) {
    const existing = await readFile(filePath, 'utf-8');

    // Idempotent: replace existing marked section
    if (existing.includes(MARKER_START)) {
      const pattern = new RegExp(
        `${escapeRegex(MARKER_START)}[\\s\\S]*?${escapeRegex(MARKER_END)}`,
      );
      const updated = existing.replace(pattern, wrappedContent);
      await writeFile(filePath, updated, 'utf-8');
      return { action: 'updated', path: filePath };
    }

    // Force overwrite
    if (target.conflictStrategy === 'overwrite' || force) {
      await writeFile(filePath, wrappedContent, 'utf-8');
      return { action: 'overwritten', path: filePath };
    }

    // Append with markers
    if (target.conflictStrategy === 'append-section') {
      const separator = existing.endsWith('\n') ? '\n' : '\n\n';
      await writeFile(filePath, existing + separator + wrappedContent + '\n', 'utf-8');
      return { action: 'appended', path: filePath };
    }
  }

  // Fresh install — always write with markers for idempotent re-runs
  await writeFile(filePath, wrappedContent, 'utf-8');
  return { action: 'created', path: filePath };
}
