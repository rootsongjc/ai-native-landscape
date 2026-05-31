---
name: Deep-Live-Cam
slug: deep-live-cam
homepage: https://deeplivecam.net/
repo: https://github.com/hacksider/deep-live-cam
license: Unknown
category: models-modalities
subCategory: image-video-generation
tags:
  - Multimodal
  - Video
description: Deep-Live-Cam 是一个开源的实时面部替换与虚拟形象（avatar）工具，支持离线运行并面向内容创作者与流媒体使用场景。
logo: ''
author: hacksider
ossDate: '2023-09-24T13:19:31Z'
featured: false
status: tracked
---

## 详细介绍

Deep-Live-Cam 是由 `hacksider` 发起的开源项目，提供基于深度学习的实时面部替换与虚拟形象（avatar）生成功能。项目强调离线处理与本地化运行，允许创作者、主播和视频制作人用单张图片或自定义模型即时替换摄像头画面，实现虚拟形象、VTuber 或实时特效。项目包含可执行程序、模型与示例配置，便于在台式机或工作站上部署使用。

## 主要特性

- 实时换脸：在摄像头流上进行低延迟的人脸替换与表情驱动。
- 单图或模型驱动：支持仅用单张图片快速生成替换效果，也支持训练/加载自定义模型。
- 隐私优先：支持离线运行，无需将视频数据上传到云端。
- 开源许可：仓库采用 AGPL-3.0 许可证，便于研究与社区协作（请注意许可证约束）。

## 使用场景

- 直播与内容创作：VTuber、流媒体主播与短视频创作的实时人物替换与特效。
- 影视与后期制作：快速制作预览或现场演示的面部替换效果。
- 隐私保护场景：替换真实身份以保护隐私或进行匿名创作。
- 离线演示与研究：在无网络环境下评估人脸合成与跟踪算法。

## 技术特点

- 基于现代生成对抗网络（GAN）与时序跟踪模块，兼顾视觉质量与稳定性。
- 提供模型转换、量化与性能调优建议以适配不同硬件平台。
- 包含示例工程与快速上手说明，便于复现与二次开发。
- 社区活跃，含大量 issue、教程与第三方集成方案。
