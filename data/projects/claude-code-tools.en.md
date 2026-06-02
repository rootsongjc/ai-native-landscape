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

## Overview

claude-code-tools is a collection of productivity tools and extensions designed to enhance Claude Code workflows and similar CLI coding agents. Maintained by pchalasani, it provides plugins for session management, terminal automation, and safety controls that help developers get more out of LLM-driven development environments.

## Key Features

Session continuation and trimming via aichat with Rust-powered Tantivy full-text search and intelligent rollover strategies for recovering past context. Terminal automation through tmux-cli that reduces race conditions and improves agent reliability during interactive workflows. Safety hooks and env-safe for preventing dangerous operations and inspecting environment files without exposing sensitive values.

## Use Cases

Developers running parallel agent-driven tasks who need robust session management to resume long-running work without losing context. Teams automating interactive terminal workflows while maintaining safety controls in local and CI environments. Anyone needing fast full-text search across past coding sessions to recover relevant decisions and code patterns.

## Technical Details

Hybrid architecture combining Python for CLI orchestration, Rust with Tantivy for high-performance full-text search and TUI, and Node.js for interactive menus. Emphasizes modular plugin design with least-privilege tool permissions for subagents and hook-based extensibility. Distributed via PyPI with optional Rust and Cargo binaries for search components.
