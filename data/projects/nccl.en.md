---
name: NCCL
slug: nccl
homepage: https://developer.nvidia.com/nccl
repo: https://github.com/nvidia/nccl
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - AI Kernel Library
  - Inference
description: High-performance collective communication primitives for GPUs, optimized for PCIe, NVLink, NVSwitch and RDMA networks.
logo: ''
author: NVIDIA
ossDate: '2015-06-01T00:00:00.000Z'
featured: false
status: tracked
---

## Introduction

NCCL (NVIDIA Collective Communication Library) provides high-performance collective communication primitives for GPUs, including all-reduce, all-gather, reduce, broadcast and reduce-scatter, as well as point-to-point patterns. It is optimized for high bandwidth across PCIe, NVLink, NVSwitch and RDMA-based networks, enabling efficient data exchange and model-parallel communication across single-node and multi-node GPU configurations.

## Key features

- High bandwidth communication optimized for GPU interconnects.
- Comprehensive primitives for distributed training and communication.
- Scalable across an arbitrary number of GPUs; supports single- and multi-process (MPI) workflows.
- Integration examples and test suites (e.g., nccl-tests) and straightforward build scripts for packaging.

## Use cases

- Distributed training: as a low-level communication layer for gradient aggregation and parameter synchronization in data/model parallel training.
- Multi-GPU inference: coordinate data movement for model-parallel or distributed inference at scale.
- High-performance computing: scientific and engineering workloads that require low-latency, high-throughput GPU communication.

## Technical characteristics

- GPU-centric optimizations for CUDA and interconnect topologies.
- Topology-aware routing to exploit NVLink/NVSwitch when available.
- Lightweight C/C++ API and Make/CMake-based build and packaging.
