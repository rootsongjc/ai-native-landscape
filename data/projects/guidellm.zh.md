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
author: vllm-project
ossDate: '2024-05-29T21:54:22Z'
featured: false
status: tracked
---

GuideLLM 是一个面向真实推理场景的性能基准测试工具，用于评估和优化 LLM 部署表现。作为 vLLM 项目的一部分开发，它帮助团队在类生产工作负载下测量和优化大语言模型的性能表现，确保部署在上线前满足延迟、吞吐量和质量要求。

## 基准测试能力

- 模拟真实推理模式，确保评估准确性
- 测量延迟、吞吐量和首 token 时间等关键性能指标
- 支持合成和真实工作负载模式
- 包含推理性能统计分析的详细报告

## 后端对比

- 并排对比多种推理后端（vLLM、TensorRT-LLM、TGI 等）
- 评估不同硬件和模型配置以找到最优部署方案
- 可复现的基准测试配置确保评估一致性
- 与主流推理引擎无缝集成

## 生产就绪验证

- 验证推理基础设施是否满足性能 SLA
- 容量规划与硬件选型指导
- 在部署到生产前识别性能瓶颈
- 支持引导输出和结构化生成评估

## vLLM 生态集成

- 作为 vLLM 项目的一部分构建，原生兼容
- 生成适合工程团队和利益相关者审查的详细报告
- 活跃的社区开发与定期更新
- 帮助团队基于数据做出服务架构决策
