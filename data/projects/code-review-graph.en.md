---
name: code-review-graph
slug: code-review-graph
homepage: https://code-review-graph.com
repo: https://github.com/tirth8205/code-review-graph
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Code Review
  - Knowledge Graph
  - Static Analysis
description: >-
  A local-first code intelligence graph served over MCP and CLI. It builds a persistent structural map of a codebase with
  Tree-sitter and updates it incrementally, so AI coding tools read only the files a change actually touches.
author: tirth8205
ossDate: '2026-02-26'
featured: false
status: tracked
---

## Overview

code-review-graph builds a local knowledge graph of a codebase so AI coding tools get precise review context instead of re-reading large parts of the repo. It parses code into ASTs with Tree-sitter, stores functions, classes, imports, and their relationships as a graph, keeps the graph updated incrementally through hooks and watch mode, and serves compact context over MCP. Reviewing a change then means querying the blast radius — every caller, dependent, and test that could be affected — and reading only that minimal file set.

## Key Features

- One-command install that detects installed AI coding tools and configures MCP entries, hooks, and skills for each (Claude Code, Codex, Cursor, Windsurf, Zed, Continue, OpenCode, Gemini CLI, Copilot, and more)
- Blast-radius analysis: when a file changes, traces every caller, dependent, and test that could be affected
- Incremental updates via hooks and watch mode after an initial build (a ~3,000-file cold build takes about 40 seconds)
- Benchmarked context reduction — reading flask's whole corpus costs 143,594 tokens where a graph answer costs 2,196 (65x fewer)
- Clean uninstall that removes only CRG-owned files and entries, leaves other MCP servers and JSONC comments intact, and supports `--dry-run` preview
- Partial-build tolerance: files that fail to parse are named in the summary and keep their previous graph rows

## Use Cases

- AI-assisted code review that reads only the files a change touches, not the whole repository
- Large-repo workflows where re-reading the codebase per prompt blows the context window
- Serving reusable structural context (call graph, inheritance, test coverage links) to any MCP-capable coding tool
- GitHub Action-based review pipelines with locally reproducible benchmarks

## Technical Details

- Python 3.10+ package (`pip install code-review-graph`); repositories are parsed into ASTs with Tree-sitter and persisted as a graph of nodes (functions, classes, imports) and edges (calls, inheritance, test coverage)
- The graph is queried at review time for the smallest set of files the assistant needs, via MCP tools that return blast radius and risk scores
- Incremental engine: hooks and watch mode update the graph on file changes; a failed parse yields a `partial` status that names the files and preserves their previous rows
- The installer writes per-platform MCP entries choosing the right launcher — `poetry run`/`uv run` inside Poetry or uv projects, `uvx code-review-graph serve` when uvx is on PATH, otherwise the current interpreter
- Shared config files are replaced atomically so a failed write leaves the original intact; uninstall removes only CRG-owned entries
