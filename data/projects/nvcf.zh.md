---
name: NVIDIA Cloud Functions
slug: nvcf
homepage: https://docs.nvidia.com/nvcf/overview
repo: https://github.com/NVIDIA/nvcf
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - GPU
  - Inference
  - Serverless
  - Kubernetes
description: NVIDIA Cloud Functions（NVCF）是面向 GPU 加速推理和流式工作负载的 serverless 平台，支撑 build.nvidia.com。
author: NVIDIA
ossDate: '2026-04-01T19:22:14Z'
featured: false
status: tracked
---

## 简介

NVIDIA Cloud Functions（NVCF）是 NVIDIA 推出的 GPU 加速 serverless 平台，用于大规模部署、管理和运行推理、流式传输及其他 GPU 工作负载。它支持跨多区域 GPU 集群的请求路由、负载均衡、自动伸缩和混合 GPU 类型。build.nvidia.com 即基于 NVCF 构建。

## 主要特性

- 统一控制平面管理跨多区域 GPU 集群的函数生命周期。
- 面向推理、流式和自定义 GPU 工作负载的负载均衡路由。
- 多集群自动伸缩，支持从零到最大实例，兼容混合 GPU 类型。
- 支持 HTTP、流式和 gRPC 协议。
- 长驻函数和异步一次性任务两种工作负载模式。

## 使用场景

- 无需管理基础设施即可大规模部署 GPU 推理端点。
- 将批量推理、微调和评测作为异步任务运行。
- 跨多区域 GPU 集群流式传输实时 AI 响应。

## 技术特点

- 以 Kubernetes 服务运行，采用控制面、调用面、计算面三层分离架构。
- GPU 集群通过 NVIDIA Cluster Agent（NVCA）注册资源并管理工作负载执行。
- 提供 CLI、Go/Python 库、Helm 部署方案和可观测性仪表盘。
- 内置 AI 工具，提供 Agent Skills 和工作流辅助工具。
