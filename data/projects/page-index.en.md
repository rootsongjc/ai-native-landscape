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

## Overview

PageIndex is a vectorless, reasoning-based document index created by Vectify AI for high-accuracy retrieval over long professional documents. Rather than relying on vector databases and artificial chunking, it constructs a tree-like table-of-contents structure and uses LLM reasoning to locate the most relevant sections, delivering results that are both more accurate and more explainable.

## Key Features

- Vectorless RAG that replaces embedding search with document-structure-aware LLM reasoning, eliminating the need for a vector database.
- Chunk-free indexing that preserves the natural hierarchy and sections of a document, keeping semantic context intact.
- Two-step tree search that mirrors how a human expert would navigate a document, enabling multi-step reasoning for precise node-level retrieval.

## Use Cases

Financial analysts can use PageIndex to pinpoint specific figures and clauses in lengthy earnings reports without sifting through irrelevant chunks. Legal and compliance teams gain explainable, section-level citations when searching regulatory or contract documents. Academic researchers can quickly locate relevant passages across long papers using the interactive cloud Agent or self-hosted pipeline.

## Technical Details

Implemented in Python, PageIndex represents documents as tree nodes and applies LLM-based reasoning at each node to guide retrieval. The repository ships with a ready-to-run script, example notebooks, and a cookbook. It is MIT-licensed and offers optional OCR support and a hosted cloud service for teams that need turnkey document processing.
