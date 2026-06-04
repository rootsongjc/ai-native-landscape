---
name: OxyGent
slug: oxygent
homepage: https://oxygent.jd.com
repo: https://github.com/jd-opensource/oxygent
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Framework
  - Multi-Agent
description: 一个面向企业级应用的多智能体协作框架，支持本地优先的任务编排与工具接入。
author: 京东
ossDate: '2025-07-18T02:40:42Z'
featured: false
status: tracked
---

OxyGent 是京东开源团队推出的多智能体协作框架，通过 Oxy 抽象层使多智能体系统具备模块化、可观测和可演进的能力。它允许开发者定义智能体、工具和权限边界，由内置运行时引擎负责任务调度与智能体间通信，降低了构建复杂协作工作流的工程难度。

## Oxy 抽象层

- 将智能体逻辑与基础设施解耦，各组件可独立演进
- 可组合的智能体定义配合有限状态控制，便于测试和回放
- 插件化工具集成，支持数据库、API 与外部服务的安全对接

## 可观测性与治理

- 内建追踪原语，监控全工作流生命周期的智能体交互
- 结构化审计日志，满足合规和决策审计需求
- 运行时指标和可配置的权限模型，提供生产级管控能力
- 细粒度权限控制，确保企业团队安全连接内部系统

## 企业使用场景

- 构建自动化客户支持流水线，协调多个专业智能体跨系统协作
- 跨系统数据处理和业务流程编排
- 对可审计性、合规性和可追溯性有要求的智能化运维场景
