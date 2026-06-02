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
description: Chandra is a high‑accuracy OCR model that converts images and PDFs into structured outputs with layout information.
logo: ''
author: Datalab
ossDate: '2025-10-08T21:34:16Z'
featured: false
status: tracked
---

## Overview

Chandra is a high-accuracy OCR model that handles complex tables, forms, handwriting, and full layout recognition. It converts images and PDFs into structured HTML, Markdown, or JSON outputs while preserving layout information such as headers, footers, tables, checkboxes, and mathematical notation, making it suitable for the most demanding document digitization tasks.

## Key Features

Converts documents to Markdown, HTML, or JSON with detailed layout metadata preserved. Strong support for handwriting recognition, complex forms with checkboxes, intricate table structures, and mathematical content. Supports 40+ languages with both local inference via HuggingFace and remote inference using a vLLM server. Ships with a CLI package, interactive Streamlit demo, and vLLM Docker image for production deployments.

## Use Cases

High-quality document digitization and structured extraction for legal contracts, invoices, and forms with complex layouts. Digitizing handwritten notes, exams, and archival materials that require preserving layout and semantic relationships. Organizations needing local or private-cloud OCR deployments with full data control over sensitive documents.

## Technical Details

Implemented primarily in Python leveraging modern vision and layout modeling techniques for high-accuracy recognition. Provides example datasets, benchmarks, and packaged distributions via the `chandra-ocr` CLI. Released under the Apache-2.0 license with commercial licensing and hosted API options available through the project website.
