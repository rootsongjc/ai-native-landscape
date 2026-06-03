---
name: Dembrandt
slug: dembrandt
homepage: null
repo: https://github.com/thevangelist/dembrandt
license: MIT
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
author: thevangelist
ossDate: '2025-11-22T13:49:09Z'
featured: false
status: tracked
---
## Overview

Dembrandt is a Playwright-based CLI tool that extracts any website's design system into structured design tokens in seconds. It renders pages, collects computed styles, analyzes color usage and typography patterns, and assigns confidence scores to results for audits and documentation workflows.

## Key Features

- Automatic extraction of logos, semantic colors, palettes, CSS variables, and typography from any website.
- Detection of spacing scales, border radii, shadows, and responsive breakpoints.
- JSON output with confidence metadata and support for flags like `--dark-mode`, `--mobile`, and `--debug`.

## Use Cases

- Brand audits and competitive analysis to quickly capture visual guidelines across sites.
- Building or documenting a design system and tokens library from existing websites.
- Consolidating styles across multiple sites for rebranding or migration projects.

## Technical Details

- Uses Playwright to render pages with anti-detection scripts for robust extraction.
- Extracts computed DOM styles, groups similar colors, and scores color confidence.
- Runs extractors in parallel and waits for SPA hydration to capture dynamic content completely.
