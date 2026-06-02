---
name: Chandra
slug: chandra
homepage: https://www.datalab.to
repo: https://github.com/datalab-to/chandra
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Application
  - Model
  - Multimodal
description: Chandra 是一个高精度 OCR 模型，能将图片与 PDF 转为带布局信息的结构化输出。
logo: ''
author: Datalab
ossDate: '2025-10-08T21:34:16Z'
featured: false
status: tracked
---

## 简介

Chandra 是一款高精度 OCR 模型，能够处理复杂表格、表单、手写内容及完整版面识别。它可将图片和 PDF 转换为结构化的 HTML、Markdown 或 JSON 输出，同时保留页眉页脚、表格、复选框和数学公式等版面信息，适用于最具挑战性的文档数字化任务。

## 主要特性

将文档转换为 Markdown、HTML 或 JSON 并完整保留详细的版面布局元数据。对手写内容识别、包含复选框的复杂表单、精密表格结构和数学公式具有出色支持。支持 40 余种语言，提供基于 HuggingFace 的本地推理和基于 vLLM 服务器的远程推理两种模式。附带 CLI 命令行工具、交互式 Streamlit 演示和 vLLM Docker 镜像，便于生产环境部署。

## 使用场景

面向法律合同、发票和复杂表单的高质量文档数字化与结构化抽取。对需要保留版面和语义关系的手写笔记、试卷和档案材料进行数字化。适用于需要在本地或私有云部署 OCR 并对敏感文档拥有完整数据控制能力的企业和组织。

## 技术特点

以 Python 为主实现，结合现代视觉与版面建模技术实现高精度识别。提供示例数据集、基准评测以及通过 `chandra-ocr` CLI 分发的安装包。采用 Apache-2.0 许可证发布，官网提供商业许可和托管 API 选项。
