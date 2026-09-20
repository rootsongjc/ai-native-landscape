---
name: AgentsKit
slug: agentskit
homepage: https://www.agentskit.io/
repo: https://github.com/AgentsKit-io/agentskit
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - TypeScript
  - Agent Framework
  - Multi-Agent
  - Provider Adapters
  - RAG
description: A composable TypeScript toolkit for building agent applications from a zero-dependency core and independently installable packages for adapters, runtime, tools, skills, memory, RAG, sandboxing, observability, and evaluation.
author: AgentsKit
ossDate: '2026-04-02'
featured: false
status: tracked
---

## Overview

AgentsKit is a composable toolkit for building AI agents in JavaScript. Instead of another monolithic framework, it ships a small contracted core plus independently installable packages — every adapter, tool, skill, memory, retriever, and runtime is substitutable behind six formal, versioned contracts. Teams start with one package, grow into a full stack, and can change model vendors without rewriting application architecture.

## Key Features

- Provider swap in one line: `openai()`, `anthropic()`, `gemini()`, `ollama()`, `deepseek()`, `grok()` adapters behind the same adapter contract
- Autonomous agent runtime with a ReAct loop, tool registry, skills, and multi-agent delegation through a tool the model already knows how to call
- UI surfaces for React, Ink (terminal), Vue, Svelte, Solid, Angular, and React Native sharing one chat contract
- Memory (chat, vector, graph, encrypted), plug-and-play RAG with reranking, sandboxed code execution, observability (LangSmith, OpenTelemetry, audit log), and agent evaluation with replay
- Expose AgentsKit tools as an MCP server for Claude Desktop, Cursor, and Windsurf; one-descriptor integrations for Slack, Teams, and email
- CLI (`npx @agentskit/cli init`) scaffolds skills, tools, and adapters from templates

## Use Cases

- Building a streaming chat UI in React (or Vue/Svelte/Solid/Angular/RN) with swappable providers
- Headless autonomous agents with tools, skills, and long-term memory
- Multi-agent delegation where a planner decomposes tasks and researcher/coder delegates execute with scoped tools and step budgets
- Terminal-first agents via Ink + CLI, and exposing internal tools to MCP clients like Claude Desktop

## Technical Details

- Core has zero runtime dependencies under a CI-enforced 10 KB gzipped budget and is API-frozen at v1; six versioned ADRs (0001–0006) define the adapter, tool, memory, retriever, skill, and runtime contracts
- Every package carries an explicit stability tier (stable/beta), test floor, README, human guide, and agent handoff; numeric ecosystem claims are generated from repository sources by `scripts/compute-stats.mjs` into a committed claims ledger and fail CI on drift
- First agent runs with no API key or network request through a local adapter factory; the README example is a byte-synchronized executable fixture that runs in CI
- The full public API fits under 2,000 tokens for agent consumption, with `llms.txt` and `doc-bridge.config.json` providing machine-readable doc handoffs
- Targets Node.js 20+ and modern runtimes with dual ESM/CJS output and strict TypeScript declarations; edge compatibility from the dependency-free core
- Ecosystem layering: the toolkit repo, a registry of ready-made agents/tools (registry.agentskit.io), and a patterns playbook (playbook.agentskit.io)
