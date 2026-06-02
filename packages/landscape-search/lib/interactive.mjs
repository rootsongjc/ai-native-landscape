/**
 * Interactive readline-based tool selection prompt.
 */
import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

export async function promptInteractive(targets) {
  const rl = createInterface({ input, output });

  console.log('AI Native Landscape Search — Installer\n');
  console.log('Which AI coding tools do you want to install for?\n');

  targets.forEach((t, i) => {
    const location = t.scope === 'global'
      ? `(global: ${t.globalPath})`
      : `(project-local: ${t.projectPath})`;
    console.log(`  ${i + 1}. ${t.name} ${location}`);
  });
  console.log('  0. All of the above');
  console.log('');

  const answer = await rl.question('Enter numbers (comma-separated, e.g. "1,3,5") or "all": ');
  rl.close();

  const trimmed = answer.trim().toLowerCase();

  if (trimmed === 'all' || trimmed === '0') {
    return targets;
  }

  const indices = trimmed
    .split(/[,\s]+/)
    .map(s => parseInt(s, 10) - 1)
    .filter(i => i >= 0 && i < targets.length);

  if (indices.length === 0) {
    console.log('No valid selection. Exiting.');
    process.exit(0);
  }

  return indices.map(i => targets[i]);
}
