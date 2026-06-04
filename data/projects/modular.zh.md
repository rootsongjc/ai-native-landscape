---
name: Modular Platform
slug: modular
homepage: https://www.modular.com/
repo: https://github.com/modular/modular
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - ML Platform
  - Product
description: 面向生产的开放式 AI 平台，包含 MAX 推理服务器与 Mojo 库，用于加速模型部署与跨硬件运行。
author: Modular
ossDate: '2023-04-28T22:17:24.000Z'
featured: false
status: tracked
---

## 简介

Modular Platform 汇集了 MAX 推理服务器、Mojo 标准库和丰富的模型与内核实现，旨在简化模型从开发到生产的全流程。平台提供生产级容器镜像、示例和详尽文档，帮助在多种硬件上实现高性能推理。

## 主要特性

- MAX 推理：OpenAI 兼容的推理层，支持多种模型与运行时配置。
- Mojo 与高性能内核：提供 Mojo 标准库与高效的 GPU/CPU 内核实现。
- 工具链与部署：包含容器镜像、Helm/部署示例与 CI 支持以便生产化交付。

## 使用场景

- 在数据中心或云环境中部署低延迟、高吞吐的推理服务。
- 构建跨硬件（GPU/CPU/加速卡）可移植的模型推理流水线。
- 作为工业级参考实现，用于性能调优与内核开发。

## 技术特点

- 包含大规模代码基与多语言实现（Mojo、Python 等），面向高性能计算场景。
- 提供容器化部署方案和丰富的示例以降低生产化门槛。
- 使用 Bazel/CI 流程管理构建与测试，适合大规模协作与贡献。
