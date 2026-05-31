---
name: Kaito
slug: kaito
homepage: https://kaito-project.github.io/kaito/docs/
repo: https://github.com/kaito-project/kaito
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - AI
  - Automation
  - Cloud Native
  - Kubernetes
  - RAG
description: Kaito 是一个面向 Kubernetes 的 AI 工具链 Operator，自动化大模型推理与调优工作流并支持 RAG 引擎与节点自动扩容。
logo: ''
author: kaito-project
ossDate: '2023-09-09T01:53:38.000Z'
featured: false
status: tracked
---

## 简介

Kaito 是一个 Kubernetes AI Toolchain Operator，自动化在 Kubernetes 集群上部署和管理大模型推理与微调工作流，支持节点自动扩容、预设配置与 RAG 引擎。

## 主要特性

- 自动化工作流：通过 `Workspace` CRD 声明推理或调优规格，Operator 自动创建相应资源并调度节点。
- RAG 支持：内置 RAGEngine，结合 LlamaIndex 与 FAISS 提供检索增强生成服务。
- 节点自动扩容：集成 gpu-provisioner/karpenter 等组件实现按需添加 GPU 节点。
- 多运行时支持：兼容 vLLM、transformers、Ollama 等推理后端。

## 使用场景

- 在 Kubernetes 上快速交付大模型推理服务与 RAG 服务。
- 自动化多卡/多节点推理与成本优化场景。
- 研究与测试环境中快速验证模型部署与性能。

## 技术特点

- 以 CRD/Controller 模式实现，便于与 Kubernetes 原生生态集成。
- 提供 Helm/terraform 部署方案与示例，支持生产化上云部署。
