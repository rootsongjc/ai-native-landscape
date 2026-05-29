---
name: Daytona
slug: daytona
homepage: https://www.daytona.io/docs
repo: https://github.com/daytonaio/daytona
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Terminal
  - Dev Tools
  - Sandbox
description: >-
  Secure and elastic infrastructure for running AI-generated code with isolated sandboxes, concurrency and persistent
  sandbox state.
logo: ''
author: Daytona
ossDate: '2024-02-06T08:21:20.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

Daytona provides secure and elastic infrastructure for running AI-generated code. It offers fast isolated sandboxes, programmatic control via Python and TypeScript SDKs, and support for persistence and concurrent workflows, enabling safe execution of model-generated code in production and research environments.

## Key features

- Sub-90ms sandbox creation for interactive flows.
- Isolated runtimes and filesystem separation to reduce host risk.
- SDKs for Python and TypeScript with programmatic control and integrations.
- Concurrency, persistence and OCI/Docker compatibility for flexible deployments.

## Use cases

- Safely execute AI-generated code snippets inside applications.
- Build sandboxed evaluation, automated testing, and learning environments.
- Support multi-user concurrent code execution and experimentation platforms.

## Technical details

- Monorepo with TypeScript, Go and Python components; provides SDKs and extensive docs at <https://www.daytona.io/docs>.
- Deployable via Docker/OCI; careful attention required due to AGPL-3.0 license on core repo for some components.
- Active project with frequent releases and an extensive contributor community.
