---
name: graphify
slug: graphify
homepage: https://www.graphify.com
repo: https://github.com/Graphify-Labs/graphify
license: Apache-2.0
category: rag-knowledge
subCategory: knowledge-graphs
tags:
  - Knowledge Graph
  - Code Analysis
  - RAG
  - Agent Skill
description: >-
  A skill that turns any codebase — with its docs, SQL schemas, configs, and
  PDFs — into a queryable knowledge graph for Claude Code, Cursor, Codex, and
  Gemini CLI. Local deterministic AST parsing, every edge explained, no vector
  store.
author: Graphify-Labs
ossDate: '2026-04-03'
featured: false
status: tracked
---

## Overview

Graphify maps an entire project (code, docs, PDFs, images, videos) into a knowledge graph you query instead of grepping through files. Type `/graphify` in your AI coding assistant and it produces an interactive graph.html, a highlights report, and a graph.json you can query anytime without re-reading the files. It is deliberately not a vector index — there are no embeddings, just a real graph you traverse to ask questions, trace paths, and explain concepts.

## Key Features

- Code, docs, SQL schemas, configs, and PDFs mapped into one queryable knowledge graph
- Code parsed locally with tree-sitter AST — deterministic, no LLM, nothing leaves your machine
- Every edge tagged EXTRACTED (explicit in the source) or INFERRED (resolved by graphify), so you can tell what was read directly from what was inferred
- God nodes surface the most-connected concepts; Leiden communities split the graph into subsystems
- Query commands: plain-language questions, shortest path between any two things, and per-concept explanations
- Works with Claude Code, Cursor, Codex, Gemini CLI, GitHub Copilot, and 20+ other assistants on macOS, Linux, and Windows

## Use Cases

- Onboard onto or explore a large unfamiliar codebase by querying the graph instead of reading files
- Trace how two distant parts of a system connect, hop by hop with per-edge confidence
- Keep a persistent graph.json that agents query without re-reading the repository

## Technical Details

- Code is parsed with tree-sitter AST covering ~40 languages, resolving cross-file `calls`, `imports`, `inherits`, and `mixes_in` edges deterministically; docs, PDFs, images, and video get a semantic pass using the assistant's own model or a configured API key
- Every edge carries a confidence tag (EXTRACTED vs INFERRED); `graphify path A B` reports the shortest path with the overall confidence of its weakest hop, and `graphify query` returns a scoped subgraph for a natural-language question
- Leiden community detection clusters the graph into subsystems with LLM-free labels; no embeddings or vector store are used — graph.json is traversed directly and carries `schema_version` and `graphify_version` fields for format compatibility
- Installed as the `graphifyy` PyPI package (Python 3.10+, via uv or pipx); `graphify install` auto-detects the assistant and registers the skill
