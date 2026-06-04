---
name: Trigger.dev
slug: trigger-dev
homepage: https://trigger.dev/docs
repo: https://github.com/triggerdotdev/trigger.dev
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - Workflow
description: 用于构建与部署可扩展 AI Agent 与工作流的开源平台，提供任务持久化、重试、可观测性与弹性伸缩能力。
author: trigger.dev
ossDate: '2022-11-30T14:59:07.000Z'
featured: false
status: tracked
---

Trigger.dev 是一个开源平台，用于构建和部署无超时限制的持久化 AI 代理和后台工作流。它开箱即用地提供重试、队列、可观测性和弹性伸缩能力，使团队能够构建对故障具有韧性且易于监控的复杂长时任务。

## 持久化任务执行

- 长时运行任务内置断点恢复、自动重试和幂等性保证
- 复杂多步骤工作流在故障条件下仍能可靠完成
- 支持为每个任务配置 CPU 和内存资源限制
- 任务版本化支持安全渐进式发布

## 可观测性与监控

- 分布式链路追踪、结构化日志和任务输出实时流式传输
- 面向生产工作流的调试与监控工具
- 并发控制管理并行执行
- 以 TypeScript 为核心的运行时，提供流畅的异步流式编程体验

## 开发者体验

- TypeScript 和 JavaScript SDK 提供扩展点与前端集成钩子
- 工作流逻辑可直接嵌入应用程序
- 支持自托管和云端托管两种部署模式
- 团队将 LLM 驱动的代理部署为生产服务，处理文档处理、数据增强和客户沟通
