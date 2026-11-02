---
name: cc-haha
slug: cc-haha
homepage: https://cchaha.ai
repo: https://github.com/NanmiCoder/cc-haha
license: Unknown
category: applications-products
subCategory: desktop-clients
tags:
  - Claude Code
  - Desktop App
  - Multi-Agent
  - Computer Use
description: >-
  本地优先的跨平台 Claude Code / AI Agent 桌面工作台：多会话管理、Git Worktree、Diff 审阅、多 Agent 团队协作、
  技能市场、多模型与 Computer Use，并支持手机 App 和 IM 渠道远程访问。
author: NanmiCoder
ossDate: '2026-03-31'
featured: false
status: tracked
---

## 简介

cc-haha 是一个桌面端 Claude Code / AI Agent 工作台，把多会话管理与全局搜索、分支 / Git Worktree 启动、Diff 审阅、内置浏览器预览、图形化权限审批集中在一个 macOS / Windows / Linux 应用里。它远不止终端套壳：Agent Teams 协作工作台让多个 Agent 并行推进，技能市场可安装社区技能，Computer Use 让 Agent 能操作其他应用。配套的 Android / iPhone App 扫码连接电脑，离开工位也能继续审批和派任务。

## 主要特性

- 多会话工作台：全局搜索、分支 / Worktree 启动、逐文件 Diff 审阅、内置浏览器预览、图形化权限审批
- 每个会话自选模型：Claude、ChatGPT、Grok 账号登录，服务商预设（DeepSeek、Kimi、智谱 GLM 等按服务商分组），以及本地端点
- Agent Teams 协作工作台：队长拆分并指派任务、成员并行推进；配合 MCP 与 SubAgent 可视化管理、动态 Workflow 编排和模型请求追踪
- 技能市场浏览 ClawHub 与 SkillHub 的精选技能，来源和安全扫描状态摆在明处
- Computer Use：macOS 上 Agent 通过独立的虚拟光标操作其他应用，你的真实鼠标和键盘照常使用
- Android / iOS App 与 H5 扫码远程访问，接入微信、飞书、钉钉、Telegram、WhatsApp 等 IM 渠道；另有定时任务、图片生成、多主题与桌面宠物

## 使用场景

- 在多个分支和 Worktree 上并行运行多个 Claude Code 会话，用图形界面审阅改动而不是在终端间切换
- 离开工位时用手机审批 Agent 的权限请求、派发新任务
- 在同一个仓库上协调多 Agent 团队并行执行并审阅冲突

## 技术特点

- 基于 Electron，使用 React 与 TypeScript 构建，发布 macOS、Windows、Linux 三个平台，会话与配置本地优先存储
- macOS 的 Computer Use 合成独立的虚拟光标与输入流，Agent 驱动的跨应用 UI 自动化不占用物理鼠标和键盘
- 远程访问通过扫码将手机 App、H5 或 IM 渠道（微信、飞书、钉钉、Telegram、WhatsApp）与桌面实例配对，审批与任务派发经同一通道回传
- Agent Teams 采用队长 / 成员模型协作：成员并行执行、任务指派与逐任务状态跟踪；模型请求追踪则暴露底层模型 API 的调用流量
