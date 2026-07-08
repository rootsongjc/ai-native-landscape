---
name: Codebase Memory MCP
slug: codebase-memory-mcp
homepage: https://deusdata.github.io/codebase-memory-mcp/
repo: https://github.com/DeusData/codebase-memory-mcp
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Code Intelligence
  - Knowledge Graph
  - Code Analysis
  - Developer Tools
description: >-
  High-performance code intelligence MCP server that indexes codebases into a persistent knowledge graph.
  Supports 158 languages with sub-millisecond queries and 99% fewer tokens, shipped as a single static binary with zero dependencies.
author: DeusData
ossDate: '2026-02-24T22:01:00Z'
featured: false
status: tracked
---

## Overview

Codebase Memory MCP is a high-performance code intelligence server built on the Model Context Protocol. It parses a codebase into a persistent knowledge graph using tree-sitter and exposes sub-millisecond structural queries, giving coding agents precise, token-efficient access to symbols, call graphs, and definitions across 158 languages. Delivered as a single static binary with no runtime dependencies, it drops straight into Claude Code, Codex, Cursor, Windsurf, Aider, Gemini CLI, and other MCP-compatible clients.

## Key Features

- Persistent code knowledge graph indexed via tree-sitter, covering 158 programming languages with AST-level symbol and relationship extraction.
- Sub-millisecond query latency with Cypher and graph-traversal interfaces for symbol lookups, call graphs, and dependency paths.
- Token-efficient retrieval that returns only relevant structural slices, cutting context costs by roughly 99% versus loading whole files.
- Single static binary, zero runtime dependencies — deployable locally or in CI with no install chain.
- Broad agent compatibility, integrating with Claude Code, Codex, Cursor, Windsurf, Aider, Gemini CLI, Kilocode, and OpenCode.
- Built-in graph visualization for exploring code relationships and architecture interactively.

## Use Cases

- Giving coding agents accurate, repo-wide structural context without flooding the prompt with raw source.
- Large-codebase navigation, impact analysis, and "who calls what" exploration during refactors or reviews.
- Onboarding and architecture understanding through visual graph exploration of symbols and dependencies.
- CI and automation pipelines that need fast, deterministic code queries without a heavy indexing stack.

## Technical Details

- Model Context Protocol (MCP) server exposing code-intelligence tools to any compatible agent client.
- Storage backed by SQLite with a graph schema, enabling durable indexing and offline-friendly local operation.
- tree-sitter drives multi-language AST parsing; results are queryable via Cypher and graph APIs.
- Average repository indexes in milliseconds, with sub-millisecond query response for symbol and relationship lookups.
