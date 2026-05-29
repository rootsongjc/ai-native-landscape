---
name: Agent Skills
slug: agentskills
homepage: https://agentskills.io
repo: https://github.com/agentskills/agentskills
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Reference
description: An open format and documentation for describing, sharing, and discovering agent skills.
logo: ''
author: Anthropic
ossDate: '2025-12-16T15:47:19Z'
featured: false
status: tracked
---

## Detailed Introduction

Agent Skills is an open format and documentation set for agents, designed to define how skills are described, discovered, and shared. Skills consist of documentation, examples, and metadata that make it easier for different agents to implement and reuse capabilities, improving composability and reliability when solving complex tasks. The project includes the specification, reference implementations, and examples to help developers and the community get started.

## Main Features

- Unified specification: a clear format for declaring skill capabilities, inputs/outputs, and metadata.
- Discoverability: standardized directories and examples enable indexing and lookup of skills for agents to load on demand.
- Reference implementations: documentation and example repositories demonstrate how to author and test skills.
- Community-driven: initiated by Anthropic and open to community contributions under an open-source workflow.

## Use Cases

- Extending agent capabilities: provide reusable modules for chat assistants, task agents, and automation pipelines.
- Skill marketplace: enable third parties to publish reusable skills in a discoverable catalog.
- Integration and interoperability: allow different agent platforms to call skills using a shared format, improving cross-platform compatibility.

## Technical Characteristics

- Documented specification: human-readable formats define skill interfaces and expected behavior.
- Language-agnostic: the spec focuses on capabilities and metadata; examples are provided in Python and other languages.
- Verifiable: examples and tests accompany the spec to validate correctness and compatibility.
