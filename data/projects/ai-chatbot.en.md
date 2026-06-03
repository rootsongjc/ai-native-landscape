---
name: AI Chatbot (Vercel Chat SDK)
slug: ai-chatbot
homepage: https://chat.vercel.ai/
repo: https://github.com/vercel/ai-chatbot
license: Apache-2.0
category: applications-products
subCategory: chat-interfaces
tags:
  - Chatbot
description: >-
  A deployable and extendable Next.js chatbot template from Vercel that integrates multiple model providers and the
  Vercel AI Gateway.
author: Vercel
ossDate: '2023-05-19T16:36:23.000Z'
featured: false
status: tracked
---
## Introduction

AI Chatbot is a ready-to-use Next.js chatbot template from Vercel, suitable as a starting point for conversational apps and assistants. It integrates the Vercel AI Gateway and AI SDK, supporting multiple model providers and authentication flows for quick deployment and scalability.

## Key features

- Built with Next.js 14 and App Router, supporting React Server Components and Server Actions.
- Unified API via the AI SDK for text generation, structured outputs, and tool calls; easily switch between providers (xAI, OpenAI, Anthropic, etc.).
- Includes auth, data persistence (Neon Serverless Postgres), and Vercel Blob storage integrations.
- Modern UI primitives (shadcn/ui + Radix) and extensible component design.

## Use cases

- Rapidly prototype conversational agents, customer support bots, or product assistants.
- Serve as an educational template demonstrating multi-provider model integration and full-stack patterns.
- Deploy on Vercel to leverage native AI Gateway authentication and deployment workflows.

## Technical details

- Supports multi-model routing via Vercel AI Gateway and local provider configuration.
- TypeScript-first codebase with pnpm, Playwright tests, and PostCSS setup.
- One-click Vercel deployment workflow with environment variable management (.env.example included).
