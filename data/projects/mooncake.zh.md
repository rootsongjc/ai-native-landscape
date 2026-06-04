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
description: Mooncake 是一个以 KVCache 为中心的分布式 LLM 服务架构，提供高性能的 Transfer Engine 与分布式 KVCache 存储。
author: kvcache-ai
ossDate: '2024-06-25T05:21:05.000Z'
featured: false
status: tracked
---

Mooncake 是一个以 KVCache 为中心的分布式推理服务架构，旨在通过分离 prefill 与 decode 集群并利用未充分利用的 CPU/DRAM/SSD 资源，显著提升大模型推理的吞吐率和资源利用率。该项目包含高性能的 Transfer Engine、P2P Store 与 Mooncake Store，并提供与 vLLM、SGLang 等推理系统的集成方案。

## 主要特性

- Transfer Engine：统一的数据传输接口，支持 TCP、RDMA、CXL/shared-memory、NVMe-oF 等协议，针对大规模 AI 工作负载优化传输延迟与带宽利用率。
- Mooncake Store：面向 LLM 推理的分布式 KVCache 存储，支持多副本、条带化传输与并行 I/O，提高大对象读写性能。
- P2P Store：去中心化的临时对象共享方案，适用于 checkpoint 传输等场景，避免单节点带宽瓶颈。
- 集成生态：与 vLLM、SGLang、LMCache 等系统集成，支持分布式 prefill-decode 解耦场景。

## 适用场景

- 大规模 LLM 在线推理的分布式部署与资源调度。
- 需要高带宽、低延迟传输的 KVCache 共享与迁移场景。
- 研究/复现 Mooncake 论文中的实验和基准测试（论文与数据集已开源）。

## 技术细节

- 语言与实现：主要以 C++ 为主，包含 Python 绑定与示例，支持 CUDA 加速（可选）。
- 部署与依赖：推荐 RDMA 网络以发挥最佳性能；同时提供 Docker 镜像与 pip 包（mooncake-transfer-engine）。
- 性能：在高带宽网络（例如 4×200 Gbps）下，Transfer Engine 可达到极高的传输带宽，显著优于传统 TCP 实现。
- 资源与文档：详见项目主页与文档站点（<https://kvcache-ai.github.io/Mooncake/>）。
