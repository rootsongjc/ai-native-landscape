---
name: OpenSandbox
slug: open-sandbox
homepage: null
repo: https://github.com/alibaba/opensandbox
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - SDK
  - Sandbox
description: 通用的 AI 场景沙箱平台，提供多语言 SDK、统一协议与可扩展运行时。
logo: ''
author: Alibaba
ossDate: '2025-12-17T08:41:09Z'
featured: false
status: tracked
---

## 详细介绍

OpenSandbox 是一个面向 AI 应用场景的通用沙箱平台，旨在提供安全、一致且可扩展的运行环境，用于执行与 LLM 相关的能力（命令执行、文件操作、代码运行、浏览器自动化等）。项目提供多语言 SDK、统一的沙箱协议规范，以及多种沙箱运行时实现，便于开发者在受控环境中运行插件、工具链或智能体（智能体）。

## 主要特性

- 多语言 SDK：提供 Python、Java、TypeScript（待补齐）等客户端 SDK，便于在不同语言生态中集成沙箱能力。
- 统一协议：基于 OpenAPI 的沙箱协议规范（`specs/`），支持扩展自定义运行时和能力组件。
- 丰富示例：内置 Code Interpreter、Browser、Filesystems 等沙箱示例，快速上手并作为集成参考。
- 可扩展运行时：支持本地 Docker 运行，规划支持 Kubernetes 集群执行以满足生产部署需求。

## 使用场景

- 在隔离环境中执行 LLM 驱动的代码解释器或工具链，防止外部副作用。
- 提供给平台或应用的插件运行时，实现第三方工具以沙箱方式安全运行。
- 用于自动化测试、浏览器自动化、远程开发（VS Code Web）以及桌面应用场景的沙箱化执行。

## 技术特点

- OpenAPI 规范驱动：通过统一的接口规范定义沙箱生命周期与能力调用，降低集成成本。
- 组件化设计：将执行器、文件系统、命令运行等能力模块化，便于扩展与替换。
- 示例与文档齐全：`examples/` 与 `docs/` 提供了大量示例与架构说明，帮助工程化落地。
