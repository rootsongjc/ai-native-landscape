---
name: SandBase Harness
slug: sandbase-harness
homepage: https://github.com/sandbaseai/sandbase-harness
repo: https://github.com/sandbaseai/sandbase-harness
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agent Runtime
  - Sandbox
  - MCP
  - Self-Hosted
  - Local-First
  - Audit
description: A local-first, self-hosted runtime for building and operating AI agents, providing persistent sessions, sandboxed execution backends, credential vaults, approval gates, audit trails, and replay.
author: SandBase AI
ossDate: '2026-07-11'
featured: false
status: tracked
---

## Overview

SandBase Harness is a local-first runtime layer that sits between agent SDKs and production agent deployments. Agent SDKs handle the model loop; Harness adds what production agents actually need — persistent sessions, tool governance, sandbox boundaries, credential handling, memory, auditability, and a local Console UI for humans to inspect what happened. It runs on a machine or in self-owned infrastructure with SQLite and file storage and no required hosted control plane.

## Key Features

- Claude Managed Agents-style `/v1` HTTP API plus a built-in local Console dashboard
- Persistent, resumable sessions exposed as Server-Sent Events for replay and debugging
- Sandbox execution backends: local process, Docker (per-session containers), Kubernetes (kubectl exec/cp), and self-hosted worker queue
- MCP toolsets, permission policies, approval gates, built-in tools, and skill packages
- SQLite-backed agents, sessions, environments, credential vaults, memory stores, files, and API keys; file/skill bytes stored in the workspace state directory
- One active model provider boundary (OpenAI, Anthropic, MiniMax, or OpenAI-compatible endpoints) configured through Settings V2 with validation and restart flow

## Use Cases

- Running generated code safely with a selectable isolation boundary from laptop (local process) to cluster (Kubernetes)
- Inspecting long-running agents: resuming event streams, auditing tool calls, and replaying what an agent did
- Controlling tool access for third-party plugins with credential vaults, permission policies, and human approval gates
- Operating an auditable coding or research agent entirely on self-hosted infrastructure

## Technical Details

- Node.js 22+ / TypeScript codebase; TypeScript SDK at `managed-agents/sdk` and a release gate via `npm run release:check`
- Settings V2 pins one workspace model vendor, loop engine, storage, memory, and sandbox backend, with form/JSON editing modes and a validation-driven restart flow
- The DeepSeek Harness bridge runs over MCP stdio: installing the bundle into a DSH profile exposes native `mcp__sandbase__*` tools for listing agents, creating and running sessions, inspecting results and artifacts, and stopping work
- Deployment as a DSH plugin resolves the tagged HTTPS Git source directly (running `prepare` only when `dist/` is missing), with documented pnpm `allowBuilds` and duplicate-install recovery paths
- State model separates SQLite metadata from file/skill bytes in the workspace state directory, keeping local-first storage without a hosted control plane
- Distributed as a source checkout (v0.3.8 tag), an MCP stdio image, and an official MCP Registry entry
