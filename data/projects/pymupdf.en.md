---
name: PyMuPDF
slug: pymupdf
homepage: https://pymupdf.io
repo: https://github.com/pymupdf/pymupdf
license: AGPL-3.0
category: rag-knowledge
subCategory: document-processing
tags:
  - Data
  - Dev Tools
  - PDF
  - Python
description: >-
  A high-performance Python library for data extraction, analysis, conversion, and manipulation of PDF and other
  documents.
author: Artifex
ossDate: '2012-10-06T18:54:25Z'
featured: false
status: tracked
---

## Overview

PyMuPDF is a high-performance Python library built on the lightweight MuPDF engine for extracting, analyzing, converting, and manipulating PDF and other document formats. It delivers up to 10x faster document parsing than comparable tools using only CPU resources, making it a go-to choice for production-grade document processing pipelines.

## Key Features

- Multi-format support covering PDF, XPS, EPUB, MOBI, and FB2 with efficient text and image extraction.
- Complete PDF manipulation including page merging, splitting, rotation, watermarking, form filling, and digital signatures.
- Built-in OCR capabilities for extracting text from images and scanned documents without external dependencies.
- Font subsetting for PDF size optimization and conversion to image or HTML output formats.

## Use Cases

PyMuPDF is widely used for extracting structured data from PDFs in invoice parsing, contract review, and academic paper analysis workflows. In RAG (Retrieval-Augmented Generation) applications, it converts PDF documents into LLM-friendly formats and integrates seamlessly with frameworks like LangChain and Llamaparse. It also handles batch document processing, eBook conversion, and automated form filling in high-throughput production environments.

## Technical Details

The library provides a pure Python interface built on the MuPDF C engine, which directly parses PDF internal structures rather than relying on vision models for superior speed and accuracy. It supports Python 3.10+ and is available under AGPL-3.0 or commercial licenses. The Pro edition extends support to Office formats (DOC, DOCX, PPT, PPTX, XLS, XLSX) and Korean documents (HWP, HWPX), with the PyMuPDF Layout module delivering enterprise-grade structure extraction. Its architecture supports high-concurrency processing for large-scale document workloads.
