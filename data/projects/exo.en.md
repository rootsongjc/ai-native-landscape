---
name: exo
slug: exo
homepage: https://exolabs.net
repo: https://github.com/exo-explore/exo
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
description: >-
  exo: Run your own AI cluster at home using everyday devices, supporting distributed inference and a ChatGPT-compatible
  API.
author: exo-explore
ossDate: '2024-06-24T18:36:22.000Z'
featured: false
status: tracked
---
exo enables running frontier AI models on distributed consumer hardware by unifying everyday devices into a single inference cluster. It automates device discovery, performs dynamic model partitioning based on available resources, and exposes a ChatGPT-compatible API for seamless integration with existing applications.

## Distributed Inference

- Runs models larger than any single device could handle by splitting them across heterogeneous hardware
- Automatic device discovery with peer-to-peer connections requiring no manual configuration
- Multiple inference backends including MLX (Apple Silicon) and tinygrad
- Supports popular models such as LLaMA, Mistral, LlaVA, and DeepSeek

## ChatGPT-Compatible API

- Drop-in replacement endpoint compatible with the ChatGPT API format
- Easy integration with existing tools, agents, and workflows
- No vendor lock-in — run entirely on your own hardware

## Networking and Partitioning

- Ring memory weighted partitioning that splits models based on device memory and network topology
- Interoperable inference engines optimized for Apple Silicon and Linux environments
- Extensible discovery and networking modules supporting UDP, Tailscale, and gRPC
- Dynamic re-partitioning as devices join or leave the cluster
