---
name: TOON
slug: toon
homepage: https://toonformat.dev
repo: https://github.com/toon-format/toon
license: MIT
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Data
  - LLM
  - SDK
description: A token-oriented, compact and schema-aware data notation for LLM prompts and serialization.
author: toon-format
ossDate: '2025-10-22T18:17:32Z'
featured: false
status: tracked
---

TOON (Token-Oriented Object Notation) is a compact, human-readable data format designed as a token-efficient alternative to JSON for LLM prompts and structured data serialization. It uses explicit token delimiters and schema-aware parsing to reduce prompt size while maintaining readability, making it particularly effective for passing structured data to and from large language models within limited context windows.

## Format and Schema

- Compact delimiters and optional schema validation achieve significant token savings over JSON
- Pattern-based schemas for data validation and backward compatibility across evolving data structures
- Explicit token-splitting rules and lightweight semantic conventions enable deterministic parsing without ambiguity
- Balances human readability, machine verifiability, and minimal token consumption within LLM context windows

## Toolchain and Integration

- TypeScript SDK with parsers, serializers, and schema validators for both frontend and backend integration
- Benchmarking tools to measure token efficiency gains in real workflows
- Straightforward adoption path with comprehensive documentation and examples
- Designed as a lightweight serialization format for small structured payloads between services

## Prompt Engineering Applications

- Prompt engineers craft concise structured inputs for LLM calls, reducing token costs
- Teams building prompt template libraries adopt TOON as a standardized interchange format for reusable components
- Services exchange small structured payloads where token efficiency matters
- Compatible with existing LLM workflows as a drop-in JSON replacement
