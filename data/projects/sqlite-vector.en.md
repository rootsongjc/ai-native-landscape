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
author: SQLiteAI
ossDate: '2025-04-07T11:17:59Z'
featured: false
status: tracked
---

sqlite-vector is an open-source SQLite extension from SQLiteAI that brings native vector search capabilities to embedded databases. It allows developers to store, index, and query embedding vectors directly within local SQLite instances, enabling retrieval-augmented systems without the need for an external vector database service.

## Key Features

- Embedded vector index that stores and queries vectors directly inside SQLite, eliminating external dependencies
- Optimized for small memory footprint and fast query performance across platforms
- Seamless integration with standard embedding generation and RAG workflows
- Full compatibility with SQLite's existing feature set and tooling ecosystem
- Zero-infrastructure vector search for applications that cannot run a separate database service

## Use Cases

- Offline semantic search in desktop and mobile applications
- Privacy-sensitive document retrieval where data must stay on-device
- Lightweight recommendation engines embedded in edge devices
- On-device AI features such as local question answering and content matching
- Adding vector similarity search to existing SQLite databases without provisioning separate infrastructure

## Technical Details

- Implemented in C as a native SQLite extension for minimal overhead
- Uses efficient data structures and indexing strategies tuned for similarity search performance
- Designed to introduce vector capabilities into current database architectures with minimal disruption
- Cross-platform support for Linux, macOS, Windows, and mobile environments
