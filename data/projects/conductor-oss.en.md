---
name: Conductor OSS
slug: conductor-oss
homepage: https://conductor-oss.org/
repo: https://github.com/conductor-oss/conductor
license: Apache-2.0
category: applications-products
subCategory: workflow-automation
tags:
  - Workflow
description: >-
  An open-source, event-driven workflow and orchestration engine (originated at Netflix) for building resilient,
  observable, large-scale microservice and AI automation pipelines.
author: Conductor
ossDate: '2023-12-08T06:06:09.000Z'
featured: false
status: tracked
---
Conductor OSS is an event-driven agentic workflow engine that provides durable and highly resilient execution for applications and AI agents. Originally built at Netflix, it models business processes as versioned JSON workflow definitions to coordinate complex microservices and asynchronous tasks with deep runtime observability.

## Task and Workflow Capabilities

- Rich task types including HTTP, Lambda, sub-workflow, event, queue, and script for maximum flexibility
- Built-in retry policies, failure handling, and compensation patterns for resilient execution
- Versioned JSON workflow definitions with declarative DSL for service decoupling
- Support for long-running workflows spanning hours or days with durable state persistence

## Observability and Integration

- Built-in UI for real-time execution tracing, visual debugging, and diagnostics
- Pluggable persistence backends: Redis, MySQL, Postgres, and Elasticsearch
- Polyglot SDKs for Java, Python, Go, and more to integrate with existing tech stacks
- Execution graphs that provide full visibility into workflow state and task outcomes

## Use Cases

- Microservice orchestration and distributed transaction coordination
- Multi-stage AI agent pipelines with branching, looping, and human-in-the-loop steps
- Data ETL processing and asynchronous batch workflows
- Enterprise business processes requiring auditability and compliance tracking

## Architecture

- Event-driven durable state machine architecture supporting horizontal scaling
- Multi-environment deployment from development to production with namespace isolation
- Active open-source ecosystem with clear roadmap and contributions from the community
