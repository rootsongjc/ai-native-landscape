---
name: MiroThinker
slug: mirothinker
homepage: https://miromind.ai/
repo: https://github.com/miromindai/mirothinker
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Application
  - RAG
  - Search
description: An open-source search agent for tool-augmented reasoning, supporting very long contexts and high-frequency tool calls.
logo: ''
author: MiroMindAI
ossDate: '2025-08-07T13:32:12Z'
featured: false
status: tracked
---

## Overview

MiroThinker is an open-source, research-grade search agent from MiroMindAI optimized for tool-augmented reasoning and deep information seeking. It ships as a complete ecosystem including the MiroThinker model, the MiroFlow agent framework, the MiroVerse training dataset, and supporting infrastructure. With context windows up to 256K tokens and support for hundreds to thousands of sequential tool calls, it targets complex, multi-step research and prediction workflows.

## Key Features

Very long context windows of up to 256K tokens allow the agent to maintain coherence across extended document traces and prolonged multi-step reasoning chains. High-frequency tool calling support handles hundreds to thousands of sequential invocations with robust trace collection and logging for full reproducibility. The complete ecosystem bundles models, a reproducible agent framework, curated datasets, and benchmark suites so researchers can evaluate and compare performance systematically.

## Use Cases

Academic researchers leverage MiroThinker for deep web retrieval, long-document question answering, and reproducible benchmark evaluation. Engineering teams integrate it as a tool-augmented retrieval or research assistant subsystem for complex, multi-source information gathering and analysis tasks.

## Technical Details

Implemented primarily in Python, the framework provides configurable tool integrations including web search, code execution, summarization, and scrapers. Retrieval pipelines combine hybrid search with re-ranking and centralized citation management to maintain traceability across evaluations. Docker-friendly deployment and multiple serving options make it straightforward to run locally or in cloud environments.
