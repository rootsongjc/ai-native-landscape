---
name: Letta
slug: letta
homepage: https://docs.letta.com/
repo: https://github.com/letta-ai/letta
license: Apache-2.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Agent
  - Memory
description: 用于构建具备高级记忆与自我改进能力的有状态代理平台，支持本地与云端部署。
author: letta-ai
ossDate: '2023-10-11T07:38:37.000Z'
featured: false
status: tracked
---

## 简介

Letta（前身 MemGPT）是一个面向构建有状态代理的平台，提供丰富的记忆层次、内存块与工具集成，支持让代理学习与自我改进，适用于研究与生产场景。

## 主要特性

- 先进的记忆体系（memory blocks）与多级内存管理，支持持久化与编辑。
- 开放的 SDK（Python/TypeScript）、无代码 Agent Development Environment（ADE）与桌面版自托管选项。
- 支持本地模型（Ollama、LM Studio）与云端服务，并提供 MCP（Model Context Protocol）与自定义工具集成。

## 使用场景

- 企业或研究团队构建长期运行、具有自我改进能力的代理（客服、研究助理、流程自动化）。
- 需要共享内存、多代理协作与持久化状态管理的复杂工作流。

## 技术特点

- 以 Python 为主的核心服务，配套 TypeScript 客户端，支持多平台部署与可扩展的插件式工具系统。
- 提供 Agent File (.af) 格式用于导出/迁移代理状态，支持长时运行与 background 模式以处理复杂工具调用。
