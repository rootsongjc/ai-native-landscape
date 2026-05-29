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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

NanoClaw 是作者为个人使用设计的轻量级 Claude 智能体助手，强调可理解的代码与容器隔离安全。项目通过在 Apple Container（或 Docker）中运行每个智能体，避免复杂的微服务和权限表，并使用 Claude Agent SDK 作为运行时和技能（skill）扩展机制。

## 主要特性

- 单进程、少量源码，便于阅读与自定义。
- 每个智能体在独立容器中运行，实现文件系统级隔离与安全边界。
- 内置 Claude Code 引导安装与配置，支持通过技能（skill）扩展功能。
- 支持 WhatsApp I/O、计划任务与 Web 访问等常见集成场景。

## 使用场景

适合希望在本地或受控环境中运行个人助手的高级用户：家庭或个人自动化、私有信息检索与汇报、定期任务调度，以及需要在可审计代码基础上自定义智能体行为的场景。

## 技术特点

- 基于 TypeScript 的简洁实现，最小依赖集合。
- 智能体运行时使用容器（Apple Container / Docker）进行隔离，降低主机风险。
- 以文件系统和 SQLite 作为轻量持久化与 IPC 机制，避免复杂分布式依赖。
- 设计上鼓励通过 `claude code` 指令与技能文件进行可重复、代码化的自定义。
