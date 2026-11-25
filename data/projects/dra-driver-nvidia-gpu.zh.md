---
name: DRA Driver for NVIDIA GPUs
slug: dra-driver-nvidia-gpu
homepage: https://dra-driver-nvidia-gpu.sigs.k8s.io
repo: https://github.com/kubernetes-sigs/dra-driver-nvidia-gpu
license: Apache-2.0
category: platform-infra
subCategory: gpu-virtualization-sharing
tags:
  - GPU Sharing
  - Kubernetes
  - Dynamic Resource Allocation
description: '面向 NVIDIA GPU 的 Kubernetes 动态资源分配（DRA）驱动，支持基于声明的分配与灵活的 GPU 共享。'
author: Kubernetes SIGs
ossDate: '2023-04-17T19:12:49.000Z'
status: tracked
---

## 简介

该驱动为 NVIDIA GPU 实现了 Kubernetes 动态资源分配 API。负载不再只申请不透明的整数数量，而是通过 ResourceClaim 描述所需设备，从而支持按属性选择设备，并在容器与 Pod 之间共享设备。

## 主要特性

- 基于 ResourceClaim 申请 GPU，可按型号、显存等属性筛选
- 通过共享声明让多个容器或 Pod 共用一块 GPU
- 可按声明配置分时复用、MPS 等共享方式
- 支持将 MIG 设备作为可分配资源

## 使用场景

- 以 DRA 替代设备插件模型管理 GPU
- 表达精细的 GPU 需求并受控共享

## 技术特点

- 基于 Kubernetes DRA 结构化参数模型，通过 CDI 注入设备
- 在 Kubernetes SIGs 下开发，最初发起于 NVIDIA 组织
