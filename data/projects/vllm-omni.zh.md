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
author: vLLM Project
ossDate: '2025-09-11T00:34:43Z'
featured: false
status: tracked
---

vLLM-Omni 是一个面向全模态（omni-modality）模型的推理与服务框架，支持文本、图像、视频与音频输入及异构输出。它基于 vLLM 成熟的高性能推理引擎构建，扩展了对 Diffusion Transformers 等非自回归架构与并行生成模型的支持。框架面向吞吐、成本效率与多模态灵活性要求较高的生产级部署场景。

## 多模态推理管线

- 统一推理管线覆盖文本、图像、视频与音频的单一部署
- 通过高效 KV 缓存管理实现低延迟与高吞吐
- 分阶段流水线调度优化资源利用率
- 与 Hugging Face 模型权重无缝集成，提供 OpenAI 兼容 API

## 解耦架构

- 通过 OmniConnector 将模型阶段与推理阶段分离
- 支持跨节点分布式部署与动态资源调度
- prefill 与 decode 阶段可独立扩缩容
- 原生支持非自回归生成工作流与异构输出格式

## 可扩展性与性能

- KV 缓存优化与显存 - 计算权衡策略继承自 vLLM
- 支持 tensor、pipeline 与 expert 并行策略，实现多 GPU 与多节点扩展
- 大规模图像或视频生成管道的高吞吐推理后端
- 流式输出与低延迟执行，满足实时多媒体应用需求
