---
name: TOON
slug: toon
homepage: https://toonformat.dev
repo: https://github.com/toon-format/toon
license: MIT
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Data
  - LLM
  - SDK
description: 一种面向 Token 的紧凑、可读且具 schema 感知的数据表示格式，面向 LLM 提示与序列化。
author: toon-format
ossDate: '2025-10-22T18:17:32Z'
featured: false
status: tracked
---

TOON（Token-Oriented Object Notation）是一种紧凑、人类可读的数据格式，作为 JSON 的高效 Token 替代方案，专为 LLM 提示和结构化数据序列化而设计。它通过明确的 Token 分隔符和具备 schema 感知的解析机制减少提示体积，同时保持可读性，特别适合在有限的上下文窗口中与大语言模型传递结构化数据。

## 格式与 Schema

- 紧凑分隔符与可选 schema 验证，相比 JSON 实现显著的 Token 节省
- 基于模式的 schema 验证与向后兼容，确保数据结构演进不会破坏已有集成
- 明确的 Token 分割规则与轻量语义约定，支持无歧义的确定性解析
- 在人类可读性、机器可验证性和 LLM 上下文窗口最小 Token 消耗之间取得平衡

## 工具链与集成

- TypeScript SDK 包含解析器、序列化器与 schema 验证器，便于前后端集成
- 基准测试工具可量化实际工作流中的 Token 效率提升
- 完善的文档与示例降低采用门槛
- 作为轻量序列化格式在关注 Token 效率的服务间传递结构化载荷

## 提示工程应用

- 提示工程师编写简洁的结构化输入用于 LLM 调用，降低 Token 成本
- 构建提示模板库的团队采用 TOON 作为可复用提示组件的标准化交换格式
- 服务间交换小型结构化载荷，Token 效率至关重要
- 兼容现有 LLM 工作流，可作为 JSON 的直接替代
