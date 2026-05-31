---
name: UltraRAG
slug: ultrarag
homepage: https://ultrarag.openbmb.cn/
repo: https://github.com/openbmb/ultrarag
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Dev Tools
  - RAG
  - Retrieval
description: A low-code RAG framework based on MCP, emphasizing visual orchestration and reproducible evaluation workflows.
logo: ''
author: OpenBMB
ossDate: '2025-01-16T10:56:02Z'
featured: false
status: tracked
---

## Detailed Introduction

UltraRAG is a low-code Retrieval-Augmented Generation (RAG) development framework built on the Model Context Protocol (MCP) architecture and maintained by OpenBMB with partner institutions. It packages retrieval, generation, and evaluation as independent MCP Servers and offers a visual Pipeline Builder and interactive UI to make development pipelines, intermediate inference outputs, and evaluation results transparent and reproducible.

## Main Features

- Low-code visual orchestration with Canvas↔Code bidirectional synchronization, supporting conditional branches and loops.
- Modular MCP Servers for retrieval, generation and evaluation, improving reusability and extensibility.
- Built-in evaluation suite and benchmark comparison, knowledge-base management, and one-click conversion of pipelines to interactive Web UIs.

## Use Cases

Suitable for RAG research platforms, enterprise document Q&A and knowledge retrieval systems, and teams that need visual debugging and fast delivery from algorithm to demonstration. Researchers can standardize benchmarks and reproducibility; engineers can prototype production workflows quickly.

## Technical Features

Based on MCP, UltraRAG supports multiple retrieval backends and embedding models, uses pipeline-style inference and asynchronous service calls, and exposes standardized benchmark interfaces and logged intermediate outputs to aid performance analysis and error attribution.
