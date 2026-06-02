---
name: NanoClaw
slug: nanoclaw
homepage: https://nanoclaw.dev
repo: https://github.com/gavrielc/nanoclaw
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Application
  - Assistant
  - CLI
  - Dev Tools
  - Runtime
description: NanoClaw 是一个容器化运行的轻量 Claude 助手，强调本地安全、代码可读性与可定制性。
logo: ''
author: gavrielc
ossDate: '2026-01-31T15:47:22Z'
featured: false
status: tracked
---

## 简介

NanoClaw 是一个轻量级、容器化运行的 Claude 个人助手，强调代码层面的可理解性和快速定制能力。它通过 Apple Container 或 Docker 在隔离容器中运行每个智能体，提供文件系统级的安全边界。项目基于 Claude Agent SDK 构建，采用技能（skill）扩展模型，保持代码库小巧且可审计。

## 主要特性

单进程、极简的源码架构使整个代码库易于阅读、理解和修改，无需面对复杂的微服务。基于容器的隔离确保每个智能体在明确的安全边界内运行，降低宿主机风险。通过 Claude Code 引导安装和技能系统，用户可以渐进式地添加 WhatsApp I/O、计划任务和 Web 访问等集成。框架支持连接 WhatsApp、Telegram、Slack、Discord 和 Gmail 等主流消息平台。

## 使用场景

高级用户在本地或受控环境中运行 NanoClaw 作为个人助手，用于私有自动化、安全的信息检索和定期简报。开发者通过可复现的、代码化的技能文件定制智能体行为，而非不透明的配置。该项目适合希望完全掌控助手能力而又不想承担企业平台开销的用户。

## 技术特点

TypeScript 实现保持最小的依赖集合，确保可靠性和易于审计。使用 Apple Container 或 Docker 的容器沙箱提供强隔离，无需重型编排基础设施。基于文件系统的 IPC 和 SQLite 实现轻量持久化，替代分布式数据库，保持系统简单且可移植。通过技能文件的代码驱动定制确保所有变更可版本控制和可复现。
