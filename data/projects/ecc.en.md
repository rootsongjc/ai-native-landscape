---
name: ECC
slug: ecc
homepage: https://ecc.tools
repo: https://github.com/affaan-m/ECC
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Claude Code
  - Agent Skills
  - Developer Tools
description: >-
  An agent harness performance optimization system that gives coding agents a
  coordinated engineering loop — plan, test, implement, review, verify,
  remember, improve — via 71 agents, 314 skills, hooks, memory, and AgentShield
  security scanning.
author: affaan-m
ossDate: '2026-01-18'
featured: false
status: tracked
---

## Overview

ECC turns a coding agent into a coordinated engineering system: it plans before building, verifies changes with tests, reviews its own work from a fresh context, remembers what matters, and converts repeated wins into reusable skills and workflows. Instead of rebuilding that process in every prompt, you install it once as part of how the agent works. It works best with Claude Code and ships native plugin paths for Codex and Qoder, with capability-limited adapters for Cursor, OpenCode, Gemini, Zed, GitHub Copilot, and more.

## Key Features

- 71 specialized agents for planning, review, build repair, security, architecture, and domain work
- 314 skills covering TDD, research, security, docs, frontend, data, ML, and operations, plus 98 legacy command shims
- Hooks and runtime memory for enforcement, session summaries, continuous learning, and context control
- Selective always-loaded rules chosen by language or project
- AgentShield security scanning for prompts, hooks, MCP config, permissions, secrets, and agent files
- Guided setup across Claude Code, Codex, and Kimi Code through one multi-harness wizard

## Use Cases

- Give a coding agent a repeatable plan → test → implement → review workflow instead of ad-hoc prompting
- Keep institutional knowledge in agent memory and reusable skills across sessions
- Scan agent configuration, prompts, and secrets for supply-chain and prompt-injection risks

## Technical Details

- Installs as the native `ecc@ecc` plugin for Claude Code or via adapters for other harnesses; guided setup ships through the `ecc-universal` npm package and requires Node.js 18+, with a multi-harness wizard (`ecc-universal install --guided`) that preflights every selection before the first write
- The engineering loop is enforced by hooks and runtime memory rather than prompts: hooks trigger at lifecycle points, session summaries feed the memory layer, and "instincts" inject learned corrections into future sessions
- AgentShield statically scans prompts, hook definitions, MCP configuration, permission grants, secrets, and agent files for suspicious patterns
- Components are written across Shell, TypeScript, Python, Go, and Java; the AgentShield scanner is also published separately as the `ecc-agentshield` npm package
