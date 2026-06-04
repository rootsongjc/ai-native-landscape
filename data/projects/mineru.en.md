---
name: MinerU
slug: mineru
homepage: https://mineru.net/
repo: https://github.com/opendatalab/mineru
license: Apache-2.0
category: rag-knowledge
subCategory: document-processing
tags:
  - Utility
description: >-
  MinerU is a high-precision PDF document parsing tool that converts complex PDFs into machine-readable Markdown and
  JSON formats, supporting formula, table, image extraction and multilingual OCR.
author: OpenDataLab
ossDate: '2024-02-29T08:52:34.000Z'
featured: true
status: tracked
---

## Overview

MinerU is an open-source PDF document parsing tool developed by Shanghai AI Laboratory, designed specifically for scientific literature and complex document processing. It can convert PDF documents into machine-readable formats (such as Markdown, JSON) with high precision while maintaining the original document structure and semantic integrity.

## Key Features

- **High-Precision Parsing** - Preserves document structure including titles, paragraphs, lists, ensuring semantic coherence
- **Multiple Output Formats** - Supports Markdown, JSON and other output formats for different application scenarios
- **Intelligent OCR Recognition** - Automatically detects scanned PDFs, supports text recognition in 84 languages
- **Formula and Table Processing** - Automatically recognizes and converts mathematical formulas to LaTeX, tables to HTML format
- **Multimodal Extraction** - Extracts images, image descriptions, table titles, footnotes and other multimedia content

## Use Cases

- **Academic Literature Processing** - Convert research papers into structured data for literature analysis and knowledge extraction
- **RAG System Construction** - Provide high-quality document data sources for large language models
- **Data Preprocessing** - Batch process PDF documents to prepare training data for machine learning models
- **Content Management Systems** - Digitize traditional PDF materials into searchable and editable formats

## Technical Features

- **Multi-Backend Support** - Provides multiple parsing backends including pipeline, vlm-transformers
- **Hardware Acceleration** - Supports GPU(CUDA), NPU(CANN), MPS and other hardware acceleration
- **Cross-Platform Compatibility** - Compatible with Windows, Linux and macOS operating systems
- **Visualization Verification** - Provides layout and span visualization for result quality inspection
- **Flexible Deployment** - Supports command line, API, WebUI and Docker deployment methods
