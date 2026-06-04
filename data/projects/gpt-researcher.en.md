---
name: GPT Researcher
slug: gpt-researcher
homepage: https://gptr.dev/
repo: https://github.com/assafelovic/gpt-researcher
license: Apache-2.0
category: agents
subCategory: agent-orchestration
tags:
  - Framework
description: >-
  A deep-research multi-agent framework that automates web and local document retrieval to produce sourced research
  reports.
author: assafelovic
ossDate: '2023-05-12T10:33:54.000Z'
featured: false
status: tracked
---

## Summary

GPT Researcher is a multi-agent research framework that parallelizes web and local document retrieval to generate long, sourced research reports suitable for academic and industry investigations.

## Features

- Planner/Executor/Publisher agent architecture enabling deep, tree-like exploration (Deep Research).
- Integrated web scraping, image sourcing and context memory, with export options for PDF/Word/Markdown.
- Includes TaskBench, MCP integration and multiple deployment options (PIP, Docker, NextJS frontends).

## Use Cases

- Automated market or academic research that aggregates evidence from many sources into auditable reports.
- Domain-specific research over local documents and corpora.
- Benchmarking LLM-driven automation workflows with TaskBench.

## Technical Details

- Implemented primarily in Python; frontend available in lightweight static and production NextJS variants.
- Supports `local`/`huggingface`/`hybrid` retrieval and inference modes and an MCP client extension.
- Licensed under Apache-2.0 with active community contributions and comprehensive docs.
