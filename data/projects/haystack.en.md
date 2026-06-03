---
name: Haystack
slug: haystack
homepage: null
repo: https://github.com/deepset-ai/haystack
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
description: >-
  Haystack is an open-source framework for building retrieval-augmented generation (RAG) and semantic search
  applications by combining document stores, vector search, and LLMs.
author: deepset-ai
ossDate: '2019-11-14T09:05:28.000Z'
featured: false
status: tracked
---

## Introduction

Haystack, developed by deepset, is an open-source framework that integrates vector search, document indexing and large language models to build production-ready RAG and QA systems. It supports multiple backends and is suitable for enterprise search, knowledge assistants and conversational retrieval scenarios.

## Key Features

- Support for multiple vector stores and retrieval backends (Elasticsearch, Milvus, FAISS, etc.).
- Pluggable embedding and model backends for flexible inference.
- Pipeline abstractions for composing retrieval, re-ranking and generation steps.
- Document processing utilities (parsing, chunking, deduplication) and scalable indexing.
- Production-oriented features: caching, concurrency control and observability hooks.

## Use Cases

- Enterprise knowledge base Q&A: provide natural language answers over internal documents.
- Customer support and virtual assistants: combine retrieval and generation with source citations.
- Document search and summarization: semantic retrieval across documents and concise summaries.
- RAG prototyping and production: quickly compose retrieval and LLMs for vertical applications.

## Technical Highlights

- Modular architecture with clear separation of retrieval, embedding and generation components.
- Batch and streaming indexing to handle large corpora.
- Python SDK and example projects for rapid development and deployment.
- Integrations with Docker and Kubernetes for cloud-native deployment.
