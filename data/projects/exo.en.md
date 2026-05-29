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
thumbnail: ''
source: ''
status: tracked
---

## Overview

exo lets you unify everyday devices (phones, laptops, Raspberry Pi, and more) into a distributed AI inference cluster. It automates device discovery, performs dynamic model partitioning based on available resources, and exposes a ChatGPT-compatible API so you can run models on your own hardware.

## Key Features

- Distributed inference across heterogeneous devices, enabling running larger models than a single device could handle.
- Automatic device discovery and peer-to-peer connections, minimizing manual configuration.
- Multiple inference backends supported (MLX, tinygrad) and compatibility with a variety of models (LLaMA, Mistral, LlaVA, DeepSeek).
- ChatGPT-compatible API for easy integration with existing applications.

## Use Cases

- Home or small-office clusters using idle devices to run open-source LLMs locally for privacy and cost savings.
- Edge deployments where low-latency local inference is required across a fleet of devices.
- Research and education on distributed model partitioning, peer networking, and heterogeneous inference.

## Technical Characteristics

- Dynamic model partitioning strategy (ring memory weighted partition) that splits models by device memory and network topology.
- Interoperable inference engines with optimizations for Apple Silicon and Linux environments.
- Extensible discovery and networking modules (UDP, Tailscale, GRPC) to support heterogeneous networks and transport mechanisms.
