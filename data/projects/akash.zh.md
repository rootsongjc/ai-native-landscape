---
name: Akash Network
slug: akash
homepage: https://akash.network
repo: https://github.com/akash-network/node
license: Apache-2.0
category: platform-infra
subCategory: gpu-cloud-marketplaces
tags:
  - GPU Marketplace
  - Decentralized Compute
  - GPU Cloud
description: '去中心化的点对点云算力市场，供给方通过链上反向竞价将 GPU 与 CPU 资源出租给租户。'
author: Akash Network
ossDate: '2017-09-15T22:55:19.000Z'
featured: false
status: tracked
---

## 简介

Akash Network 是开源的去中心化云算力市场。供给方提供包括 GPU 在内的闲置数据中心资源，租户通过基于 Cosmos SDK 区块链结算的反向竞价获取算力。`node` 仓库包含实现市场、部署与托管结算逻辑的区块链节点。

## 主要特性

- 以反向竞价撮合算力需求与供给方报价
- 部署清单（SDL）支持按 GPU 厂商与型号声明资源
- 链上租约与托管式结算
- 容器负载运行在供给方运营的 Kubernetes 集群上

## 使用场景

- 从无许可的供给方资源池租用 GPU 进行推理或训练
- 作为供给方出租闲置 GPU 算力

## 技术特点

- 使用 Go 基于 Cosmos SDK 与 CometBFT 共识实现
- 供给方服务位于独立的 akash-network/provider 仓库
