---
name: Agentset
slug: agentset
homepage: https://agentset.ai
repo: https://github.com/agentset-ai/agentset
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - RAG
description: 一个面向检索增强生成（RAG）的开源平台，提供多文件格式支持、内置引用与分区能力以简化知识库构建。
logo: ''
author: Agentset
ossDate: '2025-03-10T04:52:13Z'
featured: false
status: tracked
---

## 详细介绍

Agentset 是一个面向检索增强生成（RAG）的开源平台，目标在于帮助开发者与研究者快速构建具有引用能力和长期记忆管理的智能体。平台支持 22+ 种文件格式的解析与分区，提供内置的引证（citations）与文档检索流程，便于将外部知识高效接入智能体的上下文中，从而提升回答的准确性与可溯源性。

## 主要特性

- 多格式支持：一次性处理多种文档格式并自动分区，减少预处理成本。
- 引用与溯源：内置 citation 管道，输出结果可关联原始文档位置，便于验证与合规。
- 可扩展检索：与多种向量数据库和检索组件兼容，支持 RAG 工作流。
- 智能体集成：为构建基于智能体的应用提供 SDK 与范例，支持多步任务编排。

## 使用场景

- 企业知识库问答：将内部文档接入，构建可引用的客服与企业助手。
- 研究与原型：快速搭建 RAG 原型，验证检索策略与引用效果。
- 合规与审计：输出带有来源的答案，便于追溯与审计审查。
- 多模态文档处理：将不同格式的资料统一纳入检索语料。

## 技术特点

- 基于现代 Embedding 与向量检索技术实现高效检索层。
- 提供分区（partitioning）与缓存策略以优化上下文窗口使用。
- 使用可配置的检索/重排序流水线，兼容主流 LLM 和推理服务。
- 采用 MIT 许可，项目开源，便于二次开发与企业化部署。
