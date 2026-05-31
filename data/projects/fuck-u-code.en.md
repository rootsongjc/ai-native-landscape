---
name: fuck-u-code
slug: fuck-u-code
homepage: null
repo: https://github.com/done-0/fuck-u-code
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: A static analysis tool that assesses codebase 'legacy-mess' and generates readable Markdown reports.
logo: ''
author: Done-0
ossDate: '2025-06-25T16:40:22.000Z'
featured: false
status: tracked
---

## Overview

fuck-u-code is a static analysis tool focused on assessing the "legacy-mess" level of codebases and producing beautiful, Markdown-formatted reports. It supports multiple languages (primarily Go) and is designed for local and CI usage.

## Key Features

- Multi-language support: Go primary, with support for JS/TS, Python, Java, C/C++.
- Mess scoring: evaluates complexity, function length, comment ratio, error handling and more.
- Configurable output: Markdown reports, summary views, and detailed issue lists.
- Local and containerized runs: binary installation and Docker builds for CI integration.

## Use Cases

- CI reporting: generate quality trend reports and issue lists in CI workflows.
- Code review assistance: provide quantitative metrics to focus review efforts.
- Team quality monitoring: track technical debt and prioritize refactors.

## Technical Details

- Implemented in Go for a single distributable binary.
- Rich CLI options (e.g., --top, --issues, --markdown, --lang) for customizable analysis.
- Outputs prioritized for readability and export to Markdown for reporting.
