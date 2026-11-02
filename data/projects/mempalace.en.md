---
name: mempalace
slug: mempalace
homepage: http://mempalaceofficial.com/
repo: https://github.com/MemPalace/mempalace
license: MIT
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agent Memory
  - MCP
  - Semantic Search
  - Local First
description: >-
  Local-first AI memory that stores conversation history verbatim and retrieves
  it with semantic search — 96.6% Recall@5 raw on LongMemEval with zero API
  calls — over a pluggable retrieval backend.
author: MemPalace
ossDate: '2026-04-05'
featured: false
status: tracked
---

## Overview

MemPalace is a local-first AI memory system that stores conversation history as verbatim text and retrieves it with semantic search — it does not summarize, extract, or paraphrase. The index is structured like a palace: people and projects become wings, topics become rooms, and original content lives in drawers, so searches can be scoped rather than run against a flat corpus. Nothing leaves your machine unless you opt in.

## Key Features

- Verbatim storage: conversation history is kept as original text, never summarized or paraphrased
- Structured index with wings (people/projects), rooms (topics), and drawers (original content) for scoped search
- Pluggable retrieval backend with ChromaDB as the default; alternatives drop in without touching the rest of the system
- 96.6% Recall@5 raw on LongMemEval with zero API calls
- Ships as a CLI, an MCP server, and three agent skills (mempalace, mempalace-recall, mempalace-task)
- Runs via uv/pipx, in a venv, or as a multi-arch Docker image (amd64 + arm64)

## Use Cases

- Give Claude Code persistent memory across sessions that expire or get compacted
- Recall past decisions and conversations with search-before-answer semantics before replying
- Run a shared "palace" as a memory hub for multiple agents while keeping all data local

## Technical Details

- Storage is verbatim text; retrieval is semantic search over a structured index whose shapes (wings/rooms/drawers) let queries be scoped to a person, project, or topic instead of scanning a flat corpus
- The retrieval layer is an interface defined in `mempalace/backends/base.py`; ChromaDB is the current default and any alternative backend can be substituted without changes elsewhere
- The MCP server runs over stdio (`docker run -i` for the container flavor), and all state — palace, config, and the cached embedding model — persists under `/data` so a mounted volume survives restarts
- Agent-guided setup via `npx skills add MemPalace/mempalace` detects the system, installs the Python package, configures MCP, and records whether the runtime came from uv tool, pipx, or pip; optional release checks contact only PyPI and never auto-install updates
