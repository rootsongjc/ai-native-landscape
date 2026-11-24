---
name: gpuhunt
slug: gpuhunt
homepage: https://pypi.org/project/gpuhunt/
repo: https://github.com/dstackai/gpuhunt
license: MPL-2.0
category: platform-infra
subCategory: gpu-cloud-marketplaces
tags:
  - GPU Marketplace
  - GPU Cloud
  - Python
description: '聚合各云厂商与 GPU 算力市场的实例价格、地域和规格的 Python 库与价格目录。'
author: dstack
ossDate: '2023-08-23T06:53:10.000Z'
featured: false
status: tracked
---

## 简介

gpuhunt 提供对主流云厂商和 GPU 专业云价格数据的编程访问。目录涵盖价格、地域、CPU、内存、GPU 型号以及竞价（可中断）实例，也是 dstack 使用的价格后端。

## 主要特性

- 统一查询接口，可按 GPU 厂商、型号、显存、价格和竞价可用性过滤
- 同时覆盖超大规模云厂商、GPU 云与算力市场
- 结合预构建离线目录与在线查询
- 可独立于 dstack 单独使用

## 使用场景

- 在开通资源前横向比较各家 GPU 价格
- 构建成本感知的资源开通或撮合逻辑

## 技术特点

- 以 Python 包形式发布在 PyPI
- 各厂商采集器将报价归一化为统一的目录结构
