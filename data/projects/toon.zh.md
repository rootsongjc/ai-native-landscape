---
name: TOON
slug: toon
homepage: https://toonformat.dev
repo: https://github.com/toon-format/toon
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Data
  - LLM
  - SDK
description: 一种面向 Token 的紧凑、可读且具 schema 感知的数据表示格式，面向 LLM 提示与序列化。
logo: ''
author: toon-format
ossDate: '2025-10-22T18:17:32Z'
featured: false
status: tracked
---

## 简介

TOON（Token-Oriented Object Notation）是一种紧凑、人类可读的数据格式，作为 JSON 的高效 Token 替代方案，专为 LLM 提示和结构化数据序列化而设计。它通过明确的 Token 分隔符和具备 schema 感知的解析机制减少提示体积，同时保持可读性，特别适合在有限的上下文窗口中与大语言模型传递结构化数据。

## 主要特性

TOON 通过紧凑的分隔符和可选的 schema 验证，相比 JSON 实现显著的 Token 节省，同时保留人类可读的语法。它支持基于模式的 schema 验证和向后兼容，确保数据结构演进不会破坏已有集成。平台提供 TypeScript SDK 和基准测试工具，简化采用流程并可量化实际工作流中的 Token 效率提升。

## 使用场景

提示工程师使用 TOON 编写简洁的结构化输入用于 LLM 调用，降低 Token 成本并为实际任务留出更多上下文窗口空间。构建提示模板库的团队采用 TOON 作为可复用提示组件的标准化交换格式。它还作为轻量级序列化格式，在需要关注 Token 效率的服务间传递小型结构化载荷。

## 技术特点

TOON 定义了明确的 Token 分割规则和轻量语义约定，支持无歧义的确定性解析。它提供包含解析器、序列化器和 schema 验证器的 TypeScript 工具链，便于集成到前端和后端 SDK 中。规范设计在三个目标之间取得平衡：人类可读性、机器可验证性和 LLM 上下文窗口内的最小 Token 消耗。
