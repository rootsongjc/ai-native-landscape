---
name: adk-go
slug: adk-go
homepage: https://google.github.io/adk-docs/
repo: https://github.com/google/adk-go
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - LLM
  - MCP
  - SDK
description: A code-first Go toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.
logo: ''
author: Google
ossDate: '2025-05-05T17:16:26Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

> An engineering-first Go toolkit that helps teams ship reliable agent services backed by LLMs.

## Detailed Introduction

adk-go, developed by Google, is a code-first Go toolkit designed to simplify building complex agent applications. It abstracts model backends, tool invocation, retrieval components and policy engines behind consistent interfaces, provides testing and evaluation utilities, and supports packaging workflows as deployable services. The project targets scenarios demanding high control, observability and production-grade engineering practices.

## Main Features

- Unified abstraction interfaces to hide provider differences and enable seamless model switching.
- Built-in evaluation and testing tools for quantifying agent behaviour and regressions.
- Adapters for retrieval, vector search and external tools to compose RAG pipelines.
- Production-oriented deployment and monitoring conventions suitable for CI/CD integration.

## Use Cases

- Build multi-agent systems that decompose tasks and invoke tools to automate complex workflows.
- Perform model capability comparisons, regression tests and canary releases in enterprise settings.
- Engineer LLM capabilities into auditable, monitorable online services.

## Technical Features

- Modular architecture: decoupled model, retrieval, tool and policy components for easy replacement and extension.
- Go implementation: optimized for production runtime and deployment experience.
- MCP support and standards for context and tool cooperation across agents.
