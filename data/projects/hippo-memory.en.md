---
name: Hippo Memory
slug: hippo-memory
homepage: https://hippo-memory.com
repo: https://github.com/kitfunso/hippo-memory
license: MIT
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agent Memory
  - CLI
  - MCP
  - SQLite
  - Local-First
  - Coding Agents
description: Local-first memory layer for coding agents (Claude Code, Codex, Cursor, OpenClaw, OpenCode, Pi, and MCP clients) backed by SQLite and markdown mirrors with zero runtime dependencies.
author: kitfunso
ossDate: '2026-03-15T10:40:26Z'
featured: false
status: tracked
---

## Overview

Hippo Memory is a local-first, MIT-licensed memory layer for AI coding agents written in TypeScript with zero runtime dependencies. It stores project and global memories in a local SQLite database alongside human-readable, git-trackable markdown mirrors so knowledge travels across Claude Code, Codex, Cursor, OpenClaw, OpenCode, Pi, and any MCP or HTTP client.

## Key Features

- **Local SQLite and Markdown Mirrors**: Keeps every memory in a local `.hippo/` SQLite store with readable markdown mirrors that can be inspected or committed to version control.
- **Zero LLM Calls on Save and Default Recall**: Runs BM25 search out of the box with no model or network call required; optional local Transformers.js or API embeddings can be enabled per project.
- **Outcome-Weighted Recall**: Strengthens memories that get used, lowers the rank of bad recalls, retires outdated facts via `hippo supersede`, and gives error-tagged memories double half-life.
- **Cross-Tool Portability and Import**: Shares one store across coding agents via native hooks, instruction blocks, CLI, MCP server, and HTTP API, with importers for ChatGPT exports, `CLAUDE.md`, `.cursorrules`, Slack, GitHub, and markdown notes.
- **Automated Consolidation**: Runs `hippo sleep` to extract lessons from recent git commits, import agent notes, deduplicate entries, and promote high-value lessons to a global store.

## Use Cases

- Persisting project conventions, architectural decisions, and past bug fixes across coding-agent sessions without re-teaching the agent.
- Switching between Claude Code, Codex, Cursor, and MCP-compatible tools while sharing one local project memory store.
- Keeping proprietary engineering knowledge on-device in SQLite and markdown with full provenance per memory record.

## Links

- [Homepage](https://hippo-memory.com/)
- [GitHub Repository](https://github.com/kitfunso/hippo-memory)
- [Benchmarks and Evaluations](https://hippo-memory.com/benchmarks/)
