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
author: Mixedbread
ossDate: '2025-11-06T01:01:47Z'
featured: false
status: tracked
---

mgrep 是一个面向命令行的语义检索工具，将自然语言查询能力引入代码库、文档与多媒体文件的搜索。它在本地或云端建立索引，通过后台监听保持结果同步，并提供聚焦的语义片段以减少 LLM 和智能体的 token 消耗。mgrep 同时兼顾人类使用习惯与智能体集成需求，在传统 grep 与现代 AI 搜索之间架起桥梁。

## 核心特性

- **自然语言查询**，开发者可用接近日常表述的方式搜索代码和文档，无需精确匹配模式
- **后台索引与实时同步**，通过 `mgrep watch` 确保搜索结果始终最新，无需手动重建索引
- **多模态支持**，覆盖代码、文本、PDF 和图片，音频与视频支持正在规划中
- **内置智能体集成**，提供安装命令与认证流程，使编码智能体可以无缝调用 mgrep 的能力
- **灵活配置**，支持通过 `.mgreprc.yaml` 或环境变量配置，便于集成到 CI/CD 流水线中

## 使用场景

- 日常代码导航、审计陌生代码库、快速定位业务逻辑
- CI 环境中用语义搜索替代脆弱的 pattern 匹配，提升测试自动化可靠性
- 与 LLM 协作时通过聚焦的上下文片段显著降低 prompt 的 token 消耗
- 基于智能体的开发流程，编码助手需要高效且精准的代码检索

## 技术特点

- 以 TypeScript 构建并通过 npm 分发，跨平台安装便捷
- 结合云端 Mixedbread store 与本地同步及重排序机制以提升相关性
- 采用 Apache-2.0 许可证，欢迎社区贡献与扩展
