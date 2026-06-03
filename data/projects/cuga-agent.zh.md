---
name: CUGA
slug: cuga-agent
homepage: https://cuga.dev
repo: https://github.com/cuga-project/cuga-agent
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
description: 一个面向企业的开源通用智能体，支持 Web/API 执行、OpenAPI/MCP 集成与策略感知功能。
author: CUGA Project
ossDate: '2025-09-11T11:58:55Z'
featured: false
status: tracked
---
CUGA 是一个面向企业的开源通用智能体框架，支持在 Web 和 API 上执行复杂任务。它集成了 OpenAPI 和模型上下文协议（MCP），提供可组合、可审计的运行时，并内置策略感知控制，适合在受管环境中部署。

## 执行与集成能力

- 支持 Web、HTTP 和第三方 API 上的端到端任务执行
- 内置 OpenAPI 适配器，可根据 API 规范自动发现和调用 REST 端点
- 集成 MCP（模型上下文协议），连接外部工具服务器和数据源
- 模块化可组合架构，支持智能体串联多个工具和推理步骤

## 策略与治理

- 策略与权限控制机制，满足企业合规执行和风险管理需求
- 完整的智能体决策和操作审计追踪，适用于受监管行业
- 可配置的防护栏和审批工作流，管控敏感操作
- 支持基于角色的智能体能力访问控制

## 使用场景

- 跨越多企业系统的自动化业务流程编排
- 具有内置访问策略和日志的受控数据检索管道
- 带有策略执行的面向客户支持的任务型智能体
- 需要完整审计能力和法规合规的自动化服务

## 技术栈

- 以 Python 为主实现，注重可扩展性和可观测性
- 提供 SDK 和运行时组件，支持渐进式企业集成
- 支持多种推理模式和外部 LLM 提供商适配器
- 可灵活集成到现有企业身份和访问管理系统
