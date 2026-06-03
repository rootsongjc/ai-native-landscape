---
name: Agent Executor (AX)
slug: ax
homepage: 'https://agentexecutor.io'
repo: https://github.com/google/ax
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agent Runtime
  - Distributed
  - Kubernetes
  - Resumability
  - MCP
description: Google 开源的分布式智能体运行时，协调智能体循环、管理执行日志，提供原生恢复和续域能力，支持可靠的智能体部署。
author: Google
ossDate: '2026-03-30'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

AX (Agent eXecutor) 是 Google 的分布式智能体运行时，专为可靠的生产级智能体执行而设计。它协调智能体循环，通过持久化事件日志管理执行过程，原生支持故障恢复和执行续跑。AX 面向 Kubernetes 部署，支持技能、工具和智能体的隔离执行。

## 主要特性

- 分布式运行时，控制器、技能、工具和智能体可隔离执行
- 通过持久化事件日志实现自动恢复和执行续跑
- 单写入者架构确保一致的状态管理
- MCP 服务器集成用于工具执行
- Kubernetes 原生设计，支持计算层 actor 续跑

## 使用场景

- 运行具有可靠性保障和可续跑性的生产 AI 智能体
- 在 Kubernetes 上部署具有隔离 actor 的分布式智能体系统
- 构建可审计的智能体工作流，集中化策略控制
- 需要容错能力的长时间运行自主智能体任务

## 技术特点

- 单控制器架构，基于事件溯源的执行状态
- 支持远程智能体、MCP 工具和隔离技能环境
- 为 Kubernetes 设计，兼容平台支持计算层 actor 续跑
- 模型无关、框架无关的运行时层
