#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { TARGETS } from './lib/targets.mjs';
import { installTarget } from './lib/installer.mjs';
import { promptInteractive } from './lib/interactive.mjs';

const { values } = parseArgs({
  options: {
    all: { type: 'boolean', short: 'a' },
    tool: { type: 'string', short: 't', multiple: true },
    force: { type: 'boolean', short: 'f' },
    help: { type: 'boolean', short: 'h' },
  },
  strict: true,
});

if (values.help) {
  console.log(`Usage: npx landscape-search [options]

Options:
  -a, --all       Install for all supported tools
  -t, --tool <id> Install for specific tool(s) (repeatable)
  -f, --force     Overwrite existing instruction files
  -h, --help      Show this help

Available tools: ${TARGETS.map(t => t.id).join(', ')}

Examples:
  npx landscape-search              # Interactive mode
  npx landscape-search --all        # Install for all tools
  npx landscape-search -t cursor -t copilot  # Specific tools
`);
  process.exit(0);
}

// Resolve which targets to install
let selected;
if (values.all) {
  selected = TARGETS;
} else if (values.tool) {
  const ids = values.tool;
  selected = TARGETS.filter(t => ids.includes(t.id));
  const unknown = ids.filter(id => !TARGETS.some(t => t.id === id));
  if (unknown.length) {
    console.error(`Unknown tool(s): ${unknown.join(', ')}`);
    console.error(`Available: ${TARGETS.map(t => t.id).join(', ')}`);
    process.exit(1);
  }
} else {
  selected = await promptInteractive(TARGETS);
}

// Install
console.log('');
for (const target of selected) {
  try {
    const result = await installTarget(target, { force: values.force });
    const label = result.action === 'created' ? '✓ Created'
                : result.action === 'updated' ? '✓ Updated'
                : result.action === 'appended' ? '✓ Appended to'
                : '✓ Overwritten';
    console.log(`  ${label}: ${result.path}`);
  } catch (err) {
    console.error(`  ✗ Failed (${target.name}): ${err.message}`);
  }
}
console.log('\nDone! Restart your AI coding tool to pick up the changes.');
