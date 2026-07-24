---
name: Lupine
slug: lupine
homepage: https://lupine.sh
repo: https://github.com/lupinemachines/lupine
license: Apache-2.0
category: inference-serving
subCategory: gpu-acceleration
tags:
  - GPU
  - CUDA
  - 网络
description: 一种基于网络的 GPU over IP 桥接方案，让仅有 CPU 的机器也能像使用本地 GPU 一样挂载并调用远端机器上的 GPU。
author: Lupine Machines
ossDate: '2024-08-28T04:02:43Z'
featured: false
status: tracked
---

## 简介

Lupine 是一个 GPU over IP 桥接方案，能够将远端机器上的 GPU 当作本地显卡一样对外暴露。只有 CPU 的工作站与服务器可以通过网络透明地挂载并驱动远端 GPU，从而把算力与真正执行任务的机器解耦。

## 主要特性

- GPU over IP 桥接，将远端 GPU 透明地挂载到本地机器。
- 覆盖 cuBLAS、cuDNN 与 NVML 的 CUDA 运行时拦截，现有 GPU 代码无需修改即可运行。
- 提供网络透明的加速能力，客户端无需改动代码或安装专用驱动。
- 面向 MLOps 与推理场景，支持弹性、可解耦的 GPU 访问。

## 使用场景

- 为纯 CPU 开发机与 CI 运行器接入共享 GPU 资源池。
- 在多台主机之间解耦 GPU 算力，承接突发式推理与训练任务。
- 在没有本地加速卡的边缘或机房节点上运行需要 GPU 的工作负载。

## 技术特点

- 通过拦截 CUDA 软件栈将计算重定向到远端 GPU，应用无需重写。
- 支持核心 CUDA 库（cuBLAS、cuDNN）与管理 API（NVML），保证兼容性。
- 基于标准网络构建，使远端 GPU 在宿主操作系统层面表现为本地设备。
