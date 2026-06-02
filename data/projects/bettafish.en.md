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

## Overview

BettaFish (WeiYu) is a multi-agent public opinion analysis assistant built from scratch without external frameworks. It breaks information cocoons by integrating web crawling, retrieval, sentiment analysis, and multimodal parsing to continuously collect and analyze data from major social media platforms. The system uses conversational queries as its entry point and automatically generates structured research reports to help users restore the full picture of public opinion and predict trends.

## Key Features

BettaFish employs a multi-agent architecture with specialized agents (Query, Media, Insight, Report) that collaborate to form a closed loop of retrieval, extraction, and reporting. It supports full-network crawling with multimodal parsing of text, images, and short videos, along with an automatic report and template engine that generates exportable HTML reports for decision-making reference. One-click deployment via Docker and scripts enables quick startup on cloud hosts or local servers.

## Use Cases

BettaFish is ideal for public opinion monitoring and crisis response, enabling real-time capture of trending topics with source tracing and heat reports. It also serves brand and market research teams who need long-term tracking and trend prediction for competitors and brand reputation, as well as academic and policy researchers who require structured, large-scale social media data analysis capabilities.

## Technical Details

The platform is implemented primarily in Python with a modular design compatible with common data storage and message queues for easy secondary development. It supports connection pooling and caching mechanisms to improve stability and throughput, and provides pluggable model interfaces that can integrate locally fine-tuned models or mainstream cloud LLM services with hybrid inference strategies.
