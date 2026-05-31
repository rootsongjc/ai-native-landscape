---
name: DroidRun
slug: droidrun
homepage: https://droidrun.ai
repo: https://github.com/droidrun/droidrun
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Utility
description: 一个面向移动设备的开源自动化框架，允许通过自然语言指令驱动手机操作并集成模型与检索。
logo: ''
author: DroidRun
ossDate: '2025-04-12T22:03:47Z'
featured: false
status: tracked
---

## 详细介绍

DroidRun 是一个面向移动设备的开源自动化框架，支持通过自然语言指令驱动手机操作，构建 LLM 无关（LLM agnostic）的移动智能体（智能体）应用。项目提供命令行与服务端集成方式，能够把模型推理、语义检索与设备控制结合起来，实现从自然语言到触控事件的端到端自动化。DroidRun 适合用于原型验证、自动化测试与增强型移动助手场景。

## 主要特性

- 通过自然语言描述任务，自动生成并执行手机操作序列。
- LLM 无关的设计，支持与不同模型和检索组件集成。
- 提供 CLI 与集成接口，便于脚本化与流水线调用。
- 支持将检索结果与会话上下文结合，提高操作的准确性与健壮性。

## 使用场景

- 用于自动化移动端测试与回归验证，提高测试覆盖率与效率。
- 构建电话或移动端助手，通过自然语言完成复杂多步任务。
- 在产品原型阶段快速验证移动交互逻辑与用户体验。

## 技术特点

- 将自然语言理解、向量检索与设备控制器结合，以实现端到端自动化。
- 支持可插拔的模型与检索适配器，便于替换与扩展。
- 注重工程化与脚本化调用，适合在 CI/CD 或远程设备池中运行。
- 开源实现便于审计、定制与社区协作。
