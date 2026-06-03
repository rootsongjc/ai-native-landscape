---
name: Chandra
slug: chandra
homepage: https://www.datalab.to
repo: https://github.com/datalab-to/chandra
license: Apache-2.0
category: models-modalities
subCategory: multimodal
tags:
  - Application
  - Model
  - Multimodal
description: Chandra 是一个高精度 OCR 模型，能将图片与 PDF 转为带布局信息的结构化输出。
author: Datalab
ossDate: '2025-10-08T21:34:16Z'
featured: false
status: tracked
---
Chandra 是一款高精度 OCR 模型，能够处理复杂表格、表单、手写内容及完整版面识别。它可将图片和 PDF 转换为结构化的 HTML、Markdown 或 JSON 输出，同时保留页眉页脚、表格、复选框和数学公式等版面信息，适用于最具挑战性的文档数字化任务。

## 文档转换能力

- 将文档转换为 Markdown、HTML 或 JSON 并完整保留详细的版面布局元数据
- 对包含复选框的复杂表单和精密表格结构具有出色支持
- 处理数学公式、页眉页脚和整页版面识别
- 在转换过程中保留文档元素之间的语义关系

## 识别优势

- 对手写笔记、试卷和档案材料的高精度手写内容识别
- 支持 40 余种语言，提供基于 HuggingFace 的本地推理和基于 vLLM 服务器的远程推理两种模式
- 在法律合同、发票和复杂表单等高难度场景中表现稳健
- 适用于最具挑战性的文档数字化任务

## 部署方式

- 通过 `chandra-ocr` CLI 提供脚本化与批处理工作流
- 交互式 Streamlit 演示用于快速评估和测试
- vLLM Docker 镜像支持生产级远程推理部署
- 采用 Apache-2.0 许可证发布，官网提供商业许可和托管 API 选项
