---
name: BettaFish (WeiYu)
slug: bettafish
homepage: null
repo: https://github.com/666ghj/bettafish
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Application
  - Data
description: An open-source multi-agent platform for automated collection, analysis, and reporting of massive social media data.
author: 666ghj
ossDate: '2024-07-01T13:11:38Z'
featured: false
status: tracked
---
BettaFish (WeiYu) is a multi-agent public opinion analysis assistant built from scratch without external frameworks. It breaks information cocoons by integrating web crawling, retrieval, sentiment analysis, and multimodal parsing to continuously collect and analyze data from major social media platforms.

## Multi-Agent Architecture

- Specialized agents (Query, Media, Insight, Report) collaborate to form a closed loop of retrieval, extraction, and reporting
- Conversational queries serve as the entry point, automatically generating structured research reports
- Helps users restore the full picture of public opinion and predict emerging trends

## Data Collection and Analysis

- Full-network crawling with multimodal parsing of text, images, and short videos
- Continuous data collection from major platforms including Weibo, Xiaohongshu, and Douyin
- Sentiment analysis and source tracing for comprehensive public opinion monitoring

## Reporting and Deployment

- Automatic report generation with a template engine that produces exportable HTML reports
- One-click deployment via Docker and scripts for quick startup on cloud hosts or local servers
- Modular Python implementation compatible with common data storage and message queues

## Extensibility

- Pluggable model interfaces for integrating locally fine-tuned models or mainstream cloud LLM services
- Connection pooling and caching mechanisms to improve stability and throughput
- Hybrid inference strategies combining local and cloud-based models for flexible deployment
