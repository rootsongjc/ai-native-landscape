---
name: NVIDIA AI Cluster Runtime
slug: aicr
homepage: https://docs.nvidia.com/aicr/
repo: https://github.com/NVIDIA/aicr
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - GPU
  - Kubernetes
  - Cloud Native
  - Infrastructure
description: NVIDIA AI Cluster Runtime（AICR）生成经过优化、验证和可复现的 GPU 加速 Kubernetes 集群配置，用于 AI 训练和推理环境搭建。
author: NVIDIA
ossDate: '2026-01-30T19:02:59Z'
featured: false
status: tracked
---

## 简介

NVIDIA AI Cluster Runtime（AICR）让 GPU 加速 Kubernetes 集群的搭建变得简单。它将 NVIDIA 验证过的驱动、Operator、内核和系统配置组合捕获为版本锁定的 recipe，生成可复现的部署产物，支持 Helm、Argo CD、Flux 和 Helmfile。解决了 AI 基础设施最头疼的问题——环境一致性。

## 主要特性

- Recipe 引擎生成由 NVIDIA 验证的版本锁定 GPU K8s 配置。
- 多部署器产物，支持 Helm、Argo CD、Flux 和 Helmfile。
- 多阶段验证覆盖部署、性能（训练和推理）和一致性。
- 配置漂移检测，对比集群快照发现配置变化。
- 供应链安全：SLSA Level 3 来源证明、签名 SBOM 和 Cosign 认证。

## 使用场景

- 几分钟内搭建经过验证的 GPU K8s 集群用于 AI 训练或推理。
- 确保跨团队和跨区域的 GPU 环境可复现。
- 检测并修复生产 GPU 集群的配置漂移。
- 将 GPU 基础设施配置集成到 CI/CD 和 GitOps 流水线。

## 技术特点

- 单一 CLI 二进制文件覆盖全流程：快照、配方、打包、验证、校验、差异对比。
- 支持 EKS、GKE、AKS、Kind 等，适配 H100、B200、GB200、A100 加速器。
- 可组合 Overlay 架构：基础默认值逐层叠加云、加速器、OS 和工作负载调优。
- 提供 Go SDK 支持进程内集成，无需子进程或 REST 调用。
