---
name: Axolotl
slug: axolotl
homepage: https://docs.axolotl.ai/
repo: https://github.com/axolotl-ai-cloud/axolotl
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Dev Tools
  - FineTune
  - LLM
description: 免费开源的 LLM 后训练与微调框架，支持多模型、多种微调方法与多卡/多节点优化。
logo: ''
author: axolotl-ai-cloud
ossDate: '2023-04-14T04:25:47.000Z'
featured: false
status: tracked
---

## 详细介绍

Axolotl 是一个面向最新大语言模型（LLM）的免费开源后训练与微调框架，提供统一的 YAML 配置、丰富示例与端到端流水线，旨在简化从数据预处理到微调、量化与推理的全流程工程化工作。

## 主要特性

- 支持多模型（GPT-OSS、LLaMA、Mistral、Mixtral 等）与多模态任务。
- 多种训练方法：Full FT、LoRA、QLoRA、GPTQ、QAT、DPO/IPO 等。
- 性能优化与并行：Multipacking、Flash Attention、FSDP/DeepSpeed、Sequence/ND Parallelism。

## 使用场景

- 快速搭建并运行 LLM 微调流水线与基准实验。
- 在单机多卡或多节点环境中做大规模微调、量化与推理优化。
- 需要跨云/本地部署（Docker、PyPI 包）的生产化微调场景。

## 技术特点

- 以 PyTorch 生态为基础，集成 Flash Attention、Xformers、Liger Kernel 等加速库。
- 提供丰富的示例与文档（包括 Colab 示例），并支持从 Hugging Face、S3 等多源数据加载。
- 使用 Apache-2.0 许可证，社区活跃、贡献者众多。
