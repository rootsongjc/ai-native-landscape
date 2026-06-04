---
name: Mooncake
slug: mooncake
homepage: null
repo: https://github.com/kvcache-ai/mooncake
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Disaggregation
  - Inference
description: >-
  Mooncake is a KVCache-centric disaggregated architecture for LLM serving, providing a high-performance Transfer Engine
  and distributed KVCache storage.
author: kvcache-ai
ossDate: '2024-06-25T05:21:05.000Z'
featured: false
status: tracked
---

Mooncake is a KVCache-centric disaggregated architecture for LLM serving. It separates the prefill and decode clusters and leverages underutilized CPU/DRAM/SSD resources to improve throughput and resource utilization for large-model inference. The project includes a high-performance Transfer Engine, P2P Store and Mooncake Store, and provides integrations with systems like vLLM and SGLang.

## Key features

- Transfer Engine: unified data transfer interface supporting TCP, RDMA, CXL/shared-memory, NVMe-oF, optimized for low latency and high bandwidth in AI workloads.
- Mooncake Store: distributed KVCache storage for LLM inference, supporting multi-replica, striping and parallel I/O for large-object performance.
- P2P Store: decentralized temporary object sharing, useful for checkpoint transfer and avoiding single-node bandwidth saturation.
- Integration: integrations with vLLM, SGLang and LMCache to enable disaggregated prefill-decode scenarios.

## Use cases

- Distributed large-scale LLM online inference and resource orchestration.
- High bandwidth, low latency KVCache sharing and migration scenarios.
- Research and reproducing experiments from the Mooncake paper and benchmark traces (open-sourced).

## Technical details

- Languages & bindings: primarily C++ with Python bindings and examples; optional CUDA support.
- Deployment & requirements: RDMA networks recommended for best performance; Docker images and pip package (mooncake-transfer-engine) are available.
- Performance: Transfer Engine achieves very high transfer bandwidth under high-bandwidth networks (e.g., 4×200 Gbps), significantly outperforming TCP-based transports.
- Resources: See the project website and documentation at <https://kvcache-ai.github.io/Mooncake/> for more details.

For more information, refer to the project repository and technical report.
