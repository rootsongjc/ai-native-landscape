---
name: Letta
slug: letta
homepage: https://docs.letta.com/
repo: https://github.com/letta-ai/letta
license: Apache-2.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Agent
  - Memory
description: >-
  Platform for building stateful agents with advanced memory and self-improvement capabilities, supporting both local
  and cloud deployments.
author: letta-ai
ossDate: '2023-10-11T07:38:37.000Z'
featured: false
status: tracked
---

## Summary

Letta (formerly MemGPT) is a platform for building stateful agents. It exposes a layered memory system, memory blocks and tool integrations that let agents learn and self-improve, suitable for research and production.

## Key features

- Hierarchical memory model (memory blocks) with support for persistence and edits.
- SDKs for Python and TypeScript, an Agent Development Environment (ADE) for no-code agent creation, and a Letta Desktop for local use.
- Support for local model providers (Ollama, LM Studio), MCP integration and custom tools.

## Use cases

- Long-running, self-improving agents for customer support, research assistants and workflow automation.
- Multi-agent systems with shared memory and persistent agent state management.

## Technical details

- Python-first core service with a TypeScript client, plugin-style tools and support for Agent File (.af) export/import and background/async execution modes.
