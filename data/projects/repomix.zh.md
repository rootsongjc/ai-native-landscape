---
name: Repomix
slug: repomix
homepage: https://repomix.com/
repo: https://github.com/yamadashy/repomix
license: Unknown
category: training-optimization
subCategory: prompt-quality
tags:
  - Dev Tools
  - Prompt Engineering
  - Utility
description: 将整个代码库打包为 AI 友好格式的工具，便于向大模型提供完整、结构化的代码上下文。
author: yamadashy
ossDate: '2024-07-13T07:11:32.000Z'
featured: false
status: tracked
---

Repomix 能把整个代码库打包成单个 AI 友好文件（XML/Markdown/JSON/Plain），并提供 token 统计、压缩选项与安全检查，方便将代码上下文传给 LLM 进行审查、重构或文档生成等任务。

## 主要特性

- AI 优化输出：生成便于大模型理解的结构化文件，并支持多种输出格式（XML/Markdown/JSON/Plain）
- Token 统计：为每个文件及整体提供 token 计数，帮助控制模型上下文限制
- 一键打包：支持本地 CLI、网站（repomix.com）和远程仓库打包（--remote）
- 可配置压缩：使用 Tree-sitter 提取代码要素以减少 token 占用
- 安全检查：集成 Secretlint 等检查以避免泄露敏感信息

## 使用场景

- 自动化代码审查与重构：为 LLM 提供完整结构化上下文以辅助审查与重构建议
- 生成测试与文档：基于打包结果自动生成 README 或单元测试示例
- 开发者助手与代理：为 AI 驱动的开发工具、MCP 服务或代码代理提供项目上下文
- 在线体验与集成：可使用 repomix.com、CLI 或 Docker 在不同环境中运行

## 技术特点

- 多种运行方式：CLI、网站、Docker、Browser/VSCode 扩展与 MCP 服务模式
- 高性能实现：以 TypeScript/Node.js 为主并在关键路径做性能优化
- 可扩展与可定制：支持 glob 包含/排除规则、模板与配置文件
- 社区活跃：开源项目、频繁发布和详尽文档
