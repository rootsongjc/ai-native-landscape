---
name: claude-code-tools
slug: claude-code-tools
homepage: https://pypi.org/project/claude-code-tools/
repo: https://github.com/pchalasani/claude-code-tools
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - CLI
  - Dev Tools
  - Tool
  - Utility
description: A collection of productivity tools and plugins for Claude Code, Codex-CLI, and similar CLI coding agents.
author: pchalasani
ossDate: '2025-07-30T20:10:38Z'
featured: false
status: tracked
---
claude-code-tools is a collection of productivity tools and extensions designed to enhance Claude Code workflows and similar CLI coding agents. Maintained by pchalasani, it provides plugins for session management, terminal automation, and safety controls that help developers get more out of LLM-driven development environments.

## Session Management

- Session continuation and trimming via aichat with Rust-powered Tantivy full-text search
- Intelligent rollover strategies for recovering past context without manual intervention
- Fast full-text search across past coding sessions to recover relevant decisions and code patterns
- Robust session management for developers running parallel agent-driven tasks

## Terminal Automation and Safety

- Terminal automation through tmux-cli that reduces race conditions and improves agent reliability
- Safety hooks for preventing dangerous operations in local and CI environments
- env-safe tool for inspecting environment files without exposing sensitive values
- Least-privilege tool permissions for subagents during interactive workflows

## Architecture and Distribution

- Hybrid architecture combining Python for CLI orchestration, Rust with Tantivy for high-performance search and TUI, and Node.js for interactive menus
- Modular plugin design with hook-based extensibility for custom workflows
- Distributed via PyPI with optional Rust and Cargo binaries for search components
- Designed for teams automating interactive terminal workflows while maintaining safety controls
