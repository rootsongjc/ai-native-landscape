---
name: OxyGent
slug: oxygent
homepage: https://oxygent.jd.com
repo: https://github.com/jd-opensource/oxygent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Framework
  - Multi-Agent
description: 一个面向企业级应用的多智能体协作框架，支持本地优先的任务编排与工具接入。
logo: ''
author: 京东
ossDate: '2025-07-18T02:40:42Z'
featured: false
status: tracked
---

## 简介

OxyGent 是京东开源团队推出的多智能体协作框架，通过 Oxy 抽象层使多智能体系统具备模块化、可观测和可演进的能力。它允许开发者定义智能体、工具和权限边界，由内置运行时引擎负责任务调度与智能体间通信，降低了构建复杂协作工作流的工程难度。

## 主要特性

- Oxy 抽象层将智能体逻辑与基础设施解耦，使多智能体系统中的各组件可以独立演进。
- 内建可观测性原语，支持追踪智能体交互、监控任务进度和审计全工作流生命周期的决策过程。
- 插件化工具集成配合细粒度权限控制，让企业团队安全地对接数据库、API 与外部服务。

## 使用场景

企业团队可使用 OxyGent 构建自动化客户支持流水线，协调多个专业智能体跨系统协作。它同样适用于跨系统数据处理、业务流程编排与智能化运维等对可审计性和合规性有要求的场景。

## 技术特点

使用 Python 实现，便于与企业后端系统无缝集成；支持可组合的智能体定义和有限状态控制，方便工程化测试与回放。运行时指标、结构化审计日志和可配置的权限模型为运维团队提供了生产级合规所需的管控能力。
