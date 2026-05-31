---
name: claude-code-tools
slug: claude-code-tools
homepage: https://pypi.org/project/claude-code-tools/
repo: https://github.com/pchalasani/claude-code-tools
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - CLI
  - Dev Tools
  - Tool
  - Utility
description: A collection of productivity tools and plugins for Claude Code, Codex-CLI, and similar CLI coding agents.
logo: ''
author: pchalasani
ossDate: '2025-07-30T20:10:38Z'
featured: false
status: tracked
---

## Detailed Introduction

claude-code-tools, maintained by pchalasani, is a suite of productivity plugins and CLI utilities designed for Claude Code, Codex-CLI, and similar command-line coding agents. The project provides plugins such as `aichat`, `tmux-cli`, and `safety-hooks`, plus commands like `aichat`, `vault`, and `env-safe` to manage session continuation, terminal automation, secure env handling, and fast full-text session search for LLM-driven development workflows.

## Main Features

- Session continuation and trimming with `aichat`, including Rust/Tantivy full-text search and rollover strategies.
- Terminal automation via `tmux-cli`, reducing automation race conditions and improving agent reliability.
- Safety hooks and `env-safe` for preventing dangerous operations and inspecting `.env` files without exposing values.
- Hybrid architecture: Python CLI core, Rust search binary, and Node.js action menus for interactive workflows.

## Use Cases

Ideal for developers and teams who run parallel agent-driven tasks or need robust session management: resume long-running work without lossy compaction, search and recover past session context, automate interactive terminal workflows, and enforce safety controls in local and CI environments.

## Technical Characteristics

The project combines Python for CLI and orchestration, Rust (Tantivy) for high-performance full-text search and TUI, and Node.js for interactive menus. It emphasizes modular plugins, least-privilege tool permissions for subagents, and hook-based extensibility, and is distributed via PyPI with optional Rust/Cargo binaries for the search components.
