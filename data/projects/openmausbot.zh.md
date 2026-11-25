---
name: OpenMausBot
slug: openmausbot
homepage: https://www.mausbot.com/
repo: https://github.com/milind-soni/OpenMausBot
license: Apache-2.0
category: applications-products
subCategory: desktop-clients
tags:
  - AI Agent
  - Application
  - Multi-Agent
  - Claude Code
  - Self-Hosted
description: >-
  一款开源、本地优先的桌面聊天应用，每个联系人都是运行在你本机 Claude、Codex 或 Grok CLI 上的真实 AI 智能体，各自拥有独立的人设、模型、计算机和已连接的应用。
author: milind-soni
ossDate: '2026-08-11T18:58:55.000Z'
status: tracked
---
## 简介

OpenMausBot 是 Grok Bot 的开源替代品，把 AI 智能体做成了一款即时通讯应用。侧边栏中的每个机器人都是一个真实的智能体，由本机安装的 `claude`、`codex` 或 `grok` CLI 驱动，拥有独立的人设、模型、计算机和已连接的应用。你可以像和联系人聊天一样与它们对话，观察它们工作，并审批关键操作。

## 主要特性

- 自带智能体：机器人复用本机已有的 CLI 登录和订阅，无需新账号，中间也没有代理。
- 本地优先：运行在 `127.0.0.1` 上的轻量 harness 服务管理所有智能体进程，对话记录、密钥和事件都保存在 `~/.openmausbot` 中。
- 智能体可动手操作：每个机器人可以使用云端 Linux 桌面、隔离的本地虚拟机，或在明确授权后操作宿主机。
- 通过 Composio 连接 500 多款应用。
- 提供 macOS、Windows 和 Linux 的跨平台桌面版本。

## 使用场景

- 在一个聊天界面中管理一组各有分工的个人智能体。
- 把计算机操作任务交给隔离虚拟机中的智能体，同时保留对敏感操作的审批权。
- 基于已有的模型订阅自托管个人智能体产品，而不依赖封闭的云服务。

## 技术特点

- 使用 TypeScript、React 和 Electron 构建。
- 本地 harness 服务负责管理智能体 CLI 进程，引擎可指向自定义的 CLI 二进制文件。
- 采用 Apache 2.0 许可证发布。
