---
name: Skyvern
slug: skyvern
homepage: https://www.skyvern.com
repo: https://github.com/skyvern-ai/skyvern
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Automation
  - MCP
description: >-
  Skyvern is an open-source platform that combines vision and LLMs to automate browser-level workflows, available as
  local software and a managed cloud service.
author: Skyvern
ossDate: '2024-02-28T15:45:19Z'
featured: false
status: tracked
---

Skyvern is an open-source browser automation platform that uses computer vision and large language models to understand web page semantics and drive browser interactions without relying on brittle CSS selectors or XPath. It offers both a self-hosted local service and a managed cloud offering, enabling teams to build robust agent-driven workflows that generalize across unfamiliar websites.

## Key Features

- Combines visual perception with LLM reasoning to interact with any website without pre-defined selectors
- Coordinates multiple agents in a swarm to decompose complex tasks, execute in parallel, and aggregate results
- Provides ready-made workflow building blocks for form filling, data extraction, file downloads, and validation loops
- Supports Model Context Protocol and integrates with OpenAI, Anthropic, Gemini, and Ollama
- Drives browsers via Playwright with livestreaming support for real-time debugging and audit trails

## Use Cases

- Bulk invoice downloading across vendor portals and automated procurement workflows
- Automated job application submission and candidate screening at scale
- Competitor price monitoring and market intelligence gathering
- RPA-style business process automation that generalizes across different website layouts
- Reproducible, auditable automation running on-premises or through Skyvern Cloud

## Technical Details

- Features pluggable LLM backends compatible with major providers and local models
- Exposes a schema-driven API for structured, reproducible results
- Open-source core licensed under AGPL-3.0 with a managed cloud tier
- Managed cloud adds anti-bot bypass, proxy rotation, and CAPTCHA solving capabilities
