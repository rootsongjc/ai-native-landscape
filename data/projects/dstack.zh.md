---
name: dstack
slug: dstack
homepage: https://dstack.ai
repo: https://github.com/dstackai/dstack
license: MPL-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Cloud Native
  - GPU
  - Kubernetes
  - Orchestration
  - Training
  - Inference
description: 面向训练、推理与智能体工作负载的厂商无关编排平台，支持在云、Kubernetes 与裸金属上调度 NVIDIA、AMD、TPU、Tenstorrent 等算力。
author: dstackai
ossDate: '2022-01-04'
featured: false
status: tracked
---

## 简介

dstack 是一款开源的 AI 开发编排平台，支持团队在任意云、Kubernetes 或裸金属基础设施上运行训练、微调、推理与智能体工作负载。它将算力 provisioning 抽象化，使来自多家云厂商以及 NVIDIA、AMD、TPU、Tenstorrent 等加速器的 GPU 资源可通过统一的声明式接口使用。

## 主要特性

- 厂商无关，支持公有云、Kubernetes 与本地裸金属
- 统一纳管 NVIDIA、AMD、TPU、Tenstorrent 等异构算力
- 以声明式 run 与 task 配置驱动训练、微调与推理服务
- 内置 fleet 与策略管理，便于成本控制与容量共享
- 通过容器化环境对主流框架开箱即用

## 使用场景

- 跨多家云厂商弹性申请 GPU 算力
- 无需编写大量基础设施胶水代码即可运行分布式训练与微调任务
- 在 Kubernetes 或裸金属上部署并弹性扩展推理服务
- 为 ML 团队集中管理算力策略与成本治理

## 技术特点

- 以声明式 YAML run 定义替代手工 provisioning 脚本
- 定位为厂商专属 GPU 平台的开源替代方案
- 与 Kubernetes 及 Slurm 风格的调度流程集成
- Python 原生 CLI 与 API，支持以编程方式编排工作负载
