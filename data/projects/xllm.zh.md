---
name: xLLM
slug: xllm
homepage: https://xllm.readthedocs.io/zh-cn/latest/
repo: https://github.com/jd-opensource/xllm
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Agents
  - Application
  - Model
  - Multimodal
  - Training
description: >-
  xLLM 是一个面向视觉语言模型的开源框架，提供训练与推理工具及文档。
author: jd-opensource
ossDate: '2025-08-12T13:16:07.000Z'
featured: false
status: tracked
---

xLLM 是由京东开源团队推出的高性能推理与训练框架，覆盖 LLM、VLM、DiT 和 REC 等多种模型架构。它提供从训练、微调到推理的统一工具链，并针对多种 AI 加速器进行了优化，帮助研究与工程团队将多模态系统从实验阶段推进到生产部署。

## 模型架构支持

- 联合训练与推理管线支持 LLM、VLM、DiT、REC 等模型架构
- 通过可扩展的模型组件实现多模态特征融合与跨模态对齐
- 可组合的训练策略适配多种训练场景
- 针对 GPU 和国产芯片等多种加速器的定制优化

## 训练与微调

- 分布式训练与高效并行策略及内存管理，支持大规模参数量
- 大规模微调工作流将基础模型快速适配到垂直领域任务
- 内置多模态数据处理工具，开箱即用
- 评估工具支持跨基准测试的模型性能测量

## 部署与文档

- 推理引擎针对多种加速器类型进行吞吐优化
- 跨设备优化层支持异构硬件部署
- 混合硬件集群上的高性价比部署
- 完善的 ReadTheDocs 文档与可运行示例大幅降低工程落地门槛
