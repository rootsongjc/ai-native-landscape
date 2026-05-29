---
name: vLLM-Omni
slug: vllm-omni
homepage: https://docs.vllm.ai/projects/vllm-omni
repo: https://github.com/vllm-project/vllm-omni
license: Unknown
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
logo: ''
author: vLLM Project
ossDate: '2025-09-11T00:34:43Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

vLLM-Omni is a framework designed for inference and serving of omni-modality models, supporting text, image, video, and audio inputs as well as heterogeneous outputs. Built on vLLM's efficient inference foundations, vLLM-Omni extends support to non-autoregressive architectures (e.g., Diffusion Transformers) and parallel generation models, enabling production-grade deployment with improved throughput and cost efficiency.

## Key Features

- Support for multi-modal inference across text, image, video and audio.
- Low-latency, high-throughput execution via efficient KV cache management and pipelined stage execution.
- Decoupled model and inference stages with distributed deployment through OmniConnector and dynamic resource allocation.
- Seamless integration with Hugging Face models and an OpenAI-compatible API for easy adoption.

## Use Cases

- Multi-modal assistants and conversational systems that combine text and visual inputs.
- Backends for large-scale image/video generation and media processing pipelines.
- Real-time multimedia applications requiring streaming outputs and low latency.
- Heterogeneous model deployments where resource optimization and distributed inference are needed.

## Technical Features

- Optimized KV cache management and memory-compute trade-offs inherited from vLLM.
- Staged pipeline execution and support for tensor/pipeline/expert parallelism to maximize throughput.
- Support for non-autoregressive generation workflows and heterogeneous output handling.
- OmniConnector-based disaggregation for cross-node distribution and autoscaling.
