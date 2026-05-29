---
name: KubeRay
slug: kuberay
homepage: https://docs.ray.io/en/latest/cluster/kubernetes/index.html
repo: https://github.com/ray-project/kuberay
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Dev Tools
  - Runtime
description: KubeRay 是 Ray 官方的开源 Kubernetes operator，用于简化在 Kubernetes 上部署与管理 Ray 应用。
logo: ''
author: Ray Project
ossDate: '2020-10-29T20:42:00Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

KubeRay 是 Ray 官方维护的开源 Kubernetes operator，用于在 Kubernetes 上部署、扩缩容与管理 Ray 应用（包括 RayCluster、RayJob、RayService 等自定义资源）。它将 Ray 的分布式计算能力与 Kubernetes 的调度与生态整合，简化训练、批量推理与在线推理的运维工作。更多用户文档托管在 Ray 官方文档站点，开发者可在仓库中找到开发与维护相关资料。

## 主要特性

- 提供 RayCluster、RayJob、RayService 等 CRD，自动管理集群生命周期与弹性扩缩容。
- 支持与 Kubernetes 生态集成（Prometheus、Grafana、Ingress、Queue 系统等）。
- 提供 `kubectl ray` 插件与实验性 Dashboard，简化常见运维操作。
- 支持在云原生环境下运行训练与推理工作负载，包括大规模模型服务与批处理任务。

## 使用场景

适用于需要在 Kubernetes 上运行 Ray 分布式任务的场景：大规模训练作业、批量数据处理、LLM 在线推理、以及需要弹性扩缩容的生产推理服务。企业团队可将 KubeRay 与现有 CI/CD、监控与调度系统集成以实现可观测与高可用的 AI 平台。

## 技术特点

项目以 Go 为主实现，采用 Operator 模式并发布 Helm chart 与示例，仓库包含运维脚本、开发文档与示例。官方文档与快速入门请参见 Ray 文档站点：[Ray Kubernetes 文档](https://docs.ray.io/en/latest/cluster/kubernetes/index.html)。
