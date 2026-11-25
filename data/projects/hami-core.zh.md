---
name: HAMi-core
slug: hami-core
homepage: https://project-hami.io
repo: https://github.com/Project-HAMi/HAMi-core
license: Apache-2.0
category: platform-infra
subCategory: gpu-virtualization-sharing
tags:
  - GPU Virtualization
  - GPU Sharing
  - CUDA
description: '透明的容器内 GPU 资源控制器，通过拦截 CUDA 调用强制执行显存与算力限制，无需修改应用或驱动。'
author: Project-HAMi
ossDate: '2024-01-23T09:36:22.000Z'
featured: false
status: tracked
---

## 简介

HAMi-core 是 HAMi 背后的容器内隔离库。它以共享库（`libvgpu.so`）形式加载到容器中，拦截 CUDA 与 NVML 调用，为每个容器强制执行 GPU 显存和算力上限，从而实现带硬限制的 GPU 共享。

## 主要特性

- 按容器设置设备显存硬上限
- 通过时间片控制限制算力（GPU 利用率）
- 虚拟化设备视图，容器内工具看到的是受限后的资源
- 适用于未修改的应用和原生 NVIDIA 驱动

## 使用场景

- 与 HAMi 配合在 Kubernetes 上实现 vGPU 共享
- 为普通 Docker 容器施加 GPU 限制

## 技术特点

- 通过 `LD_PRELOAD` 注入的 C 语言库，劫持 CUDA 与 NVML 接口
- 属于用户态隔离，不依赖 MIG 等硬件切分
