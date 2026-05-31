---
name: ONNX
slug: onnx
homepage: https://onnx.ai/
repo: https://github.com/onnx/onnx
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - Model
description: ONNX 是一个开放的模型交换格式与生态，旨在提高机器学习模型在框架、工具与硬件之间的互操作性。
logo: ''
author: ONNX
ossDate: '2017-09-07T04:53:45Z'
featured: false
status: tracked
---

## 详细介绍

ONNX（Open Neural Network Exchange）是一个开放的模型交换格式与生态，目标是提高机器学习模型在不同框架、工具与硬件之间的互操作性。ONNX 定义了可扩展的计算图中间表示（IR）、内置算子集合与标准数据类型，使深度学习与传统机器学习模型能够在训练框架与推理运行时之间无缝迁移。ONNX 在社区治理下发展，并提供教程、模型仓库与多种运行时支持，便于研究向生产的落地。

## 主要特性

- 统一模型表示：定义通用的中间表示与算子规范，降低框架间转换成本。
- 广泛的运行时生态：被多种推理引擎与硬件加速器支持，加速部署与推理性能优化。
- 版本与算子管理：通过 opset 与规范文档管理向后兼容与新增算子。
- 开放社区与工具链：提供模型库、教程与示例，便于迁移、测试与优化。

## 使用场景

ONNX 适用于模型互换、从研究原型到生产部署的迁移、跨框架验证以及利用专用运行时和硬件加速推理性能的场景。工程团队常用 ONNX 将训练框架导出的模型转换为在生产推理引擎上高效运行的格式，从而简化部署流程并提高可移植性。

## 技术特点

- 中间表示（IR）：基于可扩展的图结构表示计算流与数据类型。
- 算子规范：详尽的算子定义与语义，支持扩展与社区提案。
- Protobuf 格式：使用序列化协议存储模型文件，便于跨语言解析与传输。
- Opset 版本控制：通过 opset 管理算子兼容性，确保不同运行时能正确解释模型。
