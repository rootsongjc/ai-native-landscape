---
name: OpenClaw
slug: openclaw
homepage: https://openclaw.ai
repo: https://github.com/openclaw/openclaw
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - AI Gateway
  - Agent Framework
  - Agents
  - Assistant
  - CLI
description: 在你自己的设备上运行的本地优先个人智能体，支持多渠道消息与可编排的技能。
logo: ''
author: OpenClaw
ossDate: '2025-11-24T10:16:47Z'
featured: false
status: tracked
---

## 简介

OpenClaw 是一个本地优先的个人 AI 助手平台，直接在用户设备上运行并集成常用的消息渠道。它通过中央网关将桌面端、移动端与消息接口连接为统一的个人助手体验，提供始终在线且尊重隐私的智能体服务。

## 主要特性

本地优先架构将智能体与所有数据保留在用户自有设备或自托管基础设施上，最大限度减少外部依赖。原生集成 WhatsApp、Telegram、Slack、Discord、Signal、iMessage 等主流消息渠道，支持可配置的路由与分发规则。可编排的技能与工作空间通过可视化技能仓库和工作区模型管理复杂自动化流程。

## 使用场景

个人生产力辅助，涵盖日历管理、任务跟踪与跨设备跨渠道的快速信息查询。面向需要私有可控助手的个人与小团队的多渠道告警路由与自动化工作流。需要低延迟语音与 Canvas 交互的本地开发者测试与集成场景。

## 技术特点

基于 WebSocket 的网关架构作为控制平面，统一会话、路由、工具调用与事件管理，支持运行时扩展。通过 RPC 实现多节点协同，连接 CLI、macOS 菜单栏与移动节点，支持设备本地操作如系统命令执行。支持多模型后端接入，配合凭据轮换与自动故障切换策略提升系统稳健性。
