---
permalink: /publications/
title: "Publications"
excerpt: "Publication list"
author_profile: true
---

# Publications

## 2026

- [RTAS'26] `Chuanchao Gao`, Yiyang Gao, Michael Yuhas, Arvind Easwaran. *Fault-Tolerant Offloading Framework for Real-Time Applications in Mobile Edge Computing*. **IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS)**, 2026. [[Download]](</papers/Fault-Tolerant Offloading Framework for Real-Time Applications in Mobile Edge Computing.pdf>) [[Open Source Project: mecRT]](https://github.com/gaochuanchao/mecRT)

  <details class="overview-details">
  <summary>Brief overview</summary>
  <div class="details-content">

  This paper studies forwarding-enabled offloading for real-time applications in mobile edge computing systems. After a task is offloaded to an edge server, it may be forwarded to another server for processing, allowing the system to balance load more effectively and use edge resources more flexibly. This added flexibility also makes resource management more challenging: the resulting optimization problem generalizes both the two-dimensional multiple-choice assignment problem and the three-dimensional matching problem. We develop FastSA, the first constant-factor approximation algorithm for this setting, with a 1/10 theoretical guarantee and linear runtime complexity.

  </div>
  </details>

## 2025

- [RTSS'25] `Chuanchao Gao`, Arvind Easwaran. *Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing*. **IEEE Real-Time Systems Symposium (RTSS)**, 2025. [[HTML]](https://doi.org/10.1109/RTSS66672.2025.00023) [[Download]](</papers/Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing.pdf>) [[Open Source Project: mecRT]](https://github.com/gaochuanchao/mecRT)

  <details class="overview-details">
  <summary>Brief overview</summary>
  <div class="details-content">

  This paper studies real-time task offloading in vehicular edge computing, where each offloaded task must be assigned an edge server, the bandwidth for offloading, and computation resources for processing. The resulting optimization problem generalizes the Generalized Assignment Problem (GAP) by introducing two-dimensional resource constraints and multiple resource-allocation choices for each task-server pair. We formalize this setting as the two-dimensional multiple-choice assignment problem and design SARound, a 1/4-approximation algorithm. We also show how to improve the guarantee to 1/(2+epsilon) with higher runtime complexity, yielding the best known approximation guarantee for this class of problems.

  </div>
  </details>

- [RTCSA'25] `Chuanchao Gao`, Arvind Easwaran. *Energy-Efficient Joint Offloading and Resource Allocation for Deadline-Constrained Tasks in Multi-Access Edge Computing*. IEEE International Conference on Embedded and Real-Time Computing Systems and Applications (RTCSA), 2025. [[HTML]](https://doi.org/10.1109/RTCSA66114.2025.00016) [[Download]](</papers/Energy-Efficient Joint Offloading and Resource Allocation for Deadline-Constrained Tasks in Multi-Access Edge Computing.pdf>)
- [RTCSA'25] `Chuanchao Gao` and Arvind Easwaran. *VecSim, a Vehicular Edge Computing Simulator for Real-Time Applications*. Demo Session of IEEE International Conference on Embedded and Real-Time Computing Systems and Applications (RTCSA), 2025. [[HTML]](https://doi.org/10.1109/RTCSA66114.2025.00033) [[Download]](</papers/VecSim, a Vehicular Edge Computing Simulator for Real-Time Applications.pdf>) [[Open Source Project: mecRT]](https://github.com/gaochuanchao/mecRT/tree/main/src)
- [RAGE'25] `Chuanchao Gao` and Arvind Easwaran. *Local Ratio based Real-time Job Offloading and Resource Allocation in Mobile Edge Computing*. International Workshop on Real-time and IntelliGent Edge computing (RAGE), 2025. [[HTML]](https://doi.org/10.1145/3722567.3727843) [[Download]](</papers/Local Ratio based Real-time Job Offloading and Resource Allocation in Mobile Edge Computing.pdf>)

  <details class="overview-details">
  <summary>Brief overview</summary>
  <div class="details-content">

  This paper studies real-time task offloading in mobile edge computing, where each offloaded task must be assigned an edge server, the bandwidth for offloading, and computation resources for processing. The resulting optimization problem generalizes the Generalized Assignment Problem (GAP) by introducing two-dimensional resource constraints and multiple resource-allocation choices for each task-server pair. We formalize this setting as the two-dimensional multiple-choice assignment problem and proposed a 1/6-approximation algorithm, IDAssign, providing the first constant-factor approximation algorithm for this class of problems.

  </div>
  </details>

## 2024

- [RTSS'24] `Chuanchao Gao`, Niraj Kumar, Arvind Easwaran. *Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing*. **IEEE Real-Time Systems Symposium (RTSS)**, 2024. [[HTML]](https://doi.org/10.1109/RTSS62706.2024.00012) [[Download]](</papers/Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing.pdf>) [[Experiments Data]](https://github.com/CPS-research-group/CPS-NTU-Public/tree/RTSS2024)

  <details class="overview-details">
  <summary>Brief overview</summary>
  <div class="details-content">

  This paper studies energy-efficient job mapping and resource management for deadline-constrained workloads in mobile-edge computing. Each job consists of three operations: offloading, processing, and downloading; for each operation, the scheduler must decide which edge node should execute it. The resulting optimization problem jointly captures job placement, resource allocation, and operation-stage scheduling, generalizing both three-stage flow-shop scheduling and unrelated-machine scheduling. We design LHJS, the first constant-factor approximation algorithm for this class of problems, to reduce energy consumption while preserving real-time guarantees.

  </div>
  </details>

- [DATE'24] Niraj Kumar, `Chuanchao Gao`, Arvind Easwaran. *Optimal Fixed Priority Scheduling in Multi-Stage Multi-Resource Distributed Real-Time Systems*. Design, Automation & Test in Europe Conference & Exhibition (DATE), 2024. [[HTML]](https://doi.org/10.23919/DATE58400.2024.10546551) [[Download]](</papers/Optimal Fixed Priority Scheduling in Multi-Stage Multi-Resource Distributed Real-Time Systems.pdf>) [[Experiments Data]](https://github.com/CPS-research-group/CPS-NTU-Public/tree/DATE2024)

## 2022

- [GLOBECOM'22] `Chuanchao Gao`, Aryaman Shaan, Arvind Easwaran. *Deadline-constrained Multi-resource Task Mapping and Allocation for Edge-Cloud Systems*. IEEE Global Communications Conference, 2022. [[HTML]](https://doi.org/10.1109/GLOBECOM48099.2022.10001137) [[Download]](</papers/Deadline-constrained Multi-resource Task Mapping and Allocation for Edge-Cloud System.pdf>) [[Experiments Data]](https://github.com/CPS-research-group/CPS-NTU-Public/tree/GLOBECOM2022)
- [RTSS'22] `Chuanchao Gao`, Arvind Easwaran. *Work-in-Progress: Deadline-Constrained Multi-Resource Allocation in Edge-Cloud System*. **IEEE Real-Time Systems Symposium (RTSS)**, 2022. [[HTML]](https://doi.org/10.1109/RTSS55097.2022.00052) [[Download]](</papers/Work-in-Progress Deadline-Constrained Multi-Resource Allocation in Edge-Cloud System.pdf>)

## 2021

- [ICCPS'21] `Chuanchao Gao`, Heejong Park, and Arvind Easwaran. *An anomaly detection framework for digital twin driven cyber-physical systems*. International Conference on Cyber-Physical Systems (ICCPS), 2021. [[HTML]](https://doi.org/10.1145/3450267.3450533) [[Download]](</papers/An anomaly detection framework for digital twin driven cyber-physical systems.pdf>)

## Patents

- Heejong Park, **Chuanchao Gao**, Arvind Easwaran, Cheng Chia Loon. *Material Handling Method Based on Digital Twin*. Taiwan Patent No. I806148 B.
