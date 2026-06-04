---
name: Dynamo
slug: dynamo
homepage: https://docs.nvidia.com/dynamo/latest
repo: https://github.com/ai-dynamo/dynamo
license: MIT
category: inference-serving
subCategory: model-serving
tags:
  - Deployment
  - LLM
description: 面向数据中心级分布式推理的开源框架，优化多 GPU / 多节点场景下的大模型推理与调度，支持多种引擎（vLLM、SGLang、TensorRT-LLM）。
author: ai-dynamo
ossDate: '2025-03-03T18:40:07.000Z'
featured: false
status: tracked
---
## 简介

Dynamo（由 NVIDIA 社区维护）是一个面向大规模推理的开源框架，解决多 GPU/多节点推理编排、KV 缓存管理和高吞吐低延迟的问题。它设计用于支持不同的推理引擎与部署拓扑，适合需要大规模在线推理的场景。

## 主要特性

- 支持多种后端引擎（vLLM、SGLang、TensorRT-LLM 等）
- 分布式/分离式（disaggregated）prefill 与 decode 推理策略
- KV-aware 路由与缓存卸载以提升吞吐与降低延迟
- 提供部署与基准工具，支持 Kubernetes 与本地测试环境

## 使用场景

- 多节点多 GPU 的在线大模型推理服务
- 需要细粒度调度与 KV 缓存管理以降低成本的高并发场景
- 在 GPU 集群上评估推理架构或进行性能基准测试

## 技术特点

- 用 Rust 实现核心以保证高性能，提供 Python 扩展与工具链
- 依赖 NATS 与 etcd 进行服务发现与协调
- 丰富的部署示例与引擎适配器，支持生产级集成
