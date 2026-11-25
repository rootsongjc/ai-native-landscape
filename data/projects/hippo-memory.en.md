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

- **Local SQLite and Markdown Mirrors**: Keeps memories in a local `.hippo/` SQLite store with readable markdown mirrors that can be inspected or committed to version control; captured user messages are stored without a markdown mirror.
- **Zero LLM Calls on Save and Default Recall**: Runs BM25 search out of the box with no model or network call required; `hippo init` installs a local Transformers.js embedder by default (`--no-embeddings` skips it), and an API embedder (OpenAI, Voyage, or Cohere) is opt-in.
- **Outcome-Weighted Recall**: Strengthens memories that get used, lowers the rank of bad recalls, retires outdated facts via `hippo supersede`, and gives error-tagged memories double half-life.
- **Cross-Tool Portability and Import**: Shares one store across coding agents via native hooks, instruction blocks, CLI, MCP server, and HTTP API, with `hippo import` commands for ChatGPT exports, `CLAUDE.md`, `.cursorrules`, and markdown notes; Slack and GitHub content comes in through webhook connectors and `backfill` commands.
- **Automated Consolidation**: Runs `hippo sleep` to extract lessons from recent git commits, import agent notes, deduplicate entries, and promote high-value lessons to a global store; when `ANTHROPIC_API_KEY` is set, `hippo sleep` sends text to Anthropic unless `extraction.enabled` is set to `false`.

## Use Cases

- Persisting project conventions, architectural decisions, and past bug fixes across coding-agent sessions without re-teaching the agent.
- Switching between Claude Code, Codex, Cursor, and MCP-compatible tools while sharing one local project memory store.
- Keeping engineering knowledge in SQLite and markdown on the local machine; text leaves it only through an API embedder, a reranker, model-read rule capture (`capture.followUpRules`), `hippo refine`, or `hippo sleep` with `ANTHROPIC_API_KEY` set, and memories ingested from Slack and GitHub carry a source reference (`slack://` provenance, `artifact_ref`).

## Links

- [Homepage](https://hippo-memory.com/)
- [GitHub Repository](https://github.com/kitfunso/hippo-memory)
- [Benchmarks and Evaluations](https://hippo-memory.com/benchmarks/)
