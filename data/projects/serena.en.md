---
name: Serena
slug: serena
homepage: null
repo: https://github.com/oraios/serena
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: >-
  Serena is a powerful open-source coding agent toolkit that provides semantic retrieval and code-editing capabilities,
  enabling LLMs to operate efficiently on real codebases.
author: Oraios AI
ossDate: '2025-03-23T22:35:24.000Z'
featured: false
status: tracked
---

## Overview

Serena is an open-source coding agent toolkit designed to turn any large language model (LLM) into an agent capable of analyzing and editing real-world codebases. By combining Language Server Protocol (LSP) integrations with a set of code-focused semantic tools, Serena can identify code entities at the symbol level, perform precise insertions and replacements, and significantly improve the accuracy and efficiency of LLM-based development workflows.

## Key Features

- Semantic retrieval and editing: Symbol-level search and edit operations such as find_symbol and insert_after_symbol, enabling precise actions in large codebases.
- Multi-language support: Out-of-the-box support for Python, TypeScript/JavaScript, Go, Rust, Java, and more via language servers.
- Flexible integrations: Works with MCP (Model Context Protocol) clients like Claude Code, Claude Desktop, terminal-based clients, and IDEs; can run via Docker, Nix, or uvx.
- Dashboard and logging: Provides a local web dashboard for session logs, tool diagnostics, and operational insights.

## Use Cases

Serena is suited for code analysis, automated refactoring, large-scale code search and edits, and agent-driven code maintenance. Typical uses include fixing bugs across a repository, assisting with refactors, reducing token usage when paired with Claude Code, and powering IDE or custom agent integrations with symbol-aware editing tools.

## Technical Highlights

- LSP-based semantic understanding: Leverages language servers to obtain reliable symbol boundaries and cross-references.
- Agent-oriented toolset: Exposes composable tools for common editing tasks (find references, insert/replace symbol bodies, run tests) for use in agent loops.
- Configurable contexts and modes: Supports multiple contexts (ide-assistant, desktop-app, agent) and custom modes to adapt to diverse deployment scenarios.

<!-- Do not include bare URLs in the body; links are provided in frontmatter -->
