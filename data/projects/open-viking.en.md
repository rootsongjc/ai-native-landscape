---
name: OpenViking
slug: open-viking
homepage: https://www.openviking.ai/
repo: https://github.com/volcengine/openviking
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - Project
  - RAG
description: >-
  OpenViking is an open-source context database for AI Agents that unifies memories, resources, and skills with a
  filesystem paradigm for hierarchical retrieval and observability.
logo: ''
author: Volcengine
ossDate: '2026-01-15T00:00:00.000Z'
featured: false
status: tracked
---

## Overview

OpenViking is a context database designed specifically for AI Agents. It replaces fragmented vector-only storage with a filesystem-like paradigm (viking://) that organizes memories, resources and skills into hierarchical directories to improve retrieval effectiveness and observability.

## Key Features

- Filesystem paradigm: unify context as directories and files, enabling directory-aware retrieval.
- Tiered context loading: L0 (abstract), L1 (overview), L2 (details) to reduce token usage and load content on demand.
- Visualized retrieval trajectory: preserve and surface retrieval paths for debugging and optimization.
- SDKs and examples: quickstart guides and language clients to integrate with existing model backends.

## Use Cases

- Long-running agent sessions that require durable memory and context iteration.
- RAG systems that benefit from directory positioning plus semantic search for higher precision.
- Engineering workflows that need observable, debuggable retrieval and memory extraction loops.

## Technical Highlights

- Modular architecture with retrieval, storage, session and parsing modules.
- Supports multiple model providers (OpenAI, Volcengine, custom providers) for embeddings and VLM.
- Provides example scripts and configuration for local and cloud deployments.
