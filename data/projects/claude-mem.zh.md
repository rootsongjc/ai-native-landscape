---
name: Claude Mem
slug: claude-mem
homepage: https://claude-mem.ai
repo: https://github.com/thedotmack/claude-mem
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agents
  - Memory
description: 一个为 Claude Code 提供的插件，自动捕获编码会话的上下文、用 AI 压缩并在未来会话中注入相关记忆。
logo: ''
author: thedotmack
ossDate: '2025-08-31T20:50:03Z'
featured: false
status: tracked
---

## 详细介绍

Claude Mem 是面向 Claude Code 的插件，用于在编码会话中自动捕获模型的交互与工作流信息，并通过模型对这些上下文进行压缩与摘要，以便在未来会话中注入相关记忆。该项目整合了记忆存储与检索流程，支持嵌入检索与长时记忆管理（long-term memory）以提升连续会话的上下文保持与生产力。

## 主要特性

- 自动捕获会话：在编码过程中自动记录重要事件与上下文片段。
- AI 压缩：使用 Claude 的 agent-sdk 对捕获内容进行语义压缩与摘要，减少存储占用。
- 记忆注入：在后续会话中将相关记忆注入上下文，提升连续交互的连贯性。

## 使用场景

- 在编码或调试会话中保持上下文连贯，避免重复说明历史操作。
- 将会话记忆与检索集成到 RAG 流程中，提高模型在长期项目中的表现。
- 作为插件扩展到开发者工具链，提升协同效率与知识沉淀。

## 技术特点

项目使用 TypeScript 开发，集成 Claude 的 agent-sdk，并支持与向量数据库与 SQLite 等后端结合以实现持久记忆。仓库主题包括 ai-memory、long-term-memory 与 rag，适合需要长期上下文管理与记忆检索的场景。
