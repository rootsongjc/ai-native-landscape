---
name: Basic Memory
slug: basic-memory
homepage: https://basicmemory.com
repo: https://github.com/basicmachines-co/basic-memory
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Application
  - CLI
  - Dev Tools
  - Memory
description: 一种以本地 Markdown 为中心的记忆系统，允许 LLM 通过模型上下文协议（MCP）读写你的知识库。
logo: ''
author: Basic Machines
ossDate: '2024-12-02T22:40:43Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Basic Memory 是一个本地优先的知识记忆系统，将用户知识以结构化 Markdown 文件保存，并通过模型上下文协议（MCP）让兼容的 LLM 阅读与写入这些文件。项目强调可读写的“记忆”（Memory）概念，既支持离线本地存储以保护隐私，也提供可选的云同步与多设备协同功能，适合作为长期个人知识库与会话上下文管理的基础设施。

## 主要特性

- 本地优先：所有笔记以 Markdown 文件保存，数据由用户控制。
- 双向读写：LLM 与用户都能以同一格式读写知识，构建可被追溯的记忆图谱。
- MCP 支持：实现 Model Context Protocol，以便各种智能体和工具互通上下文。
- 轻量索引：使用 SQLite 本地索引实现快速搜索与遍历。
- CLI 与集成：提供命令行工具并支持与 VS Code、Claude Desktop 等工具集成。

## 使用场景

适用于需要长期上下文的对话式应用场景，例如开发者在本地维护项目知识库、研究笔记的语义搜索、直播或会议的实时笔记同步，以及与 Claude、ChatGPT 等模型结合以实现持续记忆与上下文增强的个人助手。它也可作为私有化 RAG + 可写记忆的轻量替代方案。

## 技术特点

实现上通过将 Markdown 文件解析为实体（Entity）、观察（Observation）与关系（Relation），并建立本地 SQLite 索引来支持检索与遍历。系统还提供双向同步、MCP 服务端组件与事件驱动的 API，允许在保证数据可控性的前提下实现 LLM 驱动的知识写入与实时同步。
