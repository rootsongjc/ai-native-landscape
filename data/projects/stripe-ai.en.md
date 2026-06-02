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
status: tracked
---

## Overview

Stripe AI is an open-source collection of SDKs and tools from Stripe that brings payments, billing, and financial APIs directly into LLM and agent workflows. It provides Agent Toolkits for Python and TypeScript, billing utilities such as ai-sdk and token-meter, and Model Context Protocol support for secure access to Stripe services in both hosted and local environments.

## Key Features

The toolkit integrates with major agent frameworks including OpenAI Agent SDK, LangChain, CrewAI, and Vercel AI SDK, enabling agents to perform payment actions with proper authorization. It supports Stripe-hosted or self-hosted MCP servers with OAuth-based security, offers Python and TypeScript SDKs, and includes billing adapters that connect model token usage directly to Stripe invoicing.

## Use Cases

Stripe AI is essential when building AI products that require payment functionality, such as metering token consumption for paid API services or allowing agents to create payment links and manage subscriptions on behalf of users. It also serves as an engineering bridge between LLM-powered applications and enterprise billing systems for usage tracking and reconciliation.

## Technical Details

The project is open-sourced under the MIT license and ships with comprehensive examples, documentation, and MCP quickstart guides. It is engineered for production deployment with configurable account context defaults, fine-grained permission settings, and direct integration with Stripe Dashboard API keys.
