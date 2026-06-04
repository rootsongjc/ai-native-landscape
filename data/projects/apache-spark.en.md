---
name: Apache Spark
slug: apache-spark
homepage: https://spark.apache.org/
repo: https://github.com/apache/spark
license: MIT
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Framework
description: >-
  A unified analytics engine for large-scale data processing, supporting batch, streaming and machine learning
  workloads.
author: Apache Software Foundation
ossDate: '2014-02-25T08:00:08Z'
featured: false
status: tracked
---
Apache Spark is a unified analytics engine for large-scale data processing, widely used in ML pipelines across industry. It provides multi-language APIs for Scala, Java, Python, and R, unifying batch processing, stream processing, and machine learning within a single high-performance distributed platform.

## Key Capabilities

- **Unified DataFrame/SQL API** across Scala, Java, Python, and R with a shared query optimizer
- **In-memory execution engine** with lazy evaluation and task fusion for high throughput
- **Structured Streaming** for low-latency, fault-tolerant stream processing
- **MLlib** providing distributed implementations of classification, regression, clustering, and collaborative filtering
- **GraphX** for graph-parallel computation and graph analytics

## Ecosystem Integrations

- Deep connectors for Hadoop HDFS, YARN, and Hive metastores
- Kafka, Delta Lake, and Apache Iceberg for streaming and lakehouse architectures
- Integration with cloud object stores (S3, ADLS, GCS) for modern data pipelines
- Connectors for relational databases, NoSQL stores, and message queues

## Common Use Cases

- Large-scale ETL and data engineering pipelines
- Interactive SQL querying and ad-hoc analytics on petabyte-scale datasets
- Real-time stream processing for log analytics and event-driven applications
- Feature engineering and distributed model training for recommendation systems

## Architecture

- Distributed DAG execution engine with automatic fault recovery and speculative execution
- Modular design composed of Spark SQL, Streaming, MLlib, and GraphX
- Maintained by the Apache Software Foundation with a large, active open-source community
