---
name: MiroThinker
slug: mirothinker
homepage: https://miromind.ai/
repo: https://github.com/miromindai/mirothinker
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Application
  - RAG
  - Search
description: An open-source search agent for tool-augmented reasoning, supporting very long contexts and high-frequency tool calls.
author: MiroMindAI
ossDate: '2025-08-07T13:32:12Z'
featured: false
status: tracked
---
MiroThinker is an open-source, research-grade search agent from MiroMindAI optimized for tool-augmented reasoning and deep information seeking. It ships as a complete ecosystem including the MiroThinker model, the MiroFlow agent framework, the MiroVerse training dataset, and supporting infrastructure.

## Extended Context and Tool Calling

- Very long context windows of up to 256K tokens maintain coherence across extended document traces and prolonged multi-step reasoning chains
- High-frequency tool calling support handles hundreds to thousands of sequential invocations with robust trace collection and logging
- Full reproducibility ensured through centralized citation management and comprehensive evaluation logging

## Complete Research Ecosystem

- Bundles models, a reproducible agent framework (MiroFlow), curated datasets (MiroVerse), and benchmark suites
- Researchers can evaluate and compare performance systematically across controlled experiment configurations
- Configurable tool integrations include web search, code execution, summarization, and scrapers

## Retrieval and Deployment

- Retrieval pipelines combine hybrid search with re-ranking for high-accuracy information retrieval
- Docker-friendly deployment and multiple serving options for local or cloud environments
- Implemented primarily in Python with clear, modular component separation for easy extension
