---
name: vLLM
slug: vllm
homepage: https://docs.vllm.ai/
repo: https://github.com/vllm-project/vllm
license: Apache-2.0
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
  - LLM
description: 面向大模型的高吞吐、内存高效推理与服务引擎。
logo: ''
author: vLLM Project
ossDate: '2023-02-09T11:23:20.000Z'
featured: true
status: tracked
---

## 简介

vLLM 是一个为大语言模型推理与服务设计的高性能引擎，着重提高吞吐量并降低显存占用。它通过 PagedAttention、连续批处理与优化的 CUDA/HIP 内核实现高效执行，支持多种量化与硬件平台，适合生产级部署。

## 主要特性

- 高吞吐与低延迟的连续批处理与推理流水线。
- 基于 PagedAttention 的高效 KV 内存管理与前缀缓存。
- 多种量化支持（GPTQ、AWQ、AutoRound、INT4/INT8/FP8）与投机解码。

## 使用场景

- 面向高并发在线服务的 LLM 推理后台与 API 网关。
- 研究和基准测试新的推理优化方法与内核实现。
- 在云或边缘环境中部署量化模型以节省成本与资源。

## 技术特点

- 高效的 CUDA/HIP 图与专用内核（集成 FlashAttention/FlashInfer）。
- 支持 Hugging Face 模型、OpenAI 兼容接口与多 LoRA 插件。
- 跨平台硬件支持（NVIDIA/AMD/Intel/TPU）与插件扩展能力。
