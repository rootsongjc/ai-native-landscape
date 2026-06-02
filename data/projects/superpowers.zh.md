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
status: tracked
---

## 简介

Superpowers 是为编码智能体设计的开源技能库和开发工作流框架，将软件开发过程结构化为可验证、可预测的阶段。它强制执行测试驱动的 RED-GREEN-REFACTOR 循环，并通过子智能体并行执行和两阶段审查确保实现与设计规范一致。

## 主要特性

框架提供在合适开发阶段自动激活的触发式技能，包括头脑风暴、计划编写、计划执行和代码审查请求。它强制要求在实现代码前先编写失败的测试，支持通过子智能体并行执行任务并执行规范合规性和代码质量的双重审查，还内置 git worktree 工作流和 tmux 监控以支持多智能体编排。

## 使用场景

开发者将编码任务交给智能体时，仍能保持对设计过程的完整审查和追溯能力。团队使用 Superpowers 快速构建具有强测试覆盖的原型，将大型功能拆分为小任务并行执行以加速交付，并在 Claude Code、Codex、OpenCode 等不同智能体平台间共享可复用技能。

## 技术特点

Superpowers 是一个以脚本和配置驱动的技能库，可在多个编码智能体平台上运行。它支持通过 Claude Code 插件市场安装，附带完整的示例测试和技能贡献指南，采用轻量模块化架构，能够以极小的改动集成到现有自动化流水线中。
