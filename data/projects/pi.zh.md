---
name: Pi
slug: pi
homepage: https://pi.dev
repo: https://github.com/earendil-works/pi
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - CLI
  - TUI
  - TypeScript SDK
description: Pi 是一个极简、可扩展的编程智能体 CLI 与智能体运行框架，提供统一的多供应商 LLM API、交互式终端 UI 和 TypeScript SDK。
author: Earendil Works
ossDate: '2025-08-09'
featured: false
status: tracked
---

## 简介

Pi 是一个极简、可扩展的编程智能体骨架（agent harness），理念是让工具适应用户的工作流，而不是反过来。它自带强力默认配置，但刻意省略子智能体、计划模式等功能，鼓励用户按需通过扩展补齐。同时它也是一个工具箱：统一的多供应商 LLM API、智能体运行时和终端 UI 库均可被其他应用复用。

## 主要特性

- 交互式终端编程智能体，配备全屏 TUI，并支持 print 和 JSON 模式用于脚本化与自动化
- 通过扩展、技能（skills）、提示词模板和主题实现定制，可打包为 Pi 包并通过 npm 或 git 分发
- 统一的多供应商 LLM API，支持 OpenAI、Anthropic、Google 等
- 可通过 RPC 远程控制，并可通过 TypeScript SDK 嵌入自定义智能体应用
- 内置 AI 供应商登录（`/login`），可接入订阅或 API key

## 使用场景

- 在终端中进行 AI 结对编程与代码生成，按自己的习惯定制智能体
- 在 CI 或脚本中通过 print/JSON 输出模式自动化编码任务
- 基于 SDK、智能体运行时和 TUI 库构建自定义智能体应用
- 通过 RPC 从其他工具程序化驱动智能体

## 技术特点

- 采用 monorepo 拆分为可组合的包：`pi-ai`（统一多供应商 LLM API）、`pi-agent-core`（带工具调用与状态管理的智能体运行时）、`pi-tui`（差分渲染的终端 UI 库）、`pi-durable`（持久化会话、任务与文档运行时）以及 `pi-coding-agent`（CLI 本体）
- 依赖 Node.js 22.19+；npm 安装无需执行依赖生命周期脚本（`--ignore-scripts`），官方安装脚本固定全部依赖版本并通过 `pi update` 自更新
- 不内置权限系统：文件系统、进程、网络和凭据访问以启动用户的权限运行，官方文档给出三种容器化隔离方案（将工具调用路由到本地 micro-VM 的扩展、整体 Docker 容器、策略控制的沙箱）
- 提供可离线构建的 Nix 包，构建时使用固定的模型目录版本，运行时再叠加 pi.dev 的最新目录数据
- 供应商中立的遥测契约（`pi-telemetry`），含参考适配器、一致性测试与类型化 schema
