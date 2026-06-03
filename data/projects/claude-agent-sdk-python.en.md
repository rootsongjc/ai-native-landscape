---
name: Claude Agent SDK for Python
slug: claude-agent-sdk-python
homepage: https://docs.anthropic.com/en/docs/claude-code/sdk/sdk-python
repo: https://github.com/anthropics/claude-agent-sdk-python
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - Dev Tools
description: >-
  Anthropic's Claude Agent Python SDK provides libraries and tools to interact with Claude Agent for interactive
  queries, tool invocation, and integrations.
author: Anthropic
ossDate: '2025-06-11T21:33:43.000Z'
featured: false
status: tracked
---
The Claude Agent SDK for Python is Anthropic's official Python toolkit for interacting with Claude Agent (Claude Code). It offers async streaming interfaces, support for custom tools and hooks, and examples of in-process SDK MCP servers to expose tools safely and with low overhead.

## Key features

- Async streaming API: `query()` returns an async iterator suitable for processing streaming responses.
- Custom tools & MCP support: in-process SDK MCP servers simplify exposing Python functions as callable tools.
- Rich examples: quick_start, streaming_mode, hooks and other examples to speed up adoption.
- Engineering readiness: targets Python 3.10+, includes CLI, tests and packaging configuration.

## Use cases

- Building interactive assistants or agentic apps that integrate with Claude from Python applications.
- Exposing custom tools to the model in-process to avoid IPC overhead and simplify deployment.
- Researching tool-use patterns and streaming interaction with Claude.

## Technical details

- Implementation: pure Python with type definitions and examples; code lives under `src/claude_agent_sdk`.
- Requirements & distribution: requires Python 3.10+ and distributed via PyPI/releases; see repository releases for versions.
- Docs & resources: official docs at <https://docs.anthropic.com/en/docs/claude-code/sdk/sdk-python> and repository examples for hands-on guides.
