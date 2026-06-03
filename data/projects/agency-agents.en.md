---
name: Agency Agents
slug: agency-agents
homepage: null
repo: https://github.com/msitarzewski/agency-agents
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - Dev Tools
description: >-
  Agency Agents is an open-source collection of 147+ specialized AI agent personas spanning 12 divisions including
  engineering, design, marketing, sales, and product, with one-click integration for Claude Code, Cursor, Copilot, and
  more.
author: msitarzewski
ossDate: '2025-03-01T00:00:00.000Z'
featured: false
status: tracked
---
## Overview

Agency Agents (The Agency) is a curated open-source collection of 147+ specialized AI agent personas spanning 12 divisions — engineering, design, paid media, sales, marketing, product, project management, testing, support, spatial computing, specialized roles, finance, and game development. Each agent comes with a unique personality, well-defined workflows, and concrete deliverables, ready to install into Claude Code, Cursor, GitHub Copilot, Aider, Windsurf, Gemini CLI, OpenCode, and 10+ other AI coding tools.

## Key Features

- 147+ specialized agents across 12 divisions, from frontend development to legal compliance.
- Native Claude Code support (copy to ~/.claude/agents/) with compatibility for Cursor, Copilot, Aider, Windsurf, Gemini CLI, and more.
- Each agent includes identity definition, core mission, technical deliverables, workflow processes, and success metrics.
- Automated install and conversion scripts with parallel processing support.
- MIT licensed — free for commercial and personal use.

## Use Cases

- Startup teams assembling virtual MVP squads to ship prototypes faster.
- Enterprise feature development with built-in quality gates and project management roles.
- Marketing teams executing multi-platform content strategies and community operations.
- Individual developers switching between expert personas to boost coding productivity.

## Technical Highlights

- Each agent is defined as a standalone Markdown file with structured frontmatter for easy maintenance and extension.
- convert.sh transforms agents into tool-specific formats (.mdc, SKILL.md, YAML, etc.).
- install.sh auto-detects installed tools and provides an interactive selection UI.
- Agent design philosophy emphasizes personality-driven expertise (not generic templates), deliverable-focused outputs, and production-ready workflows battle-tested in real environments.
