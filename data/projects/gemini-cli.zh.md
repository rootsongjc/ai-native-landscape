---
name: Gemini CLI
slug: gemini-cli
homepage: null
repo: https://github.com/google-gemini/gemini-cli
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: Google 推出的命令行 AI 智能体工具，已于 2025 年 5 月宣布停止维护，过渡至 Antigravity CLI。
logo: ''
author: Google
ossDate: '2025-04-17T17:04:31.000Z'
featured: true
status: tracked
---

> **停止维护公告**：Google 于 2026 年 5 月 19 日宣布将 Gemini CLI 过渡至 [Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)。**2026 年 6 月 18 日起**，Gemini CLI 及 Gemini Code Assist IDE 扩展将停止服务（免费用户、AI Pro 及 Ultra 用户）。企业客户（Gemini Code Assist Standard/Enterprise 许可证）不受影响。

## 项目简介

Gemini CLI 是 Google 推出的开源命令行 AI 智能体，将 Gemini 模型能力直接带入终端。项目累计获得超过 10 万 GitHub Stars、6000+ 合并 PR、数百位贡献者，是 2025 年最成功的 AI 开发者工具之一。

Google 在公告中表示，随着用户工作流从单智能体演进到多智能体协作，Gemini CLI 的架构已无法满足需求。因此 Google 将开发重心统一转向 **Antigravity** 平台——包含 Antigravity CLI（终端）、Antigravity 2.0（桌面应用）及服务端 Harness。

## 核心特性

- **免费使用**：Google 账号登录即可获得每分钟 60 次、每天 1000 次的免费额度
- **大上下文窗口**：支持百万令牌级上下文，可查询和编辑大型代码库
- **多模态能力**：从 PDF、图像、草图生成应用
- **内置工具**：Google Search 搜索增强、文件操作、Shell 命令、Web 抓取
- **MCP 扩展**：通过 Model Context Protocol 支持自定义集成
- **智能体技能**：Agent Skills、Hooks、Subagents、Extensions
- **GitHub Action**：自动化 PR 审查、Issue 分类、`@gemini-cli` 按需协助（已归档）
- **语音模式**：支持麦克风输入
- **非交互模式**：支持 JSON 和流式 JSON 输出，便于脚本集成

## 安装与认证

**环境要求**：Node.js 20+

```bash
# 直接运行（无需安装）
npx @google/gemini-cli

# 全局安装
npm install -g @google/gemini-cli

# macOS Homebrew
brew install gemini-cli
```

**认证方式**：

| 方式 | 免费额度 | 适用场景 |
|------|---------|---------|
| Google 账号登录 | 60 次/分钟，1000 次/天 | 个人开发者 |
| Gemini API Key | 1000 次/天 | 需指定模型、按量付费 |
| Vertex AI | 企业级额度 | 企业团队、高级安全需求 |

## 过渡至 Antigravity CLI

Antigravity CLI 保留了 Gemini CLI 的关键特性：Agent Skills、Hooks、Subagents、Extensions（现为 Antigravity 插件），并新增：

- **Go 语言重写**：更快的执行速度和响应性能
- **异步工作流**：多智能体后台编排，支持大规模重构或多主题并行研究
- **统一架构**：与 Antigravity 2.0 桌面应用共享同一智能体 Harness，改进自动同步

**迁移时间线**：

| 日期 | 事件 |
|------|------|
| 2025 年 4 月 | Gemini CLI 开源（Apache 2.0） |
| 2026 年 5 月 19 日 | Google 宣布过渡计划，Antigravity CLI 面向所有用户开放 |
| 2026 年 6 月 18 日 | Gemini CLI 停止服务（免费用户、AI Pro、Ultra） |

> 注意：Gemini CLI GitHub 仓库（google-gemini/gemini-cli）目前仍处于活跃状态，但根据官方公告，个人用户的访问将于 2026 年 6 月 18 日终止。企业客户可继续使用。
