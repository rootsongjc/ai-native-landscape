---
name: Candle
slug: candle
homepage: https://huggingface.github.io/candle/guide/installation.html
repo: https://github.com/huggingface/candle
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Framework
  - ML Platform
description: Hugging Face 的 Candle：一个以 Rust 为核心、面向高性能与无 Python 运行时的轻量级机器学习框架。
author: Hugging Face
ossDate: '2023-06-19T16:06:31.000Z'
featured: false
status: tracked
---

## 详细介绍

Candle 是一个以 Rust 为主、专注于高性能和轻量部署的机器学习框架，旨在实现无 Python 的服务器无状态推理与高效模型部署，支持 CPU、CUDA 与 WASM 后端。

## 主要特性

- 轻量且高性能的核心（Rust 实现），适合 serverless 与边缘部署。
- 支持多后端：优化的 CPU、CUDA、WASM，并提供量化与多种模型格式的加载能力（safetensors、npz、ggml、PyTorch）。
- 丰富的示例与在线演示（如 LLaMA、Whisper、Stable Diffusion 等）。

## 使用场景

- 在没有 Python 运行时的生产环境中进行模型推理。
- 在受限资源或需要快速启动实例的 serverless 场景部署模型。
- 研究或工程团队希望使用 Rust 生态进行模型推理与高性能内核集成。

## 技术特点

- 以 Rust 为主要实现语言（代码库约 80% Rust），包含专门的内核与 CUDA 优化模块。
- 提供示例集合与工具（candle-core, candle-nn, candle-examples, candle-kernels 等），并支持 WASM 运行时。
