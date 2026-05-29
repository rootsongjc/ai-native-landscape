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
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

MiroThinker, from MiroMindAI, is an open-source research-grade search agent and framework focused on tool-augmented reasoning and deep information seeking. The project includes the model (MiroThinker), an agent framework (MiroFlow), a dataset (MiroVerse), and training infrastructure. It supports very long contexts (up to 256K) and hundreds-to-thousands of tool calls, enabling complex research workflows. See the project homepage at [miromind.ai](https://miromind.ai/) and try the interactive demo at [dr.miromind.ai](https://dr.miromind.ai/).

## Main Features

- Open research search agent designed for tool usage and multi-step reasoning.
- Very long context windows (up to 256K) for handling long documents and extended traces.
- High-frequency tool calling support with robust trace collection and logging.
- Full ecosystem: models, reproducible agent framework, datasets, and benchmark suites for evaluation.

## Use Cases

Suited for academic research, long-document Q&A, deep web retrieval, benchmark evaluation, and developer experimentation. Researchers can reproduce benchmark results and run evaluations; engineering teams can integrate MiroThinker as a tool-augmented retrieval or research assistant subsystem.

## Technical Features

Implemented primarily in Python, MiroThinker provides a configurable agent framework with tool integrations (web search, code execution, summarization, scrapers), Docker-friendly deployment, and multiple serving options. Retrieval pipelines include hybrid search, re-ranking, and centralized citation management to preserve reproducibility and traceability in evaluations.
