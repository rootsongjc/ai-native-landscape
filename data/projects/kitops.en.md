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

## Detailed Introduction

KitOps is a CNCF-hosted open standard and toolkit designed to package AI/ML projects — including model weights, datasets, code, configuration and experimental metadata — into immutable OCI artifacts called ModelKits. By elevating model deliverables to first-class managed assets, KitOps enables packaging, signing, provenance and versioning to be integrated into regular DevOps pipelines, reducing complexity around deployment and auditability.

## Main Features

KitOps provides a standardized description (Kitfile) and packaging format (ModelKit), along with a cross-platform CLI to pack, push and pull artifacts. Artifacts can be signed and verified for auditability. The project is OCI-compatible and integrates with container registries, CI/CD systems and Kubernetes, supporting private deployments and enterprise compliance.

## Use Cases

KitOps is suitable for scenarios requiring governed and auditable model delivery: enterprise model release processes, regulatory compliance (for example EU AI Act) where model versioning and traceability are required, and private or air-gapped environments where models and data must be managed behind a firewall.

## Technical Features

Built on OCI standards, KitOps uses immutable ModelKits and declarative Kitfiles to describe artifact contents. It supports signing, incremental pulls and fine-grained versioning. The implementation includes a Go core and a cross-platform CLI, and offers adapters for Kubernetes, container registries and existing CI toolchains to embed into ML engineering workflows.
