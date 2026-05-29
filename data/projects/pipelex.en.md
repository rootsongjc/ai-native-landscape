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
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

Pipelex is an open-source domain-specific language (DSL) and toolkit focused on AI agents and workflow orchestration. It enables developers to declaratively define, compose, and execute multi-step, reproducible agent workflows with observability and replayability built in. Pipelex is designed to make complex tasks manageable by breaking them into composable tools and steps that an agent can orchestrate.

## Main Features

- Declarative workflow language for easy task specification.
- Built-in orchestration, retry, and replay mechanisms to improve robustness.
- Connectors and adapters for external APIs, databases, and vector stores.
- Open-source and extensible, compatible with different LLMs (Large Language Models) and custom tools.

## Use Cases

Suitable for scenarios that require composing multi-step model calls, retrieval, external APIs, and business logic into reliable pipelines — for example RAG-style systems, automated content generation, cross-system aggregation, and long-running task orchestration. It fits both prototyping and production workflows.

## Technical Features

Pipelex uses a lightweight DSL for orchestration and provides step-level logging and state tracking for observability and debugging. Its plugin system lets developers expose custom actions as tools callable by agents. The architecture prioritises reproducibility, extensibility, and interoperability with existing models and vector libraries.
