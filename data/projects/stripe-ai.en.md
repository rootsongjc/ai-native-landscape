---
name: Stripe AI
slug: stripe-ai
homepage: https://docs.stripe.com/agents
repo: https://github.com/stripe/ai
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - MCP
  - SDK
description: >-
  An open-source collection of SDKs and tools from Stripe that help integrate payments and billing into LLMs and agent
  frameworks.
author: Stripe
ossDate: '2024-11-11T17:13:41Z'
featured: false
status: tracked
---

Stripe AI is an open-source collection of SDKs and tools from Stripe that brings payments, billing, and financial APIs directly into LLM and agent workflows. It provides Agent Toolkits for Python and TypeScript, billing utilities such as ai-sdk and token-meter, and Model Context Protocol support for secure access to Stripe services in both hosted and local environments.

## Key Features

- Integrates with OpenAI Agent SDK, LangChain, CrewAI, Vercel AI SDK, and other major agent frameworks
- Supports Stripe-hosted or self-hosted MCP servers with OAuth-based security
- Offers Python and TypeScript SDKs with billing adapters connecting token usage to Stripe invoicing
- Provides configurable account context defaults and fine-grained permission settings
- Includes ai-sdk and token-meter utilities for metered billing of AI API consumption

## Use Cases

- Metering token consumption for paid API services and AI-powered products
- Allowing agents to create payment links and manage subscriptions on behalf of users
- Bridging LLM-powered applications with enterprise billing systems for usage tracking and reconciliation
- Building AI products that require payment functionality such as pay-per-query or subscription-gated features

## Technical Details

- Open-sourced under the MIT license with comprehensive examples and MCP quickstart guides
- Engineered for production deployment with direct integration with Stripe Dashboard API keys
- Supports both hosted MCP and local server modes for flexible deployment architectures
- Designed for secure, authorized payment actions within agent workflows
