---
name: Google Agent Skills
slug: google-skills
homepage: 'https://agentskills.io'
repo: https://github.com/google/skills
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - Google
  - Google Cloud
  - Agent Skills
  - Tool Protocol
description: A collection of Agent Skills for Google products and technologies, including Google Cloud services like BigQuery, Cloud Run, GKE, and more.
author: Google
ossDate: '2026-03-31'
featured: false
status: tracked
---

## Overview

Google Agent Skills is an open-source repository of reusable skills for AI agents working with Google products and technologies. Following the Agent Skills protocol, these skills can be installed via a simple CLI command and provide agents with structured knowledge about Google Cloud services, APIs, and best practices.

## Key Features

- One-command installation via `npx skills add google/skills`
- Skills covering major Google Cloud services: BigQuery, Cloud Run, GKE, Cloud SQL, AlloyDB, Firebase
- Agent Platform API skills for Gemini, Managed Agents, and Skill Registry
- Google Cloud Well-Architected Framework guidance skills (security, reliability, cost optimization, etc.)
- Onboarding and authentication recipes for Google Cloud

## Use Cases

- Equip coding agents with Google Cloud best practices and service knowledge
- Guide agents through Google Cloud onboarding, authentication, and architecture reviews
- Enable agents to work with Gemini API and Agent Platform capabilities
- Provide network observability and operational excellence guidance through agent interactions

## Technical Details

- Built on the Agent Skills protocol specification (agentskills.io)
- Skills are Markdown-based documents that agents can consume as structured context
- Supports selective installation of individual skills from the repository
