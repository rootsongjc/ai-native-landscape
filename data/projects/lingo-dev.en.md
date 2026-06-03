---
name: Lingo.dev
slug: lingo-dev
homepage: https://lingo.dev
repo: https://github.com/lingodotdev/lingo.dev
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
  - Dev Tools
  - SDK
description: >-
  Lingo.dev is an open-source, AI-powered i18n toolkit that enables instant localization workflows both at build time
  and runtime.
author: Lingo.dev team
ossDate: '2024-03-13T11:27:31Z'
featured: false
status: tracked
---

## Overview

Lingo.dev provides a developer-first set of open-source tools for localization, combining a build-time compiler, CLI, CI/CD integrations and a runtime SDK. It helps teams extract and manage strings during builds, automate translation PRs in CI pipelines, and localize dynamic content at runtime.

## Key features

- Compiler: build-time localization for React apps without changing components.
- CLI: one-command scanning and incremental translation with caching.
- CI/CD integration: automate translation PRs and validation in existing pipelines.
- SDK: runtime localization for user-generated content and real-time flows.

## Use cases

- Internationalizing web and mobile apps at build time.
- Automating translation workflows in CI to reduce manual steps.
- Localizing dynamic content such as comments, chats, and CMS-driven pages.

## Technical highlights

- TypeScript monorepo with modular packages and compatibility with modern bundlers.
- Pluggable backends: bring-your-own-LLM or use Lingo.dev localization engine.
- Extensible middleware and SDKs for Web and React Native platforms.
