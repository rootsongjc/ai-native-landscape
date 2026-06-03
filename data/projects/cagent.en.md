---
name: cagent
slug: cagent
homepage: https://www.docker.com
repo: https://github.com/docker/cagent
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
  - Runtime
description: A containerized runtime and agent builder for building and running lightweight AI agents.
author: Docker
ossDate: '2025-09-01T12:14:45Z'
featured: false
status: tracked
---
cagent is an AI Agent Builder and Runtime developed by Docker Engineering that enables developers to build and run AI agents using Docker's container infrastructure. It provides a unified workflow from agent construction to deployment, leveraging containerization for resource isolation, scalability, and seamless integration with cloud-native and edge environments.

## Unified Builder and Runtime

- Unified agent builder and runtime supporting both container images and local debugging for rapid development iteration
- Native container resource isolation and scheduling with full Kubernetes deployment compatibility
- Go-based implementation with emphasis on low overhead and extensibility using containerization and daemon patterns
- Production reliability through battle-tested container orchestration patterns

## Observability and Integration

- Built-in telemetry and monitoring interfaces that integrate with Prometheus and Grafana for production-grade observability
- Integrates with existing CI/CD pipelines and monitoring ecosystems without additional tooling overhead
- Designed for production orchestration with support for scalable multi-agent deployments
- Operational tooling for managing agent lifecycles at scale

## Deployment Scenarios

- Hosting autonomous AI agents, data collectors, or lightweight task runners in cloud-native or edge environments
- Rapidly building, iterating, and deploying agent services while maintaining stable operation and performance observability
- Integrating AI agent workloads into existing Docker and Kubernetes infrastructure seamlessly
- Multi-agent deployment with full resource isolation and scheduling guarantees
