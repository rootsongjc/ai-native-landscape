---
name: KAI Scheduler
slug: kai-scheduler
homepage: https://github.com/NVIDIA/KAI-Scheduler
repo: https://github.com/nvidia/kai-scheduler
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
  - Orchestration
description: 一个 Kubernetes 原生的大规模 AI 工作负载调度器，为容器化 AI 训练与推理工作流提供高效的资源编排与优化能力。
logo: ''
author: NVIDIA
ossDate: '2025-02-26T20:39:42Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

KAI Scheduler 是 NVIDIA 推出的 Kubernetes 原生调度器，专为大规模 AI 工作负载的编排与优化而设计。它通过深度感知 AI 任务特性（如 GPU 资源需求、拓扑偏好、通信开销等），提升 Kubernetes 集群中 AI 训练与推理任务的资源利用效率与调度决策质量。该项目采用 Go 语言实现，与 Kubernetes 控制平面原生集成，为容器编排（Orchestration）场景中的 AI 工作流提供生产级能力。

## 主要特性

- Kubernetes 原生设计：作为标准 Kubernetes 调度器扩展，支持即插即用部署。
- AI 感知调度：理解 GPU、网络拓扑、通信模式等，优化 AI 任务的放置与并行策略。
- 大规模支持：针对多卡、多节点的分布式训练与推理工作负载进行专项优化。
- 资源效率：通过智能绑核、网络感知与动态分配，最大化集群资源利用率。

## 使用场景

- 数据中心或云平台在 Kubernetes 上运行大规模 AI 训练任务，需要高效调度与资源隔离。
- 推理服务集群的动态负载均衡与 GPU 资源共享。
- 混合型工作负载（AI 与常规应用）在同一集群中的优先级与资源管理。

## 技术特点

- 基于 Kubernetes Scheduler Framework 扩展，采用插件化架构，易于定制与演进。
- 使用 Go 语言实现，可直接集成到现有 Kubernetes 基础设施。
- 开源发布（Apache 2.0 许可证），支持社区贡献与反馈。
- 可与 NVIDIA 其他 AI 与容器技术（如 CUDA、cuDNN、Triton 推理服务）无缝协作。
