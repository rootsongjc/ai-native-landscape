---
name: mcp-toolbox
slug: mcp-toolbox
homepage: https://mcp-toolbox.dev/documentation/introduction/
repo: https://github.com/googleapis/mcp-toolbox
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Database
  - NL2SQL
  - Google Cloud
description: >-
  An open source Model Context Protocol (MCP) server that connects AI agents, IDEs, and applications
  directly to enterprise databases, with prebuilt generic tools plus a framework for building custom,
  secure tools. Formerly Gen AI Toolbox for Databases.
author: googleapis
ossDate: '2024-06-07'
featured: false
status: tracked
---

## Overview

MCP Toolbox for Databases, formerly Gen AI Toolbox (genai-toolbox), is an open source MCP server that connects AI agents, IDEs, and applications directly to enterprise databases. It serves a dual purpose: ready-to-use prebuilt tools that let MCP clients like Gemini CLI, Claude Code, and Codex talk to your data immediately, and a framework for building specialized, production-grade tools with structured queries, semantic search, and NL2SQL behind restricted access.

## Key Features

- Prebuilt generic tools (`list_tables`, `execute_sql`, and more) enabled instantly with `--prebuilt=<database>`, including click-to-install via the Google Antigravity MCP Store
- Custom tools framework configured through `tools.yaml`: predefined structured queries, semantic search, and NL2SQL capabilities with restricted access
- Broad engine support — AlloyDB, BigQuery, Cloud SQL, Spanner, Firestore, Knowledge Catalog, PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, MongoDB, Redis, Elasticsearch, CockroachDB, ClickHouse, Couchbase, Neo4j, Snowflake, Trino, and more
- Client SDKs in Python, JS/TS, Go, and Java that integrate tools into ADK, LangChain, LlamaIndex, or custom agents in under 10 lines of code
- Connection pooling, integrated authentication (IAM), and end-to-end OpenTelemetry observability out of the box

## Use Cases

- Connecting an IDE or CLI MCP client to a database to query data in plain English, explore schemas, and generate database-aware code
- Building production agent tools with your own predefined query logic instead of exposing raw database access
- Giving LangChain, LlamaIndex, or Agent Development Kit applications safe, typed database tools

## Technical Details

- Tools are declared declaratively in `tools.yaml` (multiple files via `--config`): sources, tools, and toolsets are defined separately and composed, so a tool binds parameters to a predefined statement rather than accepting arbitrary SQL
- Prebuilt mode loads per-engine standard toolsets over stdio — `--prebuilt=<database>` or a subset like `--prebuilt=postgres/data` — and is also distributed as the npm package `@toolbox-sdk/server` for npx-based MCP client configuration
- The server handles connection pooling and IAM-based authentication, and emits metrics and traces through built-in OpenTelemetry support
- Four official SDKs (Python `toolbox-core`, JS/TS `@toolbox-sdk/core`, Go, Java) load tool definitions from the running server and expose them as native methods for agent frameworks
