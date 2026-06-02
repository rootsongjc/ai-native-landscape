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
status: tracked
---

## 简介

Spice.ai 是一个用 Rust 编写的开源数据和 AI 引擎，在单一可移植运行时中提供加速 SQL 查询、全文检索和 LLM 推理能力。它旨在将数据驱动的机器学习和检索增强生成以极低延迟直接嵌入生产应用。

## 主要特性

Spice.ai 提供高速 SQL 查询加速和时序特征处理，用于从原始数据源构建实时数据特征，同时集成 LLM 推理支持数据驱动的生成和检索增强工作流。其可移植、低延迟的运行时可部署在云端、容器化和边缘环境中，配合开发者友好的 SDK 和工具链实现快速集成。

## 使用场景

工程团队将 Spice.ai 部署为实时决策层，应用于监控告警系统、预测性维护、个性化推荐和金融风险检测等场景。当模型推理需要在靠近数据源的位置运行以满足严格延迟要求时，Spice.ai 尤为有效。

## 技术特点

引擎以 Rust 为核心构建，确保高吞吐和内存安全，具备混合检索与重排序能力以及支持多种模型提供商的插件化推理后端。它附带面向生产的部署文档和容器镜像，以 Apache-2.0 许可证发布，便于广泛的工业级采用。
