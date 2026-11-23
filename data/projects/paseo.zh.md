---
name: Paseo
slug: paseo
homepage: https://paseo.sh
repo: https://github.com/getpaseo/paseo
license: Apache-2.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Coding Agent
  - Orchestration
  - Dev Tools
  - Self-Hosted
  - Claude Code
description: >-
  开源的智能体开发环境，覆盖桌面、移动端、Web 和 CLI，可通过同一界面并行运行多个编码智能体，每个智能体使用独立的 worktree。
author: Paseo
ossDate: '2025-10-13T12:27:02.000Z'
featured: false
status: tracked
---
## 简介

Paseo 是一个开源的智能体开发环境，把 Claude Code、Codex、Copilot、OpenCode、Pi 等编码智能体统一到同一个界面中。本地守护进程负责管理智能体，桌面、移动端、Web 和 CLI 客户端都连接到它，在一个窗口里集成了智能体、编辑器、终端、diff、Pull Request 和浏览器。

## 主要特性

- 并行智能体：同时运行多个智能体，每个使用独立的 git worktree，可分布在一台或多台机器上。
- 内置编排：智能体可以创建 worktree、启动其他智能体并跨提供方相互对话。
- 完整开发流程：在可自由排布的分屏中编辑文件、审查 diff、创建 Pull Request、运行终端。
- 跨设备：原生 iOS 和 Android 应用提供完整功能，同时支持桌面、Web 和 CLI。
- 自托管、隐私优先：智能体运行在你自己的机器上，使用你的工具和配置，没有遥测，也不强制登录。
- 插件：在守护进程上扩展界面、智能体生命周期和提供方，一次编写即可在所有客户端生效。

## 使用场景

- 让多个编码智能体并行处理不同任务，合并前逐一审查各自的 diff。
- 在手机上查看并指挥长时间运行的智能体。
- 通过终端脚本在本地或远程主机上运行智能体任务。

## 技术特点

- 使用 TypeScript 编写，守护进程可通过 npm（`@getpaseo/cli`）或 Docker 安装。
- 设备配对可使用可选的端到端加密中继，也可通过 TCP 直连、Tailscale 或其他 VPN。
- Paseo 自身代码采用 Apache 2.0 许可证，内含的第三方组件保留各自的许可证。
