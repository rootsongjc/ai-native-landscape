---
name: llama.cpp
slug: llama-cpp
homepage: https://huggingface.co/models?library=gguf
repo: https://github.com/ggml-org/llama.cpp
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
  - Inference
description: llama.cpp 是一个用 C/C++ 实现的轻量级 LLM 推理库，旨在在不同硬件上实现高效推理。
logo: ''
author: ggml-org
ossDate: '2023-03-10T18:58:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

llama.cpp 是一个以 C/C++ 实现的轻量级 LLM 推理库，目标是在本地与云端的多种硬件（CPU/GPU/Apple Metal 等）上以较低门槛运行大模型，支持 GGUF 格式与多种量化方案，从而降低显存需求并提升推理效率。

## 主要特性

- 纯 C/C++ 实现，依赖少，便于嵌入与部署。
- 广泛的后端支持：CPU（AVX/NEON/AMX）、CUDA、HIP、Metal、Vulkan、MUSA 等。
- 多种量化位宽（1.5/2/3/4/5/6/8-bit），支持 GGUF 格式与转换工具。
- 提供 OpenAI 兼容的 `llama-server`，并包含丰富的工具（llama-cli、llama-bench、llama-run 等）。

## 使用场景

- 本地开发与推理：在开发机或边缘设备上运行模型进行离线推理与调试。
- 私有化部署：在私有云或内部集群运行推理服务以保护数据与降低成本。
- 性能评测与研究：使用内置基准工具评估模型在不同硬件/量化设置下的表现。

## 技术特点

- 实现语言：C/C++ 为主，部分工具使用 Python/脚本语言。
- 模型与格式：原生支持 GGUF，配合仓库内转换脚本可从 Hugging Face 等平台获取模型并量化。
- 可扩展性：模块化工具链与丰富的 CLI 参数，支持 RPC server、KV 缓存、投机解码等高级特性。
