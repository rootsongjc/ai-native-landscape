---
name: olmOCR
slug: olmocr
homepage: https://olmocr.allenai.org/
repo: https://github.com/allenai/olmocr
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Multimodal
  - Tool
description: >-
  A toolkit for linearizing PDFs and image-based documents into readable plain text and Markdown, aimed at LLM dataset
  creation and large-scale document processing.
author: Allen Institute for AI (AI2)
ossDate: '2024-09-17T14:53:40.000Z'
featured: false
status: tracked
---

## Introduction

olmOCR is a toolkit developed by the Allen Institute for AI to linearize PDFs and image-based documents into structured plain text or Markdown. It targets LLM dataset creation and industrial-scale document processing, preserving equations, tables and layout while producing natural reading-order text suitable for downstream use.

## Key features

- Support for multiple input formats (PDF, PNG, JPEG) with recognition for tables, equations and handwriting.
- Automatic header/footer removal and reading-order reconstruction, with Markdown output for easy tooling integration.
- Benchmark suite (olmOCR-Bench) and Docker images to evaluate performance and scale deployments.

## Use cases

- Converting academic papers and reports into corpora for LLM training or retrieval.
- Batch-processing institutional archives and compliance documents for indexing and archival.
- Preprocessing and baseline generation in data annotation and quality evaluation workflows.

## Technical highlights

- Vision-language model based decoding with vLLM/SGLang inference backends.
- Multi-node, S3-coordinated pipelines to process millions of PDFs at scale.
- Reproducible training/finetuning code, synthetic data generation, and benchmark tooling.
