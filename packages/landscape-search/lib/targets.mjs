/**
 * Tool-specific target definitions.
 * Each target knows WHERE to install and HOW to wrap the core instruction.
 */
import { getCoreInstruction } from './instructions.mjs';
import { homedir } from 'os';
import { join } from 'path';

const core = getCoreInstruction();

export const TARGETS = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    scope: 'global',
    projectPath: null,
    globalPath: join(homedir(), '.claude', 'skills', 'landscape-search', 'SKILL.md'),
    wrap(content) {
      return `---
name: landscape-search
description: Search the AI Native Landscape for open-source AI projects by natural language description.
---

${content}`;
    },
    conflictStrategy: 'overwrite',
  },
  {
    id: 'codex',
    name: 'OpenAI Codex',
    scope: 'project',
    projectPath: 'AGENTS.md',
    globalPath: null,
    wrap(content) {
      return content;
    },
    conflictStrategy: 'append-section',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    scope: 'project',
    projectPath: '.cursorrules',
    globalPath: null,
    wrap(content) {
      return content;
    },
    conflictStrategy: 'append-section',
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    scope: 'project',
    projectPath: '.github/copilot-instructions.md',
    globalPath: null,
    wrap(content) {
      return content;
    },
    conflictStrategy: 'append-section',
  },
  {
    id: 'cline',
    name: 'Cline',
    scope: 'project',
    projectPath: '.clinerules',
    globalPath: null,
    wrap(content) {
      return content;
    },
    conflictStrategy: 'append-section',
  },
  {
    id: 'aider',
    name: 'Aider',
    scope: 'project',
    projectPath: 'CONVENTIONS.md',
    globalPath: null,
    wrap(content) {
      return content;
    },
    conflictStrategy: 'append-section',
  },
];
