---
name: MemOS
slug: memos-os
homepage: https://memos.openmem.net/
repo: https://github.com/memtensor/memos
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Dev Tools
  - Memory
  - RAG
  - SDK
description: MemOS 是一个为大语言模型（LLM）提供长期记忆能力的开源 Memory OS，旨在提升模型的上下文感知与长期一致性。
logo: ''
author: MemTensor
ossDate: '2025-07-06T09:51:27Z'
featured: false
status: tracked
---

MemOS（Memory OS）为大语言模型提供了系统级的长期记忆能力，通过模块化的 MemCube 架构与多样化的记忆类型（文本记忆、激活记忆、参数记忆等），实现记忆的存储、检索与调度。该系统强调可扩展性与工程可用性，支持多种后端（如 NebulaGraph、Neo4j、Transformers）以及多种部署场景，适用于需要跨会话保持上下文、长期个性化以及复杂多步推理的应用场景。

MemOS 的设计目标是让 LLM 在连续或长期交互中保持一致性与记忆能力，降低重复查询外部知识的成本，并为研究与生产环境提供统一的记忆操作接口。通过提供 Python SDK、示例工程与 Playground，可快速将 MemOS 集成到现有 LLM 工作流中，便于验证记忆策略并进行性能调优。

## 主要特性

- Memory-Augmented Generation (MAG)：为生成模型提供统一记忆操作接口，简化记忆读写流程。
- 模块化 MemCube 架构：各类记忆子系统可按需组合或替换，方便扩展与实验。
- 多种记忆类型：支持文本记忆、KV-cache 激活记忆和参数化记忆（如 LoRA 权重）。
- 丰富的后端与集成：支持 NebulaGraph、Neo4j、Transformers、Ollama 等多种后端与集成方式。

## 使用场景

- 面向长期对话的智能客服与个人助理，保存用户偏好与会话历史以提升响应质量。
- 多步推理与决策支持场景，需要在不同时间点跨会话检索上下文信息。
- 个性化推荐、用户画像沉淀以及长期偏好建模。
- 研究场景中用于评估与比较记忆机制的性能基线与工程化实现。

## 技术特点

- 模块化、可插拔的记忆后端设计，支持在线与离线数据源。
- 提供友好的 Python SDK 与丰富的示例，便于开发者快速上手。
- 支持 Playground 与可视化工具，便于调试记忆检索与排序策略。
- 社区活跃，拥有论文支撑与性能基准，适合科研与工程化双重需求。
