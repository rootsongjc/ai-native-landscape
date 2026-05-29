---
name: PR-Agent
slug: pr-agent
homepage: https://www.qodo.ai/
repo: https://github.com/qodo-ai/pr-agent
license: Unknown
category: training-optimization
subCategory: prompt-quality
tags:
  - AI Agent
  - Dev Tools
description: >-
  An open-source AI-powered code review and PR assistant that runs locally, in CI, or self-hosted; supports
  multi-platform integrations and customizable prompts.
logo: ''
author: Qodo AI
ossDate: '2023-07-05T21:02:15.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

PR-Agent is an open-source AI-powered code review and pull-request assistant. It can run locally, in CI, or as a self-hosted service to provide automated reviews, improvement suggestions, and interactive tools for PRs, supporting multiple models and platform integrations.

## Key Features

- AI-driven PR review: provides `/review`, `/describe`, `/improve` commands to generate review comments and suggested changes.
- Multi-platform support: works with GitHub, GitLab, BitBucket, Azure DevOps, and provides CLI, webhook, and GitHub Actions integrations.
- Highly customizable: JSON-based configuration and prompt customization for team-specific behavior.
- Self-hosting & privacy: open-source and can be self-hosted so teams control their API keys and data retention.

## Use Cases

- Automatically run AI reviews in CI and post feedback as comments or checks on PRs.
- Use the CLI locally to generate PR descriptions and code improvement suggestions.
- Combine with Qodo Merge (hosted) to access zero-setup, managed features and advanced capabilities.

## Technical Highlights

- Implemented primarily in Python with an active community and plugin support.
- Supports RAG and multi-model integration to improve review quality and context awareness.
- Provides GitHub Action, CLI, and webhook integrations for easy CI/CD deployment.
