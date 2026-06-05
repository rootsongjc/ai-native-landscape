---
name: MCP Memory Service
slug: mcp-memory-service
homepage: null
repo: https://github.com/doobidoo/mcp-memory-service
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - Application
  - CLI
  - Dashboard
  - Data
  - MCP
  - Memory
description: Automatic, persistent project context memory and retrieval for Claude, VS Code, Cursor and other tools.
author: doobidoo
ossDate: '2024-12-26T10:15:44Z'
featured: false
status: unavailable
---

## Overview

MCP Memory Service is a persistent semantic memory server for AI agents that captures code, documentation, commit history, and other contextual artifacts, then exposes them as retrievable embeddings through the Model Context Protocol. It enables tools like Claude, VS Code, and Cursor to inject relevant project context into new sessions automatically, eliminating the need to repeatedly explain project architecture and design decisions.

## Key Features

- Persistent semantic memory with document chunking, metadata extraction, and smart tagging for high-relevance retrieval across sessions.
- Multiple storage backends including a recommended hybrid mode (local SQLite for ~5ms reads plus Cloudflare for cloud sync), pure SQLite-vec, and Cloudflare-backed storage.
- Team collaboration features via OAuth 2.1 authentication and a comprehensive HTTP API for multi-user access control and memory sharing.
- Built-in web dashboard on port 8000 for browsing, managing, and debugging stored memories.

## Use Cases

- Developers avoiding the overhead of re-explaining project context to LLMs on every new coding session or conversation.
- Teams sharing architectural knowledge, design decisions, and commit history across members and devices for consistent AI-assisted development.
- RAG workflows that leverage documents, logs, and meeting notes as memory sources to improve answer accuracy and contextual relevance.

## Technical Details

- Fully compatible with the Model Context Protocol (MCP), supporting standard transports for broad integration with AI coding assistants and agent frameworks.
- Vector embedding and semantic search engine with memory consolidation and compression strategies to control storage costs over time.
- Privacy-first, local-first architecture with optional cloud sync, automated install scripts, Docker support, and an extensible plugin system.
