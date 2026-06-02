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
status: tracked
---

## 简介

Basic Memory 是一个本地优先的知识记忆系统，将用户知识以结构化 Markdown 文件保存，并通过模型上下文协议（MCP）让兼容的 LLM 读写这些文件。它实现了可写入的记忆层，默认本地存储保护隐私，同时提供可选的云同步与多设备协同功能，确保 AI 对话真正记住上下文，无需反复解释项目背景。

## 主要特性

Basic Memory 提供本地优先的 Markdown 存储（数据由用户控制）、LLM 与用户双向读写构建可追溯的记忆图谱、MCP 协议支持实现跨工具互操作、轻量 SQLite 索引实现快速搜索与遍历，以及 CLI 工具与 VS Code、Claude Desktop 等编辑器和应用的集成。

## 使用场景

适用于需要长期上下文的对话式应用场景，例如开发者在本地维护项目知识库、研究笔记的语义搜索、直播或会议的实时笔记同步，以及具备持续记忆与上下文增强的个人助手。它也可作为私有化 RAG 加可写记忆的轻量替代方案。

## 技术特点

系统通过将 Markdown 文件解析为实体（Entity）、观察（Observation）与关系（Relation），并建立本地 SQLite 索引支持检索与遍历。提供 MCP 服务端组件、事件驱动 API 与双向同步，允许在保证数据可控性的前提下实现 LLM 驱动的知识写入与实时同步。
