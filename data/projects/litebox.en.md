---
name: LiteBox
slug: litebox
homepage: https://aka.ms/litebox
repo: https://github.com/microsoft/litebox
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - Runtime
  - Safety
description: A security-focused library OS that minimizes host interfaces and supports kernel- and user-mode constrained execution.
author: Microsoft
ossDate: '2024-12-11T01:23:27Z'
featured: false
status: tracked
---

LiteBox is a security-focused library OS developed by Microsoft that minimizes host interfaces to reduce the attack surface for sandboxed workloads. It supports both kernel- and user-mode constrained execution, enabling scenarios such as running unmodified Linux programs on Windows, sandboxing AI-generated code, and operating within hardware-isolated environments like SEV SNP and OP-TEE.

## Key Design Principles

- **Minimal host interface surface** that drastically shrinks the attack vector for sandboxed applications
- **Pluggable North/South platform model** enabling flexible interoperability across multiple execution environments
- **Strong isolation and auditability** through system-call rewriting and runtime isolation at both user and kernel levels
- **Confidential computing support** for hardware-isolated platforms including SEV SNP, LVBS, and OP-TEE
- **Snapshot and operational workflows** for state management in constrained execution environments

## Use Cases

- Running unmodified Linux programs on Windows for improved cross-platform compatibility
- Providing a secure sandbox for executing third-party or AI model-generated code without risking the host system
- Serving as a trusted runtime foundation for hardware-isolated execution on confidential computing platforms
- Isolating multi-tenant workloads in cloud and edge environments with minimal trust boundaries

## Technical Highlights

- Implemented primarily in Rust with C components, prioritizing minimal dependencies and high auditability
- Library-OS design integrates with host systems through minimal contracts rather than full kernel interfaces
- Supports both user-mode and kernel-mode constrained execution with unified isolation mechanisms
