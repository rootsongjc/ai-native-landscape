---
name: Khoj
slug: khoj
homepage: https://khoj.dev
repo: https://github.com/khoj-ai/khoj
license: AGPL-3.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Assistant
  - Dev Tools
  - RAG
description: >-
  A self-hostable 'second brain' platform that turns web pages and documents into a searchable knowledge base and
  supports custom agents and automations.
author: Khoj AI
ossDate: '2021-08-16T01:48:44Z'
featured: false
status: tracked
---

Khoj is a self-hostable AI "second brain" platform that transforms web pages, notes, and documents into a searchable knowledge base. It enables users to get answers from the web or their own documents, build custom agents, and perform deep research, all while maintaining full control over their data through private deployment options.

## Key Features

- Semantic retrieval and RAG pipelines with support for multiple LLM backends including GPT, Gemini, and Llama, as well as local and offline models
- Custom agent builder with automation and scheduling capabilities for recurring tasks
- Heterogeneous document ingestion that converts files into vector indexes for high-quality multi-hop queries
- Private network deployment to meet strict privacy and compliance requirements
- Decoupled retrieval, indexing, fusion, and generation modules that are easy to substitute and extend

## Use Cases

- Building enterprise knowledge bases that provide searchable knowledge for support, R&D, or legal teams in controlled environments
- Personal productivity tool for turning notes or Obsidian vaults into Q&A-ready knowledge bases
- Offline or edge scenarios where external APIs are unavailable but intelligent search is still needed
- Deep research tasks requiring multi-hop reasoning across large document collections

## Technical Highlights

- Multi-language SDKs and templates including Python and TypeScript for developer integration
- Extensible storage backends from local disk to external object storage
- Licensed under AGPL-3.0 with an active open-source community
