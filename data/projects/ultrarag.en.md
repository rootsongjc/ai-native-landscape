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

## Overview

UltraRAG is a low-code Retrieval-Augmented Generation framework built on the Model Context Protocol (MCP), developed by OpenBMB and partner institutions. It exposes retrieval, generation, and evaluation as independent MCP Servers with a visual Pipeline Builder, making every stage of the RAG lifecycle transparent and reproducible. The framework lowers the barrier to building production-grade RAG systems by combining drag-and-drop orchestration with full code-level control.

## Key Features

A Canvas-based visual editor with bidirectional code synchronization supports conditional branching and loop constructs, enabling both no-code and pro-code workflows. Core components are packaged as modular MCP Servers for retrieval, generation, and evaluation, promoting reuse and easy extension. A built-in evaluation suite with benchmark comparison, knowledge-base management, and one-click pipeline-to-Web-UI conversion rounds out the feature set.

## Use Cases

Research teams can use UltraRAG to standardize benchmarking and reproduce experiments across different retrieval and generation strategies. Enterprise engineering teams benefit from rapid prototyping of document Q&A and knowledge retrieval systems with visual debugging capabilities. The framework is equally suited for educational settings where students need to explore and understand RAG pipeline internals hands-on.

## Technical Details

UltraRAG is architected around the MCP protocol and supports pluggable retrieval backends alongside multiple embedding models. Pipeline-style inference with asynchronous service calls ensures efficient resource utilization, while standardized benchmark interfaces and logged intermediate outputs simplify performance profiling and error diagnosis.
