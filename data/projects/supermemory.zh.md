---
name: Supermemory
slug: supermemory
homepage: https://supermemory.ai
repo: https://github.com/supermemoryai/supermemory
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Data
  - Memory
  - RAG
description: 一个高性能、可扩展的记忆引擎与应用，提供面向 AI 时代的 Memory API，用于存储、检索与对话交互。
author: Supermemory
ossDate: '2024-02-27T20:10:04.000Z'
featured: false
status: tracked
---

## 简介

Supermemory 是一个高性能、可扩展的记忆引擎与配套应用，面向 AI 时代提供 Memory API，用于高效存储、索引与检索结构化或非结构化内容。该项目兼顾后端服务与前端演示，支持将多源内容（网页、PDF、笔记等）导入为“记忆”，并通过自然语言对话检索与交互，适合需要长期记忆管理和检索增强生成（RAG）的场景。

## 主要特性

- 支持多种内容输入（URL、文件、文本），并进行索引与向量化存储。
- 提供高吞吐的 Memory API，面向低延迟检索与并发访问场景进行了优化。
- 与主流 AI 工具集成（包括 MCP），并提供可扩展的连接器与前端演示应用。

## 使用场景

- 构建具备长期记忆的聊天助手或客服系统，提升对话连续性与上下文感知能力。
- 为检索增强生成（RAG）提供高效的向量检索层，用于文档问答与知识发现。
- 在需要低延迟、大规模并发检索的产品环境中作为记忆层或知识库使用。

## 技术特点

- 采用 TypeScript 与现代前端框架构建，同时提供后端服务与部署范例。
- 支持 Cloudflare Pages/Workers 与多种存储后端，关注可扩展性与部署灵活性。
- 开源（MIT 许可），社区活跃，包含示例应用、文档与贡献指南，便于二次开发与集成。
