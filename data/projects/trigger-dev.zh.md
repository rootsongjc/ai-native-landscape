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

Trigger.dev 是一个面向构建 AI Agent 与长期运行工作流的开源平台，提供无超时的持久任务、队列与重试机制，以及完善的可观测性与实时流式功能，便于在生产环境可靠运行复杂任务。

## 主要特性

- 长期运行任务：支持无限制运行时和断点恢复，适合长时任务与代理编排。
- 可观测性：每次运行都有完整追踪、日志与实时流，便于调试与性能分析。
- 多语言 SDK 与扩展：提供 TypeScript/JavaScript SDK、扩展点与前端集成方案。

## 使用场景

- 将 LLM 驱动的代理部署为可扩展的生产服务，处理长时作业、复杂业务流程与人机交互。
- 在需要重试、排队与幂等保障的场景下替代短时无状态函数式平台。
- 自托管或使用云端服务快速迭代与部署 AI workflows。

## 技术特点

- 基于 TypeScript 的 SDK 与可扩展运行时，支持自定义扩展与运行时资源配额。
- 支持实时流式输出、并发控制与任务版本化，适配多环境（DEV/PROD/Preview）。
- Apache-2.0 许可证、活跃社区与丰富文档，便于企业使用与贡献。
