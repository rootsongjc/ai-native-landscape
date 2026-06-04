---
name: AIBrix
slug: aibrix
homepage: https://aibrix.readthedocs.io/latest/
repo: https://github.com/vllm-project/aibrix
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Middleware
  - Orchestration
description: AIBrix 是一个面向大规模 LLM 推理的云原生基础设施框架，提供高可扩展性与成本效率的推理组件。
author: vllm-project
ossDate: '2024-06-10T23:06:10.000Z'
featured: false
status: tracked
---
## 简介

AIBrix 是一个面向 GenAI 推理的成本高效、可插拔基础设施框架，专为大规模 LLM 部署设计。作为 vLLM 项目的一部分，它提供路由、自动伸缩、分布式推理和 KV 缓存等生产级组件，便于在 Kubernetes 上构建可扩展的 LLM 服务。

## 主要特性

- 高密度 LoRA 管理与模型适配，支持轻量级权重适配与部署
- LLM 网关与智能路由，支持多模型与多副本流量调度
- 专为推理工作负载定制的自动扩缩器，按需调度资源以节省成本
- 支持分布式推理、分布式 KV 缓存与异构 GPU 调度

## 使用场景

企业级 LLM 推理平台与服务部署。多模型混合部署与成本优化场景。研究与工程场景下的大规模推理基线搭建与评估，基于 Kubernetes 运行。

## 技术特点

使用 Go 与 Python 实现，专为 Kubernetes 原生部署设计。支持分布式推理、分布式 KV 缓存与异构 GPU 调度以最大化吞吐与成本效率。采用 Apache-2.0 开源许可，提供完善的文档与社区支持。
