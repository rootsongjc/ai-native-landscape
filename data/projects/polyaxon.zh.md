---
name: Polyaxon
slug: polyaxon
homepage: https://polyaxon.com/docs/
repo: https://github.com/polyaxon/polyaxon
license: Unknown
category: training-optimization
subCategory: observability-monitoring
tags:
  - Orchestration
  - Workflow
description: Polyaxon：用于管理、训练与监控大规模机器学习工作负载的 MLOps 平台。
logo: ''
author: Polyaxon
ossDate: '2016-12-26T12:48:47.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

Polyaxon 是一个为机器学习工作负载设计的 MLOps 平台，旨在帮助团队实现实验可复现、自动化与可扩展部署。

## 主要特性

- 作业编排与调度：基于容器的 DAG/工作流引擎，支持并行与分布式训练。
- 实验追踪与对比：集中记录训练日志、指标与资源使用，支持可视化仪表盘与比较视图。
- 自动化与超参搜索：内置网格搜索、随机搜索、Hyperband 与贝叶斯优化等调优策略。

## 使用场景

- 大规模分布式训练与超参数优化场景。
- 构建 CI/CD 驱动的模型训练流水线与实验再现流程。
- 团队资源共享与多租户模型训练管理。

## 技术特点

- 部署灵活：支持自托管（Kubernetes/Helm）、云托管或 Polyaxon 托管服务。
- CLI 与 SDK：提供 `polyaxon` CLI、polyaxonfile 配置与 SDK，便于集成与自动化。
- 模块化架构：包含子模块（如 hypertune、traceml）与丰富插件以扩展功能。
