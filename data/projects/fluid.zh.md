---
name: Fluid
slug: fluid
homepage: https://fluid-cloudnative.github.io/
repo: https://github.com/fluid-cloudnative/fluid
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Cloud Native
  - Kubernetes
  - 数据抽象
  - AI 框架
  - 分布式缓存
description: 面向 Kubernetes 上大数据/AI 应用的弹性数据抽象与加速层，通过分布式缓存实现高效数据访问。
author: CNCF
ossDate: '2020-07-11T22:57:18.000Z'
featured: false
status: tracked
---

## 简介

Fluid 是 CNCF 生态下的 Kubernetes 原生数据编排系统。它将分布式缓存引擎（如 Alluxio、JuiceFS）集成为 Kubernetes 原生资源，使数据集能够像一等公民一样被缓存、迁移和管理，从而加速大数据和 AI 工作负载的数据访问。

## 主要特性

- **数据集抽象**：将数据集建模为 Kubernetes CRD，支持声明式数据管理、版本控制和缓存策略
- **多缓存引擎支持**：可插拔运行时架构，支持 Alluxio、JuiceFS、GooseFS 等多种分布式缓存后端
- **弹性伸缩**：根据数据访问模式和资源可用性自动扩缩容缓存 Worker 节点
- **数据亲和调度**：将计算 Pod 与缓存数据协同调度，最小化网络传输，加速训练任务

## 使用场景

- **AI/ML 训练加速**：在 GPU 节点附近缓存训练数据集，消除数据加载瓶颈
- **Kubernetes 上大数据**：以加速数据访问方式运行 Spark、Presto 等分析框架，无需修改应用代码
- **多租户数据共享**：在团队和工作负载间共享缓存数据集，支持细粒度访问控制

## 技术特点

- CNCF 沙箱项目，基于 Kubernetes Operator 模式构建，使用自定义控制器和 CRD
- 支持数据预取、懒加载和分层缓存淘汰策略
