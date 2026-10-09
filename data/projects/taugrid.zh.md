---
name: TauGrid
slug: taugrid
homepage: https://azure.github.io/taugrid/
repo: https://github.com/Azure/taugrid
license: MIT
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Cloud Native
  - Kubernetes
  - GPU
  - Distributed Training
  - Scheduling
  - Observability
description: 云原生 AI 基础设施，在 GPU Kubernetes 集群上运行、调度并监控 AI 工作负载，覆盖数据准备、分布式训练、微调与推理。
author: Azure
ossDate: '2026-07-24'
featured: false
status: tracked
---

## 简介

TauGrid 是 Azure 开源的云原生 AI 基础设施，平台团队通过一次 Helm 安装即可在 Kubernetes 上运行 GPU 工作负载，无需逐个拼装组件。项目覆盖数据准备、分布式训练、微调与推理的完整工作负载生命周期，研究人员通过 CLI 提交和管理任务，无需直接操作 Kubernetes。项目在 AKS 上完成端到端测试，目标是支持无 Azure 依赖的云上和本地 Kubernetes 环境。

## 主要特性

- `tau` CLI 支持在终端或 CI 流水线中提交、监控和管理 AI 工作负载
- 基于 Kueue 的工作负载排队，提供公平共享调度、配额管理与优先级准入
- 通过 KubeRay 托管 Ray 集群，支撑分布式训练与推理
- 节点级 GPU 健康监控，硬件故障时自动排水（drain）节点
- 集成集群、GPU 与工作负载的指标、日志和仪表盘

## 使用场景

- 平台团队在 Kubernetes 上一键安装完整的 GPU 调度与可观测性技术栈
- 研究人员通过声明式 `tau.yaml` 提交分布式训练或微调任务，无需 K8s 专业知识
- GPU 集群需要自动化硬件故障检测与节点排水
- 共享 GPU 集群需要配额管理与公平共享准入控制

## 技术特点

- 控制平面组合开放的 Kubernetes 原生组件：Kueue 负责准入、KubeRay 负责 Ray 编排、GPU 健康监控器负责节点诊断
- 工作负载以声明式 YAML 定义（`tau run --config tau.yaml`），通过 `resources.gpu` 声明 GPU 资源需求
- 以单一 Helm Chart 从 Microsoft Container Registry 安装，第一方镜像拆分为 tau、portal 与核心控制器三个仓库
- GPU 健康监控器执行节点级诊断，硬件故障时自动排水节点，提供全集群健康可见性
- 可观测性管道覆盖集群、GPU 与工作负载三层；Kusto/Azure Data Explorer 集成目前仍为 Azure 专属
