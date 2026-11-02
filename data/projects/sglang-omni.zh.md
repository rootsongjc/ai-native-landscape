---
name: sglang-omni
slug: sglang-omni
homepage: https://sgl-project.github.io/sglang-omni/
repo: https://github.com/sgl-project/sglang-omni
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Speech
  - Multimodal
  - Model Serving
  - Realtime
description: >-
  SGLang 项目推出的全模态、语音与 TTS 模型多阶段推理运行时，面向跨异构阶段的多阶段解码设计，
  通过 OpenAI 兼容端点对外提供服务。
author: sgl-project
ossDate: '2026-01-07'
featured: false
status: tracked
---

## 简介

SGLang-Omni 是 SGLang 项目推出的面向全模态（omni）、语音与 TTS 模型的多阶段推理运行时。它的设计目标是多阶段解码：把生成过程拆分到计算模式、依赖结构与资源需求各异的多个阶段。SGLang-Omni 负责流水线拓扑、阶段生命周期、阶段间传输、模型家族集成层与 OpenAI 兼容的服务接口，并在适用的地方与 SGLang 组合，复用其高性能自回归调度与模型执行。

## 主要特性

- 多阶段运行时：把生成建模为协同的多个阶段——预处理、编码器、自回归引擎、talker、解码器、声码器与聚合器
- 阶段特化调度：从 SGLang 承载的自回归引擎到轻量预处理与流式声码器循环，各阶段匹配各自的调度器
- OpenAI 兼容的 API：多模态对话、语音生成、批量与流式语音、上传音色、转写
- 可服务全模态对话（Qwen3-Omni、MiniCPM-o 4.5、Ming-Omni）、`/v1/realtime` 上的原生全双工对话、级联式 ASR-LLM-TTS 语音助手、TTS（Higgs Audio v3、MOSS-TTS、Fish Audio Drama 3、Qwen3-TTS）、音乐生成（MiniMax Music 3）、ASR、说话人分离与语音翻译
- 对新语音/音频模型保持 day-0 支持；Mac 语音输入工具 Voxt 已集成它实现本地语音识别

## 使用场景

- 承载可实时听说、支持打断的原生全双工语音 Agent
- 把级联的 ASR、LLM、TTS 服务组合成带 VAD、历史与轮次管理的流式对话
- 用一套运行时覆盖组织的语音识别、语音合成、音乐与全模态模型负载

## 技术特点

- 流水线拓扑、阶段生命周期、阶段间传输、模型家族集成与服务 API 由 SGLang-Omni 自持；自回归阶段与 SGLang 的调度器和执行引擎组合
- 控制平面协调请求，relay 数据平面经共享内存、NCCL、NIXL 与 Mooncake 后端搬运张量数据
- NVIDIA CUDA 为默认后端、模型覆盖最全；Apple Silicon（Torch MPS）与 Intel XPU（PyTorch XPU）处于实验阶段，支持部分模型端到端运行
- 端点包括 `/v1/audio/speech`（批量、流式、上传音色）、`/v1/audio/transcriptions`（MOSS-TD 经 `response_format=verbose_json` 返回说话人标签与时间戳）与全双工的 `/v1/realtime`；可通过 PyPI 安装 `sglang-omni`
