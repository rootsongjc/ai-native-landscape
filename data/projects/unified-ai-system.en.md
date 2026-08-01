---
name: Unified AI System
slug: unified-ai-system
homepage: https://github.com/happy520ai/unified-ai-system
repo: https://github.com/happy520ai/unified-ai-system
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - MCP
  - Model Routing
  - Agent Orchestration
  - Self-hosted
description: >-
  A terminal-first, self-hosted AI gateway with model-routing foundations, governed agent workflows, an eight-tool
  Codex MCP server, and a credential-free Docker demo.
author: happy520ai
ossDate: '2026-04-27T15:45:42.000Z'
featured: false
status: tracked
---

## Overview

Unified AI System is an Apache-2.0 control plane for operating models, agents, knowledge, tools, permissions, and execution evidence through a terminal-first gateway. Its public preview starts with a deterministic local fake provider, allowing a clean clone or public container to verify the complete local path before any external provider is enabled.

## Key features

- Exposes terminal, HTTP API, shared SDK, and MCP interfaces without requiring a browser UI.
- Provides an eight-tool stdio MCP server for gateway health, readiness, fake-provider chat, knowledge, workflows, and workforce status.
- Includes explicit provider selection and model-routing foundations while keeping real provider execution opt-in.
- Brings approval, permission, interruption, and evidence surfaces into the governed execution path.
- Offers a one-command Docker demonstration that requires no account or API key.

## Use cases

- Evaluate a local AI gateway architecture before configuring paid or external providers.
- Connect Codex or another MCP client to inspect gateway, knowledge, workflow, and workforce readiness.
- Build a self-hosted control plane that keeps model routing and agent execution observable and accountable.

## Technical highlights

- JavaScript and TypeScript pnpm monorepo organized as a modular gateway service with reusable packages.
- Apache-2.0 source, public multi-architecture container, and an official MCP Registry distribution.
- Credential-free public-clone verification checks health, chat, examples, MCP discovery, fake-provider use, and managed process cleanup.
