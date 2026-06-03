---
name: Bubble Lab
slug: bubble-lab
homepage: https://bubblelab.ai/
repo: https://github.com/bubblelabai/bubblelab
license: Apache-2.0
category: applications-products
subCategory: workflow-automation
tags:
  - Agents
  - Dev Tools
  - Workflow
description: 一个开源的 AI 原生工作流自动化平台，提供可视化编辑、TypeScript 导出与完整可观测性。
author: Bubble Lab
ossDate: '2025-10-02T22:59:25Z'
featured: false
status: tracked
---
Bubble Lab 是一个开源核心的工作流引擎，驱动 Bubble Lab 平台运行，可独立运行、自托管和扩展。它主张以类型安全的 TypeScript 方式表达、调试与导出工作流，将可视化流程编译为整洁、可部署的 TypeScript 代码，避免被闭源编辑器锁定。

## 可视化编辑器（Bubble Studio）

- 拖拽式可视化编辑器，支持实时查看执行日志与指标
- 完整的工作流执行可观测性，便于调试与优化
- 内置 AI 助手，可快速生成或补全流程片段

## 类型安全导出与部署

- 将可视化流程编译为整洁、生产就绪的 TypeScript 代码
- 导出代码可自主拥有、调试并部署到任意后端
- 避免闭源可视化编辑器带来的厂商锁定

## 灵活的部署选项

- 托管 Bubble Studio，适合快速原型验证与演示
- 本地开发模式与 CLI 脚手架（`create-bubblelab-app`）
- 提供自托管指南与 Docker 支持，满足生产环境需求

## 技术架构

- 基于 TypeScript 的模块化架构，包含引擎、运行时与类型化 schema
- 开箱即用的开发脚手架，支持 Bun/Node 快速本地开发
- 采用 Apache-2.0 开源许可，附带详细文档与示例模板
