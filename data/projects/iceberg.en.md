---
name: Apache Iceberg
slug: iceberg
homepage: https://iceberg.apache.org/
repo: https://github.com/apache/iceberg
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - Data
description: >-
  A high-performance table format for huge analytic tables, offering snapshots, transactions and multi-engine
  compatibility.
logo: ''
author: Apache
ossDate: '2018-11-19T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

Apache Iceberg is a high-performance table format for large analytic datasets. It brings ACID snapshots, time travel, partition evolution, and a stable metadata layer to data lakes, enabling multiple engines (Spark, Flink, Trino, etc.) to safely operate on the same tables.

## Key features

- Standardized table format with versioned snapshots and atomic commits.
- Engine interoperability across Spark, Flink, Trino and more.
- Support for Parquet/ORC/Arrow and optimized metadata layout for fast reads.
- Strong community governance under the Apache Software Foundation.

## Use cases

- Data lake governance and reliable table management.
- Multi-engine analytics where different compute frameworks share data.
- Building cloud-native data warehousing architectures.

## Technical characteristics

- Reference Java implementation with modular components and integrations.
- Well-documented spec and production-tested implementations.
- Compatible with S3, HDFS, GCS and other storage backends.
