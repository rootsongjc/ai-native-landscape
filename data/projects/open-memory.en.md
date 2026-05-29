---
name: OpenMemory — Explainable Long-term Memory Engine
slug: open-memory
homepage: https://openmemory.cavira.app
repo: https://github.com/caviraoss/openmemory
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Agent
  - Embedding Model
  - Memory
  - RAG
description: >-
  OpenMemory is a self-hosted, sectorized semantic memory engine that delivers high-recall, cost-efficient, and
  explainable long-term memory for LLM applications.
logo: ''
author: Cavira
ossDate: '2025-10-19T16:12:49Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

OpenMemory is a self-hosted long-term memory layer for LLM-powered applications. It implements a Hierarchical Memory Decomposition (HMD) with multi-sector embeddings and a single-waypoint associative graph, enabling explainable recall paths and efficient storage without duplication. The project supports multiple embedding backends and vector stores and includes an MCP-compatible HTTP endpoint for easy Agent integration.

## Key Features

- Sectorized memory model for differentiated handling of episodic, semantic, procedural and other memory types.
- Single-waypoint graph and sparse linking for transparent retrieval paths.
- Pluggable embedding backends (local models, OpenAI, Gemini, Ollama) and vector stores (SQLite, pgvector, Weaviate).
- Built-in MCP (Model Context Protocol) HTTP server to simplify tool and Agent integration.

## Use Cases

- Assistants and copilots that require cross-session user preferences and context retention.
- Long-term note and journal retrieval with evidence-backed recall.
- Agent orchestration where a persistent memory layer improves coordination and decision-making.
- Self-hosted enterprise deployments that require data ownership and compliance.

## Technical Highlights

- Cost-aware local operation to minimize embedding and storage expenses for large memory footprints.
- Hybrid retrieval combining sector fusion and activation spreading to boost relevance for multi-step workflows.
- Observability and governance features including auditability, erasure, and tenant isolation for production readiness.
