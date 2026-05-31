---
name: PyMuPDF
slug: pymupdf
homepage: https://pymupdf.io
repo: https://github.com/pymupdf/pymupdf
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
  - PDF
  - Python
description: 一个高性能的 Python 库，用于 PDF 及其他文档的数据提取、分析、转换和操作。
logo: ''
author: Artifex
ossDate: '2012-10-06T18:54:25Z'
featured: false
status: tracked
---

## 详细介绍

PyMuPDF 是一个强大的 Python 库，基于轻量级的 MuPDF 引擎构建，专为高效处理 PDF、XPS 和电子书等多种文档格式而设计。该库由 Artifex Software 公司维护和开发，提供了丰富的文档处理功能，包括文本提取、图像处理、页面操作、注释添加等。PyMuPDF 在性能上表现卓越，比同类工具快 10 倍，且无需 GPU 支持，仅依靠 CPU 即可实现高速文档解析和布局分析。

## 主要特性

PyMuPDF 支持多种文档格式，包括 PDF、XPS、EPUB、MOBI、FB2 等，能够实现文本和图像的高效提取。它提供了完整的 PDF 操作能力，如页面合并、分割、旋转、添加水印等，同时支持表单填写和数字签名功能。该库还集成了 OCR（光学字符识别）能力，可以从图像和扫描文档中提取文字。此外，PyMuPDF 提供了字体子集化功能，帮助优化 PDF 文件大小，并支持将文档转换为图像或 HTML 格式。

## 使用场景

PyMuPDF 广泛应用于文档自动化处理、数据提取和分析领域。它适用于需要从 PDF 中提取结构化数据的场景，如发票解析、合同审查、学术论文分析等。在 RAG（检索增强生成）应用中，PyMuPDF 可以将 PDF 文档转换为适合 LLM（大语言模型）处理的格式，支持与 LangChain、Llamaparse 等框架的无缝集成。此外，它还适用于批量文档处理、电子书转换、表单自动化填写等任务，尤其适合需要高性能和低资源消耗的生产环境。

## 技术特点

PyMuPDF 采用纯 Python 接口，易于集成到现有项目中，无需复杂的依赖配置。它基于 MuPDF 引擎，直接解析 PDF 内部结构，而非依赖视觉模型，因此在速度和准确性上具有显著优势。该库支持 Python 3.10 及以上版本，提供了 AGPL-3.0 开源许可和商业许可两种选择。PyMuPDF 的高级版本（PyMuPDF Pro）还支持 Office 文档格式（DOC、DOCX、PPT、PPTX、XLS、XLSX）以及韩文文档（HWP、HWPX），并内置 PyMuPDF Layout 模块，提供企业级的文档结构提取能力。其架构设计支持高并发处理，适用于大规模文档处理任务。
