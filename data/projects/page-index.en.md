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
author: Vectify AI
ossDate: '2025-04-01T10:53:54Z'
featured: false
status: tracked
---

PageIndex is a vectorless, reasoning-based document index created by Vectify AI for high-accuracy retrieval over long professional documents. Rather than relying on vector databases and artificial chunking, it constructs a tree-like table-of-contents structure and uses LLM reasoning to locate the most relevant sections, delivering results that are both more accurate and more explainable.

## Vectorless Retrieval Approach

- Replaces embedding search with document-structure-aware LLM reasoning, eliminating the need for a vector database
- Chunk-free indexing that preserves the natural hierarchy and sections of a document, keeping semantic context intact
- Two-step tree search mirroring how a human expert navigates a document for precise node-level retrieval

## Accuracy & Explainability

- Section-level citations that users can trace back to specific document locations
- Multi-step reasoning capability that handles complex queries requiring cross-section synthesis
- Higher accuracy than traditional RAG on long documents where chunk boundaries cause information loss

## Developer Experience

- Ready-to-run scripts, example notebooks, and a cookbook for quick onboarding
- Optional OCR support for scanned document processing
- Interactive cloud Agent and self-hosted pipeline options for different deployment needs
- MIT-licensed with Python implementation for easy customization
