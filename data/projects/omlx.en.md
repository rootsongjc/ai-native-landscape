---
name: oMLX
slug: omlx
homepage: https://omlx.ai
repo: https://github.com/jundot/omlx
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Dev Tools
  - Inference
  - Serving
description: >-
  Local LLM server for Apple Silicon with continuous batching and SSD caching. Native macOS menu bar app,
  OpenAI-compatible API, optimized for Claude Code. Supports multiple model types including text LLMs, VLMs, and
  embedding models.
logo: ''
author: jundot
ossDate: '2026-02-13'
featured: true
status: tracked
---

## Overview

oMLX is a local LLM inference server specifically designed for Apple Silicon (M1/M2/M3/M4) that achieves high performance through continuous batching and tiered KV caching. The project's unique feature is its native macOS menu bar application, allowing users to conveniently manage services, monitor model status, and download models without opening a terminal, providing complete control over local LLM deployment.

The core innovation of oMLX is its two-tier KV cache system—hot cache (RAM) and cold cache (SSD). When the memory hot cache fills up, cache blocks are offloaded to SSD in safetensors format. On the next request with a matching prefix, they're restored from disk instead of being recomputed from scratch, remaining effective even after server restarts. This design makes local LLMs practical for real coding work with tools like Claude Code.

The project supports text LLMs, vision-language models (VLM), OCR models, embedding models, and rerankers, providing OpenAI and Anthropic API compatibility. Through the built-in admin panel, users can monitor performance in real-time, manage models, run benchmarks, and search and download models directly from HuggingFace.

## Key Features

- **Two-Tier KV Cache**: Memory hot cache + SSD cold cache with persistent cross-restart caching, where all past context remains cached even when context changes mid-conversation
- **Continuous Batching**: Handles concurrent requests through mlx-lm's BatchGenerator with configurable prefill and completion batch sizes
- **macOS Menu Bar App**: Native PyObjC application (not Electron) supporting server start/stop, stats monitoring, automatic restart on crash, and in-app auto-update
- **Multi-Model Serving**: Load LLMs, VLMs, embedding models, and rerankers within the same server with LRU eviction, manual load/unload, model pinning, and per-model TTL
- **Claude Code Optimization**: Context scaling support for running smaller context models with Claude Code, SSE keep-alive prevents read timeouts during long prefill
- **Admin Dashboard**: Built-in Web UI for real-time monitoring, model management, chat, benchmarks, and per-model settings, fully offline with English/Korean/Japanese/Chinese support
- **API Compatibility**: Drop-in replacement for OpenAI and Anthropic APIs with streaming usage stats, Anthropic adaptive thinking, and vision inputs
- **Tool Calling & Structured Output**: Supports all function calling formats in mlx-lm, JSON schema validation, and MCP tool integration

## Use Cases

- **Local AI Programming Assistant**: Works with AI coding tools like Claude Code and Cursor to provide low-latency local model inference
- **Model Research and Experimentation**: Researchers can conveniently test performance of different MLX models with built-in benchmark tools providing accurate measurements
- **Privacy-Sensitive Applications**: Run LLMs locally ensuring data never leaves the user's device, suitable for processing sensitive information
- **Multi-Model Deployment**: Simultaneously run multiple model types (LLM, VLM, embedding models, etc.) to build complex AI applications
- **Edge AI Services**: Deploy lightweight AI services on Mac devices to provide local AI capabilities for home or office networks

## Technical Highlights

- **Apple Silicon Optimization**: Specifically optimized for Apple chips, fully leveraging Metal performance accelerators
- **FastAPI Architecture**: High-performance async HTTP interface built on FastAPI
- **Block-Based Cache Management**: vLLM-inspired block-based KV cache with prefix sharing and Copy-on-Write
- **Process Memory Enforcement**: Total memory limit (default: system RAM - 8GB) prevents system-wide OOM
- **Auto Model Discovery**: Automatically detects MLX-format models from model directories, supporting two-level directory organization
- **Per-Model Configuration**: Configure sampling parameters, chat templates, TTL, model alias, and type override for each model
- **Apache 2.0 License**: Fully open source, free to use and modify, built on excellent projects like MLX, mlx-lm, and mlx-vlm
