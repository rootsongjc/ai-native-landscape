---
name: exo
slug: exo
homepage: https://exolabs.net
repo: https://github.com/exo-explore/exo
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
description: exo：在家中用日常设备组成 AI 集群，支持跨设备分布式推理与 ChatGPT 兼容 API。
author: exo-explore
ossDate: '2024-06-24T18:36:22.000Z'
featured: false
status: tracked
---
exo 能够将手机、笔记本电脑、树莓派等日常设备统一组成分布式 AI 推理集群，在前沿消费级硬件上运行大型 AI 模型。它通过自动设备发现、基于资源的动态模型分区和点对点连接机制，让用户在本地搭建可扩展的推理平台，并提供 ChatGPT 兼容的 API 以便快速集成。

## 分布式推理

- 将大型模型拆分至异构硬件上运行，突破单设备承载能力限制
- 自动设备发现与点对点连接，无需手动配置
- 兼容 MLX（Apple Silicon）和 tinygrad 等多种推理后端
- 支持 LLaMA、Mistral、LlaVA、DeepSeek 等主流模型

## ChatGPT 兼容 API

- 与 ChatGPT API 格式兼容的即插即用端点
- 轻松接入现有工具、智能体和工作流
- 无厂商锁定 — 完全在自己的硬件上运行

## 网络与分区

- 环形内存加权分区策略，根据设备内存和网络拓扑智能划分模型切片
- 针对 Apple Silicon 和 Linux 环境优化的互操作推理引擎
- 可扩展的发现模块与通信协议，支持 UDP、Tailscale、gRPC
- 设备加入或离开集群时支持动态重新分区
