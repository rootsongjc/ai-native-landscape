---
name: Conductor OSS
slug: conductor-oss
homepage: https://conductor-oss.org/
repo: https://github.com/conductor-oss/conductor
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Workflow
description: >-
  An open-source, event-driven workflow and orchestration engine (originated at Netflix) for building resilient,
  observable, large-scale microservice and AI automation pipelines.
logo: ''
author: Conductor
ossDate: '2023-12-08T06:06:09.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

Conductor OSS is an event‑driven, durable workflow/orchestration engine originally built at Netflix to coordinate complex microservices and asynchronous tasks. It models business processes as versioned JSON workflow definitions composed of diverse task types (HTTP, sub-workflow, event, queue, script, etc.), enabling decoupled service evolution, resilience, and deep runtime observability across cloud‑native and enterprise systems.

## Key Features

- JSON workflow definitions with versioning & evolution
- Rich task library: HTTP, Lambda, Event, Sub-workflow, Queue, Script, more
- Retries, failure handling, compensation patterns
- Built‑in UI for execution tracing & debugging
- Pluggable persistence and indexing (Redis, MySQL, Postgres, Elasticsearch / OpenSearch)
- Polyglot SDKs (Java, Python, JavaScript/TypeScript, Go, C#)
- Extensible event & queue integrations

## Use Cases

- Microservice orchestration & distributed transaction coordination
- Multi‑stage AI agent / toolchain pipelines (ingest → reasoning → enrichment → notify)
- Data / ETL and asynchronous batch processing
- Human‑in‑the‑loop or long‑running business workflows

## Technical Characteristics

- Event‑driven durable state machine architecture for scale & resilience
- Service decoupling via declarative DSL and task abstraction
- Full observability: execution graph, metrics, failure diagnostics
- Horizontal scaling & multi‑environment deployment flexibility
- Active OSS ecosystem with clear roadmap and ongoing community maintenance
