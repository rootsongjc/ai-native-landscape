---
name: Mini-SGLang
slug: mini-sglang
homepage: null
repo: https://github.com/sgl-project/mini-sglang
license: MIT
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Inference
  - SDK
description: 一个轻量而高性能的大语言模型推理框架，兼顾工程化与可读性。
author: SGL Project
ossDate: '2025-09-01T22:31:45Z'
featured: false
status: tracked
---

Mini-SGLang 是一个轻量且面向工程的高性能大语言模型推理框架，旨在将现代 LLM 服务系统的复杂性转化为可理解的代码。项目将核心推理优化浓缩为约 5,000 行结构清晰、带类型注解的 Python 代码，支持本地 GPU 部署和通过 OpenAI 兼容 API 的在线服务。

## 核心优化

- **Radix Attention**，高效复用共享公共前缀的多个请求之间的前缀缓存
- **分块预填**，在长序列处理中降低峰值内存占用
- **重叠调度**，通过交替计算与通信隐藏 CPU 开销
- **张量并行**，支持大模型部署下的多 GPU 扩展
- **FlashAttention 和 FlashInfer 内核**，集成以提升单 GPU 推理吞吐量

## 使用场景

- 作为参考实现，用于验证推理优化策略和在受控负载上基准测试性能
- 快速搭建 OpenAI 兼容的推理端点，用于开发和测试，无需大型服务框架
- 交互式终端和在线服务模式，便于动手实验 LLM 推理
- 代码解释器、浏览器自动化和文件系统操作等示例应用

## 技术特点

- 暴露标准的 OpenAI 兼容服务 API，便于客户端无缝集成
- 模块化架构将执行器、调度器、缓存和通信组件清晰分离
- 无需深度修改核心代码即可实现自定义的分布式和并行策略
