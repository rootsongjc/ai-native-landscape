---
name: GitNexus
slug: gitnexus
homepage: https://gitnexus.vercel.app
repo: https://github.com/abhigyanpatwari/gitnexus
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - Dev Tools
  - Knowledge Graph
  - MCP
description: >-
  GitNexus is a client-side knowledge graph creator that runs entirely in your browser, indexing any codebase into an
  interactive knowledge graph with a built-in Graph RAG Agent and deep architectural awareness for AI coding assistants
  via MCP.
logo: ''
author: Abhigyan Patwari
ossDate: '2025-08-02T23:20:31Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

GitNexus is a zero-server code intelligence engine that indexes any codebase into a complete knowledge graph — tracking every dependency, call chain, functional cluster, and execution flow — and exposes deep architectural awareness to AI coding assistants (Cursor, Claude Code, Codex, and more) via the Model Context Protocol. Its Web UI runs entirely in the browser with no server-side components, ensuring code never leaves the local environment. GitNexus precomputes relational intelligence at index time so that a single tool call returns complete context, rather than relying on the LLM to perform multiple rounds of graph queries.

## Key Features

- Zero-server Web UI: runs entirely in the browser (Tree-sitter WASM + LadybugDB WASM), no code uploaded to any server, supports drag-and-drop of GitHub repos or ZIP files.
- CLI + MCP: locally indexes repos and exposes 16 tools to AI agents via MCP, including impact analysis, process-grouped search, 360-degree symbol view, change detection, and multi-file rename.
- Multi-language support: 14 languages including TypeScript, JavaScript, Python, Java, Kotlin, C#, Go, Rust, PHP, Ruby, Swift, C, C++, and Dart with parsing, type inference, and heritage resolution.
- Multi-repo architecture: a global registry lets one MCP server serve multiple indexed repos without per-project configuration.
- Graph RAG Agent: built-in LangChain ReAct agent for conversational code exploration directly in the browser.
- Wiki generation: automatically produces LLM-powered code documentation from the knowledge graph, with custom model and API provider support.
- 4 auto-installed Agent Skills: exploring, debugging, impact analysis, and refactoring, plus repo-specific skills generated via Leiden community detection.

## Use Cases

- Providing deep codebase architectural awareness to AI coding assistants like Cursor, Claude Code, and Codex to prevent blind edits and missed dependencies.
- Pre-commit impact analysis to identify call chains and functional modules that may break.
- Quickly exploring unfamiliar codebases through interactive knowledge graphs for architecture understanding and execution flow tracing.
- Cross-service contract extraction and execution flow tracing in multi-repository environments.

## Technical Highlights

- Multi-phase indexing pipeline based on Tree-sitter ASTs: structure mapping, symbol extraction, cross-file reference resolution, community clustering, process tracing, and hybrid search index construction.
- Uses LadybugDB embedded graph database with vector support (native for CLI, WASM for Web UI).
- Hybrid search combining BM25 keyword retrieval + semantic vector retrieval + RRF fusion ranking.
- Frontend built with React 18, TypeScript, Vite, and Tailwind v4; graph visualization powered by Sigma.js + Graphology (WebGL).
- Licensed under PolyForm Noncommercial 1.0.0.
