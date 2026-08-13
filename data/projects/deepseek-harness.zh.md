---
name: DeepSeek Harness
slug: deepseek-harness
homepage: https://deepseek.com/harness
repo: https://github.com/deepseek-ai/deepseek-harness
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - LLM
  - Plugin
  - DeepSeek
description: DeepSeek AI 开源的 Agent Harness，基于 Cordis 构建，采用"一切皆插件"的架构。
author: deepseek-ai
ossDate: '2026-08-13T11:56:32Z'
featured: false
status: tracked
---

## 简介

DeepSeek Harness（`dsh`）是 DeepSeek AI 开源的 Agent Harness。它采用"一切皆插件"的架构，底层基于 Cordis 框架（其设计见论文《A Programming Paradigm for Spatiotemporal Composability》）。自带 Web UI，目前处于开发者预览阶段，迭代迅速。

## 主要特性

- "一切皆插件"架构，扩展性极强。
- 基于 Cordis 框架，支持时空可组合性（Spatiotemporal Composability）。
- 通过 `npx @deepseek-ai/dsh web` 一键启动 Web UI，无需复杂配置。
- 通过 `dsh-plugin` GitHub 话题实现插件生态的可发现性。

## 使用场景

- 本地运行带 Web UI 的 Agent Harness。
- 通过安装或编写插件扩展 Agent 能力。
- 在插件化运行时之上构建可组合的 Agent 应用。

## 技术特点

- 22,600+ GitHub Star。
- MIT 协议开源，由 DeepSeek AI 开发。
- 基于 Node.js，可通过 npm 安装（`@deepseek-ai/dsh`）。
- 开发者预览阶段，可能存在破坏性兼容变更。
