---
name: AIBrix
slug: aibrix
homepage: https://aibrix.readthedocs.io/latest/
repo: https://github.com/vllm-project/aibrix
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Middleware
  - Orchestration
description: AIBrix 是一个面向大规模 LLM 推理的云原生基础设施框架，提供高可扩展性与成本效率的推理组件。
logo: ''
author: vllm-project
ossDate: '2024-06-10T23:06:10.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

AIBrix 是面向大规模 LLM 推理的云原生基础设施框架，旨在为企业提供可扩展、成本高效的推理部署能力。它包含路由、自动伸缩、分布式推理和 KV 缓存等构件，便于在 Kubernetes 上构建生产级 LLM 服务。

## 主要特性

- 高密度 LoRA 管理与模型适配，方便权重适配与部署。
- LLM 网关与路由，支持多模型与多副本流量调度。
- 适配自适应伸缩的推理自动扩缩器，按需调度资源以节省成本。

## 使用场景

- 企业级 LLM 推理平台与服务部署。
- 多模型混合部署与成本优化场景。
- 研究与工程场景下的大规模推理基线搭建与评估。

## 技术特点

- 使用 Go 与 Python 等语言实现，适配 Kubernetes 原生部署。
- 支持分布式推理、分布式 KV 缓存与异构 GPU 调度以提升吞吐与成本效率。
- 开源许可 Apache-2.0，提供完善的文档与社区支持。
