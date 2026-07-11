---
name: BrowserSkill
slug: browserskill
homepage: null
repo: https://github.com/Tencent/BrowserSkill
license: MIT
category: coding-devtools
subCategory: browser-automation
tags:
  - AI Agent
  - Browser Automation
  - Dev Tools
description: 一个 CLI 与浏览器扩展，让任何能调用 shell 的 AI 智能体借用你已登录的真实浏览器执行自动化操作，且不打断你的工作。
author: Tencent
ossDate: '2026-06-22T07:24:40Z'
featured: false
status: tracked
---
## 简介

BrowserSkill 将 Claude Code、Cursor、Codex 等能调用 shell 的 AI 智能体接入你已登录的真实浏览器。智能体不会另起隔离会话，而是显式借用某个标签页，任务完成后归还，其余浏览器不受影响，自动化在独立的可见 Agent 窗口中运行，你可以继续使用自己的浏览器。

## 主要特性

- 复用真实登录态，智能体可直接操作你已登录的站点，无需单独测试账号
- 浏览器任务在独立可见的 Agent 窗口中运行，不影响你自身的浏览器使用
- 通过 `bsk` CLI 适配任何能调用 shell 的智能体，不绑定特定模型或框架
- 内置人工接管机制，应对验证码、登录与确认弹窗等需人工介入的步骤

## 使用场景

- 在已登录的站点上执行自动化任务
- 让编程智能体在开发与测试中驱动真实浏览器状态
- 网页抓取、表单填写及含人工步骤的端到端流程

## 技术特点

- 本地运行时由 `bsk` CLI/守护进程与 Chrome/Edge 扩展组成
- 跨平台支持 macOS、Linux 与 Windows，提供一行命令安装
- 内置可安装的 skill，教会各类智能体外壳如何使用 `bsk` CLI
