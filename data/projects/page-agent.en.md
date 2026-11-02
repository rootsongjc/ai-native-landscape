---
name: page-agent
slug: page-agent
homepage: https://alibaba.github.io/page-agent/
repo: https://github.com/alibaba/page-agent
license: MIT
category: coding-devtools
subCategory: browser-automation
tags:
  - GUI Agent
  - Browser Automation
  - JavaScript
  - MCP
description: >-
  A JavaScript in-page GUI agent from Alibaba. One script tag gives any web page its own AI agent that controls the
  interface with natural language via text-based DOM manipulation — no screenshots or multimodal LLMs required.
author: alibaba
ossDate: '2025-09-23'
featured: false
status: tracked
---

## Overview

Page Agent is the GUI agent that lives in your webpage: one script gives any page its own AI agent, controlled with natural language (`await agent.execute('Click the login button')`). Unlike server-side browser automation, everything happens in the page itself — no browser extension, no Python, no headless browser. It manipulates the DOM through text rather than screenshots, so it works with mainstream text models including locally deployed ones, and an optional Chrome extension extends it to multi-page tasks.

## Key Features

- One-line integration via a CDN script tag, or `npm install page-agent` for programmatic use
- Text-based DOM manipulation — no screenshots, no multimodal LLMs, no special permissions
- Bring your own LLM: works with most mainstream models configured by model, baseURL, and apiKey, including local deployments
- Optional Chrome extension for multi-page tasks across tabs
- MCP Server (Beta) to control the agent from outside clients
- Small footprint: minified and gzipped bundle ships with Zod as the only peer dependency

## Use Cases

- Shipping a SaaS AI copilot inside your product in a few lines of code, without a backend rewrite
- Smart form filling — turning 20-click ERP/CRM/admin workflows into one sentence
- Accessibility: operating any web app through natural language, voice commands, and screen readers
- Multi-page agent workflows across browser tabs via the Chrome extension, or driving pages from MCP clients

## Technical Details

- TypeScript library published to npm with an IIFE bundle for one-line CDN inclusion; the agent loop runs entirely in the browser page context, not on a server
- Interaction is text-based: the model sees a serialized DOM representation and issues actions against it, removing the need for screenshots, vision models, or extra browser permissions
- Model access is bring-your-own via an OpenAI-compatible baseURL/apiKey configuration (e.g. Qwen through DashScope's compatible mode), including locally deployed models
- A free demo CDN build ships with a testing LLM for evaluation; `?autoInit=false` disables auto-instantiation so you can construct `new window.PageAgent(...)` with your own model
- Builds on the browser-use project's work, positioned for client-side web enhancement rather than server-side automation; the optional extension and MCP server extend its reach beyond a single page
