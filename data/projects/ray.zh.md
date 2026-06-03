---
name: Ray
slug: ray
homepage: https://ray.io/
repo: https://github.com/ray-project/ray
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Orchestration
description: 用于扩展 AI 和 Python 应用的统一框架，为机器学习工作负载和通用并行计算提供分布式计算能力。
author: Ray Project
ossDate: '2016-10-25T19:38:30.000Z'
featured: false
status: tracked
---

## 简介

Ray 是由 Anyscale 开发的 AI 计算引擎，提供统一的分布式运行时，可将 Python 和机器学习工作负载从单机扩展到大规模集群。它将分布式系统的复杂性抽象化，让开发者专注于应用逻辑，同时自动处理调度、容错和资源管理。

## 主要特性

- 统一框架，支持任务并行和基于角色的编程模型，兼顾通用和 ML 专用分布式计算。
- 专用 AI 库，包括用于超参数调优的 Ray Tune、用于强化学习的 Ray RLlib 和用于生产模型服务的 Ray Serve。
- 自动伸缩功能，根据工作负载需求动态调整工作节点数量，优化云环境成本。
- Python 优先的 API，扩展现有应用只需极少的代码修改即可跨多节点集群运行。

## 使用场景

数据科学和 ML 团队使用 Ray 在集群上扩展训练、批量推理和强化学习工作负载而无需重写代码。它为推荐系统、大规模数据处理和分布式模型服务提供生产级管道，使组织能够从单机原型无缝过渡到集群规模的生产部署。

## 技术特点

Ray 提供基于 C++ 构建并以 Python 绑定的核心分布式运行时，透明地处理任务调度、对象管理和容错。其架构同时支持无状态任务和有状态角色，使复杂的 ML 管道能够高效运行。云自动伸缩功能与主要云服务商集成，不断增长的生态将 Ray 与 PyTorch、TensorFlow、Hugging Face 等主流 ML 框架连接，支持端到端工作流。
