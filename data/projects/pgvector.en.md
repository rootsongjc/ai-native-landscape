---
name: pgvector
slug: pgvector
homepage: https://pgvector.org
repo: https://github.com/pgvector/pgvector
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Database
description: >-
  pgvector is an open-source PostgreSQL extension that adds vector data types and similarity search, supporting exact
  and approximate search (HNSW, IVFFlat) inside Postgres.
logo: ''
author: pgvector
ossDate: '2021-01-15T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

pgvector lets you store and query vectors directly in PostgreSQL. It supports multiple distance metrics and indexing strategies, enabling hybrid queries with SQL, transactions, and filtering alongside vector similarity search.

## Key features

- Native Postgres vector type and operators.
- HNSW and IVFFlat index support for approximate search.
- Broad client support across languages and easy deployment options.

## Use cases

- RAG systems that benefit from SQL joins and strong consistency.
- Applications that require filtering and transactional guarantees with vector search.
