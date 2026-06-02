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
status: tracked
---

## Overview

Conductor OSS is an event-driven agentic workflow engine that provides durable and highly resilient execution for applications and AI agents. Originally built at Netflix, it models business processes as versioned JSON workflow definitions to coordinate complex microservices and asynchronous tasks with deep runtime observability.

## Key Features

Conductor offers rich task types including HTTP, Lambda, sub-workflow, event, queue, and script, with built-in retry, failure handling, and compensation patterns. It provides a built-in UI for execution tracing, pluggable persistence backends (Redis, MySQL, Postgres, Elasticsearch), and polyglot SDKs for Java, Python, Go, and more.

## Use Cases

Conductor is ideal for microservice orchestration, multi-stage AI agent pipelines, and distributed transaction coordination. It also supports data ETL processing, asynchronous batch workflows, and human-in-the-loop business processes requiring long-running execution.

## Technical Details

Conductor uses an event-driven durable state machine architecture that supports horizontal scaling and multi-environment deployment. It enables service decoupling through declarative DSL definitions, provides full observability with execution graphs and diagnostics, and maintains an active open-source ecosystem with clear roadmap.
