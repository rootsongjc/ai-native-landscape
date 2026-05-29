---
name: Chitu
slug: chitu
homepage: https://qc-ai.cn
repo: https://github.com/thu-pacman/chitu
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
  - Model
description: 一个面向生产的大模型推理框架，提供高性能、多算力适配与可伸缩部署能力。
logo: ''
author: thu-pacman
ossDate: '2025-02-20T06:34:38Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Chitu（赤兔）是一个面向生产环境的大模型推理引擎，致力于为大语言模型（LLM）提供高性能、低延迟与稳定的推理能力。它覆盖从纯 CPU、单卡到大规模集群的部署场景，并兼容多种算力平台（包括 NVIDIA、昇腾、沐曦等），以满足企业从测试到规模化落地的需求。

## 主要特性

- 多元算力适配：支持 NVIDIA 与主流国产芯片的高效推理实现。
- 可伸缩部署：从本地验证到集群化部署，支持混合异构架构。
- 生产级稳定性：面向长期稳定运行与并发业务场景的容错与优化。
- 丰富工具链：提供镜像、开发手册与性能数据，便于快速验证与接入。

## 使用场景

适用于需要在本地或边缘部署大模型推理的场景，如企业级问答系统、实时在线推理服务、批量推理任务和模型加速部署。Chitu 也适合需要国产算力支持或混合算力优化的行业客户。

## 技术特点

赤兔在实现上结合了高性能算子实现、量化与混合精度支持（如 FP4/FP8/BF16）、流式与批处理优化，并提供本地镜像和详细的性能基准文档以便工程化落地。项目同时强调可扩展性与对主流 LLM 的兼容性，支持通过插件/适配器接入不同模型和后端。
