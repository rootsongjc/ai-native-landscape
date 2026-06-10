---
name: AgentCookie
slug: agentcookie
homepage: null
repo: https://github.com/mvanhorn/agentcookie
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agents
  - CLI
  - Chrome
  - macOS
  - Tailscale
  - Automation
description: 通过加密的 Tailscale 连接在 Mac 之间同步浏览器会话，使远程机器上的 AI 智能体自动获得认证状态。
author: mvanhorn
ossDate: '2026-05-16'
featured: false
status: tracked
---

## 简介

AgentCookie 通过加密的 Tailscale 连接在多台 Mac 之间同步浏览器会话和 Cookie。它使运行在远程 Mac 上的 AI 智能体运行时能够自动获得认证状态，无需云中间商，实现持续的会话同步。

## 主要特性

- 通过 Tailscale 加密的点对点浏览器会话同步
- 保持 AI 智能体会话在多台机器间的认证状态
- 兼容 OpenClaw、Hermes 等任意智能体运行时
- 无云中间商 — macOS 到 macOS 的直接同步
- Chrome Cookie 和会话数据的持续后台同步

## 使用场景

- 在专用 Mac 上运行 AI 智能体，同时在日常使用的 Mac 上浏览网页
- 无需手动登录即可保持远程智能体会话的认证状态
- 使用真实浏览器凭据实现无头智能体自动化

## 技术特点

- 使用 Go 语言构建，原生 macOS 集成
- 利用 Tailscale 实现加密的点对点连接
- 持续同步 Chrome 浏览器 Cookie 和会话数据
