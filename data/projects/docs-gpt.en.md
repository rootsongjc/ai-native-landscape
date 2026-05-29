---
name: DocsGPT
slug: docs-gpt
homepage: https://app.docsgpt.cloud/
repo: https://github.com/arc53/docsgpt
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Agents
  - RAG
description: >-
  An open-source enterprise document agent platform combining RAG and multi-model support to provide citation-backed
  answers.
logo: ''
author: arc53
ossDate: '2023-02-02T11:03:23Z'
featured: false
status: tracked
---

## Detailed Introduction

DocsGPT is an open-source, enterprise-focused document agent platform that provides an Agent Builder, document analysis, deep retrieval, and multi-model connectivity. It ingests PDFs, DOCX, HTML, Markdown and other formats, and can crawl content from URLs, sitemaps, or GitHub repositories. Combining retrieval-augmented generation (RAG) with large language models (LLMs), DocsGPT delivers citation-backed answers and surfaces evidence in the UI for auditability. The project offers a cloud service ([DocsGPT Cloud](https://app.docsgpt.cloud/)) and a full self-hosted deployment path, suitable for organizations with privacy and governance requirements.

## Main Features

- Wide format support: PDF, DOCX, PPTX, Markdown, HTML, CSV, and more.
- Retrieval-Augmented Generation (RAG) with source citations to reduce hallucinations.
- Multi-model and local inference support: OpenAI, Google, Anthropic, and local runtimes (e.g., Ollama).
- Actionable tooling and APIs: connect tools, trigger actions, and return executable responses.

## Use Cases

Ideal for enterprise document search, internal knowledge assistants, compliance investigations, legal and engineering document analysis. Teams can build private chatbots, document-driven search experiences, or an internal agent platform while keeping data under organizational control.

## Technical Features

- Python backend with React/Vite frontend for easy self-hosting and enterprise deployment.
- QuickStart and Docker deployment scripts to run locally or in cloud environments.
- Supports MCP and OAuth integrations for secure tool and model connectivity.
- MIT-licensed with an active community and commercial cloud offering for managed deployments.
