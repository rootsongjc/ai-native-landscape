---
name: Stripe AI
slug: stripe-ai
homepage: https://docs.stripe.com/agents
repo: https://github.com/stripe/ai
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - MCP
  - SDK
description: >-
  An open-source collection of SDKs and tools from Stripe that help integrate payments and billing into LLMs and agent
  frameworks.
logo: ''
author: Stripe
ossDate: '2024-11-11T17:13:41Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

Stripe AI is an open-source toolkit and collection of SDKs from Stripe designed to integrate payments, billing, and related APIs into LLMs and agent workflows. The repository includes an Agent Toolkit for Python and TypeScript, billing-oriented components such as `ai-sdk` and `token-meter`, and support for the Model Context Protocol (MCP) to enable secure access to Stripe services in hosted or local setups. It helps developers handle billing, authorization, and payment flows when building AI-powered products.

## Main Features

- Agent integration: tools compatible with OpenAI Agent SDK, LangChain, CrewAI, and Vercel AI SDK.
- MCP support: use Stripe-hosted MCP or run a local MCP instance for secure, OAuth-based access.
- Multi-language SDKs: Python and TypeScript packages for server and client integration.
- Billing adapters: `ai-sdk` and `token-meter` assist in connecting model usage to Stripe billing.

## Use Cases

Useful when you need to incorporate payments or billing into AI products — for example, metering model usage for paid API calls, enabling agents to perform payment-related actions (such as creating payment links) with proper authorization, or bridging LLMs with enterprise billing systems for chargeback and reconciliation.

## Technical Characteristics

- Open-source under the MIT license, enabling customization for both enterprise and research uses.
- Includes examples, docs, and demos (MCP quickstart, sample integrations, and toolkit examples).
- Engineered for production use with context defaults (account context), permission configuration, and Stripe Dashboard API key integration.
