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
status: tracked
---

## 简介

vLLM-Omni 是一个面向全模态（omni-modality）模型的推理与服务框架，支持文本、图像、视频与音频输入及异构输出。它基于 vLLM 成熟的高性能推理引擎构建，扩展了对 Diffusion Transformers 等非自回归架构与并行生成模型的支持。框架面向吞吐、成本效率与多模态灵活性要求较高的生产级部署场景。

## 主要特性

统一推理管线覆盖文本、图像、视频与音频的多模态推理，通过高效 KV 缓存管理与分阶段流水线调度实现低延迟与高吞吐。解耦架构将模型阶段与推理阶段分离，支持通过 OmniConnector 进行分布式部署与动态资源调度。与 Hugging Face 模型权重无缝集成，并提供 OpenAI 兼容 API，降低迁移成本。

## 使用场景

需要同时处理文本与视觉输入的多模态助手与对话系统可借助 vLLM-Omni 的统一服务层快速部署。大规模图像或视频生成管道可将其作为高吞吐推理后端。需要流式输出与低延迟的实时多媒体应用，以及需要跨节点分布式部署的异构模型场景，均可受益于该框架。

## 技术特点

KV 缓存优化与显存-计算权衡策略继承自 vLLM，最大化硬件利用率。分阶段流水线执行支持 tensor、pipeline 与 expert 并行策略，实现多 GPU 与多节点扩展。基于 OmniConnector 的解耦层支持 prefill 与 decode 阶段独立扩缩容，原生支持非自回归生成工作流与异构输出格式处理。
