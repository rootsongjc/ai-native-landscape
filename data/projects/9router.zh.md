---
name: 9router
slug: 9router
homepage: https://9router.com
repo: https://github.com/decolua/9router
license: MIT
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - LLM Routing
  - Token Saver
  - Proxy
description: 免费的 AI 路由器与 token 节省工具，将 Claude Code、Codex、Cursor、Cline、Copilot 等编码工具接入 40+ 服务商、100+ 模型，按订阅→低价→免费三级自动回退，并节省 20-40% token。
author: decolua
ossDate: '2026-01-05'
featured: false
status: tracked
---

## 简介

9Router 是一个以"永不停下编码"为目标的本地 AI 网关：它在你已有的编码工具（Claude Code、Codex、Cursor、Copilot、Gemini、OpenCode、Cline、Antigravity、OpenClaw）前面加一层代理，把请求路由到 40+ 服务商、100+ 模型。它跟踪订阅配额，在配额耗尽时自动从订阅档回退到低价模型再到免费服务商，同时用 RTK token 节省器压缩工具输出，降低每次请求的 token 消耗。

## 主要特性

- 任意 CLI 编码工具接入单一本地端点（`http://localhost:20128/v1`），覆盖 40+ 服务商、100+ 模型
- 三级自动回退：订阅（Claude Code、Codex、GitHub Copilot）→ 低价（GLM、MiniMax）→ 免费（Kiro、OpenCode Free、Vertex 额度），配额耗尽零停机切换
- RTK token 节省器自动压缩 `tool_result` 内容（git diff、grep、ls 输出等），每次请求节省 20-40% token
- 配额跟踪，重置前榨满订阅额度；令牌自动刷新
- 同一服务商多账号轮询
- OpenAI 与 Claude API 格式互译，任何工具都能对接任何后端
- `localhost:20128` 提供 Web 仪表盘，用于接入服务商和复制密钥

## 使用场景

- 让长时间编码会话在限流和配额耗尽时依然持续运行，无需手动切换服务商
- 在回退到更便宜或免费模型之前，先把付费订阅的额度用满
- 用一个免费服务商（Kiro、OpenCode Free）作为 Claude Code 或 Codex 的零成本入口
- 降低智能体密集工作流中冗长工具输出造成的 token 消耗

## 技术特点

- 以本地代理方式运行：编码工具指向 `http://localhost:20128/v1`，路由器在转发到选定后端之前完成 OpenAI ↔ Claude 格式互译、配额跟踪与令牌刷新
- 路由采用三级模型（订阅→低价→免费）：按顺序尝试各级，命中配额或预算限制时由下一级接管，客户端不会看到服务商报错
- RTK token 节省器原地压缩 `tool_result` 负载，在 git diff、grep 列表等输出上实测降低 20-40% 请求体积
- 多账号支持按服务商轮询多个账号，并自动处理 OAuth 令牌刷新
- 通过 npm（`npm install -g 9router`）和 Docker 分发；仪表盘与服务商配置以 Next.js 应用形式运行在 20128 端口
