---
name: Bumblebee
slug: bumblebee
homepage: null
repo: https://github.com/perplexityai/bumblebee
license: Apache-2.0
category: coding-devtools
subCategory: developer-utilities
tags:
  - Golang
  - Supply Chain Security
  - Package Inventory
description: Read-only developer endpoint scanner for on-disk package, extension, and developer-tool metadata, built to check exposure to known software supply-chain compromises.
logo: ''
author: Perplexity AI
ossDate: '2026-05-20T18:11:37Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

Bumblebee is a read-only inventory collector for package, extension, and developer-tool metadata on macOS and Linux developer endpoints. It answers a narrow supply-chain response question: when an advisory names a package, extension, or version, which developer machines show a match in their on-disk metadata right now?

## Key Features

- Single static binary, zero non-stdlib dependencies (Go 1.25+)
- Three scan profiles (`baseline`, `project`, `deep`) for different populations and cadences
- Structured NDJSON output with optional exposure catalog matching
- Covers npm, pnpm, Yarn, Bun, PyPI, Go modules, RubyGems, Composer, MCP configs, editor and browser extensions, Homebrew

## Use Cases

- Supply-chain incident response: quickly identify which developer endpoints are exposed to a compromised package
- Continuous developer endpoint inventory for security and compliance
- MCP host configuration auditing across AI coding tools

## Technical Details

- Read-only scanning of lockfiles, package-manager metadata, extension manifests, and MCP JSON configs
- No package manager execution or source-file reads
- Supports exposure catalog matching for fast, targeted checks
- Per-ecosystem coverage with structured ecosystem identifiers
