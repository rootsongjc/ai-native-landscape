---
name: Firecrawl
slug: firecrawl
homepage: https://firecrawl.dev
repo: https://github.com/firecrawl/firecrawl
license: AGPL-3.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Utility
description: >-
  The Web Data API for AI that turns entire websites into clean markdown or structured data for RAG and knowledge
  pipelines.
author: Mendable AI
ossDate: '2024-04-15T21:02:29.000Z'
featured: false
status: tracked
---
Firecrawl is a web data API purpose-built for AI workflows, capable of searching, scraping, and interacting with websites at scale. It crawls target sites, discovers accessible subpages, and transforms web content into clean markdown or structured data optimized for retrieval-augmented generation (RAG) and large language model consumption.

## Crawling and Scraping

- Site discovery and recursive crawling without requiring a sitemap
- Produces cleaned markdown, paragraph-level chunks, and metadata for indexing
- Language and encoding detection with automatic normalization
- Configurable rate limits and robots.txt compliance for responsible crawling

## Structured Data Extraction

- LLM-ready structured data extraction from web pages
- Customizable extraction schemas tailored to specific use cases
- Automatic content parsing that removes navigation, ads, and boilerplate
- Metadata enrichment for downstream search and retrieval pipelines

## Integration and Deployment

- HTTP API with Docker deployment support for both local and cloud environments
- Parallel crawling and streaming output for incremental ingestion
- Extensible parser plugins for custom extraction and enrichment
- Straightforward integration with vector stores, indexers, and agent pipelines

## Common Use Cases

- Feeding vector databases for RAG systems and semantic search
- Building knowledge bases and Q&A systems from public websites
- Automating content archiving and migration extraction
- Converting web content into structured, AI-consumable data at scale
