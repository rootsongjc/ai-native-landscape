---
name: headroom
slug: headroom
homepage: https://docs.headroomlabs.ai/docs
repo: https://github.com/headroomlabs-ai/headroom
license: Apache-2.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Context Compression
  - Token Optimization
  - MCP
  - Proxy
description: >-
  上下文压缩层：在工具输出、日志、文件、RAG 分块和对话历史到达 LLM 之前先行压缩
  ——编码智能体省 20% token，JSON 省 60–95%，答案不变。提供库、代理和 MCP 服务器
  三种形态。
author: headroomlabs-ai
ossDate: '2026-01-07'
featured: false
status: tracked
---

## 简介

Headroom 在 AI 智能体读取的内容——工具输出、日志、RAG 分块、文件和对话历史——到达 LLM 之前先行压缩，用一小部分 token 得到同样的答案。压缩完全在本机运行，任何提示或文件内容都不会被发送到别处。它可以作为内嵌库、零代码改动的代理、智能体包装器或 MCP 服务器使用。

## 主要特性

- 库模式：Python 或 TypeScript 中调用 `compress(messages)`，内嵌到任意应用
- 代理模式：`headroom proxy --port 8787`，零代码改动，不限语言
- 智能体包装：一条命令包装 claude、codex、grok、copilot、cursor、aider、opencode、cline 等，`headroom unwrap` 可撤销
- MCP 服务器：向任意 MCP 客户端暴露 `headroom_compress`、`headroom_retrieve`、`headroom_stats`
- 跨智能体记忆：Claude、Codex、Gemini、Grok 共享一个存储，自动去重
- 可逆压缩（CCR）：原文缓存在本地、按需取回；输出端 token 缩减还会修剪模型写回的内容

## 使用场景

- 不改提示词和工作流，直接削减编码智能体的 token 开销
- 在巨型 JSON 工具输出和日志涌入上下文窗口前压缩，同时保持关键行可被找到
- 在同一台机器上的多个智能体之间共享压缩记忆与学到的纠错

## 技术特点

- 流水线为 CacheAligner → ContentRouter → CCR：ContentRouter 识别内容类型并分发给 SmartCrusher（JSON）、CodeCompressor（基于 AST）或托管在 Hugging Face 上的 Kompress-v2-base 文本模型
- CCR 把原文缓存在本地，模型需要时可通过 `headroom_retrieve` 精确取回未压缩版本
- CacheAligner 只标记会击穿提供商 KV-cache 前缀的易变内容而从不改写提示，从而保住提示缓存的命中率
- `headroom wrap <agent>` 启动本地代理、安装 Serena MCP 服务器用于语义级代码导航，并启动路由经 Headroom 的智能体；`headroom learn` 挖掘失败会话，把纠错写入 CLAUDE.md、AGENTS.md、GEMINI.md 或 GROK.md
