---
name: Spice.ai
slug: spiceai
homepage: https://docs.spiceai.org
repo: https://github.com/spiceai/spiceai
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Application
  - Data
  - Dev Tools
  - Inference
  - LLM
description: >-
  An open-source accelerated engine for time-series and data-grounded AI, offering SQL queries, full-text search, and
  LLM inference.
author: Spice.ai
ossDate: '2021-08-08T23:26:13Z'
featured: false
status: tracked
---

Spice.ai is an open-source data and AI engine written in Rust that provides accelerated SQL queries, full-text search, and LLM inference in a single portable runtime. It is designed to embed data-grounded machine learning and retrieval-augmented generation directly into production applications with minimal latency.

## Key Features

- Fast SQL query acceleration and time-series feature processing from raw data sources
- Integrated LLM inference for data-grounded generation and retrieval-augmented workflows
- Portable, low-latency runtime deployable across cloud, containerized, and edge environments
- Hybrid retrieval and re-ranking capabilities for high-quality search results
- Developer-friendly SDKs and tooling for rapid integration into existing applications

## Use Cases

- Real-time decision layer in monitoring and alerting systems
- Predictive maintenance and anomaly detection close to the data source
- Personalized recommendation engines requiring sub-second inference latency
- Financial risk detection and fraud prevention with strict latency requirements
- Retrieval-augmented generation workflows that need co-located data and model inference

## Technical Details

- Built primarily in Rust for high throughput and memory safety
- Plugin-based inference backends supporting multiple model providers
- Ships with production-focused deployment guides and container images
- Licensed under Apache-2.0 for broad industrial adoption
