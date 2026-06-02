---
name: KitOps
slug: kitops
homepage: https://kitops.org
repo: https://github.com/kitops-ml/kitops
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
description: >-
  KitOps is a CNCF-backed open-source project that standardizes packaging AI/ML projects into signable, versioned OCI
  artifacts.
logo: ''
author: CNCF
ossDate: '2024-02-02T18:53:31Z'
featured: false
status: tracked
---

## Overview

KitOps is a CNCF-backed open-source DevOps tool that standardizes the packaging and versioning of AI/ML models, datasets, code, and configuration into OCI artifacts called ModelKits. By treating model deliverables as first-class managed assets, KitOps enables teams to integrate AI artifact packaging, signing, provenance tracking, and versioning directly into their existing DevOps pipelines.

## Key Features

KitOps provides a standardized packaging format (ModelKit) and declarative description file (Kitfile), along with a cross-platform CLI for packing, pushing, and pulling artifacts with built-in signing and verification for auditability. It is fully OCI-compatible, integrating seamlessly with container registries, CI/CD systems, and Kubernetes while supporting private deployments and enterprise compliance requirements.

## Use Cases

KitOps is ideal for enterprise model release processes that require governed and auditable delivery, regulatory compliance scenarios such as EU AI Act where model versioning and traceability are mandatory, and private or air-gapped environments where models and data must be managed securely behind a firewall.

## Technical Details

Built on OCI standards, KitOps uses immutable ModelKits and declarative Kitfiles to describe artifact contents, supporting signing, incremental pulls, and fine-grained versioning. The implementation features a Go core with a cross-platform CLI and provides adapters for Kubernetes, container registries, and existing CI toolchains to embed smoothly into ML engineering workflows.
