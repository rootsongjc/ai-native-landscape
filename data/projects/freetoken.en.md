---
name: FreeToken
slug: freetoken
homepage: https://flashml.ai
repo: https://github.com/FlashML-org/FreeToken
license: Apache-2.0
category: inference-serving
subCategory: edge-local-inference
tags:
  - MoE
  - Local Inference
  - Serving
  - Edge AI
description: >-
  An edge-native Mixture-of-Experts serving engine that runs 290B+ frontier open-weight models locally on
  consumer hardware, treating GPUs, CPUs, host memory, and interconnects as one elastic inference platform.
author: FlashML-org
ossDate: '2026-07-20'
featured: false
status: tracked
---

## Overview

FreeToken is an edge-native Mixture-of-Experts (MoE) serving engine for running frontier-scale open-weight models on personal and consumer hardware — 290B+ parameter MoE models on a gaming PC at interactive speeds. It treats heterogeneous edge resources (GPUs, CPUs, host memory, interconnects) as a unified, elastic inference platform, and exposes Anthropic/OpenAI-compatible APIs so real coding agents like Codex, Claude Code, and OpenCode can run against a local endpoint.

## Key Features

- Fast edge-native runtime: bandwidth-adaptive CPU–GPU co-execution (q* policy), full-layer double-buffered prefill streaming, global LRU expert caching, graph-compatible execution, and the FTW fast weight format
- Semantic-aware caching with semantic anchor checkpoints for recurrent state and KV caches, so agentic context edits (tool calls, thinking blocks) avoid redundant recomputation
- Elastic memory management: dynamic runtime VRAM reallocation between expert caches and KV memory without engine restarts or weight reloads
- Frontier MoE support (DeepSeek-V4-Flash, Qwen3.6-35B-A3B, GLM-5.2) across MXFP4, NVFP4, FP8, and BF16 quantization formats
- Anthropic/OpenAI-compatible APIs for coding and tool-calling agents including Codex, Claude Code, OpenCode, OpenClaw, and DeepSeek Harness
- Desktop app for Windows and Linux plus a CLI installable with `uv pip install "freetoken[accel]"`; targets NVIDIA RTX 30, 40, and 50 series consumer GPUs

## Use Cases

- Running 290B+ frontier open-weight MoE models locally on a gaming desktop, workstation, or laptop
- Serving local Anthropic/OpenAI-compatible endpoints for coding agents that must not leave the machine
- Agentic workloads with heavy context editing, where KV/checkpoint reuse decides end-to-end latency

## Technical Details

- The runtime treats heterogeneous resources as one elastic pool; a bandwidth-adaptive q* policy decides CPU–GPU expert placement at execution time, matching work to available memory bandwidth
- Prefill streams with full-layer double buffering while a global LRU cache keeps hot experts resident; execution is CUDA-graph compatible and checkpoints load in the FTW fast weight format
- Recurrent state and KV caches persist via semantic anchor checkpoints keyed to content, so an edit inside an agentic context (a tool call or thinking block) reuses the unaffected spans instead of recomputing the prefix
- The VRAM split between expert cache and KV memory is adjusted at runtime with no restart or weight reload; design described in arXiv:2608.16157, inspired by mini-sglang and reusing code from SGLang, vLLM, FlashInfer, flash-linear-attention, LightLLM, and llama.cpp
