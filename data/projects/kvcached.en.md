---
name: kvcached
slug: kvcached
homepage: https://yifanqiao.notion.site/Solve-the-GPU-Cost-Crisis-with-kvcached-289da9d1f4d68034b17bf2774201b141
repo: https://github.com/ovg-project/kvcached
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Inference
  - Serving
description: >-
  Virtualized elastic KV cache that brings OS-style virtual memory to LLM systems, enabling demand-driven KV allocation
  and improved GPU utilization.
logo: ''
author: OVG Project
ossDate: '2025-05-27T17:34:02.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

kvcached is a KV cache daemon for LLM serving and training that decouples logical KV addressing from physical GPU memory. By providing a virtualized elastic KV cache, it enables on-demand memory backing and dynamic reclamation, improving GPU efficiency in multi-LLM and mixed-workload environments.

## Key features

- Elastic KV cache: allocate and reclaim KV cache memory on demand to match live workload.
- GPU virtual memory abstraction: runtime mapping between logical KV and physical GPU memory.
- Multi-engine support: integrates with mainstream serving engines such as SGLang and vLLM and provides Dockerized images for deployment.

## Use cases

- Multi-LLM serving: enable multiple models to share GPU memory elastically and reduce infrastructure costs.
- Serverless inference: support on-demand model lifecycle with dynamic KV allocation for bursty traffic.
- GPU colocation: coexistence of inference with training or vision workloads by more flexible memory management.

## Technical highlights

- Runtime memory backing and reclamation with page/partition granularity.
- CLI and operational controls to enforce memory limits and monitor usage.
- Benchmark tooling and optimized KV tensor layouts demonstrating latency and cost benefits under multi-model workloads.
