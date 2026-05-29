---
name: 'UFO: Desktop AgentOS'
slug: ufo
homepage: https://microsoft.github.io/UFO/
repo: https://github.com/microsoft/ufo
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Workflow
description: >-
  UFO is an open-source Desktop AgentOS for Windows that turns natural-language requests into reliable,
  multi-application workflows.
logo: ''
author: Microsoft
ossDate: '2024-01-08T05:07:52.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

UFO is Microsoft's open-source Desktop AgentOS designed to convert natural-language goals into robust, cross-application automation on Windows. It combines multi-agent orchestration, hybrid UI detection, and retrieval-augmented knowledge to build reliable desktop agents.

## Key features

- Multi-agent architecture (HostAgent + AppAgents) for task decomposition and orchestration.
- Hybrid control detection (UIA + vision) with native API-first execution for robustness.
- Retrieval-augmented knowledge substrate combining docs, search, demonstrations and execution traces.
- Speculative Executor that batches and validates predicted actions to reduce LLM calls.

## Use cases

- Automating workflows across Office, browsers and system utilities on Windows.
- Enterprise desktop assistants that learn from demos, docs and execution logs.
- Research platform for building multi-modal, multi-agent desktop automation systems.

## Technical details

- Written in Python and targeted at Windows (requires Windows 10+). Provides CLI and configurable deployment.
- Supports multiple LLM backends (OpenAI, Azure OpenAI, Qwen) with model configuration guides.
- Integrates vector stores and retrieval for RAG; supports execution log capture for replay and debugging.
