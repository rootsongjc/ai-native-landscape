---
name: Qdrant
slug: qdrant
homepage: https://qdrant.tech
repo: https://github.com/qdrant/qdrant
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
  - Vector DB
description: >-
  Discover Qdrant, a high-performance vector search engine that enhances similarity search and scalable deployment for
  efficient data retrieval.
logo: ''
author: Qdrant
ossDate: '2019-05-01T00:00:00.000Z'
featured: false
status: tracked
---

## Introduction

Qdrant is a production-grade vector search engine and vector database that provides high-performance similarity search, persistent storage, and scalable deployment capabilities. It improves query efficiency through quantization, indexing, and filtering mechanisms, and offers unified API support for multi-language clients and cloud-hosted services.

## Key Features

- High-performance vector search with quantization support, balancing throughput and latency.
- Flexible payload filtering and query expressions for complex condition screening.
- Rich client libraries and OpenAPI interfaces for easy integration with various languages and frameworks.
- Managed Qdrant Cloud and self-hosted deployment options.

## Use Cases

- Semantic search and RAG retrieval: Perform similarity search and recall on text, images, or multimodal data.
- Recommendation systems and personalized ranking: Achieve approximate recommendations based on vector similarity and attribute filtering.
- Large-scale offline/online hybrid queries: Applications requiring low-latency retrieval and scalable storage.

## Technical Highlights

- Implemented in Rust with a focus on performance and stability, supporting distributed deployment and horizontal scaling.
- Provides indexing (such as HNSW), quantization, and persistence strategies, along with multiple client libraries and backup/restore mechanisms.
