---
name: pgvector
slug: pgvector
homepage: https://pgvector.org
repo: https://github.com/pgvector/pgvector
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Database
description: >-
  pgvector is an open-source PostgreSQL extension that adds vector data types and similarity search, supporting exact
  and approximate search (HNSW, IVFFlat) inside Postgres.
author: pgvector
ossDate: '2021-01-15T00:00:00.000Z'
featured: false
status: tracked
---

pgvector is an open-source PostgreSQL extension that adds native vector data types and similarity search capabilities directly inside Postgres. It supports multiple distance metrics and indexing strategies, enabling hybrid queries that combine SQL joins, transactions, and filtering with vector similarity search — all within a single database.

## Vector Search Capabilities

- Native Postgres vector type and operators for storing and querying embeddings
- Exact and approximate nearest-neighbor search to balance precision and speed
- HNSW and IVFFlat index support for scaling to millions of vectors
- Multiple distance metrics including L2, inner product, and cosine similarity

## Integration & Deployment

- Broad client library support across Python, Go, JavaScript, Java, and more
- Works with existing Postgres replication, backup, and operational tooling
- Easy installation via compile-from-source, Docker, Homebrew, or package managers
- No separate infrastructure needed — vectors live alongside relational data

## Use Cases

- RAG systems that benefit from SQL joins and strong consistency guarantees
- Semantic search with metadata filtering and transactional integrity
- Applications requiring hybrid queries combining structured filters with vector similarity
- Recommendation engines, deduplication, and anomaly detection within existing Postgres workloads
