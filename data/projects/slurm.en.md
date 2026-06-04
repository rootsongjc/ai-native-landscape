---
name: Slurm
slug: slurm
homepage: https://slurm.schedmd.com/
repo: https://github.com/schedmd/slurm
license: Unknown
category: training-optimization
subCategory: experiment-mlops
tags:
  - CLI
  - Dev Tools
  - Tool
description: >-
  Slurm is an open-source cluster resource management and job scheduling system that is simple, scalable, portable,
  fault-tolerant, and interconnect agnostic, widely used in high-performance computing and AI training clusters.
author: SchedMD
ossDate: '2009-12-17T00:00:00.000Z'
featured: false
status: tracked
---

## Overview

Slurm (Simple Linux Utility for Resource Management) is an open-source cluster resource management and job scheduling system widely used in high-performance computing (HPC) centers and AI training clusters worldwide. Slurm is known for its simplicity, scalability, portability, fault tolerance, and interconnect agnostic features, and is currently tested and used only under Linux environments. As a cluster resource manager, Slurm provides three key functions: first, it allocates exclusive and/or non-exclusive access to resources (compute nodes) to users for some duration of time so they can perform work; second, it provides a framework for starting, executing, and monitoring work (normally a parallel job) on the set of allocated nodes; finally, it arbitrates conflicting requests for resources by managing a queue of pending work.

## Key Features

- Highly Scalable: Supports deployment from small clusters to ultra-large-scale clusters, has been used to manage clusters with tens of thousands of nodes.
- Fault-Tolerant Design: Robust fault tolerance capability to handle node failures and network interruptions, ensuring job scheduling reliability.
- Interconnect Agnostic: Supports various interconnect network architectures, not dependent on specific network technologies.
- Flexible Resource Allocation: Supports both exclusive and non-exclusive resource allocation to meet different job requirements.
- Efficient Job Scheduling: Provides advanced scheduling algorithms to optimize cluster resource utilization.
- Rich API: Offers complete APIs and command-line tools for easy integration and automated management.

## Use Cases

- Job scheduling and resource management in high-performance computing (HPC) centers.
- GPU resource scheduling and task allocation in AI/ML model training clusters.
- Management of large-scale scientific computing and engineering simulation clusters.
- Computing cluster resource scheduling in universities and research institutions.
- Underlying resource management systems for cloud computing platforms.
- Bioinformatics, weather forecasting, computational fluid dynamics, and other scenarios requiring large-scale parallel computing.

## Technical Highlights

- Open source under GPL license with active open-source community support.
- Supports only Linux operating system, deeply optimized for Linux environments.
- Provides three core functions: resource allocation, job execution monitoring, and job queue management.
- Supports various job launchers and execution environments, including parallel computing frameworks like MPI and OpenMP.
- Offers comprehensive documentation and test suites, including Check, Expect, and Pytest tests.
- Supports rich plugins and extension mechanisms for customization based on requirements.
- Provides REST API and command-line interfaces for easy integration into automated operations systems.
