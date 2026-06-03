---
name: Agentset
slug: agentset
homepage: https://agentset.ai
repo: https://github.com/agentset-ai/agentset
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - RAG
description: 一个面向检索增强生成（RAG）的开源平台，提供多文件格式支持、内置引用与分区能力以简化知识库构建。
author: Agentset
ossDate: '2025-03-10T04:52:13Z'
featured: false
status: tracked
---
## 简介

Agentset 是一个开源 RAG 平台，帮助开发者与研究者构建具备引用能力和深度研究能力的智能体。开箱即用支持 22+ 种文件格式，提供内置引用、分区和 MCP 服务器，便于将外部知识高效接入智能体上下文，提升回答的准确性与可溯源性。

## 主要特性

- 多格式支持：开箱即用支持 22+ 种文档格式，自动分区，减少预处理成本
- 引用与溯源：内置 citation 管道，输出结果可关联原始文档位置，便于验证与合规
- 兼容多种向量数据库和检索组件，集成 MCP 服务器
- 提供 SDK 与范例，支持构建多步骤智能体工作流与深度研究能力

## 使用场景

企业知识库问答（构建可引用的客服与企业助手）、快速搭建 RAG 原型并验证检索策略、合规与审计场景中输出带来源的答案、以及多格式文档处理（将不同格式的资料统一纳入检索语料）。

## 技术特点

基于现代 Embedding 与向量检索技术实现高效检索层。提供分区与缓存策略以优化上下文窗口使用。使用可配置的检索/重排序流水线，兼容主流 LLM 和推理服务。采用 MIT 许可，便于二次开发与企业化部署。
