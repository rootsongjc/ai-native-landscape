---
name: DSPy
slug: dspy
homepage: https://dspy.ai/
repo: https://github.com/stanfordnlp/dspy
license: Unknown
category: rag-knowledge
subCategory: data-connectors
tags:
  - Dev Tools
description: DSPy 是一个面向将基础模型编程化（而非仅靠提示）的开源框架，便于构建组合化、可自我优化的 AI 流水线。
logo: ''
author: DSPy contributors
ossDate: '2023-01-09T21:01:51.000Z'
featured: false
status: tracked
---

## 简介

DSPy（Declarative Self-improving Python）是一个将“编程”而非“提示”作为与基础模型交互主轴的开源框架。它通过组合化的 Python 接口，把模型调用、检索、评估与自我优化流程编排为可重复的流水线，适合构建分类器、RAG 管道与多步 Agent 循环等复杂应用。

## 主要特性

- 编程式 API：用声明式/组合化的 Python 构建模型调用和流水线，减少对脆弱提示工程的依赖。
- 自我优化策略：提供优化指令和示例的算法，支持在多阶段流水线中迭代改进输出质量。
- 丰富的构件：支持检索（RAG）、评估、断言与训练辅助组件，便于快速搭建生产级工作流。
- 开源生态与文档：官方文档（dspy.ai）完善，社区活跃，便于学习与扩展。

## 使用场景

- 知识密集型问答与信息抽取：将检索与模型推理组合为可靠的 RAG 流程。
- 多步决策与 Agent 系统：构建具有状态和自我改进能力的 Agent 循环。
- 模型能力评估与迭代优化：自动化评估与演化提示/权重以提升任务性能。

## 技术特点

- 以 Python 为中心：面向开发者的声明式编程接口，容易集成现有 Python 生态。
- 模块化与可组合：组件化设计支持灵活组合推理、检索、评估等模块。
- 兼容主流模型与工具链：可用于本地模型、云端 LLM 服务与检索库。
- 采用 MIT 许可并在 GitHub 上维护，便于科研与工程应用。
