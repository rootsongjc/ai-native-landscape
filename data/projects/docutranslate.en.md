---
name: DocuTranslate
slug: docutranslate
homepage: https://pypi.org/project/docutranslate/
repo: https://github.com/xunbu/docutranslate
license: MPL-2.0
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: DocuTranslate is a lightweight document translation tool leveraging LLMs and multiple parsing engines.
author: xunbu
ossDate: '2025-05-08T08:16:40Z'
featured: false
status: tracked
---
## Overview

DocuTranslate is a lightweight document translation tool that leverages LLMs and multiple parsing engines to translate PDF, Word, Excel, JSON, EPUB, and SRT formats. It provides an end-to-end pipeline from file parsing and semantic translation to export, suitable for novels, theses, and subtitles.

## Key Features

- Multi-format support for PDF, DOCX, XLSX, Markdown, JSON, EPUB, and SRT with table and formula preservation.
- Choice of online `minerU` or local `docling` parsing engines for flexible deployment.
- Workflow-driven pipeline mapping file types to converter, translator, and exporter stages with a built-in Web UI and REST API.

## Use Cases

- Translating academic papers, technical documentation, novels, and subtitle files.
- Team deployments for batch file conversion and translation into Markdown or HTML for publishing.
- Individual users leveraging released packages or the demo for quick one-off translations.

## Technical Details

- Multi-provider compatibility with OpenAI, Zhipu, Qwen, and other LLM providers.
- Async and concurrent translation design for high throughput on large document sets.
- Local-first deployment via Docker or standalone packages with caching to reduce repeated parsing overhead.
