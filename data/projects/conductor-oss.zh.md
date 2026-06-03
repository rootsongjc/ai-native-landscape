---
name: Conductor OSS
slug: conductor-oss
homepage: https://conductor-oss.org/
repo: https://github.com/conductor-oss/conductor
license: Apache-2.0
category: applications-products
subCategory: workflow-automation
tags:
  - Workflow
description: 源自 Netflix、由社区与 Orkes 维护的分布式工作流编排引擎，支持大规模微服务与事件驱动流程的弹性与可观测执行。
author: Conductor
ossDate: '2023-12-08T06:06:09.000Z'
featured: false
status: tracked
---
Conductor OSS 是一个事件驱动的智能体工作流引擎，为应用程序和 AI 智能体提供持久化、高弹性的执行能力。该项目源自 Netflix，通过版本化的 JSON 工作流定义协调复杂微服务与异步任务，具备深度运行时可观测性。

## 任务与工作流能力

- 丰富的任务类型，包括 HTTP、Lambda、子工作流、事件、队列和脚本，提供最大灵活性
- 内置重试策略、失败处理和补偿机制，确保弹性执行
- 版本化 JSON 工作流定义与声明式 DSL 实现服务解耦
- 支持跨越数小时甚至数天的长时间运行工作流，状态持久化可靠

## 可观测性与集成

- 内置 UI 支持实时执行追踪、可视化调试和诊断
- 可插拔的持久化后端：Redis、MySQL、Postgres 和 Elasticsearch
- 提供 Java、Python、Go 等多语言 SDK，便于集成现有技术栈
- 执行图提供工作流状态和任务结果的完整可见性

## 使用场景

- 微服务编排与分布式事务协调
- 支持分支、循环和人机协同步骤的多阶段 AI 智能体流水线
- 数据 ETL 处理和异步批处理工作流
- 需要审计追踪和合规管理的的企业业务流程

## 架构设计

- 事件驱动的持久化状态机架构，支持水平扩展
- 支持从开发到生产的多环境部署，提供命名空间隔离
- 路线图清晰、社区贡献活跃的开源生态系统
