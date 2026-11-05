---
name: VM Operator
slug: vm-operator
homepage: https://vm-operator.rtfd.io
repo: https://github.com/vmware-tanzu/vm-operator
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Kubernetes
  - Virtual Machine
  - Operator
  - vSphere
  - Infrastructure
description: >-
  VM Operator enables management of virtual machines with a Kubernetes-style, declarative API. It turns VMs into
  first-class Kubernetes resources so platform teams can offer self-service virtual infrastructure.
author: VMware Tanzu
ossDate: '2021-02-19'
featured: false
status: tracked
---

## Overview

VM Operator enables management of virtual machines with a Kubernetes-style, declarative API. Developed in the VMware Tanzu (Broadcom) organization, it is the component behind vSphere with Tanzu that lets users provision and operate VMs through Kubernetes resources instead of vSphere-specific tooling.

## Key Features

- Declarative VM lifecycle management through Kubernetes CRDs
- Self-service consumption of virtual infrastructure with namespace-scoped quotas and permissions
- VM images, classes, and publish requests expressed as API objects
- Integrates with vSphere Supervisor for scheduling, storage, and networking

## Use Cases

- Offering self-service virtual machines to tenants on a shared Kubernetes platform
- Running workloads that require full VM isolation (OS-level tooling, licensed software, legacy systems) alongside containers
- Provisioning GPU or compute-heavy VMs for AI and data workloads through a unified Kubernetes API

## Technical Details

- Defines CRDs across API versions (v1alpha1 onward) including VirtualMachine, VirtualMachineClass, VirtualMachineClassBinding, VirtualMachineImage, ContentSource, and VirtualMachinePublishRequest
- VirtualMachineClassBinding and ContentSourceBinding bind VM classes and image catalogs to individual namespaces, enforcing tenancy boundaries
- Built with Kubernetes controller-runtime reconcilers that watch desired state and drive vSphere toward it
- Supports VM image publishing workflows as first-class API objects (VirtualMachinePublishRequest)
