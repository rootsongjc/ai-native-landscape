---
name: KitOps
slug: kitops
homepage: https://kitops.org
repo: https://github.com/kitops-ml/kitops
license: Apache-2.0
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
description: >-
  KitOps is a CNCF-backed open-source project that standardizes packaging AI/ML projects into signable, versioned OCI
  artifacts.
author: CNCF
ossDate: '2024-02-02T18:53:31Z'
featured: false
status: tracked
---

KitOps is a CNCF-backed open-source DevOps tool that standardizes the packaging and versioning of AI/ML models, datasets, code, and configuration into OCI artifacts called ModelKits. By treating model deliverables as first-class managed assets, KitOps enables teams to integrate AI artifact packaging, signing, provenance tracking, and versioning directly into their existing DevOps pipelines.

## Key Features

- Standardized packaging format (ModelKit) and declarative description file (Kitfile) for reproducible AI artifact bundles
- Cross-platform CLI for packing, pushing, and pulling artifacts with built-in signing and verification for auditability
- Fully OCI-compatible, integrating seamlessly with container registries, CI/CD systems, and Kubernetes
- Support for private deployments and enterprise compliance requirements including air-gapped environments
- Immutable artifacts with incremental pulls and fine-grained versioning

## Use Cases

- Enterprise model release processes requiring governed, signed, and auditable delivery workflows
- Regulatory compliance scenarios such as EU AI Act where model versioning and traceability are mandatory
- Private or air-gapped environments where models and data must be managed securely behind a firewall
- ML engineering teams needing to track model provenance across training, testing, and production stages

## Technical Highlights

- Built on OCI standards using immutable ModelKits and declarative Kitfiles
- Go core with a cross-platform CLI providing adapters for Kubernetes, container registries, and existing CI toolchains
- Designed to embed smoothly into ML engineering workflows without disrupting existing DevOps practices
