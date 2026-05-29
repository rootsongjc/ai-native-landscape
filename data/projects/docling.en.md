---
name: Docling
slug: docling
homepage: https://docling-project.github.io/docling/
repo: https://github.com/docling-project/docling
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Utility
description: >-
  Docling: an open-source framework for document understanding and conversion, supporting PDFs, DOCX, images, audio and
  more.
logo: ''
author: Docling
ossDate: '2024-07-09T07:50:26.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

Docling is an open-source document parsing and understanding framework designed to convert heterogeneous documents (PDF, DOCX, PPTX, HTML, images, audio, etc.) into a unified, structured representation for downstream knowledge extraction, RAG (retrieval-augmented generation) and search index construction. It bundles OCR, layout analysis, table recognition and multi-format conversion, and supports local execution for privacy-sensitive or air-gapped environments.

## Key Features

- Unified parsing for many document formats (PDF, DOCX, PPTX, HTML, images, audio)
- Advanced PDF layout and table understanding, preserving reading order and structure
- Integrations with popular retrieval/agent frameworks (e.g. LangChain, LlamaIndex) for building RAG pipelines
- CLI and Python API for local and batch processing

## Use Cases

- Building document QA and knowledge base (RAG) pipelines by turning unstructured docs into retrievable chunks
- Extracting metadata and sections from academic papers or reports for literature reviews and indexing
- OCR and structure extraction for scanned documents in archives digitization workflows
- Converting complex reports and tables into structured data for downstream analysis

## Technical Highlights

- Python-first implementation, cross-platform (x86_64 and arm64), installable via pip
- Support for external VLMs (e.g. GraniteDocling) and ASR models to extend visual and audio capabilities
- Composable DoclingDocument representation exportable to Markdown, HTML and JSON
