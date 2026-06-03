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
description: Chandra is a high‑accuracy OCR model that converts images and PDFs into structured outputs with layout information.
author: Datalab
ossDate: '2025-10-08T21:34:16Z'
featured: false
status: tracked
---
Chandra is a high-accuracy OCR model that handles complex tables, forms, handwriting, and full layout recognition. It converts images and PDFs into structured HTML, Markdown, or JSON outputs while preserving layout information such as headers, footers, tables, checkboxes, and mathematical notation, making it suitable for the most demanding document digitization tasks.

## Document Conversion Capabilities

- Converts documents to Markdown, HTML, or JSON with detailed layout metadata preserved
- Strong support for complex forms with checkboxes and intricate table structures
- Handles mathematical notation, headers, footers, and full-page layout recognition
- Preserves semantic relationships between document elements during conversion

## Recognition Strengths

- High-accuracy handwriting recognition for notes, exams, and archival materials
- Supports 40+ languages with both local inference via HuggingFace and remote inference using a vLLM server
- Robust performance on legal contracts, invoices, and forms with complex layouts
- Suitable for the most demanding document digitization tasks

## Deployment Options

- CLI package via `chandra-ocr` for scripted and batch processing workflows
- Interactive Streamlit demo for quick evaluation and testing
- vLLM Docker image for production-grade remote inference deployments
- Apache-2.0 license with commercial licensing and hosted API options available through the project website
