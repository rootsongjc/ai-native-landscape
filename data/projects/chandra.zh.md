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

## 详细介绍

Chandra 是一个面向复杂文档的高精度 OCR 模型，能够将图片与 PDF 转换为带有布局信息的结构化 HTML、Markdown 或 JSON 输出，保留页眉页脚、表格、表单、数学公式与手写内容的位置信息。项目同时提供本地推理（基于 HuggingFace）与远程推理（vLLM server）两种模式，并提供命令行工具与交互式 Streamlit 演示，方便快速试用与批量处理。更多信息与在线试玩请见 [datalab.to](https://www.datalab.to) 与其 Playground 页面。

## 主要特性

- 将文档转换为 Markdown/HTML/JSON 并保留详细布局信息。
- 对手写、表单（含复选框）、复杂表格与数学公式具有良好支持。
- 支持 40+ 语言，提供本地（HuggingFace）与远程（vLLM）两种推理模式。
- 提供 CLI、Streamlit Web App 与 vLLM Docker 镜像，便于集成到流水线中。

## 使用场景

适用于需要高质量文档数字化与结构化抽取的场景：法律与合同文档处理、发票与表单自动化、教育类试卷与手写笔记数字化、报纸与书籍的批量 OCR 以及需要保持排版与语义关系的归档场景。对于希望在本地或私有云部署并控制数据流的企业尤为合适。

## 技术特点

项目以 Python 为主实现，结合最新的视觉与布局建模技术，并使用 vLLM 作为可选的高吞吐远程推理后端。仓库提供安装包 `chandra-ocr`、示例数据与基准评测，采用 Apache-2.0 许可并在官网提供商业许可与定价说明。
