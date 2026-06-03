---
name: Lingo.dev
slug: lingo-dev
homepage: https://lingo.dev
repo: https://github.com/lingodotdev/lingo.dev
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
  - Dev Tools
  - SDK
description: Lingo.dev 是一个开源的 AI 驱动本地化工具集，支持编译时与运行时的多语言工作流，提高应用的国际化效率与一致性。
author: Lingo.dev team
ossDate: '2024-03-13T11:27:31Z'
featured: false
status: tracked
---

## 详细介绍

Lingo.dev 是一个面向开发者的开源本地化工具集，结合了编译期编译器、中台 CI/CD 集成、命令行工具与实时 SDK，旨在让开发团队以最小的成本实现多语言支持。它可在构建时提取并管理字符串、在 CI 中自动提交翻译变更，也支持运行时 SDK 用于动态内容的即时本地化，从而覆盖从静态页面到用户生成内容的多种场景。

## 主要特性

- 编译器（Compiler）：构建时将 React 应用自动本地化，无需修改组件。
- CLI：命令行一键扫描与翻译字符串，支持缓存与增量翻译策略。
- CI/CD 集成：自动化提交与拉取请求，减少人工干预，支持将翻译流程融入现有流水线。
- SDK：提供运行时本地化能力，适配动态和用户生成内容。

## 使用场景

- 多语言网站和移动应用的构建期国际化处理。
- 把翻译流程纳入 CI，让翻译变更自动生成 PR 并验证。
- 实时本地化用户内容、评论、聊天和动态页面。

## 技术特点

- 基于 TypeScript 的单体仓库与模块化包管理，适配现代前端构建工具。
- 支持将“带有提示的 LLM”作为后端引擎或集成自有翻译引擎，兼容多种提供方。
- 高度可扩展的中间件与 SDK，便于在不同平台（Web、React Native 等）复用。
