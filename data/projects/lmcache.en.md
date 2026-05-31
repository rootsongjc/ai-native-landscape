---
name: LMCache
slug: lmcache
homepage: https://lmcache.ai/
repo: https://github.com/lmcache/lmcache
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Utility
description: >-
  A high-performance KV cache layer for LLM serving that reduces time-to-first-token and increases throughput,
  especially for long-context and multi-turn scenarios.
logo: ''
author: LMCache
ossDate: '2024-05-28T21:06:04.000Z'
featured: false
status: tracked
---

LMCache is a high-performance KV cache layer for LLM serving that reuses KV caches of recurring text across GPU, CPU DRAM, and local disk. By avoiding redundant KV computation, LMCache reduces latency and GPU cycles for multi-turn QA and RAG workloads and integrates with popular serving engines such as vLLM, llm-d, and KServe.

## Features

- High-performance CPU KVCache offloading and recovery
- Stable support for non-prefix KV caches for better long-context reuse
- P2P KVCache sharing and async remote load (e.g., Mock, Redis)
- Integrations with vLLM production stack and other serving ecosystems
- Multiple deployment options: pip, Docker, and production stack examples

## Use Cases

- Multi-turn conversational agents where previous context can be reused
- Retrieval-augmented generation (RAG) to avoid recomputing similar context
- High-throughput LLM serving to increase throughput and reduce GPU cost
- Edge or hybrid deployments that cache hot data on CPU/disk to save GPU resources

## Technical Details

- Implementation: Primarily Python with performance-critical components in CUDA/C++
- Storage backends: GPU memory, CPU DRAM, local disk, and third-party backends (e.g., NIXL)
- Works with major inference engines (vLLM, llm-d, KServe) and provides examples and docs at <https://docs.lmcache.ai/>
