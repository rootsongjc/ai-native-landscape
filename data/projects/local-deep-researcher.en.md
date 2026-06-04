---
name: Local Deep Researcher
slug: local-deep-researcher
homepage: null
repo: https://github.com/langchain-ai/local-deep-researcher
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Utility
description: >-
  A fully local web research and report-writing assistant that uses local LLMs (e.g. Ollama/LMStudio) to iteratively
  search, summarize and refine findings.
author: LangChain team
ossDate: '2024-12-04T23:57:20.000Z'
featured: false
status: tracked
---

## Overview

Local Deep Researcher is a fully local web research and report-writing assistant designed to run on local LLMs (for example via Ollama or LMStudio). It performs iterative cycles of search, summary, and reflection to identify knowledge gaps and produce a final Markdown report with cited sources. The project focuses on privacy, reproducibility, and running research workflows within a controlled environment.

## Key features

- Iterative search–summarize–reflect loop that incrementally fills knowledge gaps.
- Compatible with local LLM providers (Ollama, LMStudio), enabling offline or restricted-network usage.
- Configurable search and retrieval components; defaults to DuckDuckGo while supporting external search integrations.
- Produces structured Markdown outputs with source citations for auditability and reproducibility.

## Use cases

- Research teams and analysts conducting investigations in environments with network or compliance constraints.
- Academic or market researchers who need to aggregate evidence across multiple search iterations into a single report.
- Developers experimenting with local retrieval strategies and prompt engineering to improve research quality.

## Technical highlights

- Built around LangGraph-inspired agentic workflows, decomposing queries and iteratively retrieving and summarizing results.
- Supports multiple local model backends and extensible retrieval/tooling pipelines.
- Graph/state persistence and LangGraph Studio visualization make the research process traceable and inspectable.
