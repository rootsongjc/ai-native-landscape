---
name: Dembrandt
slug: dembrandt
homepage: null
repo: https://github.com/thevangelist/dembrandt
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
  - UI
  - Utility
description: >-
  A Playwright-based CLI tool that extracts logos, colors, typography, spacing, and components from any website and
  exports structured design tokens as JSON.
logo: ''
author: thevangelist
ossDate: '2025-11-22T13:49:09Z'
featured: false
status: tracked
---

## Detailed Introduction

Dembrandt is a Playwright-based command-line tool that extracts a website's design system into structured design tokens (JSON) in seconds. It renders pages, collects computed styles, analyzes color usage and typography patterns, and assigns confidence scores to results—making it useful for audits, documentation, and multi-site consolidation workflows.

## Key Features

- Extract logos, semantic colors, palettes, CSS variables, and typography automatically.
- Detect spacing scales, border radii, shadows, and responsive breakpoints.
- Save JSON output to `output/domain.com/YYYY-MM-DDTHH-MM-SS.json` with confidence metadata.
- Support flags like `--json-only`, `--dark-mode`, `--mobile`, and `--debug` for flexible extraction modes.

## Use Cases

- Brand audits and competitive analysis to capture visual guidelines quickly.
- Building or documenting a design system and tokens library.
- Consolidating styles across multiple sites for rebranding or migration.
- Generating baseline style references for frontend engineering.

## Technical Features

- Renders pages with Playwright and injects anti-detection scripts for robustness.
- Extracts computed DOM styles, groups similar colors, and scores color confidence.
- Waits for SPA hydration to ensure dynamic content is captured.
- Runs extractors in parallel to speed up collection and analysis, producing confidence-scored tokens.
