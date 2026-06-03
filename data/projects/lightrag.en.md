---
name: LightRAG
slug: lightrag
homepage: https://pypi.org/project/lightrag-hku/
repo: https://github.com/hkuds/lightrag
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Inference
  - RAG
description: >-
  LightRAG is a lightweight Retrieval-Augmented Generation toolkit that supports document indexing, graph extraction,
  and deployable server/core modes.
author: HKUDS
ossDate: '2024-10-02T11:57:54.000Z'
featured: false
status: tracked
---

## Introduction

LightRAG is a production-oriented lightweight RAG framework that integrates document indexing, retrieval, reranking and generation. It supports both Server (Web UI + REST API) and Core (embedded library) modes, suitable for large-scale document retrieval and knowledge-graph-enhanced applications.

## Key features

- Support multiple storage backends (local files, Postgres, Redis, Milvus, Qdrant, etc.) for flexible deployment.
- Integrated graph extraction and entity-relation management to build knowledge graphs for improved retrieval.
- Provides both Server and Core modes for easy integration into existing systems.
- Extensible model and reranker plugins, compatible with Ollama, Hugging Face and OpenAI models.

## Use cases

- Enterprise document search and question-answering systems.
- Multimodal RAG and knowledge-graph-augmented retrieval pipelines.
- Academic and industrial evaluations, and rapid prototyping.

## Technical highlights

- Core logic implemented in Python, front-end Web UI implemented with TypeScript/JS.
- Flexible storage and indexing strategies for large-scale vector search and distributed deployments.
- Modular architecture to swap embedding, reranker and storage implementations.
