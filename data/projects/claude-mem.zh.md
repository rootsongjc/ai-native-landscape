---
name: Claude Mem
slug: claude-mem
homepage: https://claude-mem.ai
repo: https://github.com/thedotmack/claude-mem
license: Apache-2.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agents
  - Memory
description: 一个为 Claude Code 提供的插件，自动捕获编码会话的上下文、用 AI 压缩并在未来会话中注入相关记忆。
author: thedotmack
ossDate: '2025-08-31T20:50:03Z'
featured: false
status: tracked
---
Claude Mem 为每个 AI 智能体提供跨会话的持久上下文能力，自动捕获智能体的所有操作，通过 AI 进行压缩，并在未来会话中注入相关上下文。它解决了智能体在会话之间丢失上下文的常见问题，实现持续且高效的 AI 辅助开发工作流。

## 自动上下文捕获

- 在编码会话期间自动捕获重要事件和上下文片段，无需人工干预
- 利用 Claude 的 agent-sdk 进行 AI 语义压缩，在保留关键信息的同时降低存储成本
- 在后续会话中自动注入相关历史记忆，保持对话和工作流的连续性
- 基于嵌入的搜索和智能记忆修剪，专为长期上下文管理设计

## 会话连续性

- 在编码和调试会话中保持上下文连贯，无需向智能体重复解释过去的步骤或决策
- 跨多个开发会话保持对话和工作流的连续性
- 支持跨越数天甚至数周的持续高效 AI 辅助开发工作流
- 将会话记忆集成到 RAG 流水线中，提升长期项目知识检索效果

## 存储与集成

- 使用 TypeScript 实现，与 Claude 的 agent-sdk 紧密集成以实现 AI 驱动的压缩和检索
- 支持与向量数据库或 SQLite 后端搭配使用，提供灵活的持久化记忆存储
- 专为通过持久记忆插件扩展开发者工具链而设计
- 通过共享上下文增强团队协作和组织知识沉淀
