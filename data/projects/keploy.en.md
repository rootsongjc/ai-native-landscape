---
name: Keploy
slug: keploy
homepage: https://keploy.io/
repo: https://github.com/keploy/keploy
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Dev Tools
  - RAG
description: >-
  A developer-centric API and integration testing tool that auto-generates tests and data mocks from real traffic,
  supporting record-and-replay of API calls, database operations, and streaming events.
author: Keploy
ossDate: '2022-01-19T10:40:31.000Z'
featured: false
status: tracked
---

## Overview

Keploy is a developer-focused API and integration testing platform that non-invasively records real runtime API calls, database queries, and streaming events at the network layer (using eBPF and similar technologies). It converts these recordings into repeatable test cases and data mocks, significantly reducing time to build tests and improving coverage.

## Key Features

- No code changes required: captures traffic at the network layer and works with any language or framework.
- Record and Replay: converts real traffic into test cases and mocks, supporting full replay of databases, queues, and external APIs.
- Coverage from traffic: computes statement and branch coverage to help expand API coverage.
- CI/CD integration: run tests locally, in CI (e.g., GitHub Actions), or across Kubernetes clusters.

## Use Cases

- Convert real production/test traffic into regression and integration tests.
- Replace complex environment dependencies in CI by running tests with mocks and infra-virtualization.
- Quickly generate high-coverage API tests to find boundary cases and unexpected behaviors.

## Technical Highlights

- Network-layer capture: uses eBPF to intercept traffic at the network level, enabling SDK-free, non-intrusive recording.
- Infra‑Virtualization: deterministic replay for databases (Postgres, MySQL, MongoDB), message queues (Kafka, RabbitMQ), and more.
- Language-agnostic: because it operates at the network layer, it supports any language or framework; the project is implemented primarily in Go.
