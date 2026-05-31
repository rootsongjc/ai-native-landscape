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

## 详细介绍

TOON（Token-Oriented Object Notation）是一种面向 Token 的对象表示法，设计为比 JSON 更紧凑、可读且具 schema 感知，专注于为大语言模型（LLM）提示与序列化提供高效表达。TOON 通过明确的令牌分隔与轻量语义，使提示模板、小型结构化数据和模型输入更加简洁与可控，便于在提示工程与 SDK 中传递结构化信息。

## 主要特性

TOON 强调紧凑性与可读性，支持基于模式的 schema 验证与向后兼容性；提供 TypeScript SDK 与基准测试，便于在工程中集成与评估。它在保留人类可读性的同时降低了提示长度和冗余，适合需要高效 token 利用的场景。

## 使用场景

适用于提示工程、模型输入序列化、轻量结构化数据交换以及需要控制 token 成本的应用场景，例如构建提示模板库、在微服务间传递小型结构化载荷，或在离线测试与基准比较中统一数据格式。

## 技术特点

实现基于明确的 token 分割规则与轻量语义约定，提供 TypeScript 工具链与示例，易于与现有前端/后端 SDK 集成。TOON 的设计权衡了可读性、可验证性与 token 效率，适合与大语言模型的上下文窗口协同使用。
