---
name: olmOCR
slug: olmocr
homepage: https://olmocr.allenai.org/
repo: https://github.com/allenai/olmocr
license: Apache-2.0
category: models-modalities
subCategory: multimodal
tags:
  - Multimodal
  - Tool
description: 用于将 PDF 与图像化文档线性化为可读纯文本和 Markdown 的工具包，面向 LLM 数据集构建与大规模文档处理。
author: Allen Institute for AI (AI2)
ossDate: '2024-09-17T14:53:40.000Z'
featured: false
status: tracked
---

## 简介

olmOCR 是由 Allen Institute for AI 开发的文档线性化工具包，专为将 PDF、PNG、JPEG 等图像化文档转换为结构化纯文本或 Markdown 而设计。它面向大规模 LLM 数据集构建与工业化文档处理，能够在保留方程、表格与版式信息的同时，生成自然阅读顺序的文本输出。

## 主要特性

- 支持多种输入格式（PDF、图片），并能识别表格、方程与手写内容。
- 自动去除页眉页脚、恢复自然阅读顺序，生成 Markdown 输出便于后续处理。
- 提供基准套件（olmOCR-Bench）和 Docker 化部署，便于评估与规模化运行。

## 使用场景

- 将学术论文与报告转为 LLM 训练或检索用的语料集。
- 大规模批量转换机构/公司档案与合规文件以便检索与归档。
- 在数据标注与质量评估流程中作为预处理与基线系统使用。

## 技术特点

- 基于 VLM 的解码与后处理管线，支持 vLLM/SGLang 等推理后端。
- 支持多节点、S3 协调的流水线以处理百万级 PDF 工作负载。
- 提供可复现的训练与微调代码、合成数据生成和性能基准工具。
