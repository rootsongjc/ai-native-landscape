---
name: DocuTranslate
slug: docutranslate
homepage: https://pypi.org/project/docutranslate/
repo: https://github.com/xunbu/docutranslate
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: DocuTranslate is a lightweight document translation tool leveraging LLMs and multiple parsing engines.
logo: ''
author: xunbu
ossDate: '2025-05-08T08:16:40Z'
featured: false
status: tracked
---

## Detailed Introduction

DocuTranslate is a lightweight tool for translating various document formats using large language models (LLMs) and multiple parsing engines. It provides an end-to-end pipeline from file parsing and semantic translation to exporting results. Supported formats include PDF, DOCX, XLSX, JSON, EPUB, and SRT. For PDF parsing it offers an online `minerU` engine and an optional local `docling` engine for offline scenarios.

## Main Features

- Multi-format support: pdf, docx, xlsx, md, json, epub, srt, with table and formula preservation.
- Parsing engines: choose online `minerU` for quick use or local `docling` for privacy/offline needs.
- Workflow-driven: configurable Workflows map file types to converter → translator → exporter pipelines.
- Web UI & API: interactive web interface and REST API for easy local deployment and integration.

## Use Cases

Suitable for translating academic papers, technical docs, novels, and subtitles. Teams can deploy locally to batch-convert and translate files into Markdown/HTML for publishing; individual users can use released packages or the demo to try features quickly.

## Technical Features

- Multi-provider compatibility: integrates with OpenAI, Zhipu, Qwen and other providers for translation.
- Async & concurrent: designed for asynchronous translation with concurrency for high throughput.
- Flexible exporters: output to HTML, Markdown, ZIP, DOCX for downstream editing and publishing.
- Local-first options: Docker and standalone packages, plus caching to reduce repeated parsing.
