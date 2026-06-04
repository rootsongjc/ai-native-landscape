---
name: KubeRay
slug: kuberay
homepage: https://docs.ray.io/en/latest/cluster/kubernetes/index.html
repo: https://github.com/ray-project/kuberay
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Dev Tools
  - Runtime
description: KubeRay 是 Ray 官方的开源 Kubernetes operator，用于简化在 Kubernetes 上部署与管理 Ray 应用。
author: Ray Project
ossDate: '2020-10-29T20:42:00Z'
featured: false
status: tracked
---

KubeRay 是 Ray 官方开源的 Kubernetes operator，专为在 Kubernetes 上运行分布式 AI/ML 工作负载而设计。它提供 RayCluster、RayJob 和 RayService 等专用自定义资源，简化了集群生命周期管理、弹性扩缩容和高可用配置。

## 主要特性

- 提供 RayCluster、RayJob 和 RayService 等 CRD，自动管理集群生命周期与弹性扩缩容
- 与 Kubernetes 生态深度集成，支持 Prometheus、Grafana、Ingress 和队列系统等
- `kubectl ray` 插件与实验性 Dashboard，简化生产级工作负载的日常运维
- 发布 Helm chart 与完整示例，便于快速部署和配置
- 支持生产级训练与推理工作负载，提供高可用配置方案

## 使用场景

- 在 Kubernetes 集群上运行的大规模分布式训练作业
- 利用 Ray 分布式计算能力的批量数据处理和 ETL 流水线
- 需要弹性扩缩容以应对流量波动的 LLM 在线推理服务
- ML 平台团队将 Ray 工作负载集成到现有 CI/CD、监控与调度系统中

## 技术特点

- 主要使用 Go 语言实现，采用 Kubernetes Operator 模式进行可靠的集群管理
- 发布 Helm chart 与完整示例和快速入门指南
- 官方用户文档托管在 Ray 文档站点上，社区活跃且支持完善
