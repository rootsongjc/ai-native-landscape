---
name: SIE
slug: sie
homepage: https://superlinked.com
repo: https://github.com/superlinked/sie
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Inference
  - Vector Search
  - Embeddings
  - GPU
description: Open-source inference server and production cluster that serves all the models your agent needs with shared GPU resources.
author: superlinked
ossDate: '2023-11-07T10:45:53Z'
featured: false
status: tracked
---

## Overview

SIE (Superlinked Inference Engine) is an open-source inference server and production cluster for all the models an agent needs — embeddings, rerankers, COLBERT, SPLADE, and more. It lets multiple models share GPU resources efficiently, making it practical to run the full retrieval stack for agents in production.

## Key Features

- Inference server plus production cluster deployment model.
- Multi-model support: BGE embeddings, ColBERT, SPLADE, rerankers.
- Shared GPU serving across models your agents call.
- Data pipeline integration for retrieval-augmented workloads.

## Use Cases

- Serve embedding and reranker models for RAG pipelines at scale.
- Consolidate agent model serving onto shared GPU clusters.
- Production semantic search and vector retrieval backends.

## Technical Details

- One OpenAI-compatible API (`/v1/embeddings`, `/v1/chat/completions`, `/v1/completions`, `/v1/responses`) serves every agent task, enabling drop-in migration.
- Serves 100+ models on demand with LRU eviction, so multiple models share one cluster's GPU budget.
- Task-oriented model packs: search (bge-m3, splade-v3, colbertv2, qwen3-reranker), document-to-markdown OCR, structured output (GLiNER), content safety (granite-guardian), and the agent loop itself.
- Ships the production stack: load-balancing gateway, KEDA autoscaling, Grafana dashboards, and Terraform for GKE/EKS/AKS.
- Python 3.12 uv workspace; bundle-specific Docker images keep dependency-incompatible model families isolated.
