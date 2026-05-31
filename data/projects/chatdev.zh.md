---
name: ChatDev
slug: chatdev
homepage: null
repo: https://github.com/openbmb/chatdev
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
description: 基于大模型的多智能体协作框架，用于将自然语言想法自动化为可运行的软件工程流程。
logo: ''
author: OpenBMB
ossDate: '2023-08-28T02:18:13.000Z'
featured: false
status: tracked
---

## 简介

ChatDev 是一个面向软件开发的多智能体协作框架，利用大语言模型驱动不同角色（例如产品、开发、测试）的智能代理协作完成需求分析、编码、测试与文档生成，旨在探索群体智能与自动化软件构建流程。

## 主要特性

- 多角色代理组织：内置 CEO、产品、程序员、评审、测试等角色，支持自定义角色与阶段。
- 支持可视化演示与 Web 可视化面板，便于监控协作流程与日志回放。
- 提供终端、Docker 与 Web 快速启动方式，便于在不同环境中运行与复现。
- 包含多种协作拓扑（如 ChatChain、MacNet）与研究示例，利于多代理研究与教学。

## 使用场景

- 自动化原型与最小可行产品（MVP）生成，快速将想法转化为可运行代码。
- 多智能体研究与教育：用于探索协作策略、编排与评估指标。
- 大规模协同任务的流程化与可视化，例如批量生成项目、测试与文档。

## 技术特点

- 主要使用 Python 实现，依赖于多种 LLM 接口与扩展插件。
- 代码库包含模块化组件、Wiki 文档与演示资源，支持通过配置定义 ChatChain 的阶段与角色。
- 使用 Apache-2.0 许可，社区活跃，拥有丰富的示例和论文引用（部分研究成果已发表于 arXiv / NeurIPS）。
