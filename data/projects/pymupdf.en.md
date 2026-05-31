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
description: >-
  A high-performance Python library for data extraction, analysis, conversion, and manipulation of PDF and other
  documents.
logo: ''
author: Artifex
ossDate: '2012-10-06T18:54:25Z'
featured: false
status: tracked
---

## Detailed Introduction

PyMuPDF is a powerful Python library built on the lightweight MuPDF engine, designed for efficient processing of various document formats including PDF, XPS, and eBooks. Maintained and developed by Artifex Software, the library provides comprehensive document processing capabilities, including text extraction, image manipulation, page operations, and annotation management. PyMuPDF excels in performance, delivering 10× faster document parsing than comparable tools, requiring only CPU resources without GPU dependencies for high-speed document parsing and layout analysis.

## Main Features

PyMuPDF supports multiple document formats including PDF, XPS, EPUB, MOBI, and FB2, enabling efficient text and image extraction. It provides complete PDF manipulation capabilities such as page merging, splitting, rotation, and watermark addition, while supporting form filling and digital signature functionality. The library integrates OCR (Optical Character Recognition) capabilities to extract text from images and scanned documents. Additionally, PyMuPDF offers font subsetting features to optimize PDF file sizes and supports document conversion to image or HTML formats.

## Use Cases

PyMuPDF is widely used in document automation, data extraction, and analysis scenarios. It's ideal for extracting structured data from PDFs, such as invoice parsing, contract review, and academic paper analysis. In RAG (Retrieval-Augmented Generation) applications, PyMuPDF converts PDF documents into formats suitable for LLM (Large Language Model) processing, seamlessly integrating with frameworks like LangChain and Llamaparse. It's also suitable for batch document processing, eBook conversion, automated form filling, and other tasks, particularly in production environments requiring high performance and low resource consumption.

## Technical Features

PyMuPDF provides a pure Python interface, making it easy to integrate into existing projects without complex dependency configurations. Built on the MuPDF engine, it directly parses PDF internal structures rather than relying on vision models, offering significant advantages in speed and accuracy. The library supports Python 3.10 and above, available under both AGPL-3.0 open-source and commercial licenses. The advanced version (PyMuPDF Pro) supports Office document formats (DOC, DOCX, PPT, PPTX, XLS, XLSX) and Korean documents (HWP, HWPX), with built-in PyMuPDF Layout module providing enterprise-grade document structure extraction. Its architecture supports high concurrency processing, suitable for large-scale document processing tasks.
