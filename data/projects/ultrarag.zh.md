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
author: OpenBMB
ossDate: '2025-01-16T10:56:02Z'
featured: false
status: tracked
---

UltraRAG 是一个基于 Model Context Protocol（MCP）架构的低代码检索增强生成（RAG）开发框架，由 OpenBMB 联合多家机构共同维护。它将检索、生成与评估封装为独立 MCP Server，配合可视化 Pipeline Builder，使 RAG 全流程透明且可复现。框架通过拖拽式编排与代码级控制相结合，大幅降低了构建生产级 RAG 系统的门槛。

## 可视化流水线构建

- Canvas 可视化编辑器支持与代码双向同步
- 条件分支与循环控制，同时满足零代码与专业开发需求
- 拖拽式编排与代码级控制相结合
- 一键将流水线转为交互式 Web UI

## 模块化 MCP 架构

- 核心组件以模块化 MCP Server 形式提供，覆盖检索、生成与评估
- 支持可插拔的检索后端与多种嵌入模型
- 流水线化推理结合异步服务调用，确保资源高效利用
- 标准化 benchmark 接口与日志化中间输出，便于性能分析与误差定位

## 评估与研究

- 内置评估套件与基准对比功能
- 知识库管理直接集成到流水线中
- 研究团队可统一评测基准，在不同检索与生成策略间复现实验
- 适用于教学场景，帮助学生直观理解 RAG 流水线内部机制
