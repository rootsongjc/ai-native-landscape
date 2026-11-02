---
name: OpenCLI
slug: opencli
homepage: https://opencli.info/
repo: https://github.com/jackwener/OpenCLI
license: Apache-2.0
category: coding-devtools
subCategory: browser-automation
tags:
  - Browser Automation
  - CLI
  - AI Agents
  - Playwright
description: 面向 AI 智能体的浏览器自动化 CLI，把网站转换为确定性的 CLI 命令，并通过桥接扩展让智能体在你已登录的 Chrome 上操作任意网站，附带可复用的站点适配器。
author: jackwener
ossDate: '2026-03-14'
featured: false
status: tracked
---

## 简介

OpenCLI 把网站和浏览器会话变成对人类与 AI 智能体都确定的接口。它是一个通用浏览器自动化 CLI，通过 Browser Bridge 扩展加本地守护进程连接到你真实且已登录的 Chrome，因此命令使用你现有的登录态运行——对任意页面无需站点适配器。内置适配器为 Bilibili、知乎、小红书、Reddit、HackerNews、Twitter/X 等站点提供可复用命令，配套的创作工作流还支持端到端编写新适配器。

## 主要特性

- 一个界面三种用法：运行内置站点适配器、让 AI 智能体通过 `opencli browser` 原语操作任意网站、或用 `opencli-adapter-author` 技能编写新适配器
- 智能体命令契约：stdout 输出 JSON（`{"ok": true, "data": ...}` 或 `{"ok": false, "error": {code, message, hint}}`），日志走 stderr，失败时非零退出
- 直接使用已登录的浏览器——无需 headless 浏览器或单独的自动化配置
- 内置 Bilibili、知乎、小红书、Reddit、HackerNews、Twitter/X 等站点适配器
- 面向 AI 智能体（Claude Code、Cursor 等）的 `opencli-browser` 技能，覆盖导航、点击、输入/填充、提取与检查
- 多 Profile 支持：列出已连接的 Chrome Profile 并指定本地别名
- OpenCLIApp 桌面端捆绑运行时，提供托盘 UI 负责安装、诊断、更新与登录保活

## 使用场景

- 为 AI 智能体提供确定可靠的网站命令，替代脆弱的截图驱动自动化
- 利用既有登录态读取和操作登录墙后的站点（社交平台、内部工具）
- 为搜索、列表、提取等重复工作流构建可复用的站点适配器
- 人类无需打开浏览器即可快速查询站点（`opencli hackernews top --limit 5`）

## 技术特点

- Node.js CLI（>= 20.18.1，npm 包 `@jackwener/opencli`），通过轻量 Browser Bridge 扩展加按需自动启动的本地守护进程驱动 Chrome/Chromium
- 面向智能体的确定性输出契约：命令默认在 stdout 输出 `{ok, data}`/`{ok, error}` JSON，错误带结构化的 code、message 和 hint；浏览器跟随模式输出 JSON Lines
- 适配器体系：内置站点适配器，加上端到端创作管线（`opencli browser` 原语 + `opencli-adapter-author` 技能 + `adapter init|check|test`），从初步侦察、字段解码到测试完成全流程引导
- 通过 `--session` 做页面级作用域隔离；原生 Chrome 调用无需 session；多 Profile 时将 Chrome contextId 映射为本地别名，存在多个已连接 Profile 时显式询问而非猜测
- `opencli doctor` 校验安装；`state --diagnostics` 与 `network --static` 取代了旧的 analyze/discover 流程
