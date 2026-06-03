---
name: goose
slug: goose
homepage: https://block.github.io/goose/
repo: https://github.com/block/goose
license: Apache-2.0
category: applications-products
subCategory: workflow-automation
tags:
  - AI Agent
  - Dev Tools
description: 开源的本地可扩展 AI agent，面向工程任务自动化（项目创建、代码执行、测试与发布）。
author: Goose
ossDate: '2024-08-23T19:03:36.000Z'
featured: false
status: tracked
---
Goose 是由 Block 开发的自主式 AI 编程智能体，能够理解并修改代码库，在最少人工干预下完成工程任务。它通过可扩展的插件和 recipe 系统实现自动化，以本地 CLI 或桌面客户端运行，让开发者完全掌控自动化工作流。

## 本地智能体运行时

- CLI 与桌面客户端支持本地执行，完全可控
- 多模型接入，支持多个 LLM 提供商
- 理解现有代码库并进行针对性修改
- 自主完成代码生成、调试和测试任务

## 可扩展的插件与 Recipe 系统

- 可组合的 recipe，将常见开发流程编码为可复用模板
- 可编排的插件系统，用于构建自动化管道
- 覆盖项目初始化、代码生成、构建、测试与发布任务
- 自定义工具包用于将智能体能力扩展到特定领域工作流

## 工程自动化

- 项目脚手架与代码生成，快速启动开发
- 自动化测试生成与 CI 辅助脚本编写
- 日常开发流程中重复性工程任务的自动化
- 无需持续人工监督即可理解和修改代码库

## 技术栈

- 使用 Rust 与 TypeScript 开发，兼顾性能与可扩展性
- 与 MCP、VS Code 及相关工具互操作
- Apache-2.0 许可，提供详尽的示例文档
- 架构支持本地执行和通过自定义提供商集成进行扩展
