---
name: mcp-agent
slug: mcp-agent
homepage: null
repo: https://github.com/lastmile-ai/mcp-agent
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Workflow
description: >-
  A lightweight, composable agent framework built around the Model Context Protocol (MCP) to quickly assemble
  multi-agent, tool-enabled workflows.
author: lastmile-ai
ossDate: '2024-12-18T01:55:10.000Z'
featured: false
status: tracked
---

## Introduction

mcp-agent is a lightweight, composable framework centered on the Model Context Protocol (MCP). It provides modular workflows and utilities that simplify building multi-agent applications that can orchestrate MCP servers and tool calls.

## Key Features

- Implements common agent workflows: Parallel, Router, Evaluator-Optimizer, Swarm, and others.
- Manages MCP server lifecycle and tool exposure, supports persistent connections and signaling.
- Ships with examples for Streamlit, Claude Desktop, Marimo, and Python scripts.

## Use Cases

- Building multi-agent orchestration and task pipelines for production applications.
- Integrating external tools and services via MCP into LLM workflows.
- Reusing workflow patterns for experimentation, CI checks, or automated evaluation.

## Technical Highlights

- Core primitives: MCPApp, Agent, AugmentedLLM with clear patterns for composability.
- Supports self-hosted monitoring and example UIs; integrates with common Python tooling.
- Apache-2.0 licensed, active community, comprehensive examples and docs.
