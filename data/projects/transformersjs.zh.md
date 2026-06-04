---
name: Transformers.js
slug: transformersjs
homepage: https://huggingface.co/docs/transformers.js
repo: https://github.com/xenova/transformers.js
license: Apache-2.0
category: inference-serving
subCategory: edge-local-inference
tags:
  - Dev Tools
description: Transformers.js：在浏览器与 Node 环境中运行 Hugging Face Transformers 的 JavaScript 实现，支持多模态任务与预编译 WASM/ONNX 加速。
author: Xenova
ossDate: '2023-02-13T13:51:45.000Z'
featured: false
status: tracked
---

## 简介

Transformers.js 让 Hugging Face 的 Transformer 模型能直接在浏览器或 Node 中运行，无需服务器依赖，适合边缘端与前端推理场景，兼顾通用性与可移植性。

## 主要特性

- 在浏览器与 Node.js 上本地运行常见任务（文本、视觉、音频等）。
- 支持 pipeline API、量化（q4/q8 等）与预编译 WASM/ONNX 后端以优化性能。
- 丰富的示例与 demo，方便快速集成到 Web 应用或静态站点。

## 使用场景

- 在客户端做隐私敏感的推理（无需将数据发回服务器）。
- 构建交互式演示、Web demo、浏览器插件或离线推理功能。
- 在受限资源环境下用量化模型降带宽、节省算力。

## 技术特点

- 多后端支持（WebGPU、WASM、ONNX），可根据环境选择最佳执行路径。
- 使用 Hugging Face Hub 的模型与预编译二进制，提供可定制的本地模型路径与配置。
- 面向前端优化的 API，保留与 Python Transformers 相似的使用体验。
