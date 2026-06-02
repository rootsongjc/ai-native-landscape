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
status: tracked
---

## Overview

ToolHive is an enterprise-grade platform for deploying and managing Model Context Protocol (MCP) servers across desktop, cloud, and Kubernetes environments. It combines a registry, runtime, gateway, and portal into a unified system designed with security-first principles, featuring container isolation, least-privilege execution, and centralized secrets management for production MCP workloads.

## Key Features

ToolHive enables instant MCP server deployment through a web portal, CLI, or Kubernetes Operator with a single command. The secure-by-default runtime isolates each server in its own container with managed network policies and secrets, eliminating plaintext credential exposure. A built-in registry curates trusted MCP server catalogs with provenance verification, while the gateway enforces centralized authentication, authorization, and audit policies across all deployments.

## Use Cases

Platform teams use ToolHive to maintain a governed catalog of internal MCP tools and provision them securely for development teams. Organizations integrate it into CI/CD pipelines to automate MCP server deployment and configuration across staging and production environments. It also serves as the backbone for multi-environment MCP operations where compliance, auditing, and policy enforcement are required.

## Technical Details

ToolHive supports local container and Kubernetes deployments with extensible runtime adapters for custom MCP tooling. Observability is built in through OpenTelemetry and Prometheus integration, providing metrics, traces, and audit logs. The modular architecture supports plugins for custom client integrations and can be extended to work with diverse MCP backends and enterprise identity providers.
