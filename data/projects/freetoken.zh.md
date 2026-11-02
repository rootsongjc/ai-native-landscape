---
name: FreeToken
slug: freetoken
homepage: https://flashml.ai
repo: https://github.com/FlashML-org/FreeToken
license: Apache-2.0
category: inference-serving
subCategory: edge-local-inference
tags:
  - MoE
  - Local Inference
  - Serving
  - Edge AI
description: >-
  边缘原生的混合专家（MoE）推理引擎，让 290B+ 的前沿开源权重模型在消费级硬件上本地运行，
  把 GPU、CPU、内存与互连当作一个弹性推理平台统一调度。
author: FlashML-org
ossDate: '2026-07-20'
featured: false
status: tracked
---

## 简介

FreeToken 是一个边缘原生的混合专家（MoE）推理引擎，用于在个人与消费级硬件上运行前沿规模的开源权重模型——在游戏 PC 上以交互级速度跑 290B+ 参数的 MoE 模型。它把异构边缘资源（GPU、CPU、内存、互连）视为统一的弹性推理平台，并提供 Anthropic/OpenAI 兼容 API，让 Codex、Claude Code、OpenCode 等真实编码 Agent 直接对接本地端点。

## 主要特性

- 快速的边缘原生运行时：带宽自适应的 CPU–GPU 协同执行（q* 策略）、全层双缓冲 prefill 流式处理、全局 LRU 专家缓存、计算图兼容执行与 FTW 快速权重格式
- 语义感知缓存：为循环状态和 KV 缓存提供语义锚点检查点，Agent 上下文编辑（工具调用、思考块）无需重复重算上下文
- 弹性内存管理：在专家缓存与 KV 内存之间运行时动态重新分配显存，无需重启引擎或重载权重
- 支持前沿开源 MoE 模型（DeepSeek-V4-Flash、Qwen3.6-35B-A3B、GLM-5.2），覆盖 MXFP4、NVFP4、FP8、BF16 等量化格式
- Anthropic/OpenAI 兼容 API，可直接接入 Codex、Claude Code、OpenCode、OpenClaw、DeepSeek Harness 等编码与工具调用 Agent
- 提供 Windows / Linux 桌面应用，也可 `uv pip install "freetoken[accel]"` 以 CLI 安装；原生支持 NVIDIA RTX 30/40/50 系列消费级 GPU

## 使用场景

- 在游戏主机、工作站或笔记本上本地运行 290B+ 前沿开源 MoE 模型
- 为不能出机器的编码 Agent 提供本地 Anthropic/OpenAI 兼容端点
- 上下文频繁编辑的 Agent 负载——此时 KV/检查点复用决定端到端延迟

## 技术特点

- 运行时把异构资源当作一个弹性资源池；带宽自适应的 q* 策略在执行期决定专家在 CPU 与 GPU 间的放置，让负载匹配可用内存带宽
- Prefill 以全层双缓冲流式推进，全局 LRU 缓存保持热专家常驻；执行兼容 CUDA Graph，检查点以 FTW 快速权重格式加载
- 循环状态与 KV 缓存通过按键内容索引的语义锚点检查点持久化：Agent 上下文内的局部编辑（一次工具调用或思考块）可复用未受影响的片段，而不是重算整个前缀
- 专家缓存与 KV 内存之间的显存划分可在运行时调整，无需重启或重载权重；设计详见 arXiv:2608.16157，受 mini-sglang 启发，复用了 SGLang、vLLM、FlashInfer、flash-linear-attention、LightLLM 与 llama.cpp 的代码
