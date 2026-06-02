---
name: GuideLLM
slug: guidellm
homepage: null
repo: https://github.com/vllm-project/guidellm
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - Control
  - LLM
  - Tooling
description: GuideLLM 提供用于引导、解释和控制大语言模型（LLM）的工具与范式，便于在交互式应用中实现更好的可控性。
logo: ''
author: vllm-project
ossDate: '2024-05-29T21:54:22Z'
featured: false
status: tracked
---

## 简介

GuideLLM 是一个面向真实推理场景的性能基准测试工具，用于评估和优化 LLM 部署表现。作为 vLLM 项目的一部分开发，它帮助团队在类生产工作负载下测量和优化大语言模型的性能表现，确保部署在上线前满足延迟、吞吐量和质量要求。

## 主要特性

GuideLLM 提供全面的基准测试能力，能够模拟真实推理模式，测量延迟、吞吐量和首 token 时间等关键性能指标，支持跨不同硬件和模型配置的对比。它支持多种推理后端和部署配置的对比，帮助团队找到最优部署方案。

## 使用场景

GuideLLM 对于在生产环境中部署 LLM 并需要验证推理基础设施是否满足性能 SLA 的团队至关重要。它同样适用于容量规划、硬件选型，以及在确定生产架构前对比 vLLM、TensorRT-LLM 和 TGI 等不同模型服务框架。

## 技术特点

GuideLLM 作为 vLLM 生态系统的一部分构建，与主流推理引擎无缝集成，并提供可复现的基准测试配置。它生成包含推理性能统计分析的详细报告，支持合成和真实工作负载模式以确保评估准确性。
