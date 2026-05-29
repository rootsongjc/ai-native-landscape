---
name: MemOS
slug: memos-os
homepage: https://memos.openmem.net/
repo: https://github.com/memtensor/memos
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Dev Tools
  - Memory
  - RAG
  - SDK
description: >-
  MemOS is an open-source Memory OS that provides long-term memory capabilities for large language models (LLMs),
  improving context awareness and long-term consistency.
logo: ''
author: MemTensor
ossDate: '2025-07-06T09:51:27Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

MemOS (Memory OS) provides system-level long-term memory capabilities for LLMs through a modular MemCube architecture and diverse memory types (textual memory, activation/KV-cache memory, parametric memory). The system enables storage, retrieval, and scheduling of memories, emphasizing scalability and engineering readiness. It supports multiple backends (NebulaGraph, Neo4j, Transformers) and deployment scenarios suitable for cross-session context, personalization, and complex multi-step reasoning.

MemOS aims to let LLMs maintain consistency and memory across continuous or long-term interactions, reduce redundant external knowledge queries, and provide unified memory APIs for research and production. It includes a Python SDK, example projects and a Playground to quickly integrate MemOS into LLM workflows and tune memory strategies.

## Key Features

- Memory-Augmented Generation (MAG): unified memory operation API for generation models.
- Modular MemCube architecture: combine or replace memory subsystems for experiments and extensions.
- Multiple memory types: textual memories, KV-cache activation memories, and parametric memories (e.g., LoRA weights).
- Rich backend integrations: support for NebulaGraph, Neo4j, Transformers, Ollama and more.

## Use Cases

- Long-term conversational assistants and customer support storing user preferences and history to improve responses.
- Multi-step reasoning and decision support requiring cross-session context retrieval.
- Personalization, user profiling and long-term preference modeling.
- Research and engineering for evaluating and comparing memory mechanisms and reproducible baselines.

## Technical Highlights

- Modular, pluggable memory backend design supporting online and offline data sources.
- Friendly Python SDK and examples for fast integration.
- Playground and visualization tools for debugging memory retrieval and ranking strategies.
- Active community with academic papers and performance benchmarks, suitable for both research and engineering.
