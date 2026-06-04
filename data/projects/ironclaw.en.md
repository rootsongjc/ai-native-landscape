---
name: IronClaw
slug: ironclaw
homepage: null
repo: https://github.com/nearai/ironclaw
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - MCP
  - Safety
description: OpenClaw-inspired Rust implementation focused on privacy and security
author: NEAR AI
ossDate: '2026-02-03'
featured: false
status: tracked
---

## Overview

IronClaw is a Rust reimplementation inspired by OpenClaw, with a laser focus on privacy and security. Built on a simple principle: **your AI assistant should work for you, not against you**.

In a world where AI systems are increasingly opaque about data handling and aligned with corporate interests, IronClaw takes a different approach:

- **Your data stays yours** - All information is stored locally, encrypted, and never leaves your control
- **Transparency by design** - Open source, auditable, no hidden telemetry or data harvesting
- **Self-expanding capabilities** - Build new tools on the fly without waiting for vendor updates
- **Defense in depth** - Multiple security layers protect against prompt injection and data exfiltration

IronClaw is the AI assistant you can actually trust with your personal and professional life.

## Key Features

**Security First**

- **WASM Sandbox** - Untrusted tools run in isolated WebAssembly containers with capability-based permissions
- **Credential Protection** - Secrets are never exposed to tools; injected at the host boundary with leak detection
- **Prompt Injection Defense** - Pattern detection, content sanitization, and policy enforcement
- **Endpoint Allowlisting** - HTTP requests only to explicitly approved hosts and paths

**Always Available**

- **Multi-channel** - REPL, HTTP webhooks, WASM channels (Telegram, Slack), and web gateway
- **Docker Sandbox** - Isolated container execution with per-job tokens and orchestrator/worker pattern
- **Web Gateway** - Browser UI with real-time SSE/WebSocket streaming
- **Routines** - Cron schedules, event triggers, webhook handlers for background automation
- **Heartbeat System** - Proactive background execution for monitoring and maintenance tasks
- **Parallel Jobs** - Handle multiple requests concurrently with isolated contexts
- **Self-repair** - Automatic detection and recovery of stuck operations

**Self-Expanding**

- **Dynamic Tool Building** - Describe what you need, and IronClaw builds it as a WASM tool
- **MCP Protocol** - Connect to Model Context Protocol servers for additional capabilities
- **Plugin Architecture** - Drop in new WASM tools and channels without restarting

**Persistent Memory**

- **Hybrid Search** - Full-text + vector search using Reciprocal Rank Fusion
- **Workspace Filesystem** - Flexible path-based storage for notes, logs, and context
- **Identity Files** - Maintain consistent personality and preferences across sessions

## Use Cases

**Personal Assistant**

- Personal information management (notes, calendar, contacts)
- Email and message processing
- Personal finance tracking and analysis
- Learning and research assistance

**Development Workflows**

- Code review and refactoring suggestions
- Automated testing and deployment
- Documentation generation and maintenance
- Project management and task tracking

**Data Processing Automation**

- ETL workflow automation
- Report generation and scheduling
- Data cleaning and validation
- Batch data processing

**Security-Sensitive Environments**

- Handling sensitive documents (requires local deployment)
- Credential and key management
- Audit log generation
- Compliance monitoring

## Technical Highlights

**Architecture**

- **Agent Loop** - Main message handling and job coordination
- **Router** - Classifies user intent (command, query, task)
- **Scheduler** - Manages parallel job execution with priorities
- **Worker** - Executes jobs with LLM reasoning and tool calls
- **Orchestrator** - Container lifecycle, LLM proxying, per-job auth
- **Web Gateway** - Browser UI with chat, memory, jobs, logs, extensions, routines
- **Routines Engine** - Scheduled (cron) and reactive (event, webhook) background tasks
- **Workspace** - Persistent memory with hybrid search
- **Safety Layer** - Prompt injection defense and content sanitization

**WASM Sandbox Security**

- **Capability-based permissions** - Explicit opt-in for HTTP, secrets, tool invocation
- **Endpoint allowlisting** - HTTP requests only to approved hosts/paths
- **Credential injection** - Secrets injected at host boundary, never exposed to WASM code
- **Leak detection** - Scans requests and responses for secret exfiltration attempts
- **Rate limiting** - Per-tool request limits to prevent abuse
- **Resource limits** - Memory, CPU, and execution time constraints

**Prompt Injection Defense**

- Pattern-based detection of injection attempts
- Content sanitization and escaping
- Policy rules with severity levels (Block/Warn/Review/Sanitize)
- Tool output wrapping for safe LLM context injection

**Data Protection**

- All data stored locally in your PostgreSQL database
- Secrets encrypted with AES-256-GCM
- No telemetry, analytics, or data sharing
- Full audit log of all tool executions

**Key Differences from OpenClaw**

- **Rust vs TypeScript** - Native performance, memory safety, single binary
- **WASM sandbox vs Docker** - Lightweight, capability-based security
- **PostgreSQL vs SQLite** - Production-ready persistence
- **Security-first design** - Multiple defense layers, credential protection

**LLM Provider Support**

- Default: NEAR AI
- Compatible with any OpenAI-compatible endpoint
- Popular options: OpenRouter (300+ models), Together AI, Fireworks AI, Ollama (local)
- Self-hosted servers: vLLM, LiteLLM

**License**

- Apache License 2.0 OR MIT License (dual-licensed)
