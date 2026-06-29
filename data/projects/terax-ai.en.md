---
name: Terax
slug: terax-ai
homepage: https://terax.app
repo: https://github.com/crynta/terax-ai
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Code Editor
  - Terminal
  - AI Agent
  - Rust
  - Tauri
description: >-
  A lightweight (~7MB) terminal-first AI-native dev workspace built on Tauri 2, Rust, and React, combining a native PTY
  terminal, code editor, source control, and an agentic AI side-panel that runs against your own keys or local models.
author: crynta
ossDate: '2026-04-21T18:33:12.000Z'
featured: false
status: tracked
---
## Overview

Terax is an open-source terminal application development environment (ADE) built on Tauri 2 + Rust and React 19. It bundles a native PTY backend with a WebGL renderer, an agentic AI side-panel supporting BYOK and fully local models, plus a code editor, file explorer, source control with a git graph, and a web preview pane — all in about 7-8 MB with no telemetry and no account.

## Key Features

- GPU-accelerated multi-tab terminal with native PTY backend (zsh, bash, pwsh, fish, cmd) and split panels.
- CodeMirror 6 code editor with inline AI autocomplete, AI edit diffs, and Vim mode.
- Source control panel with hunk staging, commit, push, and a real git history graph.
- Agentic AI workflow with plans, sub-agents, project memory via `TERAX.md`, and tool use (file edit, grep, glob, bash with approval gating).
- BYOK providers (OpenAI, Anthropic, Gemini, Groq, xAI, OpenRouter, DeepSeek, Mistral) plus local inference (LM Studio, MLX, Ollama).
- Built-in web preview for local dev servers and external URLs.

## Use Cases

- Developers wanting a single lightweight desktop workspace that combines terminal, editor, git, and AI.
- Local-first or privacy-conscious workflows requiring no account and no telemetry.
- AI-assisted coding with custom agents, plan mode, and BYOK or local model endpoints.

## Technical Details

- Built with Tauri 2 + Rust backend and React 19 frontend; WebGL-rendered terminal via xterm.js.
- API keys stored in the OS keychain via `keyring`, never written to disk or localStorage.
- Cross-platform installers for macOS, Linux (AppImage/deb/rpm/AUR/Nix flake), and Windows with first-class WSL workspaces.
