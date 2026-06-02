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
status: tracked
---

## 简介

Chitu（赤兔）是由清华大学开发的大语言模型高性能推理框架，聚焦于效率、灵活性和可用性。它提供生产级、低延迟的 LLM 推理能力，覆盖从纯 CPU、单 GPU 到大规模分布式集群的部署场景，并兼容多种硬件供应商以满足企业级落地需求。

## 主要特性

多元算力适配，针对 NVIDIA GPU 和多种国产 AI 加速器提供优化推理实现。可伸缩部署架构，从单节点异构 CPU/GPU 配置到完整分布式集群环境均能覆盖。面向生产级稳定性的工程设计，支持长期并发运行，并提供完整的容器镜像、开发指南和性能基准测试工具链。

## 使用场景

企业级问答系统、实时在线推理服务和批量模型服务的本地化或边缘 LLM 推理部署。需要国产加速器支持或混合硬件优化的合规或成本敏感场景。需要稳定高吞吐推理和灵活硬件配置的大规模生产部署。

## 技术特点

结合高性能算子实现与量化及混合精度支持，涵盖 FP4、FP8 和 BF16 格式。流式和批处理优化，最大化生产服务场景的吞吐量。可扩展的插件和适配器架构确保与主流 LLM 和多样化后端硬件的兼容性。
