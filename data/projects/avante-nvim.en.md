---
name: avante.nvim
slug: avante-nvim
homepage: https://nix-community.github.io/nixvim/plugins/avante/index.html
repo: https://github.com/yetone/avante.nvim
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: >-
  avante.nvim brings a Cursor AI-like experience to Neovim, turning the editor into an intelligent assistant-enabled
  environment.
logo: ''
author: yetone
ossDate: '2024-08-14T16:45:16Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

avante.nvim is a Neovim plugin that provides an in-editor AI assistant experience, integrating context-aware code suggestions, project-level instruction files, and one-click application of edits. It aims to bring Cursor-like workflows into the editor while keeping full compatibility with common Neovim plugin managers and Lua-based configurations.

## Key features

- In-editor AI assistant with contextual suggestions and quick-apply capabilities.
- Project-specific instruction support via `avante.md` to customize assistant behavior.
- Multiple provider support (Anthropic, OpenAI, Ollama, Morph, etc.) and ACP/agent-client integrations.
- Zen Mode: a focused UI that exposes AI workflow while retaining Neovim editing primitives.

## Use cases

- Interactive code refactoring and contextual fixes directly inside the editor.
- Faster code reviews and applying automated edits suggested by models.
- Embedding project-domain knowledge through `avante.md` for more accurate suggestions.

## Technical notes

- Implemented primarily in Lua for native Neovim compatibility; core components also include Rust and Python for specific features.
- Supports prebuilt binaries or building from source via `cargo`; integrates with common plugin managers like `lazy.nvim`.
