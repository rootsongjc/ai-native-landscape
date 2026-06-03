---
name: Aspire
slug: aspire
homepage: https://aspire.dev
repo: https://github.com/dotnet/aspire
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application Framework
  - CLI
  - Deployment
  - Dev Tools
description: A code-first, integrated toolchain for building observable, production-ready distributed applications.
author: .NET Foundation
ossDate: '2023-09-25T23:49:49Z'
featured: false
status: tracked
---

.NET Aspire is a code-first, extensible toolchain for building observable, production-ready cloud-native applications. It expresses services, resources, and connections as a single source of truth, letting developers launch and debug an entire distributed app locally with one command and deploy the same composition to Kubernetes or cloud providers.

## Developer Experience

- **Code-first app model** with project templates that reduce boilerplate configuration
- **Single-command local run/debug** for multi-service applications with automatic dependency wiring
- **Visual dashboard** displaying service topology, health checks, logs, and traces
- **Hot reload** support for rapid iteration during development

## Observability & Integration

- Built-in service discovery and dependency injection for .NET services
- OpenTelemetry integration for distributed tracing, metrics, and structured logging
- Health check endpoints and real-time resource monitoring in the dashboard
- Automatic container orchestration for databases, caches, and message brokers

## Deployment & Extensibility

- Generates deployment manifests compatible with Kubernetes and major cloud providers
- Extensible component model for adding custom integrations and cloud services
- CI/CD friendly with CLI-based workflows for build, test, and publish pipelines
- Cross-platform support running on Windows, macOS, and Linux

## When to Use Aspire

- Microservice composition and local integration testing
- Teams that need tight coupling between coding and observability
- Enterprise environments requiring consistent dev-to-prod parity
- Rapid prototyping of distributed .NET applications with minimal ops overhead
