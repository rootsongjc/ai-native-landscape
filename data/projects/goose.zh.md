---
name: goose
slug: goose
homepage: https://block.github.io/goose/
repo: https://github.com/block/goose
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - AI Agent
  - Dev Tools
description: 开源的本地可扩展 AI agent，面向工程任务自动化（项目创建、代码执行、测试与发布）。
logo: ''
author: Goose
ossDate: '2024-08-23T19:03:36.000Z'
featured: false
status: tracked
---

## 简介

Goose 是由 Block 开发的自主式 AI 编程智能体，能够理解并修改代码库，在最少人工干预下完成工程任务。它作为开发者助手，自主处理代码生成、调试、测试和项目脚手架等任务，通过可扩展的插件和 recipe 系统实现自动化。Goose 通过本地 CLI 或桌面客户端运行，让开发者完全掌控自动化工作流。

## 主要特性

Goose 提供本地 CLI 与桌面客户端，支持多模型接入，使开发者能够将常见开发流程编排为可复用的 recipe。其可编排的插件系统支持构建自动化管道，覆盖项目初始化、代码生成、构建、测试与发布任务，并可无缝集成多个 LLM 提供商。

## 使用场景

Goose 适用于项目脚手架与代码生成以快速启动开发、自动化测试生成与 CI 辅助脚本编写，以及日常开发流程中重复性工程任务的自动化。它擅长理解现有代码库并进行针对性修改，无需持续的人工监督。

## 技术特点

Goose 使用 Rust 与 TypeScript 开发，兼顾性能与可扩展性，与 MCP、VS Code 及相关工具互操作，便于集成到现有开发环境中。项目采用 Apache-2.0 许可，提供详尽的示例文档，其架构支持本地执行和通过自定义工具包与提供商集成进行扩展。
