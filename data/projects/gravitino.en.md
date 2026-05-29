---
name: Gravitino
slug: gravitino
homepage: https://gravitino.apache.org
repo: https://github.com/apache/gravitino
license: Unknown
category: rag-knowledge
subCategory: data-connectors
tags:
  - Connector
  - Data
description: >-
  A high-performance, geo-distributed and federated metadata lake for unified metadata access and governance of data and
  AI assets.
logo: ''
author: Apache
ossDate: '2023-04-23T00:00:00.000Z'
featured: false
status: tracked
---

Gravitino is a metadata lake solution designed for large-scale data and AI scenarios. It provides a unified metadata model, federated query and governance features across regions, focusing on unifying metadata for tables, models, features, lineage, and model artifacts to support discovery, audit, access control, and AI asset management.

## Key features

- Unified metadata model: Abstracts metadata from different stores and services into a consistent model for easier discovery and governance.
- Federated and geo-distributed: Native support for multi-region deployments and cross-domain synchronization.
- Governance and auditing: Built-in access controls, audit logs, and policy mechanisms to meet compliance and security requirements.
- Multi-engine compatibility: Integrates with engines like Trino and Spark and supports table formats such as Iceberg.

## Use cases

- Unified metadata portal: Provide cross-lake and cross-repository metadata search and management for data engineers and data scientists.
- AI asset management: Track models, features, datasets, their lineage and versions to support reproducible ML lifecycles.
- Multi-region synchronization: Keep metadata consistent and policies synchronized across multi-cloud and multi-region environments.

## Technical highlights

- Scalable service design to handle high-concurrency metadata queries and changes.
- Rich set of connectors to collect metadata from databases, object stores, and table formats.
- Comprehensive documentation and a Docker Compose playground for quick evaluation.
