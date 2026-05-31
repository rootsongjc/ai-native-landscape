---
name: Jan
slug: jan
homepage: https://jan.ai/
repo: https://github.com/menloresearch/jan
license: Unknown
category: applications-products
subCategory: chat-interfaces
tags:
  - Chatbot
  - Dev Tools
description: >-
  An open-source ChatGPT alternative that runs locally or in the cloud, supporting model downloads, cloud integrations,
  and privacy-first workflows.
logo: ''
author: menloresearch
ossDate: '2023-08-17T02:17:10.000Z'
featured: false
status: tracked
---

## Introduction

Jan is an open-source ChatGPT alternative designed to run locally or in the cloud. It supports downloading model weights from Hugging Face, connecting to cloud providers (OpenAI, Anthropic, Mistral, etc.), and ships desktop clients plus a local API for easy integration and automation.

## Key features

- Support for many model families and automatic weight management (Vicuna, Gemma, Qwen, etc.).
- OpenAI-compatible local server (localhost:1337) for drop-in application integration.
- Desktop distributions for Windows/macOS/Linux and a developer workflow (`make dev`) for easy building and testing.
- Privacy-first design with options for fully offline operation.

## Use cases

- Deploy private conversational services to protect sensitive data.
- Rapidly prototype local tools, internal assistants, or research environments.
- Use as an infrastructure baseline for training, benchmarking, and comparing LLM behavior.

## Technical details

- Codebase primarily in TypeScript and Rust, using Tauri for desktop clients and web frontends.
- Multi-platform packaging (.exe/.dmg/.deb/AppImage) and automated build targets.
- Extensive docs, API references, and an active community (docs, Discord, changelog).
