---
name: adk-go
slug: adk-go
homepage: https://google.github.io/adk-docs/
repo: https://github.com/google/adk-go
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - LLM
  - MCP
  - SDK
description: A code-first Go toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.
author: Google
ossDate: '2025-05-05T17:16:26Z'
featured: false
status: tracked
---
## Overview

adk-go is an open-source, code-first Go toolkit developed by Google for building, evaluating, and deploying sophisticated AI agents. It abstracts model backends, tool invocation, retrieval components, and policy engines behind consistent interfaces, providing testing utilities and supporting packaging workflows as deployable services for production environments.

## Key Features

- Unified abstraction interfaces that hide provider differences and enable seamless model switching.
- Built-in evaluation and testing tools for quantifying agent behavior and detecting regressions.
- Adapters for retrieval, vector search, and external tools to compose RAG pipelines.
- Production-oriented deployment and monitoring conventions suitable for CI/CD integration.

## Use Cases

- Building multi-agent systems that decompose tasks and invoke tools to automate complex workflows.
- Performing model capability comparisons, regression tests, and canary releases in enterprise settings.
- Engineering LLM capabilities into auditable, monitorable online services.

## Technical Details

- Modular architecture with decoupled model, retrieval, tool, and policy components for easy replacement and extension.
- Go implementation optimized for production runtime performance and deployment experience.
- MCP support and standards for context and tool cooperation across agents.
