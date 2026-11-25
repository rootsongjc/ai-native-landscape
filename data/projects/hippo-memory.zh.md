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
description: 面向编程智能体（Claude Code、Codex、Cursor、OpenClaw、OpenCode、Pi 及 MCP 客户端）的本地优先记忆层，基于 SQLite 与 Markdown 镜像存储，零运行时依赖。
author: kitfunso
ossDate: '2026-03-15T10:40:26Z'
status: tracked
---

## 简介

Hippo Memory 是一个面向 AI 编程智能体的本地优先开源记忆层，采用 TypeScript 编写、MIT 许可且零运行时依赖。它将项目级与全局记忆保存在本地 SQLite 数据库中，并同步生成可读、可用 Git 追踪的 Markdown 镜像，让知识在 Claude Code、Codex、Cursor、OpenClaw、OpenCode、Pi 以及任意 MCP 或 HTTP 客户端之间共享。

## 核心特性

- **本地 SQLite 与 Markdown 镜像**：将记忆保存在项目目录的 `.hippo/` SQLite 存储中，同时维护人类可读、可纳入版本控制的 Markdown 镜像文件；捕获的用户消息不生成 Markdown 镜像。
- **保存与默认检索零 LLM 调用**：开箱即用 BM25 检索，无需调用模型或发起网络请求；当 hippo 以 npm 全局方式安装时，`hippo init` 会安装本地 Transformers.js 嵌入模型（可用 `--no-embeddings` 跳过），API 嵌入（OpenAI、Voyage 或 Cohere）需主动开启。
- **结果驱动的记忆权重**：持续使用的记忆会获得强化，标记为错误的召回会降低排序，通过 `hippo supersede` 替换过期事实，错误类记忆具备双倍半衰期。
- **跨工具共享与导入**：通过原生 Hook、指令块、CLI、MCP Server 与 HTTP API 连接多款编程智能体，可通过 `hippo import` 命令导入 ChatGPT 导出记录、`CLAUDE.md`、`.cursorrules` 与 Markdown 笔记；Slack 与 GitHub 内容则通过 Webhook 连接器和 `backfill` 命令接入。
- **自动整理与巩固**：通过 `hippo sleep` 从近期 Git 提交提取经验、导入各智能体笔记、自动去重，并将高价值经验同步至全局记忆库；设置了 `ANTHROPIC_API_KEY` 时，`hippo sleep` 会将文本发送至 Anthropic（`extraction.enabled: false` 可关闭），若设置了 `HIPPO_LLM_BASE_URL` 与 `HIPPO_LLM_MODEL`，则改为发送至该 OpenAI 兼容端点。

## 适用场景

- 在多次编程智能体会话之间持久保留项目规范、架构决策与已修复的报错经验，避免重复教学。
- 在 Claude Code、Codex、Cursor 与各类 MCP 工具间切换时共享同一份本地项目记忆库。
- 将工程知识保存在本机的 SQLite 与 Markdown 文件中；文本仅会通过 API 嵌入、重排序器、模型读取的规则捕获（`capture.followUpRules`）、`hippo refine`，或设置了 `ANTHROPIC_API_KEY` 或自定义模型端点（`HIPPO_LLM_BASE_URL` 与 `HIPPO_LLM_MODEL`）时的 `hippo sleep` 离开本机，从 Slack 与 GitHub 接入的记忆带有来源引用（`slack://` 来源、`artifact_ref`）。

## 相关链接

- [官方网站](https://hippo-memory.com/)
- [GitHub 仓库](https://github.com/kitfunso/hippo-memory)
- [基准测试与评测](https://hippo-memory.com/benchmarks/)
