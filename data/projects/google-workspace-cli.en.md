---
name: gws
slug: google-workspace-cli
homepage: https://developers.google.com/workspace
repo: https://github.com/googleworkspace/cli
license: Apache-2.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Google Workspace
  - AI Agents
  - Rust
description: >-
  One command-line tool for all of Google Workspace — Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin and every other
  Workspace API — with its command surface built dynamically from Google's Discovery Service and 40+ agent skills included.
author: googleworkspace
ossDate: '2026-03-02'
featured: false
status: tracked
---

## Overview

gws (googleworkspace/cli) is one CLI for all of Google Workspace, built for humans and AI agents. It does not ship a static list of commands — it reads Google's Discovery Service at runtime and builds its entire command surface dynamically, so new Workspace APIs and methods appear automatically. Every response is structured JSON, and 40+ bundled agent skills let LLM agents operate Workspace without custom tooling. Note: this is not an officially supported Google product.

## Key Features

- Covers Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and every other Workspace API with zero boilerplate
- Dynamic command surface generated from Google's Discovery Service at runtime — new endpoints are picked up automatically
- Structured JSON output on every command, with `--page-all` streaming paginated results as NDJSON
- `--help` on every resource, `--dry-run` to preview requests, and auto-pagination
- Schema introspection (`gws schema drive.files.list`) for any method's request/response schema
- 40+ AI agent skills included so agents can manage Workspace directly
- Multiple auth workflows: `gws auth setup` with gcloud, manual OAuth, pre-obtained access token, or service-account credentials

## Use Cases

- Managing Drive, Gmail, Calendar, Sheets, and Chat from the terminal instead of `curl` against REST docs
- Scripting Workspace administration and automation in CI with structured JSON output
- Letting AI coding agents operate Google Workspace through the CLI and bundled skills
- Exploring and validating Workspace API request/response schemas before writing code

## Technical Details

- Written in Rust; installable as pre-built binaries from GitHub Releases, via npm (`@googleworkspace/cli` bootstraps the binary download), `cargo install --locked`, Homebrew, or a Nix flake
- The entire command tree is generated at runtime from Google's Discovery Service documents rather than compiled in, so the CLI tracks new and changed API methods without a release
- OAuth2 support spans four workflows: interactive local desktop login (gcloud-assisted setup), manual OAuth in the Cloud Console, a pre-obtained access token via `GOOGLE_WORKSPACE_CLI_TOKEN`, and service-account credentials via `GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE` for server-to-server use
- Agent-oriented ergonomics: JSON by default, `--dry-run` request preview, `--page-all` NDJSON streaming for pagination, and per-method schema introspection for `gws schema <method>`
- Under active development toward v1.0 with documented exit codes and environment-variable configuration
