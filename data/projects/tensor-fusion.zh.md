---
name: Tensor Fusion
slug: tensor-fusion
homepage: https://tensor-fusion.ai
repo: https://github.com/NexusGPU/tensor-fusion
license: Apache-2.0
category: platform-infra
subCategory: gpu-virtualization-sharing
tags:
  - GPU Virtualization
  - GPU Sharing
  - Kubernetes
description: '面向 Kubernetes 的 GPU 虚拟化与池化方案，提供分数级 GPU、超分和 GPU 感知的弹性伸缩。'
author: NexusGPU
ossDate: '2024-11-12T23:49:48.000Z'
featured: false
status: tracked
---

## 简介

Tensor Fusion 在 Kubernetes 集群中对 GPU 进行虚拟化与池化以提升利用率。负载可以申请 GPU 算力和显存的一部分，由系统调度到共享资源池，并随需求弹性调整分配量。

## 主要特性

- 带算力与显存上限的分数级 GPU 分配
- 跨节点的 GPU 池化与装箱调度
- 显存超分与 GPU 资源自动伸缩
- 远程 GPU 共享，负载可使用其他节点上的 GPU

## 使用场景

- 把大量小型推理负载整合到更少的 GPU 上
- 运营带精细配额的多租户 GPU 集群

## 技术特点

- 以 Go 编写的 Kubernetes Operator 与调度器扩展
- 部分高级隔离能力属于商业版
