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
author: Spice.ai
ossDate: '2021-08-08T23:26:13Z'
featured: false
status: tracked
---

Spice.ai 是一个用 Rust 编写的开源数据和 AI 引擎，在单一可移植运行时中提供加速 SQL 查询、全文检索和 LLM 推理能力。它旨在将数据驱动的机器学习和检索增强生成以极低延迟直接嵌入生产应用。

## 主要特性

- 高速 SQL 查询加速和时序特征处理，从原始数据源构建实时数据特征
- 集成 LLM 推理，支持数据驱动的生成和检索增强工作流
- 可移植、低延迟的运行时，可部署在云端、容器化和边缘环境中
- 混合检索与重排序能力，提供高质量搜索结果
- 开发者友好的 SDK 和工具链，实现快速集成

## 使用场景

- 监控告警系统中的实时决策层
- 靠近数据源的预测性维护和异常检测
- 需要亚秒级推理延迟的个性化推荐引擎
- 对延迟要求严格的金融风险检测和欺诈预防
- 需要数据与模型推理共置的检索增强生成工作流

## 技术特点

- 以 Rust 为核心构建，确保高吞吐和内存安全
- 插件化推理后端，支持多种模型提供商
- 附带面向生产的部署文档和容器镜像
- 以 Apache-2.0 许可证发布，便于广泛的工业级采用
