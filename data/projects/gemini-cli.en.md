---
name: Gemini CLI
slug: gemini-cli
homepage: null
repo: https://github.com/google-gemini/gemini-cli
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: A command-line tool for Google Gemini supporting text, image, and code AI interactions.
author: Google
ossDate: '2025-04-17T17:04:31.000Z'
featured: true
status: tracked
---
Gemini CLI is Google's command-line AI tool that enables intelligent interaction with text, images, and code directly from the terminal. It can query and edit large codebases with million-token context, generate applications from PDFs or sketches using multimodal capabilities, and automate tasks like pull requests and code changes. The tool also supports media generation through Imagen, Veo, and Lyria, plus Google Search integration for grounded responses.

## Core Capabilities

- Million-token context window for querying and editing large codebases in a single session
- Multimodal input supporting PDFs, images, sketches, and microphone audio for voice mode
- Built-in tools including Google Search grounding, file operations, shell commands, and web scraping
- Media generation via Imagen (images), Veo (video), and Lyria (audio) models

## Agent & Extensibility

- MCP (Model Context Protocol) support for custom integrations and tool extensions
- Agent Skills, Hooks, Subagents, and Extensions for composing complex workflows
- Non-interactive mode with JSON and streaming JSON output for script integration
- GitHub Action for automated PR reviews, issue triage, and on-demand assistance

## Authentication Options

- Google account login with 60 requests/minute and 1,000 requests/day free tier
- Gemini API key with 1,000 free Pro requests/day and pay-as-you-go pricing
- Vertex AI API key for enterprise-grade quotas and advanced security requirements
