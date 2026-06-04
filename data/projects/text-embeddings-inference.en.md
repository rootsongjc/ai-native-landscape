---
name: text-embeddings-inference
slug: text-embeddings-inference
homepage: https://huggingface.co/docs/text-embeddings-inference
repo: https://github.com/huggingface/text-embeddings-inference
license: Apache-2.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Inference
  - RAG
description: >-
  Hugging Face's text-embeddings-inference provides an out-of-the-box text vectorization inference service, making it
  easy to build similarity search and semantic search applications.
author: Hugging Face
ossDate: '2023-10-13T13:36:51.000Z'
featured: false
status: tracked
---

text-embeddings-inference is Hugging Face's high-performance text embedding inference service, purpose-built for semantic search, RAG pipelines, and vector database applications. It provides an out-of-the-box deployment solution for pre-trained embedding models, supporting both hosted and self-hosted modes so developers can quickly integrate embedding generation into their workflows.

## Model & API Support

- Supports mainstream embedding architectures including BERT, RoBERTa, and Sentence Transformers
- Clean REST API interface with batch processing and streaming output for easy integration
- Automatic model optimization and GPU acceleration for high-throughput embedding computation
- Built-in efficient batching and caching mechanisms to handle large volumes of concurrent requests

## Performance & Architecture

- Implemented in Rust for low latency and efficient resource utilization
- Dynamic batch sizing that automatically adjusts to current load for optimal throughput
- Docker images and Kubernetes deployment configurations for horizontal scaling and load balancing
- Detailed performance metrics and monitoring interfaces for production operations

## Use Cases

- Semantic search and document retrieval with high-quality vector indexes for knowledge bases
- RAG retrieval pipelines where embedding quality directly impacts answer accuracy
- Clustering analysis and similarity computation at scale across large document collections
- Multilingual semantic matching and cross-language search scenarios
