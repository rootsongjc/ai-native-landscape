---
name: Firecrawl
slug: firecrawl
homepage: https://firecrawl.dev
repo: https://github.com/firecrawl/firecrawl
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Utility
description: >-
  The Web Data API for AI that turns entire websites into clean markdown or structured data for RAG and knowledge
  pipelines.
logo: ''
author: Mendable AI
ossDate: '2024-04-15T21:02:29.000Z'
featured: false
status: tracked
---

## Detailed Introduction

Firecrawl is a Web Data API designed for AI workflows. It crawls a target website, discovers accessible subpages, and extracts cleaned markdown and structured outputs suitable for retrieval-augmented generation (RAG) and indexing for Large Language Models (LLM). The service performs content segmentation, deduplication, metadata extraction, and language detection to produce reliable inputs for agents and search pipelines.

## Main Features

- Site discovery and recursive crawling without requiring a sitemap.
- Content cleaning and segmentation to produce markdown, paragraph-level chunks, and metadata for indexing.
- Language and encoding detection with basic normalization.
- Configurable rate limits and robots.txt adherence for safe crawling.

## Use Cases

- Feeding vector databases for RAG systems and semantic search.
- Building knowledge bases and Q&A systems from public websites.
- Automated content archiving and migration extraction.

## Technical Features

- HTTP API with Docker deployment examples for local and cloud use.
- Parallel crawling and streaming output to support incremental ingestion.
- Extensible parser plugins for custom extraction and enrichment.
- Integrates easily with downstream vector stores, indexers, and agent pipelines.

The project is open-source (OSS) and actively developed; see the project site and repository for documentation and examples.
