---
name: SuperSonic
slug: supersonic
homepage: null
repo: https://github.com/tencentmusic/supersonic
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - LLM
  - Product
description: >-
  An enterprise AI+BI platform that unifies LLM-powered Chat BI and semantic-layer Headless BI to provide conversational
  data insights.
logo: ''
author: Tencent Music
ossDate: '2023-06-12T07:23:28Z'
featured: false
status: tracked
---

## Overview

SuperSonic is a next-generation AI+BI platform that unifies Chat BI (LLM-powered conversational analytics) and Headless BI (semantic-layer-driven analytics) into a single production-ready system. By combining natural language understanding with a governed semantic layer, it enables both business users and analysts to query data conversationally while maintaining metric accuracy and consistency.

## Key Features

The platform provides a conversational analytics interface that translates natural-language questions into precise SQL queries via LLM inference. Its semantic layer standardizes business metrics, dimensions, and data models to ensure consistent results across all queries. SuperSonic also delivers end-to-end pipeline automation covering data ingestion, metric modeling, and visualization, with built-in multi-tenancy and role-based access control for enterprise deployments.

## Use Cases

Non-technical business users leverage SuperSonic for self-service analytics, asking questions in natural language to get instant data insights without writing SQL. Data teams use it to build governed semantic layers that enforce consistent metric definitions across departments. Organizations embed its conversational Q&A capabilities into existing dashboards to add intelligent, on-demand reporting features.

## Technical Details

SuperSonic is implemented in Java with a service-oriented architecture, designed for integration into enterprise data platforms and containerized deployment. It decouples LLM inference from semantic-layer querying through pluggable data source and model backends, allowing teams to swap models or databases without changing the analytics interface. The platform is open-source and welcomes community contributions for adapters and plugins.
