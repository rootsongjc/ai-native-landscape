---
name: MinerU
slug: mineru
homepage: https://mineru.net/
repo: https://github.com/opendatalab/mineru
license: Unknown
category: rag-knowledge
subCategory: document-processing
tags:
  - Utility
description: MinerU 是一个高精度的 PDF 文档解析工具，能将复杂 PDF 转换为机器可读的 Markdown 和 JSON 格式，支持公式、表格、图片提取和多语言 OCR。
logo: ''
author: OpenDataLab
ossDate: '2024-02-29T08:52:34.000Z'
featured: true
status: tracked
---

## 简介

MinerU 是由上海人工智能实验室开发的开源 PDF 文档解析工具，专为科学文献和复杂文档处理而设计。它能够高精度地将 PDF 文档转换为机器可读的格式（如 Markdown、JSON），并保持文档的原始结构和语义完整性。

## 主要特性

- **高精度解析** - 保留文档结构包括标题、段落、列表等，确保语义连贯性
- **多格式输出** - 支持 Markdown、JSON 等多种输出格式，适配不同应用场景
- **智能 OCR 识别** - 自动检测扫描版 PDF，支持 84 种语言的文本识别
- **公式表格处理** - 自动识别并转换数学公式为 LaTeX，表格转换为 HTML 格式
- **多模态提取** - 提取图像、图片描述、表格标题和脚注等多媒体内容

## 使用场景

- **学术文献处理** - 将研究论文转换为结构化数据用于文献分析和知识提取
- **RAG 系统构建** - 为大语言模型提供高质量的文档数据源
- **数据预处理** - 批量处理 PDF 文档为机器学习模型准备训练数据
- **内容管理系统** - 将传统 PDF 资料数字化为可检索和编辑的格式

## 技术特点

- **多后端支持** - 提供 pipeline、vlm-transformers 等多种解析后端
- **硬件加速** - 支持 GPU(CUDA)、NPU(CANN)、MPS 等硬件加速
- **跨平台兼容** - 兼容 Windows、Linux 和 macOS 操作系统
- **可视化验证** - 提供布局和跨度可视化功能便于结果质量检查
- **灵活部署** - 支持命令行、API、WebUI 和 Docker 多种部署方式
