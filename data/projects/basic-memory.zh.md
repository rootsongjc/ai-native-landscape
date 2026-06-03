---
name: Basic Memory
slug: basic-memory
homepage: https://basicmemory.com
repo: https://github.com/basicmachines-co/basic-memory
license: AGPL-3.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Application
  - CLI
  - Dev Tools
  - Memory
description: 一种以本地 Markdown 为中心的记忆系统，允许 LLM 通过模型上下文协议（MCP）读写你的知识库。
author: Basic Machines
ossDate: '2024-12-02T22:40:43Z'
featured: false
status: tracked
---
Basic Memory 是一个本地优先的知识记忆系统，将用户知识以结构化 Markdown 文件保存，并通过模型上下文协议（MCP）让兼容的 LLM 读写这些文件。它实现了可写入的记忆层，默认本地存储保护隐私，同时提供可选的云同步，确保 AI 对话真正记住上下文。

## Markdown 即知识

- 结构化 Markdown 文件作为主要存储格式，人类可直接阅读与编辑
- 自动将文件解析为实体（Entity）、观察（Observation）与关系（Relation）
- 本地 SQLite 索引，支持快速全文搜索与图谱遍历
- 所有数据由用户控制，无厂商锁定

## 通过 MCP 集成 LLM

- MCP 服务端组件，支持任何兼容的 LLM 读写记忆
- 人类与 AI 协作构建可追溯的双向知识图谱
- 基于本地索引的语义搜索与检索
- 事件驱动 API，实时响应知识变更

## 跨工具与跨设备

- CLI 工具，支持终端下的知识管理与查询
- 集成 VS Code 与 Claude Desktop，在编辑器和对话中直接访问
- 可选云同步，支持多设备协同
- 与现有笔记工具和知识管理系统并行使用，无需替换

## 适用场景

- 开发者在本地维护项目知识库，跨越 LLM 会话持久化
- 研究笔记的语义搜索，覆盖长期项目积累
- 个人 AI 助手保持长期记忆，无需依赖云端
- 作为云 RAG 与记忆服务的私有化替代方案
