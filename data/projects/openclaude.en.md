---
name: openclaude
slug: openclaude
homepage: https://openclaude.twigpine.com
repo: https://github.com/Twigpine/openclaude
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - CLI
  - LLM
  - MCP
description: >-
  An open-source coding-agent CLI for cloud and local model providers — OpenAI-compatible APIs, Gemini, GitHub Models,
  Codex OAuth, Ollama and more — keeping one terminal-first workflow with tools, agents, MCP, and slash commands.
author: Twigpine
ossDate: '2026-04-01'
featured: false
status: tracked
---

## Overview

OpenClaude is an open-source coding-agent CLI that runs anywhere and uses anything. It talks to OpenAI-compatible APIs, Gemini (API key or Vertex AI), GitHub Models, Codex and Codex OAuth, Ollama, and a long list of partner gateways, while keeping a single terminal-first workflow: prompts, bash and file tools, grep and glob, subagents, tasks, MCP, slash commands, and streaming output. A bundled VS Code extension adds launch integration.

## Key Features

- One CLI across cloud APIs and local model backends, with guided provider setup and saved profiles via `/provider`
- Coding-agent toolset in one place: bash, file tools, grep/glob, agents, tasks, MCP, and web tools with pluggable search backends
- Session management: resume or fork conversations by session ID, a `/sessions` manager, and deep search across conversation contents with a background model
- Background sessions: run long non-interactive prompts detached (`--bg`), then `ps`, `logs`, and `kill` them
- Fastest paths for common setups: OpenAI via two env vars, local Ollama, GitHub Models onboarding via `/onboard-github`
- Its own configuration namespace (`~/.openclaude`) — no Claude Code install or `.claude` directory required

## Use Cases

- Running a terminal coding agent against whichever provider you already pay for or run locally
- Switching between cloud models and local Ollama models without changing tools or workflows
- Kicking off long refactors or test-fix loops as detached background sessions
- Reusing MCP servers, custom slash commands, and subagent workflows across providers

## Technical Details

- TypeScript CLI distributed as `@twigpine/openclaude` on npm (Node 24+ required); a Bun toolchain is only needed for source builds, and the repo is also mirrored to an alternate git host
- Provider abstraction covers 20+ backends: any OpenAI-compatible `/v1` server, Gemini API key and Vertex AI ADC, GitHub Models OAuth onboarding, Codex OAuth (browser sign-in with secure credential storage), and Ollama; `/provider` saves profiles in `.openclaude-profile.json` and per-provider env vars are mapped automatically
- Background sessions run as local child processes with no daemon or network service; state and logs live under `~/.openclaude/bg-sessions/`, with explicit terminal-state recording (exited/failed/killed/stale)
- Conversation forking (`--fork-session`) branches the transcript into a new session ID without touching the working tree; deep session search sends bounded transcript excerpts (first/last 50 messages, 2,000 chars) to a background model
- Keeps its own config in `~/.openclaude` and `~/.openclaude.json` and deliberately does not read `~/.claude` or `CLAUDE_CONFIG_DIR`
