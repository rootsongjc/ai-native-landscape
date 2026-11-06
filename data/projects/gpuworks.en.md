---
name: GPUWorks
slug: gpuworks
homepage: https://gpuworks.ai/
repo: https://github.com/flitai-io/gpuworks
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - GPU Orchestration
  - MaaS
  - GPU Scheduling
  - Cloud Native
  - Model Serving
  - Multi-Cloud
description: An ultra-lightweight GPU management and Model-as-a-Service (MaaS) platform that pools bare-metal servers, public cloud instances, and private cloud VMs into one heterogeneous cluster across NVIDIA, AMD, Ascend, PPU, Hygon, and Apple Silicon accelerators, serving models behind an OpenAI-compatible endpoint.
author: Flit AI
ossDate: '2026-10-22'
featured: false
status: tracked
---

## Overview

GPUWorks is an ultra-lightweight GPU management and Model-as-a-Service (MaaS) platform: the entire control plane, web UI included, is a ~40 MB download. Join your own GPU servers, rented cloud instances, or even a Mac with one command, pick a model, and GPUWorks estimates its memory footprint, selects the GPUs, launches vLLM, SGLang, or any engine an inference template defines, and serves it behind a single OpenAI-compatible endpoint. NVIDIA, AMD, Ascend, T-Head PPU, Hygon, and Apple Silicon nodes run side by side in the same cluster.

## Key Features

- Verified model × accelerator combinations deploy in one click, with a built-in catalog of 1,235 launch specs covering 392 models (LLM, embedding, rerank, speech, image, video)
- Heterogeneous accelerators behind one scheduler — the scheduler matches each deployment only to hardware its launch spec supports
- Public and private cloud in one pool: sync instances from RunPod, CompShare, AutoDL, Vast.ai, and Alibaba Cloud, or VMs from ZStack Cloud, and schedule them together with your own servers
- Memory estimation and explained placement — before deployment you see how much GPU memory weights, KV cache, and engine overhead need, plus which GPUs were picked and why others were rejected
- GPU sharing between models via dGPU hard memory quotas, and sleep/wake so vLLM models can take turns on the same GPUs
- Scale out with replicas, multi-node tensor/pipeline parallelism, and prefill/decode disaggregation; OpenAI-compatible gateway with least-request, prefix-affinity, or failover routing
- Observability (GPU/engine metrics, searchable logs, per-request traces with OTLP export), built-in benchmarking, an AI assistant, and a read-only MCP endpoint

## Use Cases

- Build a mixed GPU cluster from owned servers, rented cloud instances, and private cloud VMs, and manage them as one capacity pool
- Serve open-source models (Qwen, DeepSeek, GLM, Kimi, Llama, etc.) on heterogeneous hardware behind one OpenAI-compatible API without hand-tuning launch flags
- Share a single GPU between multiple models with hard memory quotas, or pack many models across a fleet with scheduler-driven placement
- Run in air-gapped or multi-region environments, importing images and models from archives and syncing models between nodes

## Technical Details

- Server and agent are each a single static Go binary (`CGO_ENABLED=0`); the server embeds the web UI (English/Chinese) and agents for every platform, keeping all state in one SQLite file
- Agents dial out over WebSocket so nodes need no inbound ports (server-dial-in mode available for nodes that cannot reach out)
- dGPU sharing enforces hard per-instance memory quotas through vendor mechanisms: HAMi-core on NVIDIA, vCANN on Ascend, HGGC on PPU, and hy-smi virtual devices on Hygon
- Prefill/decode disaggregation via vLLM + NIXL (NVIDIA), vLLM-Ascend + Mooncake (Ascend), and SGLang/vLLM + Mooncake (PPU), within one host or over RDMA
- Gateway exposes `/v1` (chat, completions, embeddings, rerank, audio, images, video, realtime) with `/v1/messages` and `/v1/responses` passthrough, API keys, and per-key token usage tracking
- In an Alibaba Cloud drill, one server ran 1,003 rented GPU machines across 7 regions: 500+ replicas placed and running within 4 minutes, 2,000 concurrent requests through the gateway, with the server peaking at 9 CPU cores and 1.6 GB of memory
