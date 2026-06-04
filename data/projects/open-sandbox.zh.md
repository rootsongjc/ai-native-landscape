---
name: OpenSandbox
slug: open-sandbox
homepage: null
repo: https://github.com/alibaba/opensandbox
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - SDK
  - Sandbox
description: 通用的 AI 场景沙箱平台，提供多语言 SDK、统一协议与可扩展运行时。
author: Alibaba
ossDate: '2025-12-17T08:41:09Z'
featured: false
status: tracked
---

OpenSandbox 是阿里巴巴推出的面向 AI 应用场景的通用沙箱平台，提供安全、一致且可扩展的隔离运行环境，用于执行 LLM 驱动的代码运行、文件操作、命令行任务与浏览器自动化等能力。

## 多语言 SDK 支持

- 提供 Python、Java、TypeScript 等多语言客户端 SDK，支持在不同技术栈中集成沙箱能力
- OpenAPI 优先设计，通过清晰的规范定义沙箱生命周期与能力调用接口，降低集成门槛
- 内置代码解释器、浏览器自动化与文件系统等丰富示例，加速集成开发

## 统一协议与可扩展性

- 基于 OpenAPI 的统一协议规范允许开发者扩展运行时并构建自定义沙箱实现
- 模块化架构将执行器、文件系统与命令组件分离，支持独立替换与定制
- 支持本地 Docker 执行，并规划 Kubernetes 集群部署以满足生产级场景需求

## AI 应用场景

- 在隔离沙箱中运行 LLM 驱动的代码解释器或工具链，防止非预期的外部副作用
- 为平台或应用生态中的第三方插件提供安全的执行运行时
- 需要受控代码执行边界的自动化测试、浏览器自动化与远程开发环境
