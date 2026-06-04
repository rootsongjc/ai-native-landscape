---
name: SuperSonic
slug: supersonic
homepage: null
repo: https://github.com/tencentmusic/supersonic
license: Apache-2.0
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - LLM
  - Product
description: >-
  An enterprise AI+BI platform that unifies LLM-powered Chat BI and semantic-layer Headless BI to provide conversational
  data insights.
author: Tencent Music
ossDate: '2023-06-12T07:23:28Z'
featured: false
status: tracked
---

SuperSonic is a next-generation AI+BI platform that unifies Chat BI (LLM-powered conversational analytics) and Headless BI (semantic-layer-driven analytics) into a single production-ready system. By combining natural language understanding with a governed semantic layer, it enables both business users and analysts to query data conversationally while maintaining metric accuracy and consistency.

## Key Features

- Conversational analytics interface that translates natural-language questions into precise SQL queries via LLM inference
- Semantic layer standardizing business metrics, dimensions, and data models for consistent results across all queries
- End-to-end pipeline automation covering data ingestion, metric modeling, and visualization
- Built-in multi-tenancy and role-based access control for enterprise deployments
- Decoupled LLM inference from semantic-layer querying through pluggable backends

## Use Cases

- Self-service analytics for non-technical business users who ask questions in natural language to get instant data insights
- Building governed semantic layers that enforce consistent metric definitions across departments
- Embedding conversational Q&A capabilities into existing dashboards for intelligent, on-demand reporting
- Replacing traditional BI report requests with interactive, AI-driven data exploration

## Technical Details

- Implemented in Java with a service-oriented architecture for enterprise data platform integration
- Supports containerized deployment with pluggable data source and model backends
- Teams can swap models or databases without changing the analytics interface
- Open-source with community contributions welcome for adapters and plugins
