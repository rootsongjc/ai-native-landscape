---
name: RAG-Anything
slug: rag-anything
homepage: null
repo: https://github.com/hkuds/rag-anything
license: MIT
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
  - Utility
description: >-
  A multimodal document processing and Retrieval-Augmented Generation (RAG) system supporting unified parsing and
  intelligent retrieval of text, images, tables, formulas, and more.
author: HKUDS
ossDate: '2025-06-06T06:47:29.000Z'
featured: false
status: tracked
---

RAG-Anything is a comprehensive multimodal document processing and Retrieval-Augmented Generation (RAG) system built on the LightRAG framework. It supports unified parsing and intelligent retrieval of text, images, tables, formulas, and more, making it suitable for academic research, technical documentation, financial reports, and enterprise knowledge management.

## Core Features

- **End-to-end multimodal processing**: Complete pipeline from document parsing to multimodal retrieval response
- **Multi-format document support**: Compatible with PDF, Office documents (DOC/DOCX/PPT/PPTX/XLS/XLSX), images, text, and other mainstream formats
- **Dedicated content analysis engine**: Specialized processors for images, tables, formulas, and text to ensure accurate parsing
- **Knowledge graph indexing**: Automated entity extraction and relationship construction, supporting cross-modal semantic connections
- **Flexible processing architecture**: Supports MinerU intelligent parsing and direct content insertion for diverse data source integration
- **Intelligent retrieval mechanism**: Combines vector and graph-based retrieval, enabling smart queries for text, images, tables, and formulas
- **VLM-enhanced queries**: Automatically leverages visual models for multimodal analysis when documents contain images

## Algorithm Principles & Architecture

- Document parsing: Integrates MinerU/Docling for high-precision structured content extraction
- Multimodal content understanding: Concurrent multi-pipeline architecture intelligently routes text, images, tables, and formulas
- Multimodal analysis engine: Dedicated processors for visual, table, and formula content, supporting semantic understanding and relationship extraction
- Knowledge graph indexing: Automated entity and relationship construction with hierarchical structure and semantic association
- Retrieval mechanism: Vector-graph fusion retrieval, supporting relevance ranking and context integration for multimodal content

## Use Cases

- Multimodal retrieval and analysis for academic papers, technical documents, financial reports, and enterprise knowledge bases
- Structured parsing and intelligent Q&A for complex content
- Cross-modal knowledge graph construction and semantic association

## Related Projects

- [LightRAG](https://github.com/HKUDS/LightRAG): Lightweight and efficient RAG system
- [VideoRAG](https://github.com/HKUDS/VideoRAG): Long-context video RAG system
- [MiniRAG](https://github.com/HKUDS/MiniRAG): Minimalist RAG system

## References

- [RAG-Anything - github.com](https://github.com/HKUDS/RAG-Anything)
- [arXiv Paper](https://arxiv.org/abs/2410.05779)
