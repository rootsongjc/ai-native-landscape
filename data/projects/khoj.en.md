---
name: Khoj
slug: khoj
homepage: https://khoj.dev
repo: https://github.com/khoj-ai/khoj
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Assistant
  - Dev Tools
  - RAG
description: >-
  A self-hostable 'second brain' platform that turns web pages and documents into a searchable knowledge base and
  supports custom agents and automations.
logo: ''
author: Khoj AI
ossDate: '2021-08-16T01:48:44Z'
featured: false
status: tracked
---

## Detailed Introduction

Khoj is a self-hostable "second brain" platform that converts web pages, notes, and documents into a semantic knowledge base and enables building searchable agents and automation over private data. The project integrates semantic retrieval and Retrieval-Augmented Generation (RAG) pipelines, supports multiple LLM backends (e.g., GPT, Gemini, Llama), local/offline models, and plugin-style integrations, and includes a dashboard, CLI, and templates for rapid setup and observability.

## Main Features

- Private deployments: run in local or private networks to satisfy privacy and compliance requirements.
- Semantic indexing & retrieval: convert heterogeneous documents into vector indexes for high-quality retrieval and multi-hop queries.
- Multi-backend & offline model support: flexible choice between cloud LLMs and local models.
- Automation & scheduling: build custom agents, automate tasks, and gather observations to improve agent strategies.

## Use Cases

- Enterprise knowledge bases: provide searchable knowledge for support, R&D, or legal teams within controlled environments.
- Research & prototyping: serve as a platform for RAG and retrieval method experiments and benchmarks.
- Personal productivity: turn notes or Obsidian vaults into a Q&A-ready knowledge base.
- Offline & edge scenarios: perform retrieval and inference when external APIs are unavailable or undesired.

## Technical Features

- Modular architecture: decoupled retrieval, indexing, fusion, and generation modules for easy substitution.
- Multi-language SDKs and templates: Python/TypeScript templates and example projects for quick integration.
- Extensible storage backends: support local disk and external object storage for artifacts.
- Open-source licensing: repository is AGPL-3.0 licensed; check licensing terms for commercial usage.
