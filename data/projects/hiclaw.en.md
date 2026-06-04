---
name: HiClaw
slug: hiclaw
homepage: null
repo: https://github.com/higress-group/hiclaw
license: Apache-2.0
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Automation
  - Orchestration
  - Workflow
description: Open-source Agent Teams system with IM-based multi-Agent collaboration and human-in-the-loop oversight
author: Higress Group
ossDate: '2026-02-21'
featured: false
status: tracked
---

## Overview

HiClaw is an open-source Agent Teams system built on OpenClaw. It features a Manager-Worker architecture where the Manager Agent acts as your AI chief of staff—creating Workers, assigning tasks, monitoring progress, and reporting back. You stay in control, making decisions instead of babysitting agents.

All communication happens in Matrix Rooms. You see everything and can intervene anytime—just like messaging a team in a group chat.

## Key Features

**Security by Design**

- Workers never hold real API keys or GitHub PATs
- Workers only carry a consumer token (like a badge)
- Even a compromised Worker can't leak your credentials
- Higress AI Gateway manages all real credentials centrally

**Truly Open IM**

- Built-in Matrix server means no Slack/Feishu bot approval process
- Open Element Web in your browser, or use any Matrix client (Element, FluffyChat)
- Cross-platform support: iOS, Android, Web
- Zero configuration required

**One Command to Start**

- Single `curl | bash` sets everything up
- Automatically deploys Higress AI Gateway, Matrix server, file storage, web client, and Manager Agent
- Minimal configuration, ready to use out of the box

**Rich Skills Ecosystem**

- Workers can pull from skills.sh (80,000+ community skills) on demand
- Safe to use because Workers can't access real credentials
- Dynamic skill loading and unloading

**Human-in-the-Loop Oversight**

- Every Matrix Room includes you, the Manager, and relevant Workers
- Jump into conversations at any point to intervene
- No black boxes, no hidden agent-to-agent calls
- Manager runs periodic heartbeats and automatically alerts if a Worker gets stuck

## Use Cases

**Software Development Teams**

- Frontend development automation (UI implementation, component development)
- Backend development automation (API development, database design)
- Code review and testing
- Multi-person collaborative development task assignment

**DevOps & Operations**

- Automated deployment workflows
- Monitoring and alert handling
- Infrastructure management
- Troubleshooting and remediation

**Content Creation & Generation**

- Documentation writing
- Code generation and optimization
- Multi-language translation
- Technical article creation

**Data Analysis & Research**

- Data collection and processing
- Report generation
- Research task assignment
- Result aggregation and analysis

## Technical Highlights

**Architecture**

- **Manager Agent**: Built on OpenClaw, manages Worker lifecycle
- **Higress AI Gateway**: LLM proxy, MCP Server hosting, credential management
- **Tuwunel (Matrix)**: IM server for all Agent and Human communication
- **Element Web**: Browser client, zero setup
- **MinIO**: Centralized file storage, Workers are stateless
- **OpenClaw**: Agent runtime with Matrix plugin and skills system

**Deployment Model**

- Distributed container deployment
- One-command install script support
- Docker Desktop / Docker Engine / Podman Desktop compatible
- Resource requirements: Minimum 2 CPU cores and 4GB RAM

**Security Model**

- Workers only see their consumer token
- Gateway handles all real credentials
- Manager knows what Workers are doing but never touches actual keys

**Communication Protocol**

- Matrix protocol-based instant messaging
- End-to-end encryption support
- Open standard, works with any Matrix client
- Mobile access support

**Extensibility**

- Dynamic Worker creation and destruction
- Skills ecosystem (80,000+ skills)
- MCP Server integration
- Direct Worker interaction through Matrix Rooms
