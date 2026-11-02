---
name: kimi-code
slug: kimi-code
homepage: https://www.kimi.com/code/docs/
repo: https://github.com/MoonshotAI/kimi-code
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - CLI
  - MCP
  - Dev Tools
description: >-
  Kimi Code CLI is a terminal-based AI coding agent by Moonshot AI that reads and edits code, runs shell commands, and
  picks its next step from feedback, working out of the box with Kimi models and other compatible providers.
author: Moonshot AI
ossDate: '2026-05-22'
featured: false
status: tracked
---

## Overview

Kimi Code CLI is an AI coding agent that runs in the terminal. It reads and edits code, executes shell commands, searches files, fetches web pages, and decides its next step based on the feedback it receives. It works out of the box with Moonshot AI's Kimi models and can be configured for other compatible providers.

## Key Features

- Single-binary distribution — one-command install with no Node.js setup or global module conflicts.
- Purpose-built TUI with millisecond startup, tuned for long, focused agent sessions.
- Subagents for focused, parallel work — built-in `coder`, `explore`, and `plan` subagents run in isolated contexts.
- AI-native MCP configuration via `/mcp-config`, adding and authenticating MCP servers conversationally.
- Video input — drop a screen recording or demo clip into chat for the agent to watch and act on.
- Lifecycle hooks to gate risky tool calls, audit decisions, or trigger external automation.
- Editor and IDE integration over the Agent Client Protocol (Zed, JetBrains).

## Use Cases

- Interactive coding sessions in the terminal: explore a codebase, implement features, run and fix tests.
- Driving an agent session from an IDE via ACP with a single shared login.
- Automating code-adjacent workflows with subagents, MCP tools, and lifecycle hooks.

## Technical Details

- Ships as a self-contained binary via install scripts; no Node.js runtime required at install time.
- Implements the Agent Client Protocol (ACP) over stdio, so any ACP-compatible editor can drive a session through the `kimi acp` subcommand without a separate login.
- Plugin marketplace model where skills, MCP servers, and data sources install from the marketplace or any GitHub repo, with each install's trust level surfaced up front.
- On Windows, uses Git Bash as its shell environment (overridable via `KIMI_SHELL_PATH`).
