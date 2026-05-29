---
name: sqlite-vector
slug: sqlite-vector
homepage: https://sqlite.ai/
repo: https://github.com/sqliteai/sqlite-vector
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Database
  - Dev Tools
  - Vector DB
description: >-
  Integrates embedding storage and vector search into SQLite, providing a cross-platform lightweight vector database
  extension.
logo: ''
author: SQLiteAI
ossDate: '2025-04-07T11:17:59Z'
featured: false
status: tracked
---

## Detailed Introduction

sqlite-vector is an open-source SQLite extension from SQLiteAI that brings vector search capabilities to embedded databases. The extension enables storing, indexing, and querying embedding vectors directly within local SQLite instances, supporting cross-platform deployment and lightweight scenarios so developers can build near-real-time retrieval-augmented systems without an external vector database service.

## Main Features

- Embedded vector index: store and query vectors directly in SQLite to reduce external dependencies and operations overhead.
- Efficient implementation: optimized for performance and memory footprint, suitable for local and mobile deployments.
- Cross-platform: as a SQLite extension, it supports multiple operating systems and runtime environments.
- Easy integration: works with common embedding generation and retrieval workflows to enable retrieval-augmented generation (RAG) in applications.

## Use Cases

Ideal for local or edge vector search scenarios such as offline search, privacy-sensitive retrieval, lightweight recommendations, and on-device semantic search. Engineering teams can add vector retrieval capabilities into existing SQLite databases without deploying external services, enabling low-latency similarity queries and RAG pipelines.

## Technical Features

The project is implemented primarily in C as a SQLite extension, leveraging efficient data structures and indexing strategies for similarity search. It emphasizes compatibility with SQLite native features to smoothly introduce vector capabilities into existing database architectures.
