---
name: Open Code Review
slug: open-code-review
homepage: https://alibaba.github.io/open-code-review/
repo: https://github.com/alibaba/open-code-review
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Code Review
  - AI Agent
description: >-
  An open-source hybrid-architecture code review tool that pairs deterministic pipelines with an LLM agent to produce
  precise line-level comments, battle-tested at Alibaba's scale with a built-in fine-tuned ruleset for NPE,
  thread-safety, XSS, and SQL injection.
author: Alibaba
ossDate: '2026-05-18T02:16:36Z'
featured: false
status: tracked
---
## Overview

Open Code Review (OCR) is an open-source code review tool from Alibaba that blends a deterministic analysis pipeline with an LLM agent. The hybrid architecture lets rule-based checks catch well-known defect patterns first, then an LLM agent reasons over repository-level context to surface deeper issues and post precise, line-level review comments. It is compatible with OpenAI- and Anthropic-style APIs, so teams can plug in their preferred models.

## Key Features

- Hybrid pipeline combining deterministic rules with an LLM agent for high-precision line-level comments
- Built-in fine-tuned ruleset covering NPE, thread-safety, XSS, SQL injection, and other common defect classes
- Repository-level context understanding so reviews reflect the whole codebase, not just the diff
- OpenAI- and Anthropic-compatible, supporting BYO model and local deployments

## Use Cases

Automated code review for engineering teams that want deterministic defect detection augmented by LLM reasoning. Integrates into pull-request workflows to catch security and correctness issues before merge. Useful for large-scale organizations needing a self-hostable, model-flexible review assistant.

## Technical Details

Open-source under Apache 2.0 and battle-tested at Alibaba's internal scale. Designed as a harness that wires deterministic static checks together with an LLM agent, keeping predictable checks deterministic while delegating nuanced reasoning to the model. API-compatible with OpenAI and Anthropic providers for flexible model selection.
