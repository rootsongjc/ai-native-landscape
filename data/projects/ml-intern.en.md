---
name: ML Intern
slug: ml-intern
homepage: null
repo: https://github.com/huggingface/ml-intern
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agent
  - CLI
  - Dev Tools
description: >-
  ML Intern is an open-source autonomous ML engineer agent by HuggingFace that reads papers, trains models, and ships ML
  code with deep integration into the HuggingFace ecosystem.
logo: ''
author: HuggingFace
ossDate: '2025-10-30T13:43:09Z'
featured: false
status: tracked
---

## Overview

ML Intern is an open-source autonomous ML engineer agent built by HuggingFace, designed to automate the research, coding, and deployment stages of machine learning workflows. It is deeply integrated with the HuggingFace ecosystem, providing access to documentation, datasets, model repositories, and papers. Combined with a sandboxed execution environment and GitHub code search, it delivers end-to-end automation from paper reading to model training and code shipping. It supports both interactive and headless modes, driven by Claude, GPT, and other LLM backends.

## Key Features

- Autonomous ML workflow: automatically handles paper research, data processing, model fine-tuning, and code authoring.
- Deep HuggingFace ecosystem integration: direct access to HF docs, datasets, model hubs, inference jobs, and papers.
- Sandboxed execution: code runs in an isolated sandbox with local tools and MCP server support.
- Multi-model support: Anthropic Claude, OpenAI GPT, and HF Router models including MiniMax, Kimi, GLM, and DeepSeek.
- Session tracing: every session auto-uploads to a HuggingFace dataset, browseable via the Agent Trace Viewer.
- Notification gateways: Slack integration for out-of-band status updates on approval requests, errors, and turn completions.

## Use Cases

- Automated model fine-tuning: given a dataset and target model, automatically completes data prep, training config, and execution.
- ML paper reproduction: reads papers and writes reproduction code, leveraging HF ecosystem resources to accelerate experiments.
- ML engineering automation: offloads repetitive ML development tasks (preprocessing, evaluation, deployment) to the agent.
- Team collaboration and auditing: session traces and the Trace Viewer enable reviewing agent decisions for team collaboration.

## Technical Highlights

- Built in Python on top of the smolagents framework.
- Built-in context manager with 170k token auto-compaction and session persistence.
- Doom Loop detector: identifies repeated tool-call patterns and injects corrective prompts to prevent infinite loops.
- ToolRouter architecture: unified dispatch of HF docs, GitHub search, sandbox tools, planning tools, and MCP tools.
- Agentic Loop supporting up to 300 iterations, balancing task complexity with resource safety.
