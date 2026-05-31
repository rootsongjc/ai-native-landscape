---
name: MLC LLM
slug: mlc-llm
homepage: https://llm.mlc.ai/
repo: https://github.com/mlc-ai/mlc-llm
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
description: 通用的 LLM 部署引擎，结合 ML 编译技术以提升模型部署性能。
logo: ''
author: MLC AI
ossDate: '2023-04-29T01:59:25.000Z'
featured: false
status: tracked
---

## 简介

MLC LLM 是一个通用的 LLM 部署与编译引擎，通过编译器驱动的优化和统一运行时，实现跨平台（GPU / CPU / Web / 移动）的高性能推理。

## 主要特性

- 跨平台支持：包括 CUDA、Vulkan、Metal、WebGPU 与移动平台的优化后端。
- 编译器优化：利用 ML 编译技术生成高效的模型执行代码以提升吞吐与降低延迟。
- 工具链与服务：提供 REST、Python、JavaScript、移动 SDK 与示例工程，方便集成与部署。

## 使用场景

- 在多种硬件上部署 LLM 服务以获得更好性能与成本效益。
- 将模型移植到边缘设备或浏览器中运行（Web / iOS / Android）。

## 技术特点

- MLCEngine 提供统一的运行时与 OpenAI 兼容 API，结合编译器静态分析与运行时调度实现高效推理。
