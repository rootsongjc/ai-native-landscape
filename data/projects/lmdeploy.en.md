---
name: LMDeploy
slug: lmdeploy
homepage: https://lmdeploy.readthedocs.io/en/latest/
repo: https://github.com/internlm/lmdeploy
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
description: >-
  LMDeploy is a toolkit for compressing, deploying and serving large language models, providing optimized inference
  engines, quantization and distribution features.
logo: ''
author: InternLM
ossDate: '2023-06-15T12:38:06.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

LMDeploy provides end-to-end model compression, quantization and deployment capabilities, including high-performance engines (TurboMind), continuous batching and distribution services for latency-sensitive production workloads.

## Key features

- High-performance inference engines (TurboMind and optimized PyTorch backends).
- Quantization and KV-cache optimization to reduce memory footprint and latency.
- Deployment and distribution for offline batch and online multi-host serving.

## Use cases

- Convert research models into production inference services with minimal effort.
- Serve high-concurrency, low-latency applications such as chat APIs.

## Technical notes

- Supports multiple backends and model formats; see project docs for compatible models and installation.
- Includes benchmarking and visualization tooling for performance evaluation.
