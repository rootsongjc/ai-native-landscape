---
name: MS-SWIFT
slug: ms-swift
homepage: https://swift.readthedocs.io/en/latest/
repo: https://github.com/modelscope/ms-swift
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: ModelScope 社区提供的 SWIFT 框架，面向大模型与多模态模型的轻量化微调、评估与部署，支持丰富训练方法、量化与推理加速。
author: ModelScope
ossDate: '2023-08-01T15:06:39.000Z'
featured: false
status: tracked
---

## 详细介绍

MS-SWIFT（SWIFT）是 ModelScope 社区的高可扩展轻量微调基础设施，覆盖训练、微调、对齐、量化、评估与部署流程。项目支持 500+ 文本模型与 200+ 多模态模型，并提供命令行、Python API、Gradio UI 与服务化部署示例，便于在多种硬件上复现实验与生产化流程。

## 主要特性

- 支持丰富的训练方法：Full-parameter、LoRA、QLoRA、DPO、GRPO、RLHF 等。
- 多模态与大模型支持：覆盖数百个文本与多模态模型与常见数据集。
- 加速与量化：兼容 vLLM、LMDeploy、GPTQ、AWQ、BNB 等推理/量化后端。
- 多接口：CLI、Python、Gradio 与 FastAPI 服务，包含大量示例与脚本。

## 使用场景

- 大规模微调与人类对齐（RLHF/DPO/GRPO）研究与工程化流水线。
- 多模态任务（VQA、图像/音频/视频理解、OCR）本地训练与推理。
- 在混合硬件环境中进行量化、加速与分布式训练部署。

## 技术特点

- 以 Python 为主，兼容 PyTorch 与多种推理引擎；提供完善的示例与文档（文档站点见 frontmatter 的 link）。
- 采用 Apache-2.0 许可证，社区活跃，发布与维护频繁，适合研究与工程双重场景。
