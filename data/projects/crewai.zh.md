---
name: CrewAI
slug: crewai
homepage: https://crewai.com/
repo: https://github.com/crewaiinc/crewai
license: Other
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Dev Tools
description: 轻量、快速的多智能体编排框架，支持 Crews 与 Flows 的协作与流程化执行，适用于构建生产级别的自主代理与事件驱动工作流。
author: CrewAI Inc.
ossDate: '2023-10-27T03:26:59.000Z'
featured: false
status: tracked
---
## 简介

CrewAI 是一个开源的、以 Python 为主的多智能体编排框架，设计目标是以最小开销实现高性能与高度可定制的自主代理系统。它将“Crews”（多代理协作）与“Flows”（事件驱动流程）结合，既支持自治智能体之间的协作，也支持对执行路径进行精细控制，适合从快速原型到企业级生产环境的场景。

## 主要特性

- 高性能与轻量级实现，独立于 LangChain 等第三方框架。
- Crews：支持角色化代理协作，便于分工与职责划分。
- Flows：事件驱动、可组合的流程控制，支持条件分支与有状态执行。
- 丰富的工具与集成选项：可连接 OpenAI、Ollama、本地模型等多种模型后端，并支持自定义工具与外部 API。
- 完整的示例与教程：包含项目模板、配置示例与社区课程资源，便于上手与生产化部署。

## 使用场景

- 自动化研究与数据收集：使用多个分工明确的代理并行搜集与汇总信息。
- 业务流程自动化：将复杂的审批、报告或数据处理流程编排为可重复的 Flows。
- 协作式内容生成：多智能体协作撰写、校验与格式化输出文档或报告。
- 生产级代理服务：在企业环境中以 Crews + Flows 构建可靠的可观测系统。

## 技术特点

- Python 原生实现（兼容 Python 3.10+），以模块化设计支持低层自定义。
- 支持顺序与并行执行模型，提供进阶的可观察性（Tracing & Observability）。
- 配置优先的开发体验：通过 YAML 定义 agents、tasks 与 flows，便于版本控制与复现。
- 丰富的生态示例：官方示例、Community 教程与视频，帮助快速上手与扩展。
