---
name: NVIDIA Device Plugin for Kubernetes
slug: nvidia-k8s-device-plugin
repo: https://github.com/NVIDIA/k8s-device-plugin
license: Apache-2.0
category: platform-infra
subCategory: gpu-virtualization-sharing
tags:
  - GPU Sharing
  - Device Plugin
  - Kubernetes
description: 'NVIDIA 官方 Kubernetes 设备插件，向 kubelet 暴露 GPU，并支持通过分时复用与 MPS 共享 GPU。'
author: NVIDIA
ossDate: '2017-10-10T21:31:02.000Z'
featured: false
status: tracked
---

## 简介

NVIDIA 设备插件以 DaemonSet 形式运行，把各节点上的 GPU 上报给 Kubernetes，使 Pod 可以申请 `nvidia.com/gpu` 资源。除整卡分配外，它还支持通过分时复用和 CUDA MPS 超分 GPU，并可将 MIG 设备暴露为可调度资源。

## 主要特性

- 将 GPU 暴露为 Kubernetes 扩展资源并跟踪健康状态
- 通过分时复用配置让多个 Pod 共享同一块 GPU
- 支持 CUDA MPS 并发共享
- 提供 MIG 策略以暴露硬件切分的 GPU 实例
- 内置 GPU Feature Discovery 用于节点打标

## 使用场景

- 在 Kubernetes 集群中启用 GPU 负载
- 让小型推理或 Notebook 负载共享 GPU

## 技术特点

- 使用 Go 实现 Kubernetes 设备插件 gRPC 接口
- 分时复用不提供共享 Pod 之间的显存与故障隔离
