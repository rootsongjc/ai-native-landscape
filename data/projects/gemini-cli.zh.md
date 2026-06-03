---
name: Gemini CLI
slug: gemini-cli
homepage: null
repo: https://github.com/google-gemini/gemini-cli
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: Google 推出的命令行 AI 智能体工具，已于 2025 年 5 月宣布停止维护，过渡至 Antigravity CLI。
author: Google
ossDate: '2025-04-17T17:04:31.000Z'
featured: true
status: tracked
---
> **停止维护公告**：Google 于 2026 年 5 月 19 日宣布将 Gemini CLI 过渡至 [Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)。**2026 年 6 月 18 日起**，Gemini CLI 及 Gemini Code Assist IDE 扩展将停止服务（免费用户、AI Pro 及 Ultra 用户）。企业客户（Gemini Code Assist Standard/Enterprise 许可证）不受影响。

Gemini CLI 是 Google 推出的开源命令行 AI 智能体，将 Gemini 模型能力直接带入终端。项目累计获得超过 10 万 GitHub Stars、6000+ 合并 PR、数百位贡献者，是 2025 年最成功的 AI 开发者工具之一。

## 核心能力

- 百万令牌级上下文窗口，可在单次会话中查询和编辑大型代码库
- 多模态输入支持 PDF、图像、草图和麦克风语音输入
- 内置工具：Google Search 搜索增强、文件操作、Shell 命令、Web 抓取
- 通过 Imagen（图像）、Veo（视频）、Lyria（音频）模型进行媒体生成

## 智能体与扩展性

- 通过 MCP（Model Context Protocol）支持自定义集成和工具扩展
- Agent Skills、Hooks、Subagents、Extensions 用于组合复杂工作流
- 非交互模式支持 JSON 和流式 JSON 输出，便于脚本集成
- GitHub Action 自动化 PR 审查、Issue 分类和 @gemini-cli 按需协助

## 安装与认证

- **Google 账号登录** — 60 次/分钟，1000 次/天 — 个人开发者免费使用
- **Gemini API Key** — 1000 次/天 — 需指定模型、按量付费
- **Vertex AI** — 企业级额度 — 企业团队、高级安全需求

安装方式：`npx @google/gemini-cli` 或 `npm install -g @google/gemini-cli` 或 `brew install gemini-cli`（macOS）

## 过渡至 Antigravity CLI

Google 将开发重心统一转向 Antigravity 平台——包含 Antigravity CLI（终端）、Antigravity 2.0（桌面应用）及服务端 Harness：

- Go 语言重写：更快的执行速度和响应性能
- 异步工作流：多智能体后台编排，支持大规模重构或多主题并行研究
- 统一架构：与 Antigravity 2.0 桌面应用共享同一智能体 Harness

**迁移时间线**：2025 年 4 月开源 -> 2026 年 5 月 19 日宣布过渡 -> 2026 年 6 月 18 日停止个人用户服务
