---
name: CodeGraph
slug: codegraph
homepage: null
repo: https://github.com/colbymchenry/codegraph
license: Unknown
category: rag-knowledge
subCategory: knowledge-graphs
tags:
  - AI Agent
  - Dev Tools
  - Knowledge Graph
description: >-
  Pre-indexed code knowledge graph for AI coding agents, supporting Claude Code, Codex, Cursor, and OpenCode with 100%
  local execution.
logo: ''
author: colbymchenry
ossDate: '2026-01-18T00:00:00.000Z'
featured: false
status: tracked
---

CodeGraph builds a local code knowledge graph for AI coding agents (Claude Code, Cursor, Codex CLI, OpenCode), enabling a single tool call to retrieve entry points, related symbols, and code snippets without expensive exploration scans. Benchmarks show an average 92% reduction in tool calls and 71% faster exploration.

## Overview

The project uses tree-sitter to parse source code into ASTs, extracting nodes (functions, classes, methods) and edges (calls, imports, extends, implements) via language-specific queries. Everything is stored in a local SQLite database (`.codegraph/codegraph.db`) with FTS5 full-text search. The MCP server watches for file changes using native OS events and auto-syncs incrementally.

Supports 19+ programming languages and framework-aware route recognition for 13 web frameworks including Django, Flask, FastAPI, Express, Laravel, Rails, Spring, Gin, and more.

## Key Features

- **Smart context building**: One tool call returns entry points, related symbols, and code snippets
- **Full-text search**: Instant code name search powered by SQLite FTS5
- **Impact analysis**: Trace callers, callees, and full impact radius of any symbol
- **Always fresh**: File watcher uses native OS events with debounced incremental sync, zero config
- **19+ language support**: TypeScript, JavaScript, Python, Go, Rust, Java, C#, PHP, Ruby, C/C++, Swift, Kotlin, Dart, and more
- **Framework-aware routes**: Recognizes routing files for 13 web frameworks and links URL patterns to handlers
- **100% local**: No data leaves your machine, no API keys, no external services
- **Multi-agent support**: Claude Code, Cursor, Codex CLI, OpenCode

## Use Cases

- **Large codebase navigation**: Quickly locate entry points and call chains in million-line projects
- **Change impact assessment**: Trace full impact radius before making code changes to prevent regressions
- **AI agent acceleration**: Reduce agent exploration rounds, lower token consumption and latency
- **Code review assistance**: Rapidly understand code structure and dependencies involved in a PR

## Technical Highlights

- **Language**: TypeScript
- **Storage**: Local SQLite + FTS5 full-text search
- **Parsing engine**: tree-sitter multi-language AST parsing
- **Protocol**: MCP (Model Context Protocol)
- **Node.js requirement**: >= 18.0.0
- **MCP tools**: `codegraph_search`, `codegraph_context`, `codegraph_callers`, `codegraph_callees`, `codegraph_impact`, and 3 more
- **License**: MIT
