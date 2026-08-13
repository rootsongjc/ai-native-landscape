---
name: SIE
slug: sie
homepage: https://superlinked.com
repo: https://github.com/superlinked/sie
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Inference
  - Vector Search
  - Embeddings
  - GPU
description: 开源推理服务与生产集群，以共享 GPU 资源 serving Agent 所需的全部模型。
author: superlinked
ossDate: '2023-11-07T10:45:53Z'
featured: false
status: tracked
---

## 简介

SIE（Superlinked Inference Engine）是开源的推理服务器与生产集群，服务 Agent 所需的全部模型——Embedding、重排器、COLBERT、SPLADE 等。它让多个模型高效共享 GPU 资源，使在生产环境中运行 Agent 的完整检索栈变得可行。

## 主要特性

- 推理服务器加生产集群的部署模型。
- 多模型支持：BGE Embedding、ColBERT、SPLADE、重排器。
- Agent 调用的多模型共享 GPU serving。
- 面向检索增强工作流的数据管道集成。

## 使用场景

- 大规模为 RAG 管道提供 Embedding 与重排模型服务。
- 将 Agent 模型服务整合到共享 GPU 集群。
- 生产级语义搜索与向量检索后端。

## 技术特点

- 单一 OpenAI 兼容 API（`/v1/embeddings`、`/v1/chat/completions`、`/v1/completions`、`/v1/responses`）服务所有 Agent 任务，可直接迁移接入。
- 按需加载 100+ 模型并以 LRU 策略淘汰，多模型共享同一集群的 GPU 预算。
- 任务化模型包：检索（bge-m3、splade-v3、colbertv2、qwen3-reranker）、文档转 Markdown OCR、结构化输出（GLiNER）、内容安全（granite-guardian）、Agent 循环本体。
- 自带生产栈：负载均衡网关、KEDA 自动扩缩容、Grafana 仪表盘、GKE/EKS/AKS 的 Terraform 配置。
- Python 3.12 uv workspace；按 bundle 拆分的 Docker 镜像隔离依赖冲突的模型家族。
