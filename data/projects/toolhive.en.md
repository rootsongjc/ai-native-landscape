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
author: StackLok
ossDate: '2025-03-12T14:49:15Z'
featured: false
status: tracked
---

ToolHive is an enterprise-grade platform for deploying and managing Model Context Protocol (MCP) servers across desktop, cloud, and Kubernetes environments. It combines a registry, runtime, gateway, and portal into a unified system designed with security-first principles, featuring container isolation, least-privilege execution, and centralized secrets management for production MCP workloads.

## Deployment and Runtime

- Instant MCP server deployment through a web portal, CLI, or Kubernetes Operator with a single command
- Secure-by-default runtime that isolates each server in its own container with managed network policies
- Centralized secrets management that eliminates plaintext credential exposure
- Support for both local container and Kubernetes deployments with extensible runtime adapters

## Registry and Gateway

- Built-in registry that curates trusted MCP server catalogs with provenance verification
- Gateway that enforces centralized authentication, authorization, and audit policies across all deployments
- Modular architecture with plugins for custom client integrations and diverse MCP backends
- Enterprise identity provider integration for unified access control

## Platform Operations

- Platform teams maintain a governed catalog of internal MCP tools and provision them securely for development teams
- CI/CD pipeline integration automates MCP server deployment and configuration across staging and production
- Multi-environment MCP operations with compliance, auditing, and policy enforcement
- Observability built in through OpenTelemetry and Prometheus integration, providing metrics, traces, and audit logs
