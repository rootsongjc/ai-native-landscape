---
name: Faiss
slug: faiss
homepage: https://faiss.ai/
repo: https://github.com/facebookresearch/faiss
license: MIT
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Database
  - Dev Tools
description: >-
  A high-performance library for similarity search and clustering of dense vectors, suitable for large-scale vector
  retrieval.
author: Faiss (facebookresearch)
ossDate: '2017-02-07T16:07:05.000Z'
featured: false
status: tracked
---
## Introduction

Faiss is an open-source library by Meta for efficient similarity search and clustering of dense vectors. It provides CPU and GPU implementations, scales from small collections to billions of vectors, and offers both Python and C++ interfaces for integration into retrieval, recommendation, and similarity search systems.

## Key Features

- Multiple index types for exact and approximate search, including quantization and graph-based indexes (HNSW/NSG).
- GPU-accelerated implementations for significantly faster queries on single or multi-GPU servers.
- Python/Numpy bindings as well as C++ APIs for flexible integration and extension.

## Use Cases

- Large-scale semantic retrieval and vector-based recall for search and recommendation systems.
- Nearest-neighbor retrieval in RAG pipelines for document/paragraph retrieval.
- Multimedia similarity search for image, audio, and video embeddings.

## Technical Highlights

- Flexible trade-offs between query latency, accuracy, and memory usage.
- Supports L2, dot-product and cosine similarity (via normalization).
- Options for compression, on-disk indices and tooling for training and parameter tuning.
