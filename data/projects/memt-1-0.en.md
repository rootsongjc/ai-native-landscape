---
name: MemT-1.0
slug: memt-1-0
homepage: null
repo: https://github.com/MemTensor/MemT-1.0
license: PolyForm-Noncommercial-1.0.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Memory
  - Long-Term Memory
  - Memory-Augmented Models
  - LLM
description: >-
  MemT-1.0 is a memory foundation model family that makes persistent, dynamically evolving memory an intrinsic part of
  model computation, retaining and leveraging historical information without re-reading original context at inference.
author: MemTensor
ossDate: '2026-10-19'
featured: false
status: tracked
---

## Overview

MemT-1.0 is a new generation of memory foundation models from MemTensor that builds persistent, dynamically evolving memory directly into model computation. Instead of relying on external retrieval or full-context KV caches, it maintains a constant-size latent memory state that carries historical information across interactions. The family ships two variants: MemT-1.0-Nano (36B total / 3B activated, Qwen3.6-35B-A3B backbone) and MemT-1.0-Flash (288B total / 17B activated, DeepSeek-V4-Flash backbone).

## Key Features

- Native Memory Block running alongside backbone attention, with a dynamic Local Memory Block and a trainable Hyper Memory Block (query/key/value projections plus erase, write, forget, and output gates)
- Constant-size persistent memory state, cutting storage by roughly 66x versus full-context KV cache at 128K history length
- Mixture-of-Storage (MoS) design for scalable memory capacity
- Two-stage training pipeline over 34B tokens, with backbone preparation and dedicated infrastructure
- Experience-guided agentic coding framework that stores retrieved procedural experience in native memory and reads it via memory attention, without inflating task context
- SGLang-based serving stack with a `memt_sglang` Python client for multi-turn conversations with memory commit and recall

## Use Cases

- Long-running conversational agents that must recall facts from earlier turns without replaying plaintext context
- Experience reuse in long-horizon agentic coding tasks
- Applications needing memory of past interactions at a fraction of full-context KV cache storage cost

## Technical Details

- Memory attention reads from the current memory state during generation, normalizes and gates the readout, and adds it to the backbone attention output
- At the end of each turn or segment, a GDN-2 network performs token-level memory updates for subsequent steps
- Local Memory Block maintains a dynamic multi-channel memory matrix that evolves across interaction steps; Hyper Memory Block parameters are trained while the state itself is dynamic
- Trainable memory parameters: 451M (Nano, 10M dynamic state) and 3.61B (Flash, 336M dynamic state)
- Across 11 memory benchmarks, Flash and Nano rank first and second among evaluated parametric-memory methods, while textual-memory systems still lead on long histories requiring detailed evidence retrieval
- Model weights are published on Hugging Face; the repository ships SGLang serving scripts and a Python client
