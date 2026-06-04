---
name: OpenClaw
slug: openclaw
homepage: https://openclaw.ai
repo: https://github.com/openclaw/openclaw
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - AI Gateway
  - Agent Framework
  - Agents
  - Assistant
  - CLI
description: 在你自己的设备上运行的本地优先个人智能体，支持多渠道消息与可编排的技能。
author: OpenClaw
ossDate: '2025-11-24T10:16:47Z'
featured: false
status: tracked
---

OpenClaw 是一个本地优先的个人 AI 助手平台，直接在用户设备上运行并集成常用的消息渠道。它通过中央网关将桌面端、移动端与消息接口连接为统一的个人助手体验，提供始终在线且尊重隐私的智能体服务。

## 本地优先架构

- 将智能体与所有数据保留在用户自有设备或自托管基础设施上，最大限度减少外部依赖
- 通过 RPC 实现多节点协同，连接 CLI、macOS 菜单栏与移动节点，支持设备本地操作
- 支持多模型后端接入，配合凭据轮换与自动故障切换策略提升系统稳健性

## 多渠道消息集成

- 原生集成 WhatsApp、Telegram、Slack、Discord、Signal、iMessage 等主流消息渠道
- 支持可配置的路由与分发规则，实现多渠道告警路由与自动化工作流
- 个人生产力辅助，涵盖日历管理、任务跟踪与跨设备跨渠道的快速信息查询

## 可编排技能与网关

- 基于 WebSocket 的网关架构作为控制平面，统一会话、路由、工具调用与事件管理
- 可视化技能仓库和工作区模型管理复杂自动化流程，界面直观易用
- 支持低延迟语音与 Canvas 交互，适用于本地开发者测试与集成场景
