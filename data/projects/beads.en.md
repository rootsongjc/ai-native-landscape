---
name: Beads
slug: beads
homepage: https://steveyegge.github.io/beads/
repo: https://github.com/steveyegge/beads
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Memory
description: A lightweight framework that provides persistent memory and efficient retrieval for code agents.
author: Steve Yegge
ossDate: '2025-10-12T03:09:46Z'
featured: false
status: tracked
---
Beads is a lightweight memory layer designed for coding agents, providing persistent context and efficient retrieval to enhance AI-assisted development. It converts important conversation snippets and code context into embeddings, stores them in an efficient index, and enables reliable retrieval during multi-turn interactions or long-lived sessions.

## Persistent Memory

- Stores key conversation snippets, code fragments, and metadata across sessions
- Survives agent restarts and context window resets
- Decouples memory management from model inference for cleaner architecture
- Lightweight storage footprint optimized for coding assistant workloads

## Embedding-Based Retrieval

- Vector index for fast semantic search across stored memories
- Metadata filtering to narrow results by file, language, or topic
- Low-latency queries tuned for real-time coding assistant interactions
- Relevant context returned in compact form for direct injection into the prompt

## Integration Design

- Simple, extensible API for plugging into existing agent runtimes and toolchains
- Works alongside any LLM by appending retrieved context to the model's input
- Modular architecture that separates memory concerns from reasoning logic
- Compatible with popular coding agent frameworks and IDE extensions

## When to Use Beads

- Coding assistants that need to maintain conversational state across sessions
- Recovering relevant past changes, annotations, and debugging history
- Enriching code generation and debugging with historical project context
- Reducing context engineering complexity in long-lived agent workflows
