---
name: AMD GPU Operator
slug: amd-gpu-operator
homepage: https://instinct.docs.amd.com/projects/gpu-operator
repo: https://github.com/ROCm/gpu-operator
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - Device Plugin
  - Heterogeneous Computing
  - Kubernetes
description: 'Kubernetes Operator，为 AMD Instinct 与 Radeon GPU 自动完成驱动安装、设备插件部署、节点打标与指标采集。'
author: AMD
ossDate: '2023-11-14T07:02:56.000Z'
featured: false
status: tracked
---

## 简介

AMD GPU Operator 简化了 AMD Instinct 与 Radeon GPU 加速器在 Kubernetes 集群中的部署和管理。它打包了在 AMD 硬件上运行 GPU 负载所需的组件，对 AMD GPU 的作用相当于 NVIDIA GPU Operator 之于 NVIDIA GPU。

## 主要特性

- 自动安装 GPU 驱动并管理其生命周期
- 提供设备插件与 DRA 驱动两种分配路径
- 为节点标注 AMD GPU 能力
- 设备指标导出与健康监控
- 通过 Device Config Manager 配置 GPU 分区

## 使用场景

- 在 Kubernetes 中使用 AMD GPU 运行 AI 负载
- 运维 AMD 与 NVIDIA 加速器混合的集群

## 技术特点

- 基于 Node Feature Discovery 与 Kernel Module Management Operator 构建
- 要求 Kubernetes 1.29 及以上版本
