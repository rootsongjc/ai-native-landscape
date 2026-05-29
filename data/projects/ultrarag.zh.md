---
name: UltraRAG
slug: ultrarag
homepage: https://ultrarag.openbmb.cn/
repo: https://github.com/openbmb/ultrarag
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Dev Tools
  - RAG
  - Retrieval
description: 一个基于 MCP 的低代码检索增强生成（RAG）开发框架，强调可视化编排与可复现的评估流程。
logo: ''
author: OpenBMB
ossDate: '2025-01-16T10:56:02Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

UltraRAG 是一个基于 Model Context Protocol（MCP）架构的低代码检索增强生成（RAG）开发框架，由 OpenBMB 联合多家机构维护。它将检索、生成与评估等核心组件封装为独立的 MCP Server，并提供可视化的 Pipeline Builder 与交互式 UI，使研发流程、推理中间输出与评估结果更加透明且可复现。

## 主要特性

- 低代码可视化编排，Canvas 与代码双向实时同步，支持条件分支与循环控制。
- 将检索、生成、评估模块化为 MCP Servers，提高复用性与扩展性。
- 内置评估套件与基准对比，支持知识库管理与一键将流水线转为交互式 Web UI。

## 使用场景

适用于 RAG 研究与实验平台、企业级文档问答与知识检索系统，以及需要可视化调试与快速从算法到演示交付的团队。研究者可用于统一评测与复现实验，工程团队可用于快速构建生产原型。

## 技术特点

基于 MCP 协议，支持多种检索后端与嵌入模型，采用流水线化推理与异步服务调用，提供标准化的 benchmark 接口与日志化中间输出，便于在研发与工程场景中进行性能分析与误差定位。
