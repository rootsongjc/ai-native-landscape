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

## Detailed Introduction

Chandra is a high‑accuracy OCR system designed for complex documents. It converts images and PDFs into structured HTML, Markdown, or JSON while preserving layout information such as headers/footers, tables, forms (including checkboxes), handwritten content, and math. Chandra supports both local inference (via HuggingFace) and remote inference using a vLLM server, and ships with a CLI and an interactive Streamlit demo. See the project website and playground for live demos and hosted API details.

## Main Features

- Converts documents to Markdown/HTML/JSON with detailed layout metadata.
- Strong support for handwriting, forms, complex tables, and mathematical content.
- Supports 40+ languages and two inference modes: local (HuggingFace) and remote (vLLM).
- Provides a CLI package (`chandra-ocr`), Streamlit app, and a vLLM Docker image for production deployments.

## Use Cases

Suitable for high‑quality document digitization and structured extraction tasks: legal and contract processing, invoice and form automation, digitizing handwritten notes and exams, newspaper and book digitization, and archival workflows that require preserving layout and semantic relationships. Well suited for organizations that need local or private‑cloud deployments and data control.

## Technical Features

The project is implemented primarily in Python and leverages modern vision and layout modeling techniques. It offers example datasets, benchmarks, and packaged distributions (`chandra-ocr`). Chandra is released under the Apache‑2.0 license; commercial licensing and pricing information are available on the website.
