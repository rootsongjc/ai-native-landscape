---
name: Agent Skills
slug: agentskills
homepage: https://agentskills.io
repo: https://github.com/agentskills/agentskills
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Reference
description: 一个用于描述、共享与发现智能体技能（skills）的开源规范与文档集合。
logo: ''
author: Anthropic
ossDate: '2025-12-16T15:47:19Z'
featured: false
status: tracked
---

## 详细介绍

Agent Skills 是一个面向智能体（agents）的开放格式与文档集合，旨在定义技能（skills）的描述、发现与共享方式。技能由说明文档、示例与元数据组成，便于不同智能体实现与复用，从而提高完成复杂任务时的可组合性与可靠性。该项目既包含规范文档，也提供参考实现与示例，便于开发者快速上手与社区协作。

## 主要特性

- 统一规范：提供技能描述格式与规范，定义技能的能力声明、输入输出及元数据。
- 可发现性：通过规范化的目录与示例，支持技能的索引与查找，便于智能体按需加载。
- 参考实现：包含文档与示例仓库，帮助开发者理解如何编写与测试技能。
- 社区驱动：由 Anthropic 发起并接受社区贡献，采用开源协作流程。

## 使用场景

- 扩展智能体能力：为聊天助手、任务型智能体或自动化流水线提供可复用能力模块。
- 能力市场：构建技能市场或目录，让第三方开发者发布可重用技能。
- 集成与互操作：不同智能体平台通过统一规范互相调用技能，提升跨平台互操作性。

## 技术特点

- 文档与规范化描述：基于可读的文件格式定义技能的接口与行为。
- 语言无关：规范关注能力与元数据，示例实现使用 Python 等多种语言。
- 易于验证：规范配套示例与测试，可用于验证技能描述的正确性与兼容性。
