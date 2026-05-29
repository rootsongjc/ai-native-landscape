---
name: Xinference (Xorbits Inference)
slug: xorbits-inference
homepage: https://inference.readthedocs.io/
repo: https://github.com/xorbitsai/inference
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
description: 面向模型部署的推理与服务框架，支持多后端、分布式和 OpenAI 兼容接口，便于在云端或本地快速部署模型。
logo: ''
author: Xorbits
ossDate: '2023-06-14T07:05:04.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Xinference（Xorbits Inference）是一个面向模型部署的推理与服务框架，支持语言、语音和多模态模型的自托管与分布式部署，提供 OpenAI 兼容的 RESTful API 与丰富的集成选项。

## 主要特性

- 支持多种推理后端（如 vLLM、GGML、TensorRT），并能灵活利用异构硬件。
- 提供 OpenAI 兼容接口、RPC、CLI 与 WebUI，支持函数调用与流式输出。
- 内置集群与分布式部署能力，支持 Helm、Docker 与云端托管方案。

## 使用场景

- 自托管 LLM 服务以替代云端 API，满足隐私与成本控制需求。
- 构建企业级模型服务，支持高并发与多节点部署场景。
- 教研与快速原型：在 Colab、Docker 或 Kubernetes 上快速试验与验证模型方案。

## 技术特点

- 模块化设计，支持插件式后端适配与自定义模型接入。
- 深度集成第三方生态（如 LangChain、LlamaIndex、Dify），便于在上层构建 RAG、Agent 等复杂应用。
- 丰富的示例与文档（ReadTheDocs），支持快速上手与生产化迁移。
