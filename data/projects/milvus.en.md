---
name: Milvus
slug: milvus
homepage: https://milvus.io
repo: https://github.com/milvus-io/milvus
license: Apache-2.0
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
description: Milvus is a high-performance vector database designed for large-scale unstructured data processing.
author: Milvus
ossDate: '2019-09-16T06:43:43.000Z'
featured: false
status: tracked
---

Milvus is a high-performance, cloud-native vector database purpose-built for scalable approximate nearest neighbor (ANN) search across billions of vectors. Developed in Go and C++ with CPU and GPU hardware acceleration, it handles large-scale unstructured data processing through a distributed, horizontally scalable architecture. As a graduate project of the LF AI and Data Foundation, Milvus is widely adopted in enterprise AI pipelines.

## Key Features

- **Multiple index types** including HNSW, IVF, and FLAT with tunable trade-offs between search accuracy and latency
- **Hybrid search** that simultaneously processes sparse and dense vectors for combined keyword and semantic retrieval
- **Enterprise-grade operations** with multi-tenancy, hot and cold storage tiering, TLS encryption, and role-based access control
- **Full-text search support** alongside vector similarity for comprehensive retrieval capabilities
- **Flexible deployment modes** including standalone, cluster, and cloud options with a lightweight Milvus Lite for prototyping

## Use Cases

- Recommendation systems, image and video similarity search, and natural language semantic retrieval
- AI-powered question answering with retrieval-augmented generation (RAG) pipelines
- Real-time personalization engines requiring sub-millisecond vector similarity queries
- Large-scale batch similarity computations across enterprise data lakes

## Technical Highlights

- Go and C++ core delivers high-throughput data ingestion and low-latency queries with hardware-accelerated indexing
- Distributed architecture supports horizontal scaling across multiple nodes and regions
- Fully managed cloud offering available through Zilliz Cloud for teams that prefer not to operate infrastructure
