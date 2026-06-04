---
name: Vanna
slug: vanna
homepage: https://vanna.ai/
repo: https://github.com/vanna-ai/vanna
license: MIT
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - RAG
description: >-
  Vanna is an open-source RAG framework that converts natural language questions into executable SQL and runs them
  against local databases.
author: Vanna
ossDate: '2023-05-13T17:26:28.000Z'
featured: false
status: tracked
---

## Introduction

Vanna is an open-source RAG (Retrieval-Augmented Generation) framework focused on converting user queries into executable SQL and running them locally. It supports many LLMs, vector stores and databases, making it suitable for data analysis, BI and interactive query interfaces.

## Key features

- High-accuracy text-to-SQL generation with automatic execution and result visualization.
- Support for multiple LLMs (OpenAI, Anthropic, Gemini, HuggingFace) and vector stores (Chroma, Pinecone, Milvus, Faiss, etc.).
- Multiple example UIs and integrations: Jupyter, Streamlit, Slack, and more.

## Use cases

- Self-service data analytics and BI: map natural language to SQL and visualize results.
- Private on-premise query and auditing workflows where data must remain local.
- Research and prototyping for text-to-SQL and RAG systems.

## Technical highlights

- Implemented in Python with an extensible VannaBase abstraction to plug LLMs and vector stores.
- Trainable via DDL, documentation or SQL examples; supports incremental learning and self-improvement.
- MIT licensed, well-documented with active community and extensive examples.
