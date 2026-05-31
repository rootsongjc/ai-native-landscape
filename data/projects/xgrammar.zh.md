---
name: XGrammar
slug: xgrammar
homepage: https://xgrammar.mlc.ai/docs/
repo: https://github.com/mlc-ai/xgrammar
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Utility
description: 高效、灵活且可移植的结构化生成引擎，提供对 JSON/自定义 CFG 的约束解码以保证输出结构正确。
logo: ''
author: MLC AI
ossDate: '2024-06-28T06:34:27.000Z'
featured: false
status: tracked
---

## 简介

XGrammar 是一个面向结构化生成的开源引擎，采用受限解码确保输出在语法上 100% 正确，支持 JSON、正则、上下文无关文法等多种结构。

## 主要特性

- 基于约束解码实现零或近零开销的结构化生成，适用于高吞吐场景。
- 广泛的部署支持：多平台（Linux、macOS、Windows）、多硬件（CPU、GPU、Apple Silicon、TPU）与多语言接口（Python、C++、JS）。
- 与主流推理后端集成（vLLM、TensorRT-LLM、MLC-LLM 等），并提供文档、示例与基准测试。

## 使用场景

- 在需要严格结构化输出的生产系统中保证 JSON/自定义格式的正确性（API 响应、数据抽取、函数调用参数）。
- 高吞吐量的批量生成与低延迟在线推理场景。
- 将结构化生成作为推理引擎或中间件的一部分与下游系统集成。

## 技术特点

- 主要由 C++ 与 Python 实现，仓库包含文档站点、示例与测试套件，采用 Apache-2.0 许可。
- 优化的约束解码算法可实现接近零开销的结构化输出，支持多模型与多平台部署。
- 社区活跃，已被多个项目与公司集成，适合生产与研究用途。
