---
name: Presenton
slug: presenton
homepage: https://presenton.ai
repo: https://github.com/presenton/presenton
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - UI
  - Visualization
description: Presenton is an open-source AI presentation generator and API that supports local run and multi-model integration.
logo: ''
author: Presenton
ossDate: '2025-05-10T14:12:46Z'
featured: false
status: tracked
---

## Overview

Presenton is an open-source AI presentation generator and API that creates professional PPTX and PDF slides from text prompts or uploaded documents. It supports local execution via Ollama alongside multi-provider integrations including OpenAI, Google, and Anthropic, making it a flexible alternative to proprietary tools like Gamma and Beautiful AI.

## Key Features

- Custom HTML and Tailwind CSS templates with configurable themes for brand-consistent slides.
- Multi-provider model support covering OpenAI, Google Gemini, Anthropic, Ollama, and self-hosted endpoints.
- Direct export to PPTX and PDF with professional formatting ready for distribution.
- Docker-based deployment with optional GPU acceleration for running local models at scale.

## Use Cases

Teams can automate production of course materials, training decks, product demos, and data reports without manual slide design. Organizations with strict data privacy requirements benefit from fully local execution that keeps sensitive content away from third-party cloud services.

## Technical Details

Presenton is Apache-2.0 licensed and exposes a REST API for programmatic presentation generation and management. Its extensible pipeline accepts Markdown, PPTX, or uploaded files as input sources and supports bulk generation workflows. Production deployments leverage Docker containers with GPU acceleration and multi-provider model routing for reliable, scalable slide automation.
