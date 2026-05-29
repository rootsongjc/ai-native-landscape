---
name: Chef
slug: chef
homepage: https://chef.convex.dev/
repo: https://github.com/get-convex/chef
license: Unknown
category: applications-products
subCategory: low-code-builders
tags:
  - AI Agent
  - Dev Tools
description: >-
  An AI app builder that understands the backend: built-in DB, zero-config auth, file uploads, real-time UIs, and
  background workflows to rapidly build full-stack AI apps.
logo: ''
author: Convex Team
ossDate: '2025-03-31T19:00:59.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

Chef is an AI app builder that "knows the backend": it ships with a built-in database, zero-config auth, file uploads, real-time UIs, and background workflows so developers can rapidly build full-stack AI applications. Chef uses Convex as its backend for real-time and persistent data, making it well suited for generative applications that need backend capabilities.

## Key Features

- Backend integration: Tight integration with Convex provides realtime data and background workflows.
- Agent loop and tooling: The `chef-agent` folder contains agent loops, system prompts, and tool definitions to build intelligent assistant flows.
- Hosted and local development: Run the hosted app at `chef.convex.dev` or run locally for development and testing.

## Use Cases

- Generative apps that need backend storage and realtime sync (code generation platforms, collaborative editors, stateful chatbots).
- Rapid prototyping to production: use templates and the `chefshot` CLI to bootstrap projects.
- Educational and demo scenarios showing how agent capabilities integrate with DB, auth, file uploads, and realtime UI.

## Technical Characteristics

- TypeScript monorepo with client and server code for modern frontend integration.
- Template-driven project bootstrapping (`template/`) for quick project initialization.
- Lightweight CLI and test harnesses (`chefshot`, `test-kitchen`) to support local development and agent-loop testing.
