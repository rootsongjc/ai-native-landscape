---
name: Chitu
slug: chitu
homepage: https://qc-ai.cn
repo: https://github.com/thu-pacman/chitu
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
  - Model
description: 一个面向生产的大模型推理框架，提供高性能、多算力适配与可伸缩部署能力。
author: thu-pacman
ossDate: '2025-02-20T06:34:38Z'
featured: false
status: tracked
---
Chitu（赤兔）是由清华大学开发的大语言模型高性能推理框架，聚焦于效率、灵活性和可用性。它提供生产级、低延迟的 LLM 推理能力，覆盖从纯 CPU、单 GPU 到大规模分布式集群的部署场景，并兼容多种硬件供应商以满足企业级落地需求。

## 多元算力适配

- 针对 NVIDIA GPU 和多种国产 AI 加速器提供优化推理实现
- 支持合规或成本敏感场景下的混合硬件优化
- 量化及混合精度支持，涵盖 FP4、FP8 和 BF16 格式
- 可扩展的插件和适配器架构确保与多样化后端硬件的兼容性

## 可伸缩部署

- 从单节点异构 CPU/GPU 配置到完整分布式集群环境均能覆盖
- 流式和批处理优化，最大化生产服务场景的吞吐量
- 面向生产级稳定性的工程设计，支持长期并发运行
- 提供官方容器镜像和完整的企业级部署指南

## 性能工程

- 针对主流 LLM 调优的高性能算子实现
- 批量服务优化，实现高吞吐推理端点
- 开发指南和性能基准测试，辅助硬件选型和容量规划
- 兼容企业级问答系统、实时在线推理服务和批量模型服务
