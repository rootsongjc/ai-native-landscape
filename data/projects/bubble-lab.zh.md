---
name: Bubble Lab
slug: bubble-lab
homepage: https://bubblelab.ai/
repo: https://github.com/bubblelabai/bubblelab
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Agents
  - Dev Tools
  - Workflow
description: 一个开源的 AI 原生工作流自动化平台，提供可视化编辑、TypeScript 导出与完整可观测性。
logo: ''
author: Bubble Lab
ossDate: '2025-10-02T22:59:25Z'
featured: false
status: tracked
---

## 详细介绍

Bubble Lab 是一款面向开发者的开源 AI 原生工作流自动化平台，主张把工作流以类型安全的 TypeScript 方式表达、调试与导出。项目既提供可视化的 Bubble Studio 以便快速上手，也支持将工作流直接导出为可在任意后端运行的 TypeScript 代码，从而避免被闭源编辑器锁定。平台强调可观测性、生产级错误处理与性能统计，适合在开发、测试与自托管的生产环境中使用。

## 主要特性

- 可视化编辑器（Bubble Studio）：拖拽式构建流程并实时查看执行日志与指标。  
- Type-safe 导出：把可视化流程编译为整洁、可部署的 TypeScript 代码。  
- 内置 AI 助手：通过 AI 快速生成或补全流程片段，加速构建过程。  
- 多种部署模式：提供托管服务、CLI 脚手架与本地开发模式，支持生产化运行。

## 使用场景

- 快速构建数据抓取与处理流水线，并导出到后端以纳入现有服务。  
- 用作团队内部的自动化平台，把重复性任务以可观察、可测试的工作流形式固化。  
- 在产品原型与演示中快速验证 AI 驱动的流程逻辑与效果。

## 技术特点

- 基于 TypeScript 的模块化架构，包含引擎（bubble-core）、运行时（bubble-runtime）与类型化 schema，共享类型降低集成成本。  
- 开箱即用的开发脚手架（`create-bubblelab-app`）与 Bun/Node 支持，提供 dev/prod 两套运行模式。  
- Apache-2.0 开源许可，仓库附带详细的文档与示例模板，便于自托管与企业集成。
