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
logo: ''
author: doobidoo
ossDate: '2024-12-26T10:15:44Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

MCP Memory Service provides persistent, semantic project memory and fast retrieval for developer workflows. It captures code, docs, commit history and other contextual artifacts, converts them into embeddings, and exposes retrieval APIs to inject relevant context into new sessions for AI tools such as Claude, Claude Code, VS Code, Cursor and more. The project supports local SQLite-vec, a hybrid local+Cloudflare backend (recommended for low-latency reads and cloud sync), and a web dashboard for management.

## Main Features

- Persistent semantic memory with document chunking, metadata, and smart tagging.
- Multiple storage backends: hybrid (local SQLite + Cloudflare sync), SQLite-vec, Cloudflare-backed storage.
- Millisecond-scale local reads (~5ms) for instant context injection.
- Team features via OAuth 2.1 and HTTP API for multi-user collaboration and access control.
- Built-in web dashboard (default port 8000) and comprehensive HTTP API for administration.

## Use Cases

- Developers and teams avoid re-explaining project architecture and design to LLMs on every session.
- Code review, incident investigation, and architectural discussions benefit from injected commit history and design decisions.
- Cross-device, cross-user memory sharing with OAuth-enabled syncing for team collaboration.
- Using documents, logs, and meeting notes as memory sources improves RAG workflows and answer accuracy.

## Technical Features

- MCP (Model Context Protocol) compatible server and transports for broad client support.
- Vector embeddings and semantic search with memory consolidation and compression strategies to control storage costs.
- Automated install scripts, Docker support, and extensible plugin/handler architecture.
- Privacy-first, local-first design with optional cloud sync for persistence and collaboration.
