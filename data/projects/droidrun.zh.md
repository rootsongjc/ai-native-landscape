---
name: DroidRun
slug: droidrun
homepage: https://droidrun.ai
repo: https://github.com/droidrun/droidrun
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Utility
description: 一个面向移动设备的开源自动化框架，允许通过自然语言指令驱动手机操作并集成模型与检索。
author: DroidRun
ossDate: '2025-04-12T22:03:47Z'
featured: false
status: tracked
---
## 简介

DroidRun 是一个面向移动设备的开源自动化框架，支持通过自然语言指令驱动手机操作，构建 LLM 无关的移动智能体应用。它将模型推理、语义检索与设备控制相结合，实现从自然语言到触控事件的端到端自动化。

## 主要特性

- 通过自然语言描述任务，自动生成并执行手机操作序列。
- LLM 无关的设计，支持与不同模型和检索组件灵活集成。
- 提供 CLI 与集成接口，便于脚本化与流水线调用。
- 将检索结果与会话上下文结合，提高操作的准确性与健壮性。

## 使用场景

- 自动化移动端测试与回归验证，提高测试覆盖率与效率。
- 构建移动端助手，通过自然语言完成复杂多步任务。
- 产品原型阶段快速验证移动交互逻辑与用户体验。

## 技术特点

- 端到端流水线结合自然语言理解、向量检索与设备控制器。
- 可插拔的模型与检索适配器，便于替换与扩展。
- 注重工程化与脚本化调用，适合在 CI/CD 或远程设备池中运行。
