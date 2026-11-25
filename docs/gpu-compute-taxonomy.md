# GPU Compute Supply & Scheduling Taxonomy

Definition, boundaries, inclusion criteria, and first-batch entries for the GPU compute subcategories of the AI Native Landscape. Tracks [rootsongjc/website#359](https://github.com/rootsongjc/website/issues/359).

## Placement

The four subcategories live under the existing top-level category `platform-infra` (Platform & Infrastructure) rather than a new top-level branch:

- The landscape is a two-level taxonomy (category → subCategory); a third level is not supported by the schema or UI.
- GPU supply, slicing, and scheduling are infrastructure concerns already partly covered by `cloud-native-ai`, which was absorbing unrelated projects.
- Keeping eight top-level categories avoids a sparse top-level branch.

| Key | Name (en) | Name (zh) |
|---|---|---|
| `gpu-cloud-marketplaces` | GPU Cloud & Marketplaces | 算力云与算力市场 |
| `gpu-virtualization-sharing` | GPU Virtualization & Sharing | GPU 虚拟化与共享 |
| `heterogeneous-compute-scheduling` | Heterogeneous Compute Scheduling | 异构算力调度 |
| `gpu-observability-cost` | GPU Observability & Cost | 算力可观测与成本 |

Names are vendor-neutral and describe a capability, following CNCF Landscape conventions.

## Definitions and Boundaries

Each subcategory answers one question. A project is filed where its **primary** function lies.

| Subcategory | Question it answers | In scope | Out of scope (goes to) |
|---|---|---|---|
| `gpu-cloud-marketplaces` | Where does the compute come from, and at what price? | GPU rental, multi-cloud GPU brokering and aggregation, spot capacity, price catalogs, decentralized compute networks | Serving a model on that compute (`model-serving`); generic K8s platforms (`cloud-native-ai`) |
| `gpu-virtualization-sharing` | How is one physical device split among workloads? | vGPU, memory and compute isolation, time-slicing, MPS/MIG partitioning, fractional GPUs, GPU pooling | Kernel and operator optimization (`gpu-acceleration`); deciding which job runs (`heterogeneous-compute-scheduling`) |
| `heterogeneous-compute-scheduling` | Which workload gets which device, and when? | Device operators and plugins across vendors, batch schedulers, job queueing, quota and fair sharing | Training frameworks and job APIs (`training-frameworks`); inference request routing (`llm-routing-gateways`) |
| `gpu-observability-cost` | How is the compute being used, and what does it cost? | GPU telemetry exporters, utilization and energy monitoring, cost allocation, process monitors | LLM tracing and application observability (`observability-monitoring`) |

Relation to existing subcategories:

- **`gpu-acceleration`** (under `inference-serving`) stays focused on making computation faster on a device: kernels, compilers, operator libraries. The new subcategories manage the device as a resource.
- **`model-serving`** covers serving stacks. Projects that only supply or slice the underlying compute move out of it (for example HAMi).
- **`cloud-native-ai`** remains the home for general Kubernetes-native AI platforms and cluster runtimes that do not fit one of the four questions above.

Tie-breakers: a project that both slices and schedules is filed by its differentiating capability (HAMi → virtualization; Run:ai and KAI Scheduler → scheduling). A vendor operator that bundles drivers, plugin, and metrics is filed under scheduling, as its role is device management.

## Inclusion Criteria

In addition to the general rules in [contributing.md](contributing.md):

1. **Open-source repository on GitHub.** The schema requires `repo` to be a GitHub URL. Purely commercial platforms without an open-source component are not listed.
2. **Commercial platforms are represented by their open-source artifact** (CLI, SDK, or node software), and the description must say that the hosted service itself is proprietary.
3. **GPU or accelerator relevance is first-class**, not incidental. A general scheduler qualifies only if it has documented accelerator scheduling, quota, or sharing features in common use for AI workloads.
4. **Maintained.** Commits within the last 12 months at time of listing; stale projects are handled by the regular health check.
5. **Neutral description.** One sentence stating what the project does, without marketing claims; isolation limits and commercial-only features are stated where relevant.

## First Batch

Metadata was read from the GitHub API on 2026-11-24. "Existing" entries were already listed and were reclassified.

### GPU Cloud & Marketplaces

| Project | Repository | License | Positioning | Status |
|---|---|---|---|---|
| SkyPilot | skypilot-org/skypilot | Apache-2.0 | Runs AI workloads across clouds and clusters, picking the cheapest available capacity | Existing, moved from `experiment-mlops` |
| dstack | dstackai/dstack | MPL-2.0 | Control plane for provisioning GPUs across clouds, marketplaces, and on-prem | Existing, moved from `cloud-native-ai` |
| Akash Network | akash-network/node | Apache-2.0 | Decentralized compute marketplace with on-chain reverse auctions | New |
| gpuhunt | dstackai/gpuhunt | MPL-2.0 | GPU price and spec catalog aggregated across providers | New |
| Vast.ai CLI | vast-ai/vast-cli | MIT | Open-source client for the Vast.ai GPU rental marketplace | New |
| Runpod Python SDK | runpod/runpod-python | MIT | Open-source SDK for the Runpod GPU cloud and serverless workers | New |

### GPU Virtualization & Sharing

| Project | Repository | License | Positioning | Status |
|---|---|---|---|---|
| HAMi | Project-HAMi/HAMi | Apache-2.0 | Heterogeneous device virtualization middleware for Kubernetes | Existing, moved from `model-serving` |
| HAMi-core | Project-HAMi/HAMi-core | Apache-2.0 | In-container CUDA interception enforcing memory and compute limits | New |
| NVIDIA Device Plugin | NVIDIA/k8s-device-plugin | Apache-2.0 | Exposes GPUs to Kubernetes with time-slicing, MPS, and MIG | New |
| DRA Driver for NVIDIA GPUs | kubernetes-sigs/dra-driver-nvidia-gpu | Apache-2.0 | Claim-based GPU allocation and sharing via Dynamic Resource Allocation | New |
| Tensor Fusion | NexusGPU/tensor-fusion | Apache-2.0 | Fractional GPUs, pooling, and oversubscription for Kubernetes | New |

### Heterogeneous Compute Scheduling

| Project | Repository | License | Positioning | Status |
|---|---|---|---|---|
| Volcano | volcano-sh/volcano | Apache-2.0 | Batch scheduler for AI and HPC workloads on Kubernetes | Existing, moved from `cloud-native-ai` |
| KAI Scheduler | NVIDIA/KAI-Scheduler | Apache-2.0 | GPU-aware Kubernetes scheduler for AI workloads | Existing, moved from `inference-runtimes` |
| Run:ai | dsx-ai-factory/run-ai | Apache-2.0 | AI workload and GPU orchestration platform for Kubernetes | Existing, moved from `cloud-native-ai` |
| NVIDIA GPU Operator | NVIDIA/gpu-operator | Apache-2.0 | Automates NVIDIA driver and GPU component management | Existing, moved from `cloud-native-ai` |
| Kueue | kubernetes-sigs/kueue | Apache-2.0 | Kubernetes-native job queueing and quota management | New |
| Koordinator | koordinator-sh/koordinator | Apache-2.0 | QoS-based scheduling with heterogeneous device scheduling | New |
| Apache YuniKorn | apache/yunikorn-core | Apache-2.0 | Hierarchical-queue resource scheduler for batch and ML | New |
| Intel Device Plugins | intel/intel-device-plugins-for-kubernetes | Apache-2.0 | Device plugins and operator for Intel GPUs and accelerators | New |
| AMD GPU Operator | ROCm/gpu-operator | Apache-2.0 | Driver, plugin, and metrics automation for AMD GPUs | New |

### GPU Observability & Cost

| Project | Repository | License | Positioning | Status |
|---|---|---|---|---|
| Unifabric | unifabric-io/unifabric | Apache-2.0 | Observability for high-speed AI cluster networks | Existing, moved from `cloud-native-ai` |
| NVIDIA DCGM Exporter | NVIDIA/dcgm-exporter | Apache-2.0 | Prometheus exporter for NVIDIA GPU telemetry | New |
| OpenCost | opencost/opencost | Apache-2.0 | Real-time Kubernetes cost allocation including GPU | New |
| nvitop | XuehaiPan/nvitop | Apache-2.0 | Interactive NVIDIA GPU process monitor with exporter | New |
| NVTOP | Syllo/nvtop | GPL-3.0 | Multi-vendor GPU and accelerator task monitor | New |
| Kepler | sustainable-computing-io/kepler | Apache-2.0 | Energy consumption exporter for Kubernetes workloads | New |

### Not Listed

These were named in the issue or considered, and are not listed in this batch:

| Candidate | Reason |
|---|---|
| Lambda, CoreWeave, Together, TensorDock, 器灵算力站 (qlsoulmate.com) | Commercial services with no open-source project that represents the platform (criterion 1) |
| AliyunContainerService/gpushare-scheduler-extender | No commits since 2023 (criterion 4) |
| nebuly-ai/nos | No commits since 2024 (criterion 4) |

A commercial platform becomes eligible once it publishes a maintained open-source component; submit it through the regular add-project issue template.

## Implementation

1. **Taxonomy**: `data/categories.yaml` defines the four subcategories under `platform-infra`. Category pages, filters, and exports are generated from this file; no component changes are needed.
2. **Auto-classification**: `TAG_PRIORITY_RULES` and `SUBCATEGORY_RULES` in `scripts/lib.mjs` map GPU-specific tags (for example `GPU Marketplace`, `GPU Sharing`, `Device Plugin`, `GPU Monitoring`, `FinOps`) to the new subcategories ahead of the generic rules. Entries with an explicit `subCategory` are unaffected.
3. **Entries**: each project is a pair of files, `data/projects/<slug>.en.md` and `data/projects/<slug>.zh.md`, with `category: platform-infra` and one of the keys above.
4. **Verify**: `npm run validate && npm run build`.
