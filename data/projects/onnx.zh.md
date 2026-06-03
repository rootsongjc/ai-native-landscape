---
name: ONNX
slug: onnx
homepage: https://onnx.ai/
repo: https://github.com/onnx/onnx
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - Model
description: ONNX 是一个开放的模型交换格式与生态，旨在提高机器学习模型在框架、工具与硬件之间的互操作性。
author: ONNX
ossDate: '2017-09-07T04:53:45Z'
featured: false
status: tracked
---

ONNX（Open Neural Network Exchange）是一个开放的机器学习模型表示标准，实现框架、工具与硬件平台之间的无缝互操作。它定义了通用的中间表示与算子集合，使在一个框架中训练的模型能够在任何兼容运行时上高效执行。

## 统一模型表示

- 通过通用中间表示与算子规范消除供应商锁定并降低框架转换成本
- 定义基于图的中间表示，包含强类型计算节点与标准化数据类型
- 模型采用 Protocol Buffers 序列化，支持跨语言高效解析与传输

## 广泛的运行时生态

- 覆盖多种推理引擎与硬件加速器，支持跨目标平台的优化部署
- 将研究原型迁移到生产环境，利用专用硬件加速器提升推理吞吐量
- 跨框架模型验证与基准测试，确保不同执行环境下行为一致

## 规范治理与版本管理

- Opset 版本管理与规范治理确保向后兼容，同时通过社区贡献持续扩展算子集
- 算子规范提供详细语义定义，支持社区驱动的扩展机制
- 训练框架与生产推理引擎之间的模型互换，简化部署流水线
