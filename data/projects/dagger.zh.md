---
name: Dagger
slug: dagger
homepage: https://dagger.io/
repo: https://github.com/dagger/dagger
license: Apache-2.0
category: applications-products
subCategory: workflow-automation
tags:
  - AI Agent
  - Dev Tools
description: 可组合工作流的开源运行时，支持在任意语言中以可编程方式构建可重现、可观察的 CI/CD 与 AI Agent 工作流。适合需要可重现性、可组合性和可观察性的平台级自动化。
author: Dagger
ossDate: '2019-11-20T01:31:51.000Z'
featured: false
status: tracked
---
## 简介

Dagger 是一个面向可组合工作流的开源运行时，允许开发者使用熟悉的编程语言（Go、Python、TypeScript 等）将容器、文件、仓库等抽象为可组装的对象，从而以可编程、可缓存、可追踪的方式定义 CI/CD 与 AI Agent 工作流。

## 主要特性

- 容器化的工作流执行与自动缓存，减少重复构建
- 统一的类型系统，跨语言复用组件（模块化/模块市场 Daggerverse）
- 内置可观察性：跟踪、日志与指标，便于调试复杂流程
- 原生对 LLM/Agent 的支持，可将 LLM 集成到可重现的执行环境中

## 使用场景

- 构建和运行可重现的 CI/CD 管道
- 为 AI Agent 提供可控、可观察的执行环境
- 在本地或 CI 中快速原型和调试复杂自动化流程

## 技术特点

- 支持多语言 SDK（Go、Python、TypeScript）和 CLI
- 将环境与操作抽象为可缓存的不可变制品，提高重用性
- 可扩展模块与社区共享的 Daggerverse 模块
