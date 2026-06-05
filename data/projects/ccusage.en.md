---
name: ccusage
slug: ccusage
homepage: https://ccusage.com/
repo: https://github.com/ryoppippi/ccusage
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Token Usage
  - Cost Analysis
  - Coding Agent
description: A CLI tool for analyzing token usage and costs from coding agent CLIs like Claude Code, Codex, and Gemini CLI.
author: ryoppippi
ossDate: '2025-05-29'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

ccusage reads local usage data from coding agent CLIs and generates daily, weekly, monthly, and session reports. It supports 15+ coding agent sources including Claude Code, Codex, OpenCode, Gemini CLI, and GitHub Copilot CLI.

## Key Features

- Supports 15+ coding agent sources (Claude Code, Codex, OpenCode, Gemini CLI, etc.)
- Daily, weekly, monthly, and session-based usage reports
- Token usage and cost analysis from local data
- No external API required — reads data directly from local files
- Billing block analysis for Claude Code 5-hour windows

## Use Cases

- Track and analyze token consumption across multiple coding agent tools
- Monitor daily or weekly spending on AI coding assistants
- Compare usage patterns across different coding agents
- Generate cost reports for team billing and budgeting

## Technical Details

- Built with TypeScript/JavaScript, distributed via npm
- Runs via bunx, npx, or pnpm without global installation
- Parses local JSONL data files from each supported coding agent
