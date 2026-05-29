---
name: Spice.ai
slug: spiceai
homepage: https://docs.spiceai.org
repo: https://github.com/spiceai/spiceai
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Application
  - Data
  - Dev Tools
  - Inference
  - LLM
description: 一个面向时序数据与应用集成的开源加速引擎，提供 SQL 查询、全文检索与 LLM 推理能力。
logo: ''
author: Spice.ai
ossDate: '2021-08-08T23:26:13Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Spice.ai 是一个面向时序与结构化数据的开源加速引擎，旨在将数据驱动的机器学习与推理能力嵌入到生产应用中。项目以 Rust 实现，提供快速的 SQL 风格查询、全文检索与 LLM 推理集成，支持低延迟在线推理与可移植部署。官方文档详见 [docs.spiceai.org](https://docs.spiceai.org)。

## 主要特性

- 加速的 SQL 查询与时序特征处理，便于从原始数据构建实时特征。
- 与 LLM 的推理集成，支持基于数据的上下文化生成与检索增强推理。
- 可移植且低延迟的运行时，适合云端、容器化与边缘部署。
- 面向开发者的工具链与 SDK，便于在应用中快速集成与实验。

## 使用场景

适合需要将时序 ML 嵌入应用的场景：实时监控与告警、预测性维护、个性化推荐、金融风控与业务指标预测等。工程团队可以把 Spice.ai 作为数据到决策的实时层，将模型推理直接接入业务流。

## 技术特点

项目以 Rust 为核心实现，注重性能与稳定性，包含混合检索与重排序能力、插件化的推理后端适配（支持多种模型服务）以及面向生产的部署文档和镜像。开源许可为 Apache-2.0，便于工业级采用。
