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

## 简介

PyMuPDF 是一个基于轻量级 MuPDF 引擎构建的高性能 Python 库，用于 PDF 及其他文档格式的数据提取、分析、转换和操作。它仅需 CPU 资源即可实现比同类工具快 10 倍的文档解析速度，是生产级文档处理管道的首选方案。

## 主要特性

- 支持 PDF、XPS、EPUB、MOBI、FB2 等多种文档格式，提供高效的文本和图像提取能力。
- 完整的 PDF 操作功能，包括页面合并、分割、旋转、水印添加、表单填写和数字签名。
- 内置 OCR 能力，无需外部依赖即可从图像和扫描文档中提取文字。
- 字体子集化优化 PDF 文件大小，并支持将文档转换为图像或 HTML 格式输出。

## 使用场景

PyMuPDF 广泛应用于发票解析、合同审查、学术论文分析等需要从 PDF 中提取结构化数据的场景。在 RAG（检索增强生成）应用中，它可将 PDF 文档转换为 LLM 友好的格式，并与 LangChain、Llamaparse 等框架无缝集成。它还适用于批量文档处理、电子书转换、表单自动填写等高吞吐量的生产环境。

## 技术特点

该库提供纯 Python 接口，底层基于 MuPDF C 引擎直接解析 PDF 内部结构，而非依赖视觉模型，在速度和准确性上具有显著优势。支持 Python 3.10+ 版本，提供 AGPL-3.0 开源许可和商业许可两种选择。Pro 版本扩展支持 Office 文档格式（DOC、DOCX、PPT、PPTX、XLS、XLSX）及韩文文档（HWP、HWPX），内置 PyMuPDF Layout 模块提供企业级文档结构提取能力。其架构设计支持高并发处理，适用于大规模文档处理任务。
