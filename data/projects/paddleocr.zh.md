---
name: PaddleOCR
slug: paddleocr
homepage: https://www.paddleocr.ai
repo: https://github.com/paddlepaddle/paddleocr
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Application
  - Multimodal
description: PaddleOCR 是一个轻量且高性能的 OCR 工具包，支持 100+ 语言并可将图片或 PDF 转为结构化数据。
author: PaddlePaddle
ossDate: '2020-05-08T10:38:16.000Z'
featured: false
status: tracked
---

## 详细介绍

PaddleOCR 是由 PaddlePaddle 团队维护的开源 OCR 工具包，定位于工程化、可扩展的图像文字识别与文档结构化解决方案。它覆盖文本检测、识别、方向判断、版面分析与结构化信息提取等全流程能力，支持对图片与 PDF 的批量处理并能输出适合下游模型（例如 RAG/LLM）使用的结构化结果。项目兼顾准确率与推理效率，提供丰富的预训练模型与部署示例，适合服务器与边缘设备场景。PaddleOCR 同时注重工程落地，提供易于调用的 Python API、命令行工具与模型导出能力，方便与现有数据处理管道、搜索/检索系统或文档管理平台集成。社区活跃，文档与样例覆盖模型训练、微调到推理优化的各个环节，便于团队在生产环境中快速试验与迭代。

## 主要特性

- 多语种支持：覆盖 100+ 语言与多种字体样式。
- 全流程能力：文本检测、识别、方向分类、版面/表格分析与结构化输出。
- 工程友好：含预训练模型、示例代码、模型压缩与量化等部署工具。
- 高性能：针对 CPU/GPU/移动端做过优化，方便在边缘与云端部署。

## 使用场景

- 批量文档扫描与 OCR 流水线（发票、证件、合同）。
- PDF 内容抽取与结构化（用于知识检索、RAG 集成）。
- 图像文字识别与表格解析，作为下游文本理解与信息抽取的输入。
- 移动端或工业设备的实时文字识别场景。

## 技术特点

- 基于深度学习的检测与识别模型，支持多种模型结构与后处理策略。
- 提供模型库与模型压缩/量化工具，便于工程落地与性能调优。
- 开源许可为 Apache-2.0，社区活跃且有成熟的文档与示例。
