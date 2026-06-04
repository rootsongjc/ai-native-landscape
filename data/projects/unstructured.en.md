---
name: Unstructured
slug: unstructured
homepage: https://www.unstructured.io/
repo: https://github.com/unstructured-io/unstructured
license: Apache-2.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - RAG
description: An open-source ETL solution to convert complex documents into clean, structured formats for language-model workflows.
author: Unstructured
ossDate: '2022-09-26T21:53:41.000Z'
featured: false
status: tracked
---

## Overview

Unstructured is an open-source ETL solution focused on converting complex documents (PDFs, scanned images, Word, HTML, etc.) into clean, structured formats for use in language-model pipelines. The project combines parsing, chunking, and enrichment techniques to prepare documents for retrieval and embedding workflows, from prototypes to production-grade systems.

## Key Features

- Multi-format parsing: Supports extraction from PDFs, DOCX, HTML, images and more.
- Data cleansing & chunking: Preprocessing modules that produce segments suited for retrieval and generation tasks.
- Production capabilities: Features for partitioning, enrichment, and embedding-ready output for enterprise workflows.

## Use Cases

- RAG / QA systems: Convert unstructured documents into vectorized segments for retrieval-augmented generation.
- Document migration: Extract historical document collections into structured forms for indexing and analysis.
- Data engineering pipelines: Serve as an upstream ETL component that connects parsing, cleansing, and downstream embedding/search systems.

## Technical Details

- Stack: Python-first tooling with integrations to common embedding and retrieval stacks (Faiss, Milvus, OpenSearch, etc.).
- Extensibility: Modular design for adding custom parsers and processing steps.
- License & ecosystem: Apache-2.0 license suitable for both community and commercial adoption.
