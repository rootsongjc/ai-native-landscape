---
name: Pipelex
slug: pipelex
homepage: https://pipelex.com
repo: https://github.com/pipelex/pipelex
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Orchestration
  - Workflow
description: An open-source language and toolkit for building and running reproducible AI agent workflows.
logo: ''
author: Pipelex
ossDate: '2025-05-26T07:21:34Z'
featured: false
status: tracked
---

## Overview

Pipelex is an open-source declarative language and devtool for building composable AI workflows that both agents and humans can use. It lets developers define multi-step agent pipelines in a readable DSL, with built-in orchestration, observability, and replay so that complex tasks become reproducible and easy to debug.

## Key Features

- A declarative DSL that makes workflow definitions concise, versionable, and easy to review alongside application code.
- Built-in orchestration engine with automatic retry and replay mechanisms that ensure workflows are robust and deterministic.
- Pluggable connector system for external APIs, databases, vector stores, and custom tools, compatible with multiple LLM providers.

## Use Cases

Teams building RAG pipelines can declaratively chain retrieval, model inference, and post-processing steps into a single reproducible workflow. Content-generation pipelines benefit from step-level logging and replay when iterating on prompts. Long-running orchestration tasks across multiple systems can be modeled, tested, and deployed using the same DSL from prototype to production.

## Technical Details

Pipelex's lightweight DSL compiles to an orchestrated runtime that provides step-level state tracking and structured logs for full observability. A plugin architecture allows any custom action to be exposed as a callable tool, and the system is designed for interoperability with existing model providers and vector libraries.
