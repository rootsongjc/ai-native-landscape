---
name: WebLLM
slug: web-llm
homepage: https://webllm.mlc.ai/
repo: https://github.com/mlc-ai/web-llm
license: Unknown
category: inference-serving
subCategory: edge-local-inference
tags:
  - Deployment
  - LLM
description: 高性能的浏览器端 LLM 推理引擎，利用 WebGPU 在浏览器内实现硬件加速和隐私保护。
author: mlc-ai
ossDate: '2023-04-13T18:11:59.000Z'
featured: false
status: tracked
---

## 简介

WebLLM 是一个高性能的浏览器端 LLM 推理引擎，通过 WebGPU 提供硬件加速，能在无需服务器的情况下直接在浏览器内运行语言模型推理，兼顾隐私与部署便捷性。

## 主要特性

- 浏览器内推理（In-Browser Inference），无需服务器端支持。
- 与 OpenAI API 高度兼容，支持流式输出、JSON 模式和函数调用（WIP）。
- 支持多种预构建模型（如 Llama、Phi、Gemma、Mistral 等）并能自定义模型集成。

## 使用场景

- 构建隐私友好的在线助手与聊天应用。
- 在前端直接运行推理以减少后端成本与延时。
- 教育、演示与快速原型开发，或通过 CDN 快速集成于现有网页。

## 技术特点

- 基于 WebAssembly 与 WebGPU，实现高效的推理性能与流式生成。
- 提供 WebWorker/ServiceWorker 支持，便于将计算卸载到独立线程以优化 UI 性能。
- 模块化设计，支持 NPM/PNPM 安装、CDN 引入与丰富的示例代码，便于集成与扩展。
