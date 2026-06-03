---
name: Instructor
slug: instructor
homepage: https://python.useinstructor.com/
repo: https://github.com/567-labs/instructor
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Dev Tools
  - Utility
description: A Pydantic-based library for reliable structured outputs from any LLM, simplifying JSON extraction and validation.
author: Instructor 社区
ossDate: '2023-06-14T10:42:23.000Z'
featured: false
status: tracked
---

## Introduction

Instructor focuses on extracting reliable structured outputs from LLMs. Built on Pydantic, it offers validation, type-safety and a developer-friendly API to convert natural language into validated JSON objects.

## Key features

- Define response models with Pydantic and automatically validate outputs.
- Supports multiple providers (OpenAI, Anthropic, Google, etc.), streaming, automatic retries and nested object parsing.
- Cross-language SDKs, extensive examples and documentation for quick adoption.

## Use cases

- Stable extraction of structured information from free text (user profiles, product data, forms).
- Streaming or partial-object scenarios where progressive validation is required.
- Integrating structured extraction into data pipelines, API gateways or downstream validation systems.

## Technical details

- Primarily a Python implementation; the repo includes examples, docs and test suites and is MIT licensed.
- Built-in retry and error handling for validation failures, streaming support, and compatibility with many LLM provider APIs.
- Active community and frequent releases suitable for production and research use.
