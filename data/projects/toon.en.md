---
name: TOON
slug: toon
homepage: https://toonformat.dev
repo: https://github.com/toon-format/toon
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Data
  - LLM
  - SDK
description: A token-oriented, compact and schema-aware data notation for LLM prompts and serialization.
logo: ''
author: toon-format
ossDate: '2025-10-22T18:17:32Z'
featured: false
status: tracked
---

## Overview

TOON (Token-Oriented Object Notation) is a compact, human-readable data format designed as a token-efficient alternative to JSON for LLM prompts and structured data serialization. It uses explicit token delimiters and schema-aware parsing to reduce prompt size while maintaining readability, making it particularly effective for passing structured data to and from large language models within limited context windows.

## Key Features

TOON achieves significant token savings over JSON through compact delimiters and optional schema validation, all while preserving a human-readable syntax. It supports pattern-based schemas for data validation and backward compatibility, ensuring that evolving data structures do not break existing integrations. A TypeScript SDK and benchmarking tools are provided to simplify adoption and measure token efficiency gains in real workflows.

## Use Cases

Prompt engineers use TOON to craft concise structured inputs for LLM calls, reducing token costs and leaving more context window for the actual task. Teams building prompt template libraries adopt TOON as a standardized interchange format for reusable prompt components. It also serves as a lightweight serialization format for passing small structured payloads between services where token efficiency matters.

## Technical Details

TOON defines explicit token-splitting rules and lightweight semantic conventions that enable deterministic parsing without ambiguity. It ships with a TypeScript toolchain including parsers, serializers, and schema validators, making it straightforward to integrate into both frontend and backend SDKs. The specification is designed to balance three goals: human readability, machine verifiability, and minimal token consumption within LLM context windows.
