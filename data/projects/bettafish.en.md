---
name: BettaFish (WeiYu)
slug: bettafish
homepage: null
repo: https://github.com/666ghj/bettafish
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Application
  - Data
description: An open-source multi-agent platform for automated collection, analysis, and reporting of massive social media data.
logo: ''
author: 666ghj
ossDate: '2024-07-01T13:11:38Z'
featured: false
status: tracked
---

## Detailed Introduction

BettaFish (WeiYu) is a fully open-source multi-agent public opinion analysis platform. It integrates web crawling, retrieval, sentiment analysis, and multimodal parsing capabilities to continuously collect and deeply analyze data from major social media platforms such as Weibo, Xiaohongshu, and Douyin. The system uses conversational queries as the entry point, automatically generates structured research reports and visual results, and aims to help researchers and enterprises reconstruct the full landscape of public opinion, discover trends, and support decision-making.

## Key Features

- Multi-Agent Architecture: Agents such as Query, Media, Insight, and Report collaborate to achieve a closed loop of retrieval, extraction, and reporting.
- Full-Network Crawling & Multimodal Parsing: Supports extraction and feature fusion of text, images, and short videos.
- Report & Template Engine: Automatically generates HTML/report files, which can be exported for decision-making reference.
- One-Click Deployment: Provides Docker and script-based installation methods for quick startup on cloud hosts or local servers.

## Use Cases

- Public Opinion Monitoring & Crisis Response: Real-time capture of trending topics and generation of source tracing and public opinion heat reports.
- Brand & Market Research: Long-term tracking and trend prediction for competitors and brand reputation.
- Academic & Policy Research: Provides structured, large-scale social media data analysis capabilities for social science and public policy research.

## Technical Highlights

- Modular implementation primarily in Python, compatible with common data storage and message queues for easy secondary development and extension.
- Supports connection pooling and caching mechanisms to improve stability and throughput for crawling and analysis.
- Pluggable model interfaces: Can integrate locally fine-tuned models or mainstream cloud LLM services, supporting hybrid inference strategies.
