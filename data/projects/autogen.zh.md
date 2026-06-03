---
name: AutoGen
slug: autogen
homepage: https://microsoft.github.io/autogen/
repo: https://github.com/microsoft/autogen
license: Other
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Dev Tools
  - Utility
description: 用于代理式 AI 的编程框架，可实现多代理工作流的开发，具有分层和可扩展的设计。
author: Microsoft
ossDate: '2023-08-18T11:43:45.000Z'
featured: false
status: tracked
---
AutoGen 是微软推出的代理式 AI 编程框架，用于构建具有灵活对话模式的多智能体系统。框架采用分层可扩展的架构设计，各层职责明确，使开发者能够在不同抽象级别上工作，从高级 API 到底层组件。

## 分层架构

- **Core API**，提供消息传递、事件驱动代理与运行时基础设施
- **AgentChat API**，用于快速原型设计，支持群聊、轮询等常见多代理模式
- **Extensions API**，集成 LLM 客户端、代码执行沙箱与第三方工具
- 编排逻辑、代理行为与工具集成清晰分层

## 开发者工具

- **AutoGen Studio** — 无代码 Web GUI，可视化编排与调试智能体工作流
- **AutoGen Bench** — 基准测试套件，评估智能体在不同任务上的表现
- 内置可观测性钩子，追踪消息流与代理决策过程
- 每周办公时间、Discord 社区与 GitHub Discussions 提供支持

## 多智能体模式

- 群聊模式，支持可配置的发言者选择与轮次管理
- 顺序与嵌套对话模式，用于层次化任务分解
- Magentic-One 模式，处理网页浏览、代码执行与文件操作
- 自定义代理角色，支持专业化能力与工具访问控制

## 集成与扩展

- 跨语言支持，提供 .NET 与 Python SDK
- 本地与分布式运行时选项，兼顾开发与生产环境
- 兼容 OpenAI、Azure OpenAI 等主流 LLM 提供商
- 可插拔工具系统，支持自定义函数、API 与代码执行器
