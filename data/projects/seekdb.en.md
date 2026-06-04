---
name: SeekDB
slug: seekdb
homepage: https://oceanbase.ai/
repo: https://github.com/oceanbase/seekdb
license: Apache-2.0
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
  - Vector DB
description: >-
  An AI-native search database that unifies vector, text, and structured data in a single engine to enable hybrid search
  and in-database AI workflows.
author: OceanBase
ossDate: '2025-10-21T11:31:11Z'
featured: false
status: tracked
---

## Overview

SeekDB is an AI-native state store from OceanBase that unifies vector search, full-text search, and structured data storage in a single MySQL-compatible engine. It supports embedded or server deployment modes and delivers hybrid vector plus full-text search with low-latency, high-concurrency retrieval for production AI applications.

## Key Features

- Unified engine combining vector similarity search, full-text search, and structured queries to eliminate data movement and consistency overhead.
- MySQL-compatible interface with columnar storage and JSON support for mixed OLTP and OLAP workloads.
- Flexible deployment as an embedded library or standalone server, scaling from development to enterprise production.
- Apache-2.0 open-source license enabling straightforward integration and community-driven extension.

## Use Cases

SeekDB powers semantic search, knowledge-base Q&A, recommendation systems, and in-database model inference where vector retrieval must coexist with traditional relational queries. It simplifies system architecture and improves data consistency for products that need full-text search, structured analytics, and vector similarity in a single platform.

## Technical Details

SeekDB combines columnar storage with vector indexes to achieve low-latency retrieval and high throughput while maintaining full transactional semantics and analytical query support. Its MySQL compatibility allows drop-in replacement in existing database-driven applications, and the dual deployment model supports lightweight embedded use in agents as well as large-scale distributed server configurations.
