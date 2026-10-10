---
name: Tale
slug: tale
homepage: https://tale.dev
repo: https://github.com/tale-project/tale
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - Team Collaboration
  - Task Management
  - Agent Orchestration
  - Sandbox
  - Self-Hosted
  - Workflow Automation
  - MCP
description: 开源的团队与 AI 智能体共享项目工作区：任务看板上人与智能体同列，智能体运行在持久沙箱工作区中，可各自配置运行时、模型、技能与工具，产出以可审查的报告和交付文件回流。
author: tale-project
ossDate: '2025-11-30'
featured: false
status: tracked
---

## 简介

Tale 为团队成员和 AI 智能体提供共享的项目工作区。在看板上添加任务、分配给成员或智能体、跟进进展，并审查报告与交付文件——需求简述、讨论、项目知识和成果都保存在一处。每个智能体可单独配置运行时、模型、技能和工具，运行在持久沙箱工作区中，并发受配置容量限制。Tale 采用 MIT 协议，可自托管在自己的基础设施上，也可使用托管云服务。

## 主要特性

- 共享任务看板，任务可在成员与智能体之间并排分配，支持进度跟踪与对报告、交付文件的审查
- 每个智能体单独配置运行时、模型、技能与工具，可使用自有提供商 API key 或受支持的订阅搭配兼容的智能体运行时
- 管理者智能体负责分派就绪任务并协调后续工作
- 每个智能体拥有持久沙箱工作区，并发受配置容量限制
- 工作流自动化编辑器，可检查步骤、测试输入并审查运行记录
- 治理护栏与连接器，将工作区接入团队已有的服务
- 聊天 Arena 模式，将两个模型对同一提示的响应并排对比

## 使用场景

- 将调研问题、文档评审、报告与营销材料制作、网站/应用/内部工具搭建等任务与人类成员一起委派给智能体
- 在自有基础设施上自托管团队工作区，同时按智能体混用不同运行时与提供商 key
- 将简述、讨论、知识与智能体交付物保留在同一处可审查的空间，而非散落在聊天记录里

## 技术特点

- TypeScript 单仓多服务架构（服务拆分于 `services/` 下），配套构建与测试 CI；MIT 协议，社区版与企业版产品功能一致（企业版增加运维与支持）
- 智能体执行通过带凭证支持的运行时 harness 完成——兼容运行时包括 Claude Code、Codex 等编码智能体以及 OpenClaw、Hermes 等个人智能体，可与自有提供商 key 或订阅混用
- 智能体运行在持久沙箱工作区而非临时会话中，中间状态与文件跨任务保留；并发由配置容量约束
- 支持 MCP 进行工具集成，另有连接器层与可配置的治理护栏实现策略管控
- 部署方式为自托管或托管云服务两种
