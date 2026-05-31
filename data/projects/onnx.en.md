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
logo: ''
author: ONNX
ossDate: '2017-09-07T04:53:45Z'
featured: false
status: tracked
---

## Detailed Introduction

ONNX (Open Neural Network Exchange) is an open model exchange format and ecosystem designed to improve interoperability between machine learning frameworks, tools, and hardware. ONNX defines an extensible intermediate representation (IR), a set of built-in operators, and standard data types so that both deep learning and traditional ML models can be transferred seamlessly between training frameworks and inference runtimes. Governed by an open community, ONNX offers tutorials, a model zoo, and runtime support to help move research into production.

## Main Features

- Unified model representation: a common IR and operator specifications to reduce framework conversion costs.
- Broad runtime ecosystem: supported by multiple inference engines and hardware accelerators for optimized deployments.
- Versioning and operator management: opset and spec documents manage compatibility and operator extensions.
- Open community and tooling: model libraries, tutorials, and examples for migration, testing, and optimization.

## Use Cases

ONNX is suited for model interchange, migrating prototypes to production, cross-framework validation, and leveraging specialized runtimes or hardware accelerators to improve inference performance. Engineering teams commonly export models from training frameworks to ONNX for efficient execution on production inference engines, simplifying deployment and improving portability.

## Technical Features

- Intermediate Representation (IR): graph-based representation for computation and types.
- Operator specifications: detailed operator definitions and semantics with community-driven extensions.
- Protobuf format: serialized model files for cross-language parsing and transport.
- Opset versioning: manage operator compatibility so different runtimes can interpret models correctly.
