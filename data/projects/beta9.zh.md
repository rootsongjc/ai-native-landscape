---
name: Beta9
slug: beta9
homepage: https://beam.cloud/
repo: https://github.com/beam-cloud/beta9
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Dev Tools
description: 面向大规模 AI 工作负载的开源无服务器推理引擎，支持快速容器启动与 GPU 支持。
logo: ''
author: Beam
ossDate: '2023-11-15T00:53:21.000Z'
featured: false
status: tracked
---

## 简介

Beta9 是 Beam 项目的开源引擎，提供超快的无服务器 GPU 推理、沙盒与后台任务能力，支持并发扩展、快速镜像启动与异构硬件。该项目既可自托管，也作为 Beam 云平台的底层运行时使用，适合生产与研究场景。

## 主要特性

- 无服务器推理：默认支持 scale-to-zero 的无服务器部署与自动伸缩。
- 快速容器：自研容器运行时实现亚秒级启动，适合低延迟任务。
- GPU 与异构硬件支持：可在多种 GPU/TPU 环境中运行，并提供并行化与调度策略。

## 使用场景

- 面向在线推理的低延迟模型服务与智能代理。
- 大规模并行任务（如批量微调、数据处理与推理管线）。
- 将本地或私有集群与 Beam 云集成以获得托管选项和工具链支持。

## 技术特点

- 使用 Go 以及 Python SDK 进行开发，提供简洁的开发者体验与 API。
- 通过 Bazel/Makefile 管理构建与部署，拥有丰富的示例与文档（<https://docs.beam.cloud/>）。
- 采用分布式调度与高并发设计，支持持久化卷与任务队列。
