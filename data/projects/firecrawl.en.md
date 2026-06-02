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

## Overview

Firecrawl is a web data API purpose-built for AI workflows, capable of searching, scraping, and interacting with websites at scale. It crawls target sites, discovers accessible subpages, and transforms web content into clean markdown or structured data optimized for retrieval-augmented generation (RAG) and large language model consumption.

## Key Features

Firecrawl performs site discovery and recursive crawling without requiring a sitemap, producing cleaned markdown, paragraph-level chunks, and metadata for indexing. It includes language and encoding detection with normalization, and enforces configurable rate limits and robots.txt compliance for responsible crawling. The API supports both scraping and structured data extraction tailored for LLM-ready outputs.

## Use Cases

Firecrawl is used to feed vector databases for RAG systems and semantic search, build knowledge bases and Q&A systems from public websites, and automate content archiving and migration extraction. It is particularly valuable for teams that need to convert web content into structured, AI-consumable data at scale.

## Technical Details

Firecrawl provides an HTTP API with Docker deployment support for both local and cloud environments. It features parallel crawling and streaming output for incremental ingestion, extensible parser plugins for custom extraction and enrichment, and straightforward integration with downstream vector stores, indexers, and agent pipelines.
