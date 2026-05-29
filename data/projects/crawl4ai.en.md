---
name: Crawl4AI
slug: crawl4ai
homepage: https://crawl4ai.com
repo: https://github.com/unclecode/crawl4ai
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Dev Tools
description: >-
  An open-source web crawler and scraper optimized for large language model workflows, producing clean Markdown and
  structured data with browser control and Docker deployment.
logo: ''
author: UncleCode
ossDate: '2024-05-09T09:48:50Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

Crawl4AI is an open-source, LLM-friendly web crawler and scraper designed to turn web content into clean, indexable Markdown and structured data for RAG and downstream AI workflows. It supports Playwright-driven browser crawling, remote browser control, session and proxy management, and provides Dockerized deployments and an API gateway for production usage.

## Main Features

- LLM-ready Markdown generation with noise removal and citation formatting.
- Flexible extraction strategies: CSS/XPath, schema-based extraction, BM25 filtering, and intelligent table chunking.
- Browser and session management with Playwright, persistent profiles, and proxy support to reduce bot detection.
- Production readiness with Docker images, FastAPI server, and a web playground for interactive testing.

## Use Cases

- Building RAG pipelines: prepare clean corpora for vector indexing and retrieval.
- Automated monitoring and reporting: scheduled crawls for news, competitors, and industry sites.
- Research and data engineering: large-scale table extraction, semantic chunking, and LLM-driven data cleaning experiments.

## Technical Features

- Asynchronous crawler with a managed browser pool for performance and stability; supports virtual scroll and lazy-loaded content.
- LLM-driven structured extraction and smart chunking with extensible hooks and custom strategies.
- Apache-2.0 licensed, active community, and comprehensive documentation and examples for quick onboarding.
