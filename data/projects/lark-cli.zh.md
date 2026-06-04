---
name: Lark CLI
slug: lark-cli
homepage: null
repo: https://github.com/larksuite/cli
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - CLI
  - Dev Tools
  - SDK
description: Lark CLI 是飞书官方维护的命令行工具，面向人类与 AI Agent 设计，覆盖日历、文档、多维表格、消息、邮件、任务等 17 个业务领域，提供 200+ 命令与 24 个 AI Agent Skill。
author: Larksuite
ossDate: '2026-03-25T07:13:30Z'
featured: true
status: tracked
---

## 详细介绍

Lark CLI 是由飞书官方团队（larksuite）开源的命令行工具，采用 Go 语言编写，同时面向人类用户和 AI Agent 设计。它覆盖日历、即时通讯、云文档、多维表格、电子表格、幻灯片、任务、知识库、通讯录、邮件、视频会议、考勤、审批、OKR 等 17 个业务领域，提供 200+ 条命令与 24 个即插即用的 AI Agent Skill。项目基于 MIT 协议开源，可通过 npm 一键安装，从配置到首次 API 调用仅需 3 步。

## 主要特性

- Agent 原生设计：内置 24 个结构化 Skill，兼容主流 AI 工具，Agent 无需额外配置即可操作飞书全业务域。
- 三层命令架构：Shortcuts（人类与 AI 友好）→ API Commands（平台同步）→ Raw API（完整覆盖），按需选择粒度。
- 17 个业务领域全覆盖：日历、消息、文档、多维表格、电子表格、幻灯片、任务、知识库、通讯录、邮件、视频会议、考勤、审批、OKR 等。
- AI 友好输出：每条命令均经真实 Agent 测试，提供精简参数、智能默认值与结构化输出，最大化 Agent 调用成功率。
- 安全可控：输入注入防护、终端输出脱敏、OS 原生密钥链凭证存储。
- 快速上手：npm 一键安装，交互式登录，3 分钟完成从安装到首次 API 调用。

## 使用场景

- AI Agent 自动化企业办公流程：通过 Skill 快速接入日历管理、消息发送、文档编辑等飞书业务能力。
- 开发者在终端中快速操作飞书 API，进行调试、数据批量处理与自动化脚本编写。
- 企业 IT 管理员使用 CLI 批量管理用户、权限、审批流程等飞书平台资源。
- CI/CD 集成：在自动化流水线中调用飞书 API 完成通知、报告生成、数据同步等任务。

## 技术特点

- Go 语言编写，编译为单一可执行文件，跨平台部署零依赖。
- npm 分发，支持 `npx @larksuite/cli@latest install` 一键安装。
- OAuth 2.0 认证体系，支持用户身份与机器人身份切换（`--as user` / `--as bot`）。
- WebSocket 长连接实时事件订阅（`lark-event` Skill），支持正则路由与 Agent 友好的 NDJSON 输出。
- 模块化 Skill 架构，支持通过 `lark-skill-maker` 自定义扩展。
