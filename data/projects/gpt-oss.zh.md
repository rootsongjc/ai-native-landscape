---
name: gpt-oss
slug: gpt-oss
homepage: https://openai.com/open-models
repo: https://github.com/openai/gpt-oss
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - LLM
description: gpt-oss 是 OpenAI 发布的开源权重系列模型，面向高推理能力与可定制化的开发场景。
logo: ''
author: OpenAI
ossDate: '2025-06-23T16:43:33.000Z'
featured: false
status: tracked
---

## 简介

gpt-oss 是 OpenAI 发布的开源模型系列（包含 gpt-oss-120b 与 gpt-oss-20b），提供开放权重以便研究与工程复现。该项目以 Apache-2.0 许可发布，面向高推理能力与可定制化场景，支持多种推理后端与工具链集成。本文简要介绍其定位、主要功能与典型应用场景。

## 主要特性

- 开源权重（Apache-2.0），便于研究与商用部署。
- 两种规模：适配单卡高端 GPU 与更轻量化场景（120B / 20B）。
- 支持 Harmony 响应格式、工具调用（浏览器、Python 等）与多种推理后端（Transformers、vLLM、Triton、Metal）。

## 使用场景

- 大规模推理与研究：适用于需要强推理能力与可解释性/可调度的研究场景。
- 本地部署与离线推理：提供适配 Ollama、vLLM 等工具的运行示例，便于在企业或本地环境部署。
- 开发者工具链集成：可作为训练、微调或作为推理后端的参考实现与实验平台。

## 技术特点

- Harmony 响应格式：模型使用统一的响应格式以支持可组合工具调用与结构化输出。
- 多后端与量化支持：提供对 MXFP4 等量化方案的支持，降低显存占用并提升推理效率。
- 参考实现多样：包含 PyTorch、Triton、Metal 等参考实现，帮助工程化落地与性能调优。

该项目拥有活跃的社区与多样化的贡献者，仓库中包含详细的使用示例、部署脚本与性能基准，便于工程团队在不同后端上进行对比评估与优化。作为一个开源参考实现，gpt-oss 同时适合研究试验与工程化落地；模型权重与运行说明均在仓库文档中提供，便于开发者快速上手并在真实业务场景中进行性能测试与定制化改造。
