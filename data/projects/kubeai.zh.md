---
name: KubeAI
slug: kubeai
homepage: https://www.kubeai.org/
repo: https://github.com/substratusai/kubeai
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - ML Platform
description: 用于在 Kubernetes 上部署和扩展模型的推理操作器，支持 LLM、嵌入与语音转写等场景。
author: SubstratusAI
ossDate: '2023-10-21T00:59:51.000Z'
featured: false
status: tracked
---

## 简介

KubeAI 是一款为 Kubernetes 设计的 AI 推理操作器，旨在简化在集群上部署和运行 LLM、嵌入与语音转写服务的流程。它集成模型代理、operator 管理与缓存/路由优化，帮助在多副本场景下提升吞吐和延迟表现。注意：项目已声明不再主动维护，使用前请评估持续性需求。

## 主要特性

- OpenAI 兼容 API：提供 /v1/chat/completions、/v1/embeddings 等兼容端点。
- 优化路由与缓存：Prefix-aware 负载均衡提高 KV 缓存利用率，从而提升整体性能。
- 模型管理自动化：自动下载、挂载模型并支持 LoRA Adapter 等动态适配器。

## 使用场景

- 在 Kubernetes 集群中托管低延迟的模型推理服务与聊天机器人。
- 构建多租户或多区域的批量推理与嵌入流程。
- 用作研究或基线实现以验证跨节点缓存与路由策略的效果（注意维护状态）。

## 技术特点

- 以 Go 为主实现，结合 Jupyter/Notebook 示例与 Python 工具链。
- 使用 Helm charts 与 Bazel/Makefile 管理部署与构建流程，支持多种加速器和配置。
- 包含本地快速启动示例及丰富文档（<https://www.kubeai.org/>）。
