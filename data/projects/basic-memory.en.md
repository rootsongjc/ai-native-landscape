---
name: Basic Memory
slug: basic-memory
homepage: https://basicmemory.com
repo: https://github.com/basicmachines-co/basic-memory
license: AGPL-3.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Application
  - CLI
  - Dev Tools
  - Memory
description: >-
  A local-first knowledge-as-Markdown system that lets LLMs read and write your memory via the Model Context Protocol
  (MCP).
author: Basic Machines
ossDate: '2024-12-02T22:40:43Z'
featured: false
status: tracked
---
Basic Memory is a local-first knowledge system that stores user knowledge as structured Markdown files and exposes them to compatible LLMs via the Model Context Protocol (MCP). It implements a writable memory layer that keeps data local by default while offering optional cloud sync, ensuring AI conversations actually remember context without requiring users to re-explain their projects.

## Knowledge as Markdown

- Structured Markdown files as the primary storage format, readable and editable by humans
- Automatic parsing of files into Entities, Observations, and Relations
- Local SQLite index for fast full-text search and graph traversal
- All data stored under user control with no vendor lock-in

## LLM Integration via MCP

- MCP server component enabling any compatible LLM to read and write memories
- Bidirectional knowledge graph built collaboratively by humans and AI agents
- Semantic search and retrieval powered by the local index
- Event-driven APIs that react to knowledge changes in real time

## Cross-Tool & Cross-Device

- CLI tools for terminal-based knowledge management and querying
- Integrations with VS Code and Claude Desktop for in-editor and in-chat access
- Optional cloud sync for multi-device collaboration
- Works alongside existing note-taking and PKM tools without replacing them

## When to Use Basic Memory

- Developer project knowledge bases that need to persist across LLM sessions
- Research notes with semantic search across long-running projects
- Personal AI assistants that maintain long-term memory without cloud dependency
- Privacy-preserving alternative to cloud-only RAG and memory services
