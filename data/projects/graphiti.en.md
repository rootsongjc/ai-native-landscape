---
name: Graphiti
slug: graphiti
homepage: null
repo: https://github.com/getzep/graphiti
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - MCP
description: >-
  Graphiti is an open-source framework for building real-time knowledge graphs tailored for AI agents, designed for
  dynamic data, agent memory, and low-latency hybrid retrieval.
author: Zep / getzep
ossDate: '2024-08-08T22:08:30.000Z'
featured: false
status: tracked
---

## Introduction

Graphiti is an open-source framework to build and query temporally-aware knowledge graphs for AI agents. It supports incremental updates, bi-temporal modeling, and hybrid retrieval (semantic, keyword, graph traversal) for low-latency queries and precise historical reasoning.

## Key Features

- Real-time incremental ingestion without batch recomputation.
- Bi-temporal data model for point-in-time queries and historical reasoning.
- Efficient hybrid retrieval combining embeddings, BM25, and graph traversal.
- Pluggable backends and entity customization (Neo4j, FalkorDB, Kuzu, Amazon Neptune).

## Use Cases

- Agent memory and long-term context maintenance.
- Real-time event processing and stateful reasoning with historical context.
- Enterprise knowledge management and RAG systems requiring precise temporal queries.

## Technical Highlights

- Implemented in Python with pluggable drivers for multiple graph backends.
- Offers an MCP server and REST API for easy integration with agents and toolchains.
- Built for high concurrency and large datasets with parallel processing and configurable concurrency controls.
