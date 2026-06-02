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
status: tracked
---

## Overview

LangExtract is a Python library from Google that leverages large language models to extract structured information from unstructured text with precise source grounding. It produces verifiable extractions with an interactive HTML visualization, making it well suited for long-form documents in domains such as healthcare, legal, and research.

## Key Features

Every extraction links back to its exact source location, enabling easy verification and visual review of results. The library uses example-driven extraction schemas that can be defined with just a few high-quality examples. It supports cloud models like Gemini and OpenAI alongside local inference via Ollama, and optimizes long-document processing through chunking, parallel execution, and multi-pass strategies.

## Use Cases

Practitioners use LangExtract to structure clinical text such as medical notes and medication records. It extracts clauses, entities, and relations from legal documents and contracts with full traceability. Teams also rely on it for bulk entity extraction from large archives and for preprocessing data in RAG pipelines.

## Technical Details

LangExtract employs prompt- and example-based extraction with multi-pass strategies to maximize recall and robustness. It outputs strongly-typed results in formats like JSONL for seamless downstream consumption. A plugin-based model provider system makes it easy to switch between inference backends without changing extraction logic.
