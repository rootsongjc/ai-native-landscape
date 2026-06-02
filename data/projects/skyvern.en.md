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
logo: ''
author: Skyvern
ossDate: '2024-02-28T15:45:19Z'
featured: false
status: tracked
---

## Overview

Skyvern is an open-source browser automation platform that uses computer vision and large language models to understand web page semantics and drive browser interactions without relying on brittle CSS selectors or XPath. It offers both a self-hosted local service and a managed cloud offering, enabling teams to build robust agent-driven workflows that generalize across unfamiliar websites.

## Key Features

Skyvern combines visual perception with LLM reasoning to interact with any website without pre-defined selectors, and coordinates multiple agents in a swarm to decompose complex tasks, execute them in parallel, and aggregate results. It provides ready-made workflow building blocks for form filling, data extraction, file downloads, and validation loops, along with Model Context Protocol support and integrations with major LLM providers.

## Use Cases

Skyvern excels at large-scale browser automation tasks such as bulk invoice downloading across vendor portals, automated job applications, competitor price monitoring, and RPA-style business process automation. It is well-suited for teams that need reproducible, auditable automation running either on-premises or through the managed Skyvern Cloud service.

## Technical Details

The platform drives browsers via Playwright with livestreaming support for real-time debugging and audit trails. It features pluggable LLM backends compatible with OpenAI, Anthropic, Gemini, and Ollama, and exposes an API with schema-driven outputs for structured, reproducible results. The open-source core is licensed under AGPL-3.0, while the managed cloud adds anti-bot bypass, proxy rotation, and CAPTCHA solving capabilities.
