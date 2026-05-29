---
name: ToolHive
slug: toolhive
homepage: https://toolhive.dev
repo: https://github.com/stacklok/toolhive
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - CLI
  - Deployment
  - Dev Tools
description: >-
  An enterprise platform for deploying and governing MCP servers, featuring registry, runtime, gateway, and portal
  components.
logo: ''
author: StackLok
ossDate: '2025-03-12T14:49:15Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

ToolHive is an enterprise-focused platform for managing Model Context Protocol (MCP) servers. It combines a Registry, Runtime, Gateway, and Portal to make deploying, securing, and discovering MCP servers straightforward across desktop, cloud, and Kubernetes environments. Security and governance are central: ToolHive emphasizes container isolation, least-privilege execution, and secure secrets handling.

## Main Features

- Instant deployment via UI, CLI, or Kubernetes Operator.
- Secure-by-default runtime with isolated containers and managed secrets.
- Registry for curating trusted MCP servers and verifying provenance.
- Gateway for centralized policy, authentication, authorization, and auditing.

## Use Cases

ToolHive fits teams and organizations that need a curated catalog of MCP services, secure deployment workflows, and developer-friendly discovery tools. Common uses include provisioning MCP servers for internal tools, integrating MCP into CI/CD workflows, and enabling safe multi-environment operations for model-context tooling.

## Technical Features

The platform supports local container and Kubernetes deployments, extensible runtime adapters, observability via OpenTelemetry and Prometheus, and a modular architecture that allows plugins and integrations for custom MCP tools and client integrations.
