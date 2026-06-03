---
name: E2B
slug: e2b
homepage: https://e2b.dev/docs
repo: https://github.com/e2b-dev/e2b
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - AI Agent
  - Dev Tools
  - Product
description: Secure open source cloud runtime for AI apps & AI agents.
author: E2B
ossDate: '2023-03-04T13:41:18.000Z'
featured: true
status: tracked
---
E2B is an open-source infrastructure that allows you to run AI-generated code in secure isolated sandboxes in the cloud. To start and control sandboxes, use our Python SDK or JavaScript SDK.

## What is E2B?

E2B provides a secure environment for executing AI-generated code. It allows you to run untrusted code in isolated sandboxes in the cloud, preventing any potential harm to your systems. With E2B, you can build AI applications that need to execute code safely, such as AI agents, code assistants, or automated analysis tools.

Some of the typical use cases for E2B are:

- AI data analysis or visualization
- Running AI-generated code of various languages
- Playground for coding agents
- Environment for codegen evals
- Running full AI-generated apps like in Fragments

## Under the hood

The E2B Sandbox is a small isolated VM the can be started very quickly (~150ms). You can think of it as a small computer for the AI model. You can run many sandboxes at once. Typically, you run separate sandbox for each LLM, user, or AI agent session in your app. For example, if you were building an AI data analysis chatbot, you would start the sandbox for every user session.
