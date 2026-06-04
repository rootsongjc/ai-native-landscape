---
name: PandaWiki
slug: pandawiki
homepage: https://pandawiki.docs.baizhi.cloud/
repo: https://github.com/chaitin/pandawiki
license: AGPL-3.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
description: >-
  PandaWiki is an open-source knowledge base system driven by large models, enabling fast building of intelligent
  documentation, FAQ and blog centers.
author: Chaitin
ossDate: '2025-05-15T12:55:40.000Z'
featured: false
status: tracked
---

## Overview

PandaWiki, developed by Chaitin, is an open-source knowledge base system that leverages large models to help teams quickly build intelligent centers for documentation, FAQs, and blogs. It supports multi-source ingestion from web pages, RSS, and files, and provides high-quality QA and semantic search via vector retrieval and RAG pipelines.

## Key features

- Multi-source ingestion and format compatibility: bulk import and parse Markdown, HTML, Word, PDF and other common document formats.
- Model-driven retrieval: vector indexing with context stitching for retrieval-augmented generation and semantic search.
- Embeddable and extensible: frontend plugins and SDKs make it easy to integrate the knowledge base into websites or chatbots.

## Use cases

- Organize product documentation, FAQs and blog content into an intelligent knowledge base to improve self-service.
- Build internal knowledge discovery and QA systems to reduce repetitive communication overhead.
- Provide intelligent assistance for customer support, training and documentation through search and QA.

## Technical notes

- Implementation uses TypeScript and Go components, designed for containerized deployment and CI integration.
- Supports vector indexes, configurable RAG pipelines and easy integration with external models and vector databases.
