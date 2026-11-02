---
name: turbovec
slug: turbovec
homepage: https://pypi.org/project/turbovec/
repo: https://github.com/RyanCodrai/turbovec
license: MIT
category: rag-knowledge
subCategory: vector-databases
tags:
  - Vector Search
  - Quantization
  - SIMD
  - Rust
description: >-
  An in-process vector index for Python and Rust built on Google Research's
  TurboQuant — 2 or 4 bits per dimension, searched directly with SIMD kernels:
  7.8× smaller than float32 and up to 4.4× faster than FAISS at matching recall.
author: RyanCodrai
ossDate: '2026-03-26'
featured: false
status: tracked
---

## Overview

turbovec is an in-process vector index for Python and Rust that stores each vector at 2 or 4 bits per dimension using Google Research's TurboQuant and searches the compressed form directly with SIMD kernels. Ten million 768-dimensional embeddings that take 31 GB as float32 fit in 4 GB and search 4.4× faster than FAISS, at matching recall. It is a library, not a service: nothing leaves your process.

## Key Features

- Fast: 4.4× FAISS FastScan at 4-bit and 2.2× at 2-bit, on both ARM and x86
- Low memory: 7.8× smaller than float32 at 4-bit, 15.5× at 2-bit, at the same recall as FAISS
- Online: no training step and no rebuilds — add a vector and it is searchable; remove one in microseconds
- Incremental persistence: `sync(path)` writes only what changed since the last call, with one fsync and crash-safe atomic rename
- Filtered search via an allowlist of ids or a bitmask; `IdMapIndex` keys entries by your own uint64 ids with O(1) remove
- Drop-in integrations for LangChain, LlamaIndex, Haystack, and Agno in-memory stores

## Use Cases

- Embedding search on machines where a 31 GB float32 index does not fit
- Local, fully offline RAG stacks paired with an open-source embedding model
- Frequently mutated indexes (per-user, per-session) where adds and deletes must be cheap

## Technical Details

- Quantizes each vector to 2 or 4 bits per dimension with TurboQuant (arXiv:2504.19874); the codebook derives from the mathematics rather than training data, so there is no training pass and single `add()` calls complete in microseconds
- Staged search scans one bit plane with agent-optimised SIMD kernels (AVX-512 on x86, NEON on ARM) and then rescores the shortlist exactly, which is how it beats FAISS IndexPQFastScan at a matched bit rate
- `sync(path)` persists incrementally — only the bytes changed since the last call, one fsync, atomic rename — so snapshots take milliseconds regardless of index size; whole-file `write()`/`load()` are also supported
- Scores are inner products, so vectors must be normalized for cosine similarity; inputs are 2-D float32 arrays and other dtypes raise rather than silently convert; the Rust crate mirrors the Python API
