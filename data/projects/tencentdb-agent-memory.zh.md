---
name: TencentDB Agent Memory
slug: tencentdb-agent-memory
homepage: null
repo: https://github.com/tencent/tencentdb-agent-memory
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Agent
  - Database
  - Memory
description: 腾讯推出的 AI 智能体本地长期记忆系统，通过四层渐进式管线实现全本地化记忆，零外部 API 依赖。
author: Tencent
ossDate: '2026-04-07T00:00:00.000Z'
featured: false
status: tracked
---

TencentDB Agent Memory 是腾讯推出的 AI 智能体记忆系统，通过四层渐进式管线为 Agent 提供全本地化的长期和短期记忆能力，零外部 API 依赖。核心理念是"Agents remember, Humans innovate"。

## 详细介绍

项目采用双记忆架构：**符号短期记忆**通过 Mermaid 语法压缩工具日志，降低 Token 消耗并提升任务成功率；**分层长期记忆**将碎片化对话提炼为结构化的 Persona 和 Scene。长期记忆分四个层级：L0 原始对话、L1 原子事实、L2 场景块（Markdown）、L3 用户画像，底层保留证据，上层保留结构。

基准测试表现亮眼：短期记忆在 WideSearch 基准上成功提升 51.52%、Token 减少 61.38%；长期记忆在 PersonaMem 基准上从 48% 提升至 76%。

## 主要特性

- **双记忆架构**：符号短期记忆（Mermaid Canvas）+ 分层长期记忆（L0-L3 语义金字塔）
- **全本地运行**：基于 SQLite + sqlite-vec，零配置，零外部 API 依赖
- **混合检索**：BM25 + 向量搜索 + RRF 融合排序
- **白盒可调试**：L2 场景为纯 Markdown，L3 画像在 `persona.md`，人类和 Agent 均可读
- **基准验证**：短期记忆 Token 减少 30-61%，长期记忆准确率提升 59%
- **多框架集成**：OpenClaw 插件 + Hermes Gateway 适配器

## 使用场景

- **智能体长期记忆**：跨会话记住用户偏好、习惯和历史交互
- **复杂任务上下文压缩**：通过 Mermaid 符号图减少 Token 消耗，提升长任务成功率
- **本地化隐私保护**：敏感数据不出机器，适用于金融、医疗等场景
- **智能体个性化**：基于用户画像实现千人千面的 Agent 行为

## 技术特点

- **语言**：TypeScript
- **存储后端**：SQLite + sqlite-vec（本地）/ 腾讯云向量数据库（TCVDB）
- **Node.js 要求**：>= 22.16
- **OpenClaw 要求**：>= 2026.3.13
- **Agent 工具**：`tdai_memory_search` / `tdai_conversation_search`
- **License**：MIT
