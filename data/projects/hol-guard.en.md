---
name: HOL Guard
slug: hol-guard
homepage: https://hol.org/guard
repo: https://github.com/hashgraph-online/hol-guard
license: Apache-2.0
category: platform-infra
subCategory: security-policy
tags:
  - AI Agent
  - Security
  - Runtime
  - Policy
  - Coding Agents
  - MCP
description: Open-source security tool for AI coding agents that checks selected tool actions against local policy before they run on supported integrations, and scans installed skills, plugins, and MCP configuration for risks.
author: HOL (Hashgraph Online)
ossDate: '2026-03-28T19:02:15Z'
status: tracked
---

## Overview

HOL Guard is an open-source security tool for AI coding agents. On supported integrations it reviews selected agent actions before they run, such as shell commands, file access, package installs, and MCP tool calls, and allows, blocks, or asks for approval according to a local policy. It only sees the events each agent exposes to it, and it does not replace an operating-system sandbox.

## Key Features

- Pre-execution checks on agent tool actions, with allow, block, or approval decisions based on local policy.
- Inventory and review of installed skills, plugins, agent configuration, and MCP servers.
- Checks of supported package-manager installs against supply-chain advisory data.
- Screening of prompts and tool results for prompt injection and sensitive content on supported events.
- Local record of decisions, with a CLI and a local dashboard for handling approvals.

## Use Cases

- Adding a policy check in front of the commands and tool calls a coding agent makes on a developer machine.
- Reviewing new or changed skills, plugins, and MCP servers before an agent uses them.
- Checking agent plugins, skills, and MCP integrations before publishing them, using the bundled `plugin-scanner` CLI.

## Technical Details

- Written mainly in Rust and Python; installed from PyPI with `pipx install hol-guard`.
- Connects through native agent hooks, managed MCP proxies, and launch integrations. Coverage differs per agent, and the project's support matrix lists what is and is not covered for each one.
- Runs locally without an account; an optional hosted service adds shared history and team policy.
