---
name: HolmesGPT
slug: holmesgpt
homepage: https://holmesgpt.dev/
repo: https://github.com/holmesgpt/holmesgpt
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - AI Agent
description: >-
  An AI agent platform for cloud-native environments that automates alert investigation, root cause analysis, and
  remediation suggestions.
author: CNCF
ossDate: '2024-05-30T13:27:10Z'
featured: false
status: tracked
---

HolmesGPT is a CNCF Sandbox project that serves as an AI-powered site reliability engineering (SRE) assistant. It automates alert investigation, analyzes multi-source observability data, identifies root causes, and provides actionable remediation suggestions for cloud-native infrastructure.

## Key Features

- Multi-source integration with Prometheus, Kubernetes, AWS, Datadog, and other mainstream cloud-native and monitoring platforms
- Agentic loop architecture that combines LLMs with multi-source observability data for automated analysis and reasoning
- Automated investigation that collects context, identifies root causes, and generates remediation plans
- Custom data source and runbook support for extending investigation capabilities
- Data privacy through read-only permissions and bring-your-own LLM API key configurations

## Deployment Options

- CLI tool for quick investigations directly from the terminal
- SaaS deployment option for team-based workflows
- Pluggable toolset architecture for adding new data sources and integrations

## Use Cases

- Automated incident investigation and root cause analysis in cloud-native environments
- SRE team alert response and collaborative troubleshooting
- Unified monitoring across multi-cloud and hybrid cloud deployments
- Automated runbook execution for common remediation workflows
- Smart assistant in DevOps and ChatOps scenarios
