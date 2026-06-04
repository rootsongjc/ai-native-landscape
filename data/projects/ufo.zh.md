---
name: 'UFO: Desktop AgentOS'
slug: ufo
homepage: https://microsoft.github.io/UFO/
repo: https://github.com/microsoft/ufo
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Workflow
description: UFO 是一个面向 Windows 的 Desktop AgentOS，将自然语言请求转换为跨应用的自动化工作流。
author: Microsoft
ossDate: '2024-01-08T05:07:52.000Z'
featured: false
status: tracked
---

## 简介

UFO（UFO2）是微软开源的 Desktop AgentOS，旨在将自然语言请求转为可靠的、跨多应用的自动化工作流，支持混合感知与原生 API 控制，适配 Windows 平台的 GUI 自动化场景。

## 主要特性

- 多代理架构（HostAgent + AppAgents），用于跨应用编排与任务分解。
- 混合控制检测（UIA + 视觉管线）和原生 API 优先执行，提升稳健性与速度。
- 支持 RAG（离线文档、在线搜索、演示与执行轨迹融合）的知识基底。
- 通过 Speculative Executor 批量预测与验证操作，减少 LLM 调用次数。

## 使用场景

- 构建跨多个 Windows 应用的自动化助手（例如 Office、浏览器、文件管理）。
- 将用户示例、文档与执行日志用于增强代理能力的企业级自动化方案。
- 研究与开发桌面级智能代理与多模态感知能力的实验平台。

## 技术特点

- 基于 Python，面向 Windows（需 Windows 10+）；提供命令行与配置化部署。
- 支持多种 LLM 后端（OpenAI、Azure OpenAI、Qwen 等），并提供模型配置指南。
- 集成向量存储与检索能力用于 RAG，支持日志与执行轨迹回放用于训练与调试。
