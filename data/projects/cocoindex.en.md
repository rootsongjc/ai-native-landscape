---
name: CocoIndex
slug: cocoindex
homepage: https://cocoindex.io
repo: https://github.com/cocoindex-io/cocoindex
license: Apache-2.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - Indexing
  - RAG
description: >-
  A high-performance data processing and indexing framework for AI, supporting incremental processing and semantic
  indexing.
author: CocoIndex
ossDate: '2025-03-03T23:03:09Z'
featured: false
status: tracked
---
CocoIndex is an incremental data indexing engine designed for long-horizon AI agents that need to keep data indexes synchronized with constantly changing sources. It provides high-performance data transformation and semantic indexing that continuously processes updates, ensuring RAG pipelines and search systems always reflect the latest available information.

## Incremental Processing

- High-performance data transformation and indexing with parallel and incremental processing
- Efficiently handles continuous source updates without full reprocessing
- Low-latency incremental indexing and continuous data synchronization
- Engineered for performance using efficient concurrency and incremental computation strategies that avoid redundant processing

## Semantic Indexing

- Native support for semantic indexing and vectorization pipelines that integrate directly with vector databases
- Composable processor components and adapters for connecting diverse data sources to downstream retrieval systems
- Converts massive heterogeneous data into searchable semantic indexes for knowledge base construction
- Supports real-time log and event indexing, document or code search scenarios

## Pipeline Architecture

- Pipeline-oriented modular design with support for custom transformers and connectors tailored to specific data workflows
- Integrates with common vector databases and retrieval components
- CI/CD verification of data consistency and index quality
- Designed for upstream data processing in RAG pipelines that require indexes to stay current with changing source data
