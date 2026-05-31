---
name: Qwen-Agent
slug: qwen-agent
homepage: https://qwen.readthedocs.io/
repo: https://github.com/qwenlm/qwen-agent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - RAG
description: Qwen-Agent 是一个开源的 Agent 框架，提供工具调用、RAG、代码解释器与多种部署示例，便于快速构建智能助理与应用。
logo: ''
author: QwenLM
ossDate: '2023-09-22T02:24:56.000Z'
featured: false
status: tracked
---

## 简介

Qwen-Agent 是一个面向构建 LLM 应用的开源框架，支持指令跟随、工具调用、计划与记忆机制，包含浏览器助手、代码解释器等示例，常用于快速搭建交互式智能助理与检索增强的应用。

## 主要特性

- 丰富的 agent 组件：提供基于类的 LLM、工具与 Agent 抽象，方便二次开发与扩展。
- 多种功能集成：内置 RAG、函数调用（tool calling）、Code Interpreter 与 GUI（Gradio）示例。
- 多模型与部署支持：兼容多种模型服务（vLLM、Ollama、DashScope），支持本地与云端部署。

## 使用场景

- 文档问答与知识助手：结合 RAG 将文档转为可查询知识源并构建问答系统。
- 自动化工具链：利用工具调用与计划能力实现多步任务自动化与代码执行。
- 原型验证与教学：丰富示例与 notebooks 有助快速验证想法与教学演示。

## 技术特点

- 语言与依赖：主要以 Python 实现，项目分层清晰，测试与示例齐全。
- 可配置工作流：通过配置文件与示例代码组合不同的检索与生成策略。
- 社区与文档：活跃的贡献者与详细文档，发布于 PyPI 并使用 Apache-2.0 许可证。
