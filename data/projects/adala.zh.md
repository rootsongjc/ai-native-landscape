---
name: Adala
slug: adala
homepage: https://humansignal.github.io/Adala/
repo: https://github.com/humansignal/adala
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - RAG
description: Adala 是一个面向数据处理与标注任务的自主代理框架，支持多运行时与技能学习。
logo: ''
author: HumanSignal
ossDate: '2023-08-30T12:06:57.000Z'
featured: false
status: tracked
---

## 简介

Adala 是一个开源的自主数据（标注）代理框架，旨在通过训练代理技能并在运行时（例如 LLM）中执行这些技能，自动化数据处理与标注工作流。

## 主要特性

- 支持多种技能（分类、摘要、问答、翻译等）与组合技能流水线。
- 兼容多种运行时与 LLM 提供商，可在本地笔记本或远端 runtime 中执行。
- 提供丰富的示例、Colab 快速上手与测试套件，便于验证与扩展。

## 使用场景

- 数据预处理与标注：自动化大规模数据集的标注与质量检查。
- 教学与研究：作为构建与评估多技能代理的实验平台。
- 生产化代理：在需要可控输出与可审计流程的场景下部署定制代理。

## 技术特点

- 基于 Python 实现，提供 pip 安装与源码开发流程（Poetry 支持）。
- 支持将训练与测试流程嵌入 notebook，便于交互式开发与调试。
- 采用 Apache-2.0 许可证开放源代码，社区贡献活跃。
