---
name: mgrep
slug: mgrep
homepage: https://demo.mgrep.mixedbread.com
repo: https://github.com/mixedbread-ai/mgrep
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - CLI
  - Search
description: 一个面向 CLI 的语义检索工具，支持代码、文档与多媒体的自然语言搜索与实时索引。
logo: ''
author: Mixedbread
ossDate: '2025-11-06T01:01:47Z'
featured: false
status: tracked
---

## 详细介绍

mgrep 是一个面向命令行的语义检索工具，旨在将自然语言搜索引入日常代码与文档查找流程。它在本地或云端建立索引，支持对代码、文本、PDF、图片等内容进行语义匹配，并可将 web 搜索与本地结果合并。mgrep 强调与智能体的集成体验，既保留 grep 的直观习惯，又为复杂查询提供语义能力。可在演示站点查看运行示例。

## 主要特性

- 自然语言查询：以接近人类的表述查找代码或文档片段。
- 背景索引与监听：`mgrep watch` 自动增量索引并保持存储同步。
- 多模态支持：当前支持代码、文本、PDF、图像，计划扩展音频/视频。
- Agent 集成：提供与多种编码智能体的安装与认证流程，降低集成门槛。

## 使用场景

mgrep 适用于开发者日常代码导航、项目审计、快速定位业务逻辑，以及与 LLM/智能体协作时的事实检索。典型场景包括查找实现位置、回顾变更上下文、在 CI 环境中进行语义搜索，或在教学与演示中结合 [演示站点](https://demo.mgrep.mixedbread.com) 展示功能。

## 技术特点

- 以 TypeScript 构建并以 npm 包方式分发，支持全栈与 CLI 使用。
- 云端 store 与本地代理相结合，搜索请求可选地在 Mixedbread store 进行 reranking。
- 注重可配置性：支持 `.mgreprc.yaml` 或环境变量覆盖，适配 CI/CD 场景。
- 开放许可为 Apache-2.0，社区驱动扩展与渲染插件开发友好。
