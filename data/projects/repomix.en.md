---
name: Repomix
slug: repomix
homepage: https://repomix.com/
repo: https://github.com/yamadashy/repomix
license: MIT
category: coding-devtools
subCategory: developer-utilities
tags:
  - Dev Tools
  - Prompt Engineering
  - Utility
description: >-
  A tool that packs an entire repository into an AI-friendly file, making it easy to provide structured code context to
  large models.
author: yamadashy
ossDate: '2024-07-13T07:11:32.000Z'
featured: false
status: tracked
---

Repomix packs a repository into a single, AI-friendly file (XML/Markdown/JSON/Plain), providing token counts, compression options and security checks. It's ideal for feeding full project context to LLMs for review, refactoring, documentation, or test generation.

## Key features

- AI-optimized output: produce structured files tailored for large models with multiple output formats
- Token counting: per-file and total token estimation to manage model context limits
- One-command packing: CLI, website (repomix.com) and remote packing (--remote)
- Compression mode: Tree-sitter-based extraction to reduce token usage while preserving structure
- Security checks: integrates secret scanning to avoid leaking sensitive data

## Use cases

- Automated code review and refactoring: provide LLMs with full, structured repository context
- Documentation and test generation: auto-generate README or unit test examples from packed output
- Developer assistants and MCP integration: give AI agents rich project context for powerful automation
- Online & local workflows: run via repomix.com, CLI, Docker, or editor extensions

## Technical notes

- Multi-form support: CLI, web, Docker, browser/VSCode extensions and MCP server mode
- Implementation: primarily TypeScript with performance optimizations for large repos
- Extensible: configurable include/exclude patterns, templates and config file support
- Community-driven: open-source project with active releases and documentation
