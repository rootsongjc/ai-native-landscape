---
name: LLM
slug: llm
homepage: https://llm.datasette.io/
repo: https://github.com/simonw/llm
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
  - LLM
description: 面向命令行和 Python 的通用 LLM 工具，支持远程 API 与本地可运行模型。
logo: ''
author: Simon Willison
ossDate: '2023-04-01T21:16:57.000Z'
featured: false
status: tracked
---

## 简介

LLM 是一个面向命令行与 Python 的工具集，用于与 OpenAI、Anthropic、Google、Meta 等多种大型模型交互，既支持远程 API，也支持通过插件安装并在本地运行的模型。它提供提示执行、嵌入生成、结构化提取与工具执行等功能，适合在终端环境中快速试验与集成。

## 主要特性

- 命令行与 Python 双接口：既有方便的 CLI，也提供可复用的 Python API。
- 插件生态：通过插件支持本地推理（如 Ollama）、各类云端模型与嵌入后端。
- 存储与日志：可将提示与响应记录到 SQLite，方便检索与审计。
- 多模态支持：支持对图像、音频等附件进行提取与处理。

## 使用场景

- 在终端快速运行模型提示与调试提示工程。
- 将模型调用集成到自动化脚本或数据处理流水线中。
- 本地离线推理场景（通过插件安装模型和运行）。

## 技术特点

- 主要由 Python 实现（仓库语言统计约 99% 为 Python），采用插件化架构。
- 支持通过 Homebrew、pip、pipx 或 uvx 安装，提供丰富的文档和测试覆盖。
- 采用 Apache-2.0 许可证，社区活跃，发行版本频繁发布。
