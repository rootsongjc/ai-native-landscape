---
name: MindsDB
slug: mindsdb
homepage: https://mindsdb.com
repo: https://github.com/mindsdb/mindsdb
license: Unknown
category: rag-knowledge
subCategory: data-connectors
tags:
  - MCP
description: >-
  AI's query engine - Platform for building AI that can answer questions over large scale federated data - The only MCP
  Server you'll ever need.
author: MindsDB
ossDate: '2018-08-02T17:56:45.000Z'
featured: false
status: tracked
---

MindsDB is an open-source server that can be deployed anywhere - from your laptop to the cloud. It has a built-in MCP server that can connect, unify, and respond to questions over large-scale federated data.

## Installing MindsDB Server

MindsDB supports multiple installation methods: using Docker Desktop (recommended for getting started), Docker (offering more customization flexibility), or PyPI (suitable for development contributions).

## Core Concepts: Connect, Unify, Respond

MindsDB's architecture is built on three fundamental capabilities:

### Connect Your Data

You can connect to hundreds of enterprise data sources. These integrations allow MindsDB to access data where it resides, laying the foundation for all functionality.

### Unify Your Data

MindsDB's federated query engine supports SQL queries across different data sources. It provides three types of virtual tables:

- Views: Simplify data access without ETL
- Knowledge Bases: Index and organize unstructured data
- Machine Learning Models: Apply AI/ML to gain insights

Data unification can be automated through jobs, scheduling synchronization and transformation tasks.

### Respond From Your Data

MindsDB offers two ways to interact with your data:

- Agents: Built-in agents to answer data-related questions
- MCP: Seamless interaction through Model Context Protocol
