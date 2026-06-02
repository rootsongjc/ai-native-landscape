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
status: tracked
---

## 简介

KubeRay 是 Ray 官方开源的 Kubernetes operator，专为在 Kubernetes 上运行分布式 AI/ML 工作负载而设计。它提供 RayCluster、RayJob 和 RayService 等专用自定义资源，简化了集群生命周期管理、弹性扩缩容和高可用配置。

## 主要特性

KubeRay 提供 RayCluster、RayJob 和 RayService 等 CRD，自动管理集群生命周期与弹性扩缩容。它与 Kubernetes 生态深度集成，支持 Prometheus、Grafana、Ingress 和队列系统等，并提供 `kubectl ray` 插件与实验性 Dashboard，简化生产级训练与推理工作负载的日常运维。

## 使用场景

KubeRay 适用于在 Kubernetes 上运行 Ray 工作负载的组织，包括大规模分布式训练作业、批量数据处理、LLM 在线推理以及需要弹性扩缩容的服务。团队可将其与现有 CI/CD、监控与调度系统集成，构建可观测且高可用的 ML 平台。

## 技术特点

项目主要使用 Go 语言实现，采用 Kubernetes Operator 模式，发布 Helm chart 与完整示例以便快速部署。仓库包含运维脚本、开发文档和快速入门指南，官方用户文档托管在 Ray 文档站点上。
