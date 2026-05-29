---
name: Skypilot
slug: skypilot
homepage: https://skypilot.ai/
repo: https://github.com/skypilot-org/skypilot
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Dev Tools
  - Workflow
description: Skypilot 是一个用于在云和本地集群上自动化分布式训练与推理任务的开源工具，简化资源调度与环境配置。
logo: ''
author: skypilot-org
ossDate: '2021-08-11T23:32:15.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

Skypilot 是由 skypilot-org 开发的开源云资源管理和任务调度工具，专为简化在多云和本地集群上运行 AI/ML 工作负载而设计。该工具提供了统一的接口来管理不同云提供商的资源，自动化环境配置、依赖安装和分布式任务编排，让开发者能够专注于模型开发而不是基础设施管理。Skypilot 特别适合需要在多个云平台之间灵活切换或需要成本优化的场景。

## 核心功能

Skypilot 提供了一键式的多云任务启动和管理能力，支持 AWS、GCP、Azure 等主流云平台以及本地 Kubernetes 集群。工具能够自动化环境准备，包括 Docker 镜像构建、依赖包安装、数据同步等繁琐工作。Skypilot 内置了智能的资源调度算法，能够根据任务需求自动选择最优的实例类型和可用区，最大化性能和成本效益。平台支持分布式训练任务的编排，能够自动配置多节点集群和网络通信。Skypilot 还提供了任务监控和日志收集功能，方便追踪训练进度和诊断问题。

## 技术特点

Skypilot 采用插件式的后端适配架构，可以轻松扩展支持新的云提供商和资源类型。工具提供了简洁的 CLI 命令行界面和 Python SDK，方便与现有的开发工作流集成。Skypilot 支持自动的 spot 实例管理，在实例被回收时能够自动迁移任务到新实例，显著降低云计算成本。平台内置了智能的缓存机制，能够复用已安装的环境和数据，加快后续任务的启动速度。Skypilot 还支持任务队列和依赖管理，可以编排复杂的 ML 工作流。

## 应用场景

Skypilot 特别适合需要在云端进行大规模模型训练的团队，能够快速试验不同的训练配置和超参数。对于需要成本优化的项目，Skypilot 的多云支持和 spot 实例管理能够显著降低训练成本。在异构集群上部署模型推理服务时，Skypilot 能够简化环境配置和服务编排。对于研究机构和初创公司，Skypilot 降低了使用云资源的门槛，无需深入了解各个云平台的复杂配置。在需要跨云平台迁移或多云部署的场景中，Skypilot 提供了统一的接口，避免了厂商锁定。
