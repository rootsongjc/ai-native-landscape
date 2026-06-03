---
name: TencentDB Agent Memory
slug: tencentdb-agent-memory
homepage: null
repo: https://github.com/tencent/tencentdb-agent-memory
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Agent
  - Database
  - Memory
description: >-
  Tencent's local long-term memory system for AI agents, powered by a 4-tier progressive pipeline with zero external API
  dependencies.
author: Tencent
ossDate: '2026-04-07T00:00:00.000Z'
featured: false
status: tracked
---

TencentDB Agent Memory is Tencent's memory system for AI agents, delivering fully local long-term and short-term memory via a 4-tier progressive pipeline with zero external API dependencies. Core philosophy: "Agents remember, Humans innovate."

## Overview

The project features a dual memory architecture: **Symbolic Short-Term Memory** compresses tool logs via Mermaid syntax to reduce token usage and improve task success rates; **Layered Long-Term Memory** distills fragmented conversations into structured Personas and Scenes. Long-term memory spans four tiers: L0 raw conversations, L1 atomic facts, L2 scenario blocks (Markdown), L3 user profiles — lower layers preserve evidence, upper layers preserve structure.

Benchmark results are impressive: short-term memory achieves +51.52% success improvement and -61.38% token reduction on WideSearch; long-term memory improves PersonaMem from 48% to 76%.

## Key Features

- **Dual memory architecture**: Symbolic short-term memory (Mermaid Canvas) + layered long-term memory (L0-L3 semantic pyramid)
- **Fully local**: Built on SQLite + sqlite-vec, zero-config, zero external API dependencies
- **Hybrid retrieval**: BM25 + vector search + RRF fusion ranking
- **White-box debuggability**: L2 scenarios are plain Markdown, L3 persona in `persona.md`, readable by humans and agents
- **Benchmark validated**: Short-term token reduction of 30-61%, long-term accuracy improvement of 59%
- **Multi-framework integration**: OpenClaw plugin + Hermes Gateway adapter

## Use Cases

- **Agent long-term memory**: Remember user preferences, habits, and interaction history across sessions
- **Complex task context compression**: Reduce token consumption via Mermaid symbol graphs, improving long-task success rates
- **Local privacy protection**: Sensitive data never leaves the machine, suitable for finance and healthcare scenarios
- **Agent personalization**: Achieve per-user customized agent behavior based on user profiles

## Technical Highlights

- **Language**: TypeScript
- **Storage backend**: SQLite + sqlite-vec (local) / Tencent Cloud Vector Database (TCVDB)
- **Node.js requirement**: >= 22.16
- **OpenClaw requirement**: >= 2026.3.13
- **Agent tools**: `tdai_memory_search` / `tdai_conversation_search`
- **License**: MIT
