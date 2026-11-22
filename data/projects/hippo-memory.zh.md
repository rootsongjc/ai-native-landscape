---
name: Hippo Memory
slug: hippo-memory
homepage: https://hippo-memory.com
repo: https://github.com/kitfunso/hippo-memory
license: MIT
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agent Memory
  - CLI
  - MCP
  - SQLite
  - Local-First
  - Coding Agents
description: 面向编程智能体（Claude Code、Codex、Cursor、OpenClaw、OpenCode、Pi 及 MCP 客户端）的本地优先 MIT 开源记忆层，基于 SQLite 与 Markdown 镜像存储，零运行时依赖。
author: kitfunso
ossDate: '2026-03-15T10:40:26Z'
featured: false
status: tracked
---

## 简介

Hippo Memory 是一个面向 AI 编程智能体的本地优先开源记忆层，采用 TypeScript 编写、MIT 许可且零运行时依赖。它将项目级与全局记忆保存在本地 SQLite 数据库中，并同步生成可读、可用 Git 追踪的 Markdown 镜像，让知识在 Claude Code、Codex、Cursor、OpenClaw、OpenCode、Pi 以及任意 MCP 或 HTTP 客户端之间共享。

## 核心特性

- **本地 SQLite 与 Markdown 镜像**：将记忆保存在项目目录的 `.hippo/` SQLite 存储中，同时维护人类可读、可纳入版本控制的 Markdown 镜像文件。
- **保存与默认检索零 LLM 调用**：开箱即用 BM25 检索，无需调用模型或发起网络请求；同时支持按需开启本地 Transformers.js 或外部 API 向量嵌入。
- **结果驱动的记忆权重**：持续使用的记忆会获得强化，标记为错误的召回会降低排序，通过 `hippo supersede` 替换过期事实，错误类记忆具备双倍半衰期。
- **跨工具共享与导入**：通过原生 Hook、指令块、CLI、MCP Server 与 HTTP API 连接多款编程智能体，支持导入 ChatGPT 导出记录、`CLAUDE.md`、`.cursorrules`、Slack、GitHub 与 Markdown 笔记。
- **自动整理与巩固**：通过 `hippo sleep` 从近期 Git 提交提取经验、导入各智能体笔记、自动去重，并将高价值经验同步至全局记忆库。

## 适用场景

- 在多次编程智能体会话之间持久保留项目规范、架构决策与已修复的报错经验，避免重复教学。
- 在 Claude Code、Codex、Cursor 与各类 MCP 工具间切换时共享同一份本地项目记忆库。
- 将团队与个人工程知识保留在本地 SQLite 与 Markdown 文件中，并为每条记忆记录来源信息。

## 相关链接

- [官方网站](https://hippo-memory.com/)
- [GitHub 仓库](https://github.com/kitfunso/hippo-memory)
- [基准测试与评测](https://hippo-memory.com/benchmarks/)
