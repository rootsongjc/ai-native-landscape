---
name: ONNX
slug: onnx
homepage: https://onnx.ai/
repo: https://github.com/onnx/onnx
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - Model
description: >-
  ONNX is an open model exchange format and ecosystem that improves interoperability between frameworks, tools, and
  hardware.
author: ONNX
ossDate: '2017-09-07T04:53:45Z'
featured: false
status: tracked
---

ONNX (Open Neural Network Exchange) is an open standard for representing machine learning models that enables seamless interoperability across frameworks, tools, and hardware platforms. It defines a common intermediate representation and operator set that allows models trained in one framework to run efficiently on any compatible runtime.

## Unified Model Representation

- Common intermediate representation and operator specifications eliminate vendor lock-in and reduce framework conversion costs
- Defines a graph-based intermediate representation with strongly typed computation nodes and standardized data types
- Models are serialized using Protocol Buffers for efficient cross-language parsing and transport

## Broad Runtime Ecosystem

- Multiple inference engines and hardware accelerators enable optimized deployments across diverse targets
- Migrating research prototypes to production environments while leveraging specialized hardware accelerators for improved inference throughput
- Cross-framework model validation and benchmarking to ensure consistent behavior across different execution environments

## Spec Governance and Versioning

- Opset versioning and spec governance manage backward compatibility while allowing the operator set to grow with community contributions
- Operator specifications provide detailed semantics with community-driven extension mechanisms
- Model interchange between training frameworks and production inference engines to simplify deployment pipelines
