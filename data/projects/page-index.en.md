---
name: PageIndex
slug: page-index
homepage: https://pageindex.ai
repo: https://github.com/vectifyai/pageindex
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Application
  - RAG
  - Retrieval
description: >-
  PageIndex (by Vectify AI) is an open-source reasoning-based document index designed for high-accuracy retrieval over
  long documents.
logo: ''
author: Vectify AI
ossDate: '2025-04-01T10:53:54Z'
featured: false
status: tracked
---

## Detailed Introduction

PageIndex is an open-source document indexing system from Vectify AI that targets retrieval and analysis over long professional documents. Instead of relying on vector databases and artificial chunking, PageIndex builds a tree-like table-of-contents index and performs reasoning-based retrieval over that structure, producing more relevant and explainable results. The project offers self-hosted scripts, a cookbook, Colab demos, and cloud-hosted Agent and Dashboard experiences.

## Main Features

- Vectorless RAG: retrieval via document structure and LLM reasoning, no vector DB required.
- No chunking: documents are organized into natural sections preserving hierarchy.
- Human-like retrieval: two-step tree search enabling multi-step reasoning to find relevant nodes.
- Multiple integrations: self-hosted code, Dashboard, API, and MCP plugin for quick trials and enterprise use.

## Use Cases

Suitable for high-precision document analysis tasks such as financial report examination, regulatory compliance, legal/technical document search, and academic literature review. Teams can use PageIndex for R&D-grade document analysis or leverage the cloud Agent for interactive document Q&A and summarization.

## Technical Features

Implemented primarily in Python, PageIndex represents documents as tree nodes and uses LLMs for node-level reasoning and retrieval. The repo provides `run_pageindex.py`, example notebooks, and a cookbook. PageIndex is released under the MIT license and offers optional OCR and cloud services for enhanced pipeline support.
