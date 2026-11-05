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
  VM Operator 通过 Kubernetes 风格的声明式 API 管理虚拟机，将虚拟机变成一等公民的 Kubernetes 资源，让平台团队可以提供自助式的虚拟基础设施。
author: VMware Tanzu
ossDate: '2021-02-19'
featured: false
status: tracked
---

## 简介

VM Operator 通过 Kubernetes 风格的声明式 API 管理虚拟机。该项目由 VMware Tanzu（Broadcom）组织开发，是 vSphere with Tanzu 背后的核心组件，让用户通过 Kubernetes 资源而非 vSphere 专属工具来创建和运维虚拟机。

## 主要特性

- 通过 Kubernetes CRD 声明式管理虚拟机生命周期
- 以命名空间为边界的配额与权限控制，提供自助式虚拟基础设施消费
- 虚拟机镜像、规格（Class）和发布请求均以 API 对象表达
- 与 vSphere Supervisor 集成，复用其调度、存储和网络能力

## 使用场景

- 在共享的 Kubernetes 平台上向租户提供自助式虚拟机
- 将需要完整 VM 隔离的工作负载（OS 级工具、授权软件、遗留系统）与容器统一管理
- 通过统一的 Kubernetes API 为 AI 和数据工作负载开通 GPU 或高算力虚拟机

## 技术特点

- 从 v1alpha1 起定义了多个 CRD，包括 VirtualMachine、VirtualMachineClass、VirtualMachineClassBinding、VirtualMachineImage、ContentSource 和 VirtualMachinePublishRequest
- 通过 VirtualMachineClassBinding 和 ContentSourceBinding 将 VM 规格与镜像目录绑定到具体命名空间，实现租户隔离
- 基于 Kubernetes controller-runtime 的 reconciler 监听期望状态并驱动 vSphere 向其收敛
- 虚拟机镜像发布流程也是一等公民的 API 对象（VirtualMachinePublishRequest）
