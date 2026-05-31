---
name: zcf
slug: zcf
homepage: null
repo: https://github.com/ufomiao/zcf
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - CLI
description: 面向 Claude Code 与 Codex 的零配置 Code Flow 工具，简化代理式代码调用与工作流编排。
logo: ''
author: UfoMiao
ossDate: '2025-07-30T06:09:00.000Z'
featured: false
status: tracked
---

## 详细介绍

zcf（Zero-Config Code Flow）是一款面向 Claude Code 与 Codex 的轻量级工具，目标是用最少配置将模型的代码能力嵌入到开发者工作流中。项目通过命令行与脚本化流程，将模型调用、提示模板与执行步骤串联为可复用的流（flow），降低从原型到可运行自动化的门槛，适合需要快速搭建代理式代码执行与自动化工作流的场景。

## 主要特性

- 零配置启动：开箱即用的默认流程与模板，减少环境与参数调试工作。
- 支持多种模型与后端（以 Claude Code/Codex 为例），并能通过插件扩展新的执行器。
- 命令行驱动与脚本化定义，便于集成 CI/CD、自动化测试与批量任务。

## 使用场景

- 开发者快速验证模型驱动的代码生成与执行流程，作为原型开发工具。
- 将模型能力嵌入到自动化脚本或 CI 流程，执行数据处理、代码修复或测试生成任务。
- 教学与演示场景，帮助学习者理解模型与代码执行的闭环流程。

## 技术特点

- TypeScript 实现，适配 Node.js 生态，便于在前端/后端工具链中部署。
- 以 CLI 为核心的流程定义与插件机制，支持可组合的执行器与数据流转。
- 注重可观测性与复现性：流程记录、日志与可复用模板便于调试与审计。
