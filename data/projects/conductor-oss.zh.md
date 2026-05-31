---
name: Conductor OSS
slug: conductor-oss
homepage: https://conductor-oss.org/
repo: https://github.com/conductor-oss/conductor
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Workflow
description: 源自 Netflix、由社区与 Orkes 维护的分布式工作流编排引擎，支持大规模微服务与事件驱动流程的弹性与可观测执行。
logo: ''
author: Conductor
ossDate: '2023-12-08T06:06:09.000Z'
featured: false
status: tracked
---

Conductor OSS 是一个事件驱动、可扩展、支持持久化执行的工作流 / 编排引擎，最初由 Netflix 构建，用于协调复杂微服务与异步任务。它通过“工作流即配置（JSON 定义）+ 多类型任务（HTTP、子工作流、事件、脚本等）”让分布式业务流程具备弹性、版本化与可观测性，适合在云原生体系中构建长生命周期与跨系统集成的自动化流程。

## 主要特性

- JSON 工作流定义与版本管理
- 丰富任务类型（HTTP、Lambda、子工作流、事件、队列等）
- 失败重试、补偿与错误处理策略
- 内置 UI：执行追踪、状态可视化与调试
- 多后端持久化与索引（Redis、MySQL、Postgres、Elasticsearch / Opensearch）
- 多语言 SDK（Java / Python / JS / Go / C#）
- 可插拔事件与队列集成

## 使用场景

- 微服务调用编排与跨系统事务协调
-智能体 / 工具链长流程（数据获取→推理→汇总→通知）
- ETL / 数据流水线与异步批处理
- 弹性后台任务与人机协同流程

## 技术特点

- 基于事件驱动与持久化状态机模型，支持大规模并发
- 任务解耦 + DSL 定义，降低服务耦合复杂度
- 可观测：完整执行图、指标、失败诊断
- 支持动态扩展与多租户部署模式
- 开源生态活跃，路线图清晰，易于二次集成
