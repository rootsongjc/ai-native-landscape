---
name: TradingAgents
slug: trading-agents
homepage: https://arxiv.org/pdf/2412.20138
repo: https://github.com/tauricresearch/tradingagents
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
description: >-
  TradingAgents is a multi-agent framework for financial trading that leverages LLM-driven strategies and backtesting
  tools.
logo: ''
author: TauricResearch
ossDate: '2024-12-28T03:31:08Z'
featured: false
status: tracked
---

## Overview

TradingAgents is a multi-agent framework for financial trading that combines LLM-driven strategy generation with simulation and backtesting tools. It provides multi-agent coordination primitives, environment wrappers, and evaluation pipelines that allow researchers and practitioners to test LLM-based trading strategies and agent collaboration mechanisms in realistic simulated markets.

## Key Features

The framework supports running multiple agents in parallel to study cooperative, competitive, or adversarial trading behaviors within shared market simulations. It integrates backtesting engines and customizable simulation environments that produce performance metrics and risk assessments for each strategy. TradingAgents leverages large language models for strategy generation, signal extraction from market data, and decision modeling, enabling rapid exploration of LLM-powered trading approaches.

## Use Cases

Quantitative researchers use TradingAgents to prototype and evaluate LLM-based trading strategies before committing capital in live markets. Risk management teams backtest strategies across diverse market regimes to evaluate robustness and drawdown characteristics. Academic researchers explore multi-agent coordination and game-theoretic interactions in trading tasks to advance understanding of AI-driven market dynamics.

## Technical Details

TradingAgents provides customizable environment interfaces and standardized evaluation pipelines that support automated experimentation and reproducible benchmarks. It supports multiple LLM backends and concurrent agent execution to handle large-scale simulation workloads. The framework is licensed under Apache-2.0, making it suitable for both academic research and commercial applications.
