---
name: exo
slug: exo
homepage: https://exolabs.net
repo: https://github.com/exo-explore/exo
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
description: >-
  exo: Run your own AI cluster at home using everyday devices, supporting distributed inference and a ChatGPT-compatible
  API.
logo: ''
author: exo-explore
ossDate: '2024-06-24T18:36:22.000Z'
featured: false
status: tracked
---

## Overview

exo enables running frontier AI models on distributed consumer hardware by unifying everyday devices such as phones, laptops, and Raspberry Pi units into a single inference cluster. It automates device discovery, performs dynamic model partitioning based on available resources, and exposes a ChatGPT-compatible API for seamless integration with existing applications.

## Key Features

exo supports distributed inference across heterogeneous devices, allowing users to run models larger than any single device could handle. It features automatic device discovery with peer-to-peer connections, multiple inference backends including MLX and tinygrad, and compatibility with popular models such as LLaMA, Mistral, LlaVA, and DeepSeek. A ChatGPT-compatible API enables easy integration with existing tools and workflows.

## Use Cases

exo is ideal for building home or small-office AI clusters using idle devices to run open-source LLMs locally for privacy and cost savings. It suits edge deployments requiring low-latency local inference across a fleet of devices, and serves as a platform for research and education on distributed model partitioning and heterogeneous inference.

## Technical Details

exo employs a dynamic model partitioning strategy using ring memory weighted partitioning that splits models based on device memory and network topology. It provides interoperable inference engines optimized for Apple Silicon and Linux environments, and features extensible discovery and networking modules supporting UDP, Tailscale, and gRPC for heterogeneous network deployments.
