---
name: AI Hedge Fund
slug: ai-hedge-fund
homepage: null
repo: https://github.com/virattt/ai-hedge-fund
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
description: >-
  A proof-of-concept, agent-driven quantitative research project offering backtesting, CLI, and a web app to explore
  AI-assisted stock selection and risk control.
logo: ''
author: virattt
ossDate: '2024-11-29T16:30:01Z'
featured: false
status: tracked
---

## Detailed Introduction

AI Hedge Fund is a research and educational proof-of-concept that demonstrates how multiple specialized agents (valuation, sentiment, fundamentals, technicals, etc.) can collaborate to produce trading signals. The project provides a command-line interface and an optional web application for backtesting and strategy validation. It emphasizes reproducible research workflows and risk hypothesis testing; it is explicitly for learning purposes and not financial advice.

## Main Features

- Agentic collaboration: multiple strategy agents evaluate assets in parallel to produce diverse trading signals.
- Backtesting & risk controls: configurable backtester and risk module for robustness checks on historical windows.
- Pluggable LLM integration: supports major LLM providers and local models (e.g., via the `--ollama` flag) for strategy reasoning and narrative explanations.
- Full-stack operation: runnable from `CLI` for automation or via the built-in web app for interactive analysis.

## Use Cases

Suitable for researchers, quant hobbyists, and educational settings to explore agent collaboration, LLM-driven decision explanations, and backtesting pipelines. Typical uses include prototyping strategies, teaching, and studying model influence on trading decisions in controlled experiments. The project is not intended for live trading; run experiments in sandboxed historical environments.

## Technical Characteristics

- Python implementation with `Poetry` for dependency management, enabling quick setup in development environments.
- Modular architecture: separates data ingestion, strategy logic, backtester, and presentation layers for easy substitution of data sources or models.
- Configurable data ingestion: supports free sample market data and third-party financial APIs, with API keys managed via `.env`.
- Local-first privacy: core computations and backtests run locally; network calls are optional to protect sensitive data.
