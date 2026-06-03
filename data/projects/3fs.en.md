---
name: 3FS
slug: 3fs
homepage: null
repo: https://github.com/deepseek-ai/3fs
license: MIT
category: platform-infra
subCategory: data-platforms
tags:
  - Database
description: >-
  A high-performance distributed file system designed for AI training and inference workloads, optimizing parallel I/O
  and data locality to support large-scale training.
author: DeepSeek
ossDate: '2025-02-27T13:36:53.000Z'
featured: false
status: tracked
---
## Overview

3FS is a high-performance distributed file system designed for AI training and inference workloads. It focuses on improving parallel read/write performance and data locality to reduce I/O costs and accelerate large-scale training jobs.

## Key Features

- Data distribution and access strategies optimized for parallel training workloads.
- Support for high-concurrency I/O and scalable cluster deployments.
- Fault tolerance and observability features suitable for production environments.

## Use Cases

- Large-scale model training requiring high-throughput data loading and distributed I/O.
- Inference clusters with strict performance requirements for model and feature access.
- Backend storage supporting data-parallel training and dataset sharding strategies.

## Technical Details

- Optimized distributed I/O protocols and data layouts to reduce network and disk bottlenecks.
- Focus on scalability and fault tolerance, enabling horizontal cluster expansion.
- Monitoring and diagnostic tooling for operations and performance tuning.
