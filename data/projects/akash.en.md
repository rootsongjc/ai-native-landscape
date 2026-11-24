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
description: 'A decentralized, peer-to-peer cloud compute marketplace where providers lease GPU and CPU capacity to tenants through on-chain reverse auctions.'
author: Akash Network
ossDate: '2017-09-15T22:55:19.000Z'
featured: false
status: tracked
---

## Overview

Akash Network is an open-source decentralized cloud marketplace. Providers offer spare data-center capacity, including GPUs, and tenants bid for it through a reverse auction settled on a Cosmos SDK blockchain. The `node` repository contains the blockchain node that implements the marketplace, deployment, and escrow logic.

## Key Features

- Reverse-auction marketplace matching compute demand with provider bids
- GPU-aware deployment manifests (SDL) with vendor and model attributes
- On-chain leases and escrow-based settlement between tenants and providers
- Container workloads run on provider-operated Kubernetes clusters

## Use Cases

- Renting GPUs for inference or training from a permissionless provider pool
- Monetizing idle GPU capacity as a provider

## Technical Details

- Written in Go on the Cosmos SDK with CometBFT consensus
- Provider-side services live in the separate akash-network/provider repository
