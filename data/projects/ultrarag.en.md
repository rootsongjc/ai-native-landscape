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
author: OpenBMB
ossDate: '2025-01-16T10:56:02Z'
featured: false
status: tracked
---

UltraRAG is a low-code Retrieval-Augmented Generation framework built on the Model Context Protocol (MCP), developed by OpenBMB and partner institutions. It exposes retrieval, generation, and evaluation as independent MCP Servers with a visual Pipeline Builder, making every stage of the RAG lifecycle transparent and reproducible. The framework lowers the barrier to building production-grade RAG systems by combining drag-and-drop orchestration with full code-level control.

## Visual Pipeline Builder

- Canvas-based visual editor with bidirectional code synchronization
- Conditional branching and loop constructs supporting both no-code and pro-code workflows
- Drag-and-drop orchestration combined with full code-level control
- One-click pipeline-to-Web-UI conversion for interactive deployment

## Modular MCP Architecture

- Core components packaged as modular MCP Servers for retrieval, generation, and evaluation
- Pluggable retrieval backends alongside multiple embedding model support
- Pipeline-style inference with asynchronous service calls for efficient resource utilization
- Standardized benchmark interfaces and logged intermediate outputs for performance profiling

## Evaluation and Research

- Built-in evaluation suite with benchmark comparison capabilities
- Knowledge-base management integrated directly into the pipeline
- Research teams standardize benchmarking and reproduce experiments across different strategies
- Educational settings where students explore and understand RAG pipeline internals hands-on
