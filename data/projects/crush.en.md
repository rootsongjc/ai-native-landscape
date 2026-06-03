---
name: Crush
slug: crush
homepage: null
repo: https://github.com/charmbracelet/crush
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Terminal
  - CLI
description: >-
  An AI assistant running in the terminal, supporting multi-model, session management, LSP enhancement, and extensible
  model provider configuration.
author: Charmbracelet
ossDate: '2025-05-21T12:14:57.000Z'
featured: false
status: tracked
---
Crush is an AI assistant that runs in your terminal, connecting tools, code, and workflows to various LLM providers. It supports session management, model switching within sessions, LSP-powered context enhancement, and extensibility via MCP plugins (http, stdio, sse). Crush runs on macOS, Linux, Windows, and BSD, and can be installed via Homebrew, npm, binary releases, or go install.

## Key Features

- Multi-model & Sessions: Supports both cloud and local models, allowing model switching within sessions while preserving context.
- LSP Enhancement: Integrates language servers to provide code context and more accurate suggestions.
- Extensible MCP: Expand data sources and functionality via MCP plugins (http, stdio, sse).
- Cross-platform Installation & Package Management: Supports Homebrew, npm, binary releases, and go install.

## Use Cases

- Assist code editing, debugging, and refactoring in the terminal using natural language.
- Integrate LLMs into local development, scripts, or CI workflows.
- Use local models or private providers in restricted or offline environments.

## Technical Highlights

- Configuration Priority: Local project configuration takes precedence over global settings, managed via `crush.json`.
- Automatic Provider Updates: By default, model lists are synced from Catwalk; this can be disabled or updated manually.
- Privacy & Metrics: Records pseudonymous usage metrics, with an option to disable metrics collection.
