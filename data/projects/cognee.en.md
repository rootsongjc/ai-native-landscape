---
name: cognee
slug: cognee
homepage: https://www.cognee.ai
repo: https://github.com/topoteretes/cognee
license: Apache-2.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Memory
  - Knowledge Graph
  - Vector Database
  - Graph RAG
  - Context Engineering
description: >-
  Open-source AI memory platform that gives agents persistent long-term memory across sessions, backed by a self-hosted
  knowledge graph engine.
author: topoteretes
ossDate: '2023-08-16'
featured: false
status: tracked
---

## Introduction

cognee is an open-source memory platform for AI agents that delivers persistent long-term memory across sessions and tools. It ingests unstructured data, models it into a self-hosted knowledge graph, and exposes a retrieval layer that keeps agent context coherent and grounded over time.

## Key Features

- Persistent long-term memory that survives across sessions and agentic runs
- Self-hosted knowledge graph engine with vector and graph retrieval
- Pluggable LLM, embedding, and vector/graph store backends
- GraphRAG-style ingestion that turns documents into connected knowledge
- Framework-agnostic integration with popular agent stacks

## Use Cases

- Giving custom agents durable memory without vendor lock-in
- Building GraphRAG pipelines over enterprise documents
- Maintaining coherent context for long-running, multi-session agents
- Self-hosting memory and knowledge for data-sensitive workloads

## Technical Highlights

- Combines vector databases and knowledge graphs in one memory engine
- Data-point centric architecture that separates ingest, processing, and retrieval
- Runs locally or in private infrastructure with no mandatory cloud dependency
- Apache-2.0 licensed with a modular, extensible backend layer
