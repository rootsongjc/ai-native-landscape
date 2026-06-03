---
name: MCP Scanner
slug: mcp-scanner
homepage: https://www.cisco.com/site/us/en/products/security/ai-defense/index.html
repo: https://github.com/cisco-ai-defense/mcp-scanner
license: Unknown
category: training-optimization
subCategory: safety-guardrails
tags:
  - Dev Tools
  - Safety
description: >-
  A tool to scan MCP servers and tools for potential security issues, using multi-engine analysis and customizable
  reporting.
author: Cisco AI Defense
ossDate: '2025-09-24T01:02:24.000Z'
featured: false
status: tracked
---

## Introduction

MCP Scanner is a security scanning toolkit from Cisco AI Defense that inspects MCP (Model Context Protocol) servers, tools, prompts, and resources for potential vulnerabilities. It combines multiple analyzers—YARA rules, LLM-as-judge, and Cisco AI Defense analyzers—into flexible pipelines that can run independently or together.

## Key features

- Multi-engine analysis: combine YARA, LLM judgment, and Cisco AI Defense engines.
- Multiple modes: CLI, REST API server, and SDK for integration and automation.
- Customizable rules and reporting formats for auditability and workflow integration.

## Use cases

- Security audits of public or internal MCP services.
- Integrating scanning into CI/CD pipelines to catch vulnerabilities early.
- Incident investigation and baseline security checks for security teams.

## Technical highlights

- Python-based implementation with async REST API, pluggable analyzers, and benchmark tooling.
- Supports OAuth and Bearer Token authentication, and can integrate cloud LLM providers to enhance detection.
- Comprehensive docs and benchmark suite for reproducible testing and performance evaluation.
