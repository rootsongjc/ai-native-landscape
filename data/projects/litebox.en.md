---
name: LiteBox
slug: litebox
homepage: https://aka.ms/litebox
repo: https://github.com/microsoft/litebox
license: Unknown
category: training-optimization
subCategory: safety-guardrails
tags:
  - Dev Tools
  - Runtime
  - Safety
description: A security-focused library OS that minimizes host interfaces and supports kernel- and user-mode constrained execution.
logo: ''
author: Microsoft
ossDate: '2024-12-11T01:23:27Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

LiteBox is a security-focused library OS developed by Microsoft that reduces the host interface surface to minimize attack vectors. It exposes a pluggable North/South platform model, enabling constrained execution in both kernel and user modes and supporting scenarios such as running unmodified Linux programs on Windows, sandboxing Linux applications, and running on SEV SNP or OP-TEE.

## Main Features

- Minimized host interface surface to reduce attack surface.
- Support for multiple platforms and runtimes (kernel/user mode, SEV SNP, OP-TEE).
- Portable North/South platform interfaces for flexible interoperability.
- Design emphasis on auditability and strong isolation.

## Use Cases

- Run unmodified Linux programs on Windows to improve cross-platform compatibility.
- Sandbox third-party or model-generated code in cloud or edge environments to reduce risk.
- Provide a trusted runtime foundation for hardware-isolated execution (SEV SNP, LVBS, OP-TEE).

## Technical Features

- Implemented in Rust with C components, focusing on minimal dependencies and high auditability.
- System-call rewriting and runtime isolation mechanisms allow constrained execution at user or kernel level.
- Library-OS design lets hosts integrate LiteBox with minimal contracts, enabling snapshotting and operational workflows.
