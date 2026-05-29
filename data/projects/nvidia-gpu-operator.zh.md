---
name: NVIDIA GPU Operator
slug: nvidia-gpu-operator
homepage: https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/
repo: https://github.com/nvidia/gpu-operator
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
description: NVIDIA GPU Operator 在 Kubernetes 中自动部署、配置并管理 GPU 相关组件与驱动。
logo: ''
author: NVIDIA
ossDate: '2019-02-26T22:56:06Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

NVIDIA GPU Operator 是一个面向 Kubernetes 的 Operator，用于自动化部署与管理 GPU 驱动、容器运行时、GPU 插件与监控组件。它将复杂的 GPU 安装、驱动版本管理与各类 Kubernetes 资源编排成可重现的工作流，帮助集群管理员在多节点环境中一致性地开启 GPU 能力，从而支持基于 GPU 的训练与推理工作负载。

## 主要特性

- 自动化部署：自动安装 NVIDIA 驱动、Container Toolkit、Device Plugin 等组件，减少手动配置工作量。
- 版本管理：通过声明式 CR（Custom Resource）控制驱动与组件的版本，便于回滚与升级策略。
- 健康检测与监控：集成监控导出器，便于在 Prometheus 等工具中观测 GPU 状态与指标。
- Kubernetes 原生：以 Operator 模式运行，遵循 Kubernetes 的控制回路与声明式管理模型。

## 使用场景

适用于需要在 Kubernetes 上运行 GPU 加速工作负载的场景，例如深度学习训练集群、推理服务、HPC 作业以及需要 GPU 的数据处理流水线。对多租户集群或混合 GPU 型号环境，GPU Operator 能统一驱动与运行时配置，降低运维复杂度。

## 技术特点

GPU Operator 利用 Kubernetes 的 Custom Resource 和控制器模式，封装驱动安装、DaemonSet、Daemon 与 StatefulSet 等资源。它强调声明式配置，并结合节点选择器与容忍度实现对特定节点的 GPU 调度。更多细节与安装说明请参考官方文档：[NVIDIA GPU Operator 文档](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/)。
