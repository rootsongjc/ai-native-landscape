---
name: LocalGPT
slug: localgpt
homepage: null
repo: https://github.com/promtengineer/localgpt
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
description: >-
  A private, on-premise document intelligence platform that combines hybrid retrieval and multi-model inference while
  keeping all data local.
logo: ''
author: PromtEngineer
ossDate: '2023-05-24T05:32:40.000Z'
featured: false
status: tracked
---

## Summary

LocalGPT is a private, on-premise document intelligence platform that blends semantic search, keyword matching and late chunking to enable secure QA, summarization and insight extraction from documents without data leaving the host.

## Key features

- Multi-format document processing (PDF, DOCX, TXT, Markdown) and batch indexing.
- Hybrid retrieval (vector + BM25), sentence-level context pruning and an independent answer verification pass for higher long-context precision.
- Local model support via Ollama, flexible model routing, semantic caching and support for HuggingFace embeddings and rerankers.

## Use cases

- Sensitive-data document QA for legal, finance and healthcare teams.
- Internal knowledge search, contract review, report summarization and compliance auditing.

## Technical details

- Pure Python core with modular components to enable minimal deployments and reduced dependencies.
- Supports Ollama-based local inference and multi-platform execution (GPU/CPU/HPU/MPS), with both Dockerized and direct development setups.
- Pipeline configurations (default/fast/custom) support reranking, verification, late-chunking and query decomposition strategies.
