---
name: Strands Agents
slug: strands-agents
homepage: https://strandsagents.com/
repo: https://github.com/strands-agents/sdk-python
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - SDK
  - Python
  - TypeScript
  - MCP
description: Open-source SDK for production AI agents in Python and TypeScript — build an agent harness and control it end-to-end, any model, any cloud.
author: strands-agents
ossDate: '2025-05-14T19:59:51Z'
featured: false
status: tracked
---

## Overview

Strands Agents is an open-source SDK for building production AI agents in Python and TypeScript. It lets you build an agent harness and control it end-to-end, working with any model (Anthropic, OpenAI, Bedrock) and any cloud. It supports MCP tool integration, multi-agent systems, and autonomous agent workflows.

## Key Features

- Agent harness SDK with end-to-end control in Python and TypeScript.
- Model-agnostic: Anthropic, OpenAI, AWS Bedrock, and more.
- First-class MCP tool support.
- Multi-agent systems and autonomous agent patterns.

## Use Cases

- Build production agent harnesses with full lifecycle control.
- Deploy agents across clouds and model providers without lock-in.
- Compose multi-agent systems with MCP tooling.

## Technical Details

- Harness-centric design: the SDK exposes the full agent loop — tools, hooks, and session state — rather than hiding it behind opaque abstractions.
- Model-agnostic driver layer works with Anthropic, OpenAI, and AWS Bedrock behind one interface.
- Tools follow the MCP standard, so existing MCP servers plug in directly.
- Dual-language: Python and TypeScript SDKs share the same concepts for cross-stack teams.
