---
name: LangExtract
slug: langextract
homepage: null
repo: https://github.com/google/langextract
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - Framework
  - LLM
description: >-
  A Python library that uses LLMs to extract structured information from unstructured text and provides interactive
  visualization for review.
logo: ''
author: Google
ossDate: '2025-07-08T20:46:06.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

LangExtract is a Python library from Google that leverages large language models (LLMs) to extract structured data from unstructured text. It supports precise source grounding and an interactive HTML visualization for reviewing extraction results, making it well suited for long-form documents in domains such as healthcare, legal, and document understanding.

## Key Features

- Precise source grounding: each extraction links back to the exact location in the source text for easy verification and visualization.
- Example-driven extraction tasks: define complex extraction schemas with a few high-quality examples.
- Multi-backend support: works with cloud models like Gemini and OpenAI and supports local inference via Ollama.
- Optimized for long documents: chunking, parallel processing, and multiple extraction passes improve recall.

## Use Cases

- Structuring clinical text such as medical notes and medication extraction.
- Extracting clauses and entities from legal documents and contracts.
- Bulk extraction of entities and relations from large archives or books.
- Preprocessing for RAG pipelines and data-labeling verification.

## Technical Characteristics

- Prompt- and example-based extraction with multi-pass strategies to improve robustness.
- Produces strongly-typed outputs consumable by downstream systems (JSONL, etc.).
- Provides interactive HTML visualization tools for result inspection.
- Plugin-based model provider system for easy integration with different inference backends.
