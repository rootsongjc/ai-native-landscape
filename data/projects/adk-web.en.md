---
name: Agent Development Kit Web (ADK Web)
slug: adk-web
homepage: https://google.github.io/adk-docs/
repo: https://github.com/google/adk-web
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Dev Tools
  - UI
description: Google's built-in developer UI for the Agent Development Kit, designed to simplify agent development and debugging.
logo: ''
author: Google
ossDate: '2025-05-05T17:16:28Z'
featured: false
status: tracked
---

## Detailed Introduction

Agent Development Kit Web (ADK Web) is Google's built-in developer UI integrated with the Agent Development Kit to simplify agent development, debugging, and interaction. ADK Web pairs with ADK backend components to provide visual task flows, interactive debugging panels, and sample projects that help developers validate agent behavior quickly. See the [ADK docs](https://google.github.io/adk-docs/) for details.

## Main Features

- Visual interface: shows agent execution flows, invocation chains, and task states.
- Debugging tools: interactive inputs, log inspection, and event replay to locate issues.
- Samples & integrations: works with `adk-python`, `adk-java` SDKs and includes example projects.
- Lightweight local run: front-end based, can be served locally and connected to backend APIs.

## Use Cases

- Develop and debug agent logic and workflows.
- Demonstrations and teaching to illustrate agent interaction patterns.
- Local integration testing with backend SDKs, speeding up iteration cycles.

## Technical Features

- Built with TypeScript and Angular for extensibility and maintainability.
- Works in tandem with ADK backend APIs and supports local or remote backend configurations.
- Open-source (Apache-2.0) allowing community contributions and extensions.
- Optimized for Google ecosystem but model-agnostic to support other models and deployments.
