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

## Overview

AI Hedge Fund is a proof-of-concept project demonstrating an AI-powered hedge fund using multiple specialized agents for trading decisions. It showcases how agents focused on valuation, sentiment, fundamentals, and technicals can collaborate to produce trading signals. The project provides both a CLI and an optional web application for backtesting and strategy validation, emphasizing reproducible research and educational exploration.

## Key Features

- Multiple specialized agents (valuation, sentiment, fundamentals, technicals) evaluate assets in parallel to produce diverse trading signals
- Configurable backtester and risk module for robustness checks across historical data windows
- Pluggable LLM integration supporting major providers and local models via the `--ollama` flag
- Full-stack operation with CLI for automation and a built-in web app for interactive analysis

## Use Cases

Designed for researchers, quant hobbyists, and educational settings to explore agent collaboration, LLM-driven decision explanations, and backtesting pipelines. Typical uses include prototyping trading strategies, teaching AI-finance concepts, and studying model influence on trading decisions in controlled experiments. Not intended for live trading.

## Technical Details

Python implementation with Poetry for dependency management. Modular architecture separates data ingestion, strategy logic, backtester, and presentation layers. Configurable data sources support free sample market data and third-party financial APIs. Local-first design runs core computations locally with optional network calls to protect sensitive data.
