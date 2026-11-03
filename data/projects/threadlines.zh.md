---
name: Threadlines
slug: threadlines
homepage: https://www.threadlines.dev
repo: https://github.com/Threadlines/threadlines
license: MIT
category: applications-products
subCategory: desktop-clients
tags:
  - Coding Agents
  - Desktop App
  - Multi-Agent
  - Git Worktree
  - Claude Code
description: >-
  Threadlines 是一款开源桌面应用（macOS、Windows、Linux），用于运行编程智能体——面向 Claude Code、Codex、OpenCode、Cursor 及 ACP
  注册表中智能体的智能体开发环境（ADE）。多个智能体可共享同一线程，智能体可自行创建线程；拉取请求、CI 检查、源代码管理与内置浏览器就在对话旁边。完全运行在用户自己的电脑上，无需托管后端。
author: Threadlines
ossDate: '2026-05-25'
featured: false
status: tracked
---
## 详细介绍

Threadlines 是面向 Claude Code、Codex、OpenCode、Cursor 等编程智能体的开源智能体开发环境（ADE）。它把智能体对话、实时浏览器、项目文件、终端与源代码管理放在同一界面中，让你能直接查看、引导和恢复智能体的工作，无需在多个工具间来回重建上下文。它驱动各厂商自己的智能体 CLI，使用用户自己的账户，完全运行在本地，不需要托管后端。

多个智能体可以共享同一个线程，一个智能体能审查另一个的改动；智能体也可以自行创建线程，并自行挑选模型。多台电脑可以关联——一台机器上的智能体在征得同意后可以在另一台机器上开启线程，Fleet 视图展示每台电脑正在运行的任务。

## 主要特性

- **多智能体共享线程**：加入第二个智能体检查第一个的工作，或在其他智能体继续工作的同时向 Codex 或 Claude 提问
- **智能体自建线程**：智能体可将大任务拆分到新线程，各自挑选模型，结果回传给它
- **多电脑 Fleet**：关联 Mac、Windows PC 或 Linux 机器；经批准的智能体和 `threadlines` 命令可在其他机器上开启线程（除非已允许，否则先询问）
- **对话旁的拉取请求与 CI**：在创建 PR 的线程旁审查 PR 及其检查结果，直接把反馈发给智能体
- **每个线程旁的浏览器**：审查视觉改动，把确切的页面状态发回给智能体，无需离开工作区
- **可操作的源代码管理**：查看逐文件变更与提交图，在同一应用内提交、推送、发起拉取请求
- **定时与事件任务**：智能体按选定时间执行提示词，或在 GitHub issue 打标签、webhook 到达时启动
- **持久会话**：重启后恢复工作，线程可切换到另一个智能体而不丢失对话或工作树
- **手机即客户端**：扫码与桌面应用或自托管服务器配对；智能体需要你时收到提醒

## 使用场景

- **运行与引导编程智能体**：对话、浏览器、文件、终端、Git 集于一处，不再在工具间切换
- **智能体交叉审查**：合并前让一个智能体在同一线程里审查另一个的改动
- **多机智能体协作**：让智能体使用适合任务的机器——Linux 上构建、Mac 上审查——统一在 Fleet 视图中
- **无人值守运行**：定时调度智能体任务或由 GitHub 标签与 webhook 触发，需要人时手机收到提醒

## 技术特点

- **直接驱动厂商 CLI**：Threadlines 运行智能体各自的 CLI（Claude Code、Codex、OpenCode、Cursor、ACP 注册表智能体），使用用户自己的账户；首次运行的设置清单可一键安装缺失的 CLI
- **按线程的 Git Worktree**：每个线程可拥有独立 Git worktree，在并发的智能体任务间隔离工作树
- **本地优先，无托管后端**：运行于用户电脑；手机客户端与桌面应用或自托管服务器直接配对
- **精确上下文附加**：将选中的回复、代码或终端行直接附加到下一条消息，而非重复提示
- **可见的进程模型**：任务、子智能体与后台进程均有实时状态与停止控件——没有隐形运行
- **基于转录的用量看板**：令牌与成本看板读取各电脑上智能体自己的转录，合并为统一视图
- **TypeScript monorepo**，带 CI 与 macOS、Windows、Linux 三平台发布
