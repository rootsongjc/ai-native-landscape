---
name: LocalRecall
slug: localrecall
homepage: https://quay.io/mudler/localrecall
repo: https://github.com/mudler/localrecall
license: MIT
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Data
  - Memory
  - RAG
description: LocalRecall provides a local memory layer and knowledge base management API for agents and RAG scenarios.
author: mudler
ossDate: '2025-02-12T21:07:04Z'
featured: false
status: tracked
---

## Overview

LocalRecall is a 100% local memory layer and knowledge base service designed for AI agents, providing persistent short-term and long-term memory through a simple RESTful API. It handles file uploads, indexing, semantic retrieval, and collection management entirely on-premises, making it ideal for privacy-first agent architectures that cannot rely on external cloud services.

## Key Features

- RESTful API for managing knowledge collections, uploading documents, and performing semantic search and retrieval operations.
- Local vector storage with pluggable backend support, enabling agents to store and query embeddings without cloud dependencies.
- Native integration with LocalAGI and LocalAI for a seamless self-hosted agent stack with built-in memory capabilities.
- Support for multiple document formats including Markdown, PDF, and plain text with automatic chunking and indexing.

## Use Cases

- Providing persistent memory for autonomous agents that need to recall past interactions, decisions, and learned facts across sessions.
- Building private RAG pipelines over internal documents, wikis, and knowledge bases in air-gapped or compliance-sensitive environments.
- Equipping chatbots and assistants with long-term contextual awareness without sending conversation history to third-party services.

## Technical Details

- Lightweight service with Docker and Docker Compose deployment for rapid setup in any environment.
- Pluggable vector backend architecture allowing users to choose the embedding and storage engine that fits their infrastructure.
- Designed as a standalone memory microservice that any agent framework can consume via its REST API.
