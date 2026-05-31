---
name: llm-d
slug: llm-d
homepage: https://www.llm-d.ai/
repo: https://github.com/llm-d/llm-d
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - ML Platform
description: 用于在 Kubernetes 上进行高性能分布式推理的开源栈，提供调度、分发与性能优化路径。
logo: ''
author: llm-d
ossDate: '2025-04-29T18:28:17.000Z'
featured: false
status: tracked
---

## 简介

llm-d 是一个 Kubernetes 原生的分布式推理堆栈，提供可复用的“well‑lit paths”以便快速在不同硬件（GPU/TPU/XPU）上部署大模型。项目整合了 vLLM、Inference Gateway 与多种优化策略，目标是提升吞吐并降低首令牌延迟。

## 主要特性

- 智能调度：基于 KV 缓存感知和流量形态的调度策略以优化性能。
- 解耦式服务：支持 prefill/decode 分离等分离式部署以降低 TTFT（首次令牌时间）。
- 多加速器支持：涵盖 NVIDIA、AMD、TPU、Intel XPU 等硬件与相应优化路径。

## 使用场景

- 在数据中心或云上部署高并发的生成式模型服务与聊天机器人。
- 需要低延迟和高吞吐的推理流水线与批量推理任务。
- 作为参考架构用于研究分布式推理与缓存策略的效果与工程实践。

## 技术特点

- 与 vLLM、IGW 等上游组件集成，利用 NIXL 等高速传输实现高性能互联。
- 提供 Helm charts、指南与示例（well‑lit paths）以减少生产化配置成本。
- 采用面向工程的构建与 CI 流程，维护文档与示例以支持不同规模的部署。
