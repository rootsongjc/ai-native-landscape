---
name: dbx
slug: dbx
homepage: https://dbxio.com
repo: https://github.com/t8y2/dbx
license: Apache-2.0
category: coding-devtools
subCategory: developer-utilities
tags:
  - Database Client
  - Rust
  - MCP
  - AI Assistant
description: >-
  A 25 MB cross-platform database client for 100+ databases — MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB, SQL Server,
  Dameng and more — shipping desktop, Docker, CLI, and web builds with a built-in AI assistant and an MCP server.
author: t8y2
ossDate: '2026-04-29'
featured: false
status: tracked
---

## Overview

DBX is a lightweight cross-platform database client that packs support for 100+ databases into a single 25 MB binary — no Java JRE, Python venv, or bundled Chromium, unlike Java-based or freemium alternatives. It covers MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB, SQL Server, Oracle, ClickHouse, and Chinese domestic databases like Dameng, OceanBase, and openGauss, and also gives message queues and middleware (Kafka, RocketMQ, RabbitMQ, Pulsar, MQTT, Nacos, etcd) first-class consoles. A built-in AI assistant writes SQL from natural language, and an MCP server exposes your connections to AI coding agents.

## Key Features

- 100+ databases supported, including MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB, SQL Server, Oracle, Elasticsearch, ClickHouse, TiDB, StarRocks, Redshift, Dameng, OceanBase, openGauss, and TDengine
- First-class consoles for middleware: Kafka, RocketMQ, RabbitMQ, Pulsar, and MQTT, plus Nacos, Consul, ZooKeeper, and etcd
- Built-in AI assistant: highlight a table, describe what you want, get SQL back — with Claude, OpenAI, or local models via Ollama — and safety checks review AI-generated SQL before it runs
- MCP server so Claude Code, Cursor, Windsurf, and other agents can query your databases through connections you already configured
- One tool, every form factor: native desktop on macOS, Windows, and Linux; Docker for self-hosted team access; a web version; and a CLI
- Small single binary (~25 MB) with zero runtime bloat

## Use Cases

- Replacing heavyweight Java-based clients with one small binary that connects to everything
- Generating and reviewing SQL with AI inside the editor instead of copy-pasting between tools
- Letting AI coding agents query real databases over MCP during development
- Teams self-hosting a shared database console via Docker, including message-queue inspection alongside databases

## Technical Details

- Built with Tauri: a Rust core with a Vue frontend, shipped as a single ~25 MB binary — no JVM, Python runtime, or bundled Chromium required at install time
- Wide protocol coverage spans relational (MySQL, PostgreSQL, SQL Server, Oracle, Dameng, OceanBase, openGauss, KingbaseES), embedded/analytical (SQLite, DuckDB, ClickHouse, TiDB, StarRocks), NoSQL (Redis, MongoDB, Elasticsearch), time-series (TDengine, InfluxDB), cloud warehouses (Redshift, Spanner), and a generic JDBC bridge
- The AI assistant calls Claude, OpenAI, or local Ollama models to turn a selected table plus a natural-language description into SQL, and runs safety checks on the generated statement before execution
- Speaks the Model Context Protocol, exposing already-configured connections so MCP clients (Claude Code, Cursor, Windsurf) query databases through one shared config
- Distributed as native desktop apps for macOS, Windows, and Linux, a Docker image for self-hosted deployments, a web version, and a CLI — all sharing the same feature set and connections
