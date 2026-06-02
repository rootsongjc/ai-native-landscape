---
name: Agent Sandbox
slug: agent-sandbox
homepage: https://agent-sandbox.sigs.k8s.io
repo: https://github.com/kubernetes-sigs/agent-sandbox
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agents
  - Orchestration
description: >-
  An experimental sandbox project by Kubernetes SIGs aiming to provide a Kubernetes-native environment for running,
  orchestrating, and managing agent workloads securely and at scale.
logo: ''
author: Kubernetes SIGs
ossDate: '2025-08-12T04:55:05Z'
featured: false
status: tracked
---

## Overview

Agent Sandbox is an experimental project by Kubernetes SIGs that enables easy management of isolated, stateful, singleton workloads ideal for AI agent runtimes on Kubernetes. It provides a Kubernetes-native sandbox for running, orchestrating, and managing autonomous agent workloads securely and at scale within cluster environments.

## Key Features

- Kubernetes-native integration using CRDs and Controllers to express and manage agent lifecycles.
- Security isolation at the container and Pod level to reduce risks during agent execution.
- Scalable orchestration supporting parallel and coordinated agent executions with Kubernetes scheduling and autoscaling.

## Use Cases

- Agent runtime testing and validation of behavior and resource usage in real cluster environments.
- Multi-agent orchestration evaluating coordination and fault-tolerance strategies for distributed systems.
- Security and compliance evaluation testing agent access patterns and policies in isolated environments.

## Technical Details

- Hosted under the Apache-2.0 license with example manifests, controller code, and runtime adapters.
- Prototype-first design serving as a research and evaluation platform for experimenting with runtimes and orchestration strategies.
- Supports reproduction and extension of experiments across different Kubernetes cluster setups.
