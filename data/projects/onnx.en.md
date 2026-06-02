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

## Overview

ONNX (Open Neural Network Exchange) is an open standard for representing machine learning models that enables seamless interoperability across frameworks, tools, and hardware platforms. It defines a common intermediate representation and operator set that allows models trained in one framework to run efficiently on any compatible runtime.

## Key Features

Unified model representation through a common intermediate representation and operator specifications eliminates vendor lock-in and reduces framework conversion costs. A broad runtime ecosystem supported by multiple inference engines and hardware accelerators enables optimized deployments across diverse targets. Opset versioning and spec governance manage backward compatibility while allowing the operator set to grow with community contributions.

## Use Cases

Model interchange between training frameworks and production inference engines to simplify deployment pipelines. Migrating research prototypes to production environments while leveraging specialized hardware accelerators for improved inference throughput. Cross-framework model validation and benchmarking to ensure consistent behavior across different execution environments.

## Technical Details

Defines a graph-based intermediate representation with strongly typed computation nodes and standardized data types. Operator specifications provide detailed semantics with community-driven extension mechanisms. Models are serialized using Protocol Buffers for efficient cross-language parsing and transport. Opset versioning system ensures that runtimes can correctly interpret models across specification versions.
