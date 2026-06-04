---
name: KAI Scheduler
slug: kai-scheduler
homepage: https://github.com/NVIDIA/KAI-Scheduler
repo: https://github.com/nvidia/kai-scheduler
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
  - Orchestration
description: 一个 Kubernetes 原生的大规模 AI 工作负载调度器，为容器化 AI 训练与推理工作流提供高效的资源编排与优化能力。
author: NVIDIA
ossDate: '2025-02-26T20:39:42Z'
featured: false
status: tracked
---

KAI Scheduler 是 NVIDIA 开发的 Kubernetes 原生调度器，专为大规模 AI 工作负载的编排与优化而设计。它深度感知 AI 任务特性（如 GPU 资源需求、拓扑偏好、通信模式等），为容器化的训练与推理工作流提供卓越的资源利用率和调度质量。

## 主要特性

- AI 感知的任务放置能力，能够理解 GPU、网络拓扑和通信模式以优化任务分布
- 针对多 GPU、多节点的分布式训练与推理场景进行了专项优化
- 智能绑核、网络感知与动态分配策略最大化集群资源利用效率
- 基于 Kubernetes Scheduler Framework 的插件化架构，支持自定义调度策略
- 与 NVIDIA 的 CUDA、cuDNN、Triton 推理服务等 AI 技术原生协作

## 使用场景

- 在 Kubernetes 上运行大规模 AI 训练任务的数据中心和云平台，需要高效调度与资源隔离
- 推理服务集群的动态负载均衡与 GPU 资源共享
- AI 与常规应用混合部署时的优先级与资源管理
- 多租户 GPU 环境中需要公平资源分配和隔离的场景

## 技术特点

- 使用 Go 语言实现，无缝集成现有 Kubernetes 基础设施
- 插件化调度框架架构，支持自定义调度策略
- 采用 Apache 2.0 开源许可，由 NVIDIA 持续开发和支持
