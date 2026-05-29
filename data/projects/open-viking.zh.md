---
name: OpenViking
slug: open-viking
homepage: https://www.openviking.ai/
repo: https://github.com/volcengine/openviking
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - Project
  - RAG
description: OpenViking 是为 AI 智能体设计的开源上下文数据库，通过文件系统范式统一管理记忆、资源与技能，提升检索可观察性与分层加载效率。
logo: ''
author: Volcengine
ossDate: '2026-01-15T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

OpenViking 是一个为 AI 智能体量身设计的上下文数据库（Context Database）。它采用类文件系统的组织方式，将记忆、资源与技能以层级目录统一管理，支持 viking:// 协议，提供可观察的检索轨迹及分层加载（L0/L1/L2）以减少 token 消耗并提高检索准确性。

## 主要特性

- 文件系统范式：以目录与文件方式组织上下文，支持递归检索与目录定位。
- 分层上下文加载：L0 抽象、一句概述；L1 概览；L2 详细内容，按需加载以节省成本。
- 可视化检索轨迹：保留检索链路，便于调试与优化检索策略。
- 丰富的 SDK/示例：提供 Python 与其他语言示例，带快速上手教程与配置模板。

## 使用场景

- 需要长期会话记忆与上下文管理的智能体（如多步骤自动化、任务型助理）。
- 面向复杂知识检索的 RAG 系统，需组合目录位置与语义检索时。
- 研究与工程项目中需要可观测、可迭代的上下文迭代与记忆提取流程。

## 技术特点

- 多语言实现与模块化架构，核心包含检索、存储、会话管理与解析器模块。
- 支持 OpenAI、Volcengine 等模型后端的向量化与 VLM 能力。
- 提供示例与工具链，支持本地与云端部署方案。
