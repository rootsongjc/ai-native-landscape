---
name: Colossal-AI
slug: colossalai
homepage: https://www.colossalai.org/
repo: https://github.com/hpcaitech/colossalai
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Dev Tools
description: 面向大规模并行训练与推理的系统，提供多种并行策略、内存管理与高性能推理组件，旨在让大模型训练与推理更高效、可复现。
logo: ''
author: HPC-AI Tech / ColossalAI
ossDate: '2021-10-28T16:19:44.000Z'
featured: false
status: tracked
---

## 简介

Colossal-AI 是一个开源的大规模分布式训练与推理框架，致力于让大型 AI 模型更廉价、更快速、更易获取。它提供多种并行策略和异构内存管理能力，有效降低大模型训练与部署的资源成本。

## 主要特性

Colossal-AI 支持数据并行、张量并行（1D/2D/2.5D/3D）、流水线并行和序列并行等多种并行策略，实现灵活的模型扩展。它提供异构内存管理以降低 GPU 显存占用，并内置 Colossal-Inference 组件加速模型推理、减少内存使用。

## 使用场景

Colossal-AI 适用于 LLM、Transformer、MoE 等大规模模型的分布式训练与微调场景。它同样适用于高吞吐量的生产推理部署，以及作为并行策略与性能优化的教学与研究平台。

## 技术特点

基于 PyTorch 构建，Colossal-AI 提供优化器、调度器和自动并行化工具，显著降低分布式编程门槛。项目包含从单机到多机的丰富示例、Docker/云平台集成以及活跃的社区生态，便于快速上手与生产部署。
