---
name: Codebuff
slug: codebuff
homepage: https://codebuff.com/docs
repo: https://github.com/codebuffai/codebuff
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Dev Tools
  - Utility
description: 多智能体 AI 编程助手，通过协调专用代理执行代码修改、运行测试并生成高质量提交。适用于自动化代码修复、重构与增强开发流程。
logo: ''
author: CodebuffAI
ossDate: '2024-07-09T21:21:56.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Codebuff 是一个开源的多智能体 AI 编程助手，能够在本地代码库中执行文件扫描、规划修改、精确编辑并运行测试。相比单模型工具，Codebuff 采用可组合的代理（File Explorer、Planner、Editor、Reviewer 等）协同工作，提高了对项目上下文的理解和修改准确性。

## 主要特性

- 多智能体架构：将任务拆分为探索、规划、编辑与校验等专用代理，提升修改质量。
- CLI 与 SDK：提供 CLI（`codebuff`）与 TypeScript SDK，便于集成到开发与 CI 流程。
- 可定制代理：支持定义自有 agent 工作流并复用已发布的 agents。
- 自动化测试与校验：修改后可运行测试并生成语义化的 commit 信息。

## 使用场景

- 自动修复安全或样式问题并验证测试套件。
- 批量重构或迁移代码（例如升级依赖、替换 API）。
- 在 CI 中集成自动化代码变更与审核流程。
- 构建可复用的代码生成 / 修复 agent 并在团队间共享。

## 技术特点

- 以 TypeScript 为主实现，兼容多语言项目结构的分析与编辑。
- 支持多模型后端（通过 OpenRouter 等接入不同 LLM）。
- 提供 SDK 与 agent 定义生成器，便于编写复杂工作流与自定义工具链。
