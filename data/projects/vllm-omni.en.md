---
name: vLLM-Omni
slug: vllm-omni
homepage: https://docs.vllm.ai/projects/vllm-omni
repo: https://github.com/vllm-project/vllm-omni
license: Apache-2.0
category: models-modalities
subCategory: multimodal
tags:
  - Framework
  - Inference
  - Multimodal
  - Serving
description: >-
  A framework for high-performance, cost-efficient inference and serving of omni-modality models across text, image,
  video, and audio.
author: vLLM Project
ossDate: '2025-09-11T00:34:43Z'
featured: false
status: tracked
---

vLLM-Omni is an inference and serving framework for omni-modality models that handle text, image, video, and audio inputs alongside heterogeneous outputs. Built on vLLM's proven high-performance inference engine, it extends support to non-autoregressive architectures such as Diffusion Transformers and parallel generation models. The framework targets production-grade deployment where throughput, cost efficiency, and multi-modal flexibility are critical.

## Multi-Modal Inference Pipeline

- Unified serving pipeline covering text, image, video, and audio within a single deployment
- Low-latency and high-throughput execution powered by efficient KV cache management
- Staged pipeline scheduling for optimal resource utilization
- Seamless integration with Hugging Face model weights and OpenAI-compatible API

## Decoupled Architecture

- Model stages separated from inference stages through OmniConnector
- Distributed deployment with dynamic resource allocation across nodes
- Independent scaling of prefill and decode stages
- Native support for non-autoregressive generation workflows and heterogeneous output formats

## Scalability and Performance

- KV cache optimization and memory-compute trade-off strategies inherited from vLLM
- Tensor, pipeline, and expert parallelism for scaling across GPUs and nodes
- High-throughput inference backend for large-scale image or video generation pipelines
- Streaming outputs and low-latency execution for real-time multimedia applications
