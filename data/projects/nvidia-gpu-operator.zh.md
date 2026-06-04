---
name: NVIDIA GPU Operator
slug: nvidia-gpu-operator
homepage: https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/
repo: https://github.com/nvidia/gpu-operator
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Deployment
  - Inference
description: NVIDIA GPU Operator 在 Kubernetes 中自动部署、配置并管理 GPU 相关组件与驱动。
author: NVIDIA
ossDate: '2019-02-26T22:56:06Z'
featured: false
status: tracked
---

NVIDIA GPU Operator 是一个 Kubernetes 原生的 Operator，用于自动化部署、配置和生命周期管理集群节点上的 GPU 驱动、容器运行时、设备插件与监控组件。它将复杂的 GPU 供给过程转化为声明式、可重现的工作流，服务于训练与推理工作负载。

## 自动化 GPU 堆栈管理

- 自动化安装 NVIDIA 驱动、Container Toolkit 与 Device Plugin 组件，免除逐节点手动配置
- 通过声明式 Custom Resource 管理驱动与组件版本，简化集群范围内的升级与回滚操作
- 遵循 Kubernetes Operator 最佳实践，通过控制循环协调确保集群 GPU 堆栈状态一致

## 监控与调度

- 集成健康监控与指标导出器，在 Prometheus 等可观测性平台中提供 GPU 可见性
- 采用声明式配置，通过节点选择器与容忍度实现精确的 GPU 调度策略
- 利用 Kubernetes Custom Resource 与控制器模式管理驱动 DaemonSet 及节点级资源

## 训练与推理工作负载

- 在 Kubernetes 上运行 GPU 加速的深度学习训练集群与推理服务
- 管理异构 GPU 环境，统一驱动与运行时配置以降低运维开销
- 支持需要一致驱动与运行时配置的 GPU 密集型 HPC 作业与数据处理流水线
