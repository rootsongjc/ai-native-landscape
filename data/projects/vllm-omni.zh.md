---
name: vLLM-Omni
slug: vllm-omni
homepage: https://docs.vllm.ai/projects/vllm-omni
repo: https://github.com/vllm-project/vllm-omni
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Framework
  - Inference
  - Multimodal
  - Serving
description: 一个为文本、图像、视频与音频等多模态模型提供高性能、低成本推理与服务的框架。
logo: ''
author: vLLM Project
ossDate: '2025-09-11T00:34:43Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

vLLM-Omni 是一个面向 omni-modality（多模态）模型的推理与服务框架，支持文本、图像、视频和音频等输入与异构输出。它建立在 vLLM 的高效推理能力之上，扩展了对非自回归架构（如 Diffusion Transformers）和并行生成模型的支持，旨在以更低的成本和更高的吞吐完成多模态模型在生产环境的部署与提供服务。

## 主要特性

- 同时支持文本、图像、视频与音频的多模态推理能力。
- 基于高效的 KV 缓存与流水线分阶段执行实现低延迟与高吞吐。
- 支持模型与推理阶段的解耦与分布式部署（OmniConnector），实现动态资源调度。
- 与 Hugging Face 等开源模型生态无缝集成，并提供 OpenAI 兼容的 API 服务。

## 使用场景

- 多模态对话与助手服务，需要同时处理文本与视觉输入的产品化部署。
- 大规模图像/视频生成与处理管道的推理后端。
- 需要流式输出、低延迟响应的实时多媒体智能应用。
- 异构模型混合部署与分布式推理场景下的资源优化与成本控制。

## 技术特点

- 高效 KV 缓存管理，继承 vLLM 的显存与计算优化策略。
- 分阶段流水线执行与并行策略（tensor/pipeline/expert parallelism）以提升吞吐。
- 支持非自回归生成模型与异构输出的处理流。
- 基于 OmniConnector 的解耦设计，支持跨节点分发与动态扩缩容。
