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
author: Google
ossDate: '2025-07-08T20:46:06.000Z'
featured: false
status: tracked
---

LangExtract is a Python library from Google that leverages large language models to extract structured information from unstructured text with precise source grounding. It produces verifiable extractions with an interactive HTML visualization, making it well suited for long-form documents in domains such as healthcare, legal, and research.

## Key Capabilities

- **Source-grounded extractions** where every result links back to its exact location in the original document for easy verification
- **Example-driven schemas** that can be defined with just a few high-quality examples rather than complex rule sets
- **Multi-model support** including cloud models like Gemini and OpenAI alongside local inference via Ollama
- **Long-document optimization** through intelligent chunking, parallel execution, and multi-pass extraction strategies
- **Interactive HTML visualization** for reviewing, auditing, and navigating extraction results

## Use Cases

- Structuring clinical text such as medical notes, medication records, and discharge summaries
- Extracting clauses, entities, and relations from legal documents and contracts with full traceability
- Bulk entity extraction from large archives for downstream analytics and knowledge graph construction
- Preprocessing unstructured data for RAG pipelines with strong typing and schema enforcement

## Technical Highlights

- Prompt- and example-based extraction with multi-pass strategies to maximize recall and robustness
- Strongly-typed output in formats like JSONL for seamless downstream consumption
- Plugin-based model provider system that makes switching inference backends simple without changing extraction logic
