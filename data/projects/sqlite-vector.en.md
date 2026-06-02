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

## Overview

sqlite-vector is an open-source SQLite extension from SQLiteAI that brings native vector search capabilities to embedded databases. It allows developers to store, index, and query embedding vectors directly within local SQLite instances, enabling retrieval-augmented systems without the need for an external vector database service.

## Key Features

The extension provides an embedded vector index that stores and queries vectors directly inside SQLite, eliminating external dependencies and operational overhead. It is optimized for small memory footprint and fast query performance across platforms, and integrates easily with standard embedding generation and RAG workflows.

## Use Cases

sqlite-vector is ideal for local or edge deployment scenarios including offline semantic search, privacy-sensitive document retrieval, lightweight recommendation engines, and on-device AI features. Teams can add vector similarity search to existing SQLite databases without provisioning separate infrastructure.

## Technical Details

Implemented in C as a native SQLite extension, sqlite-vector uses efficient data structures and indexing strategies tuned for similarity search performance. It is designed for full compatibility with SQLite's existing feature set, allowing vector capabilities to be introduced into current database architectures with minimal disruption.
