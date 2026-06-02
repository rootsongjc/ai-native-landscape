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

## 简介

Bubble Lab 是一个开源核心的工作流引擎，驱动 Bubble Lab 平台运行，可独立运行、自托管和扩展。它主张以类型安全的 TypeScript 方式表达、调试与导出工作流，提供可视化的 Bubble Studio 快速上手，支持将工作流直接导出为可在任意后端运行的 TypeScript 代码，避免被闭源编辑器锁定。

## 主要特性

Bubble Lab 提供可视化编辑器（Bubble Studio），支持拖拽式构建流程并实时查看执行日志与指标。支持 Type-safe 导出，将可视化流程编译为整洁、可部署的 TypeScript 代码。内置 AI 助手可快速生成或补全流程片段，提供托管服务、CLI 脚手架与本地开发等多种部署模式。

## 使用场景

适合快速构建数据抓取与处理流水线并导出到后端以纳入现有服务，也可用作团队内部的自动化平台，将重复性任务以可观察、可测试的工作流形式固化。在产品原型与演示中可快速验证 AI 驱动的流程逻辑与效果。

## 技术特点

基于 TypeScript 的模块化架构，包含引擎（bubble-core）、运行时（bubble-runtime）与类型化 schema，共享类型降低集成成本。提供开箱即用的开发脚手架（`create-bubblelab-app`）与 Bun/Node 支持，采用 Apache-2.0 开源许可，附带详细文档与示例模板。
