---
name: Cloudflare OS
slug: cloudflare-os
homepage: https://os.cloudflare.app
repo: https://github.com/cloudflare/cloudflare-os
license: Apache-2.0
category: applications-products
subCategory: productivity-tools
tags:
  - Agent Workspace
  - Cloudflare Workers
  - Durable Objects
  - Productivity
  - Self-hosted
description: 基于 Cloudflare Workers 构建的智能体工作区，用于创建文档、构建应用，并结合企业上下文与系统运行智能体。
author: Cloudflare
ossDate: '2026-04-15T00:00:00Z'
featured: false
status: tracked
---

## 简介

Cloudflare OS 是 Cloudflare 内部项目开源而来的企业"公司操作系统"——一个 AI 生产力环境，用户可以在其中创建文档、构建应用，并运行能访问企业上下文的智能体。组织可部署到自己的 Cloudflare 账户，也可基于 workerd 自托管。

## 主要特性

- Gadgets（小工具）：私有、沙箱化的生产力应用实例，AI 智能体可安全修改，并支持实时多人协作。
- 内置编程智能体的 Code Mode 可即时编写并执行代码；支持多家 LLM 供应商及自托管模型。
- Gatekeepers（守门人）：基于能力的安全层，由面向特定服务的 Worker 代理智能体对外部 API（GitHub、Google、Slack、Notion）的访问，并提供人工审批环节。
- Blueprints（蓝图）：包含完整应用代码的可分享模板，相当于操作系统的"可执行文件"。

## 使用场景

- 企业 AI 工作区：结合企业上下文生成幻灯片、文档和报告。
- 无需专门基础设施即可构建协作式内部工具——白板、仪表盘、小游戏等。
- 在显式审批流程下，运行操作企业系统（编辑 Google Docs、管理 GitHub 仓库）的智能体。

## 技术特点

- Gadget 以 Dynamic Worker Facet 形式运行且禁用互联网访问，仅通过 Workers Bindings 与显式指定的资源通信；客户端代码运行在受 CSP 限制的沙箱 iframe 中，通过 postMessage 通信。
- Workspace 是承载用户数据与应用实例的 Durable Object；代码存储与版本管理使用 isomorphic-git，实时编辑同步依托 CodeMirror 的 operational transform。
- 客户端与服务端通过 Cap'n Web RPC 通信，样板代码极少，可为每个应用自动暴露对智能体友好的 API。
- 整体按操作系统建模：workshop-backend 是内核，gatekeeper worker 是设备驱动，workshop-frontend 是 shell，gadget 是进程，blueprint 是可执行文件。
