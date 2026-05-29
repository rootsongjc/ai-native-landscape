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

## 详细介绍

Mini-SGLang 是一个轻量但面向工程的高性能大语言模型推理框架，目标在于将复杂的推理系统简化为可理解、可扩展的代码库。项目提供本地部署与在线服务能力，支持通过 OpenAI 兼容接口对外提供推理服务，并包含交互式终端、在线服务与多种示例以便快速上手。

## 主要特性

- 高性能：通过重用前缀缓存（Radix Cache）、分块预填（Chunked Prefill）、重叠调度（Overlap Scheduling）与张量并行等技术优化吞吐与延迟。
- 轻量可读：约 5k 行 Python 实现，模块化且带类型注解，便于研究与二次改造。
- 多场景部署：支持本地 GPU（依赖 CUDA）与在线服务部署，并集成多种示例（code-interpreter、浏览器、文件系统等）。

## 使用场景

- 在受控环境中对 LLM 进行大规模在线推理与批处理测试。
- 作为研究或工程参考实现，用于验证推理优化策略与性能基准。
- 快速搭建 OpenAI 兼容的推理服务供开发与测试使用。

## 技术特点

- OpenAPI/兼容接口：提供与常见客户端兼容的服务接口，降低集成成本。
- 优化内核：集成 FlashAttention/FlashInfer 等高性能算子以提升单卡性能。
- 可扩展架构：模块化设计（执行器、调度、缓存、通信），便于扩展分布式与并行策略。
