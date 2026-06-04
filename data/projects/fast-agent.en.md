---
name: fast-agent
slug: fast-agent
homepage: https://fast-agent.ai/
repo: https://github.com/evalstate/fast-agent
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Workflow
description: >-
  fast-agent is an open-source Python framework for quickly building, testing, and running MCP-enabled Agents and
  workflows with minimal boilerplate.
author: evalstate
ossDate: '2025-01-18T20:39:51.000Z'
featured: false
status: tracked
---
## Overview

fast-agent provides a file-centric, declarative way to define Agents and Workflows that integrate with MCP servers and multiple LLM backends. It aims to reduce friction when building complex agent applications by offering simple configuration, model selection, and interactive debugging tools.

## Key features

- Declarative agent and workflow definitions, easy to version and review.
- Broad model and provider support (Anthropic, OpenAI, Google, Ollama, TensorZero integrations).
- Workflow primitives: chain, parallel (fan-out/fan-in), evaluator-optimizer, router, and orchestrator.
- Interactive runtime for debugging prompts and tuning agent behavior.

## Use cases

- Rapid prototyping of automation agents (scrapers, summarizers, social-media post generators).
- Orchestrating multiple models or sub-agents to solve complex tasks.
- Testing and validating MCP server and model interactions in research and engineering.

## Technical highlights

- File-based prompts and configurations that integrate well with CI/CD and PR workflows.
- Multimodal support (images, PDFs) and friendly handling of MCP tool results.
- Extensible server configuration with OAuth support for production MCP deployments.
