---
name: exo
slug: exo
homepage: https://exolabs.net
repo: https://github.com/exo-explore/exo
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
description: exo：在家中用日常设备组成 AI 集群，支持跨设备分布式推理与 ChatGPT 兼容 API。
logo: ''
author: exo-explore
ossDate: '2024-06-24T18:36:22.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

exo 是一个旨在将多台普通设备（如手机、电脑、树莓派）统一为分布式 AI 推理集群的开源项目。它通过自动发现设备、按资源动态分区模型与点对点连接等机制，让用户在本地搭建可扩展的推理平台，并提供 ChatGPT 兼容的 API 以便快速集成。

## 主要特性

- 跨设备分布式推理：支持将大型模型按设备内存自动分区，提升可运行模型的规模。
- 自动设备发现与点对点连接：无需复杂配置，设备可自动联通组成集群。
- 多推理引擎：兼容 MLX、tinygrad 等推理后端，并支持多种模型（LLaMA、Mistral、LlaVA 等）。
- ChatGPT 兼容 API：内置兼容 OpenAI 接口的 HTTP API，便于把本地推理接入现有应用。

## 使用场景

- 在家庭或小型办公环境利用闲置设备组合资源，运行开源大模型以保护数据隐私与降低云成本。
- 将推理能力下沉到边缘设备，构建低延迟的本地服务与实验平台。
- 教学与研究场景：用于探索分布式推理、模型分区与多设备协作的系统设计。

## 技术特点

- 动态模型分区：根据网络拓扑与设备资源智能划分模型切片，支持环形内存加权分区策略。
- 多后端互操作：实现 MLX 与 tinygrad 的互操作，便于在 Apple Silicon、Linux 等平台上运行。
- 可扩展的发现模块与通信协议：支持 UDP、Tailscale 等多种发现/通信方式，便于在异构网络中部署。
