---
name: Superpowers
slug: superpowers
homepage: https://blog.fsck.com/2025/10/09/superpowers/
repo: https://github.com/obra/superpowers
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
description: 一个为编码智能体构建的开源开发工作流与技能库，强调 TDD、流程化与可验证的自动化。
logo: ''
author: Jesse Vincent
ossDate: '2025-10-09T19:45:18Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Superpowers 是为编码智能体（智能体）设计的一套开源技能库与工作流，旨在把开发过程结构化为可验证的步骤。它在智能体开始编码前先进行设计提问、分块展示设计并获得确认，然后生成可执行的实现计划，驱动子智能体并以两阶段审查确保代码与规范一致。项目强调以测试为中心的 RED-GREEN-REFACTOR 流程与简单原则，提升自动化开发的可预测性与可靠性。

## 主要特性

- 触发式技能集，自动在合适阶段激活（头脑风暴、编写计划、执行计划、请求代码审查等）。
- 强制测试驱动流程，保证每次变更先有失败的测试再实施代码修复。
- 子智能体驱动的并行任务执行，包含两阶段审查（规范合规性与代码质量）。
- 内置 git worktree 工作流、tmux 监控与插件市场安装支持（如 Claude Code 插件）。
- 易于扩展的技能编写指南，贡献者可直接在 `skills/` 中添加新技能。

## 使用场景

- 将编码任务交由智能体处理时，保持设计与实现的可审查性与可回溯性。
- 在团队需要快速构建原型且保持测试覆盖时，使用 Superpowers 的 TDD 驱动工作流。
- 将重复性实现拆分为小任务并由子智能体并行执行以加速交付。
- 将技能作为可复用模块在不同编码平台（如 Claude Code、Codex、OpenCode）间复用。

## 技术特点

- 以脚本与配置驱动的技能库，便于在多种智能体平台上运行。
- 支持 Claude Code 插件市场安装，并提供与其他平台的安装说明与文档。
- 强调可测试性与可验证性，仓库自带详尽示例与测试策略文档。
- 轻量且模块化的设计，便于以最小改动集成到现有自动化流水线。
