---
name: Trigger.dev
slug: trigger-dev
homepage: https://trigger.dev/docs
repo: https://github.com/triggerdotdev/trigger.dev
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Workflow
description: 用于构建与部署可扩展 AI Agent 与工作流的开源平台，提供任务持久化、重试、可观测性与弹性伸缩能力。
logo: ''
author: trigger.dev
ossDate: '2022-11-30T14:59:07.000Z'
featured: false
status: tracked
---

## 简介

Trigger.dev 是一个开源平台，用于构建和部署无超时限制的持久化 AI 代理和后台工作流。它开箱即用地提供重试、队列、可观测性和弹性伸缩能力，使团队能够构建对故障具有韧性且易于监控的复杂长时任务。

## 主要特性

平台支持长时运行任务，内置断点恢复、自动重试和幂等性保证，确保复杂的多步骤工作流可靠完成。通过分布式链路追踪、结构化日志和任务输出的实时流式传输，提供完整的可观测性，便于调试和监控。TypeScript 和 JavaScript SDK 提供扩展点和前端集成钩子，开发者可将工作流逻辑直接嵌入应用程序中。

## 使用场景

团队将 LLM 驱动的代理部署为生产服务，处理文档处理、数据增强和客户沟通等多步骤工作流。当工作负载需要持久性、重试和幂等性保证时，组织使用 Trigger.dev 替代短生命周期的无服务器函数。它同时支持自托管和云端托管部署模式，满足团队快速迭代和扩展后台处理的需求。

## 技术特点

Trigger.dev 基于以 TypeScript 为核心的运行时构建，支持为每个任务配置 CPU 和内存资源限制。它提供实时流式输出、并发控制以管理并行执行，以及任务版本化以支持安全渐进式发布。平台基于 Apache-2.0 许可开源，拥有活跃的社区和完善的文档。
