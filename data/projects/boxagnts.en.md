---
name: BoxAgnts
slug: boxagnts
homepage: https://github.com/guyoung/boxagnts
repo: https://github.com/guyoung/boxagnts
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Toolkit
  - Rust
  - WebAssembly
  - Sandbox
  - Self-Hosted
description: An open-source AI agent toolbox built with Rust that combines a WebAssembly sandbox runtime, multi-provider model adapters, a tool and skill system, and a built-in web dashboard.
author: guyoung
ossDate: '2026-05-16'
featured: false
status: tracked
---

## Overview

BoxAgnts is an open-source AI Agent toolbox built with Rust, focused on an out-of-the-box experience: download, run, and manage agents through a built-in web dashboard. Custom tools and skills execute inside a WebAssembly sandbox that balances security and flexibility, while the core ships multi-provider model support, a Markdown-driven skill system, scheduled tasks, and static site hosting in a single binary.

## Key Features

- Streaming chat with 20+ model providers (OpenAI, Anthropic, Google, Azure, Bedrock, DeepSeek, MiniMax, Cohere, GitHub Copilot, and more) through one adapter layer
- Custom agents with independent model, prompt, and max-turns configuration; agents can be defined by `.md` files
- Tool system covering file read/write with diff-level intelligent editing, risk-classified secure shell execution, web scraping, document reading (PDF, DOCX), and glob + regex file search
- Markdown-defined skills that compose and reuse, with built-ins like code review, CSS refactor advisor, and DOCX/PPTX/XLSX generators
- Scheduled tasks with standard cron expressions, per-task agent/message/working-directory configuration, and logging
- WebAssembly sandbox with fine-grained permission management, network access control, and MCP client support for external tool ecosystems

## Use Cases

- Running a personal AI assistant with a visual dashboard, no container or cloud dependency
- Building agents whose custom tools must run in an isolated, permission-controlled environment
- Automating recurring work (code review, document generation, scheduled reports) via cron-driven agent tasks
- Extending agent capabilities with community MCP servers while keeping execution local

## Technical Details

- Rust backend on the Tokio async runtime and Axum web framework, organized as a workspace: `api` (multi-provider adapters with streaming/non-streaming conversion), `core` (message/tool types, cost tracking), `query` (agent query loop with dynamic provider routing, context compaction, budget control), `gateway` (cron scheduling + site management), `server` (Axum REST + WebSocket with HTTP Basic Auth), `tools`/`tools-manager` (Tool trait plus a complete shell-command lexer/parser/AST), `mcp`, `wasm-sandbox`, `wasm-tools`, and `workspace`
- The WebAssembly sandbox runs on Wasmtime with directory mapping, network access control (domain allowlist + IP blocklist), and resource limits on timeout, memory, and fuel — near-native performance with compile-once portability
- Vue 3 + TypeScript + Vuetify dashboard with 11 Pinia stores on a shared `baseCrud` base class, Vue Router (hash mode), Marked + DOMPurify rendering, CodeMirror 6 editing, Chart.js usage views, and WebSocket for real-time chat and file-change notifications
- Prebuilt executables ship compiled dashboard assets and built-in extensions (WASM tools + skill definitions); source builds require Rust 1.75+ and Node.js 18+, building the frontend into `app/dashboard-web` before the release binary
- Multiple workspaces supported, each with its own config, OAuth credentials, session history, and permissions; project derived from the claurst codebase
