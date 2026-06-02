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
status: tracked
---

## 简介

exo 是一个开源项目，能够将手机、笔记本电脑、树莓派等日常设备统一组成分布式 AI 推理集群，在前沿消费级硬件上运行大型 AI 模型。它通过自动设备发现、基于资源的动态模型分区和点对点连接机制，让用户在本地搭建可扩展的推理平台，并提供 ChatGPT 兼容的 API 以便快速集成。

## 主要特性

exo 支持跨异构设备的分布式推理，允许用户运行超过单设备承载能力的大型模型。它具备自动设备发现与点对点连接能力，兼容 MLX、tinygrad 等多种推理后端，并支持 LLaMA、Mistral、LlaVA、DeepSeek 等主流模型。内置的 ChatGPT 兼容 API 使其能够轻松接入现有工具和工作流。

## 使用场景

exo 适合在家庭或小型办公环境中利用闲置设备组建 AI 集群，以本地方式运行开源大模型，兼顾数据隐私与成本节约。它也适用于需要低延迟本地推理的边缘部署场景，以及分布式模型分区和异构推理的教学与研究。

## 技术特点

exo 采用环形内存加权分区策略，根据设备内存和网络拓扑智能划分模型切片。它实现了 MLX 与 tinygrad 的互操作推理引擎，针对 Apple Silicon 和 Linux 环境进行了优化。可扩展的发现模块与通信协议支持 UDP、Tailscale、gRPC 等多种方式，便于在异构网络中部署。
