---
name: Strix
slug: strix
homepage: https://strix.ai
repo: https://github.com/usestrix/strix
license: Apache-2.0
category: platform-infra
subCategory: security-policy
tags:
  - AI Security
  - Penetration Testing
  - Agent Framework
  - Red Teaming
description: Open-source AI penetration testing tool that finds and fixes your application's vulnerabilities with autonomous security agents.
author: usestrix
ossDate: '2025-08-05T21:28:30Z'
featured: false
status: tracked
---

## Overview

Strix is an open-source AI penetration testing tool that uses autonomous security agents to find and fix vulnerabilities in your applications. It combines LLM-driven reasoning with offensive-security workflows, supporting bug bounty hunting, CTF challenges, red teaming, and continuous security automation.

## Key Features

- Autonomous AI agents for end-to-end penetration testing.
- Finds and fixes vulnerabilities, not just reports them.
- Supports bug bounty, CTF, red teaming, and security automation workflows.
- Strong community traction across the security engineering world.

## Use Cases

- AI-driven penetration testing of web applications.
- Continuous automated security scanning in development pipelines.
- Bug bounty hunting and CTF assistance with agent support.

## Technical Details

- Agents run the target code dynamically and validate findings with working proofs-of-concept, avoiding the false positives of static scanners.
- Multi-agent orchestration: teams of AI pentesters that collaborate and scale across reconnaissance, exploitation, and validation.
- Docker-based sandboxed execution; works with any LLM provider (OpenAI, Anthropic, Google) via a single env config.
- Auto-generates patches for findings plus compliance-ready pentest reports; runs in GitHub Actions to block vulnerable PRs.
