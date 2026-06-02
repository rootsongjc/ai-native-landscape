---
name: Mini-SGLang
slug: mini-sglang
homepage: null
repo: https://github.com/sgl-project/mini-sglang
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Inference
  - SDK
description: 一个轻量而高性能的大语言模型推理框架，兼顾工程化与可读性。
logo: ''
author: SGL Project
ossDate: '2025-09-01T22:31:45Z'
featured: false
status: tracked
---

## 简介

Mini-SGLang 是一个轻量且面向工程的高性能大语言模型推理框架，旨在将现代 LLM 服务系统的复杂性转化为可理解的代码。项目将核心推理优化浓缩为约 5,000 行结构清晰、带类型注解的 Python 代码，支持本地 GPU 部署和通过 OpenAI 兼容 API 的在线服务。

## 主要特性

高性能优化包括 Radix Attention 前缀复用、分块预填降低峰值内存、重叠调度隐藏 CPU 开销、张量并行支持多 GPU 扩展，以及 FlashAttention 内核集成。轻量可读的代码库采用模块化设计和完整类型注解，便于学习研究和二次开发。开箱即用的多场景部署支持交互式终端、在线服务模式，以及代码解释器、浏览器自动化和文件系统操作等示例应用。

## 使用场景

研究人员将 Mini-SGLang 作为参考实现，用于验证推理优化策略和在受控负载上基准测试性能。工程团队使用它快速搭建 OpenAI 兼容的推理端点，用于开发和测试，无需承担大型服务框架的额外开销。

## 技术特点

框架暴露标准的 OpenAI 兼容服务 API，便于客户端无缝集成。集成的 FlashAttention 和 FlashInfer 优化内核提升单 GPU 吞吐量。模块化架构将执行器、调度器、缓存和通信组件分离，无需深度修改核心代码即可实现自定义的分布式和并行策略。
