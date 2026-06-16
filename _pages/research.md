---
permalink: /research/
title: "Research"
excerpt: "Research directions"
author_profile: true
---

# Research

My research focuses on the algorithmic foundations of heterogeneous resource allocation and scheduling for real-time, network-integrated computing systems. I am particularly interested in designing provable and scalable algorithms for deadline-constrained task offloading, resource allocation, and scheduling in mobile edge computing systems.

## Main Research Directions

### 1. Centralized Approximation Algorithms for Real-Time Edge Computing

#### 1.1 Real-time task offloading in mobile edge computing

In this line of work, I study the problem of offloading real-time tasks to edge servers, where each offloaded task is processed on the edge server it is offloaded to. In this setting, the scheduler must decide which edge server to offload each task to, how much bandwidth to allocate for offloading, and how much computation resources to allocate for processing. The resulting optimization problem generalizes the Generalized Assignment Problem (GAP) by introducing two-dimensional resource constraints and multiple resource-allocation choices for each task-server pair. I formalize this setting as the two-dimensional multiple-choice assignment problem and design approximation algorithms with provable guarantees.

- In [[RAGE'25]](</papers/Local Ratio based Real-time Job Offloading and Resource Allocation in Mobile Edge Computing.pdf>), we proposed the first constant-factor approximation algorithm for this class of problems, with a 1/6 guarantee.
- In [[RTSS'25]](</papers/Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing.pdf>), we improved the guarantee to 1/4 with cubic runtime complexity, and further showed how to improve the guarantee to 1/(2+epsilon) with higher runtime complexity, yielding the best known approximation guarantee for this class of problems.

#### 1.2 Forwarding-enabled real-time offloading in mobile edge computing

In this line of work, I study forwarding-enabled offloading for real-time applications in mobile edge computing systems. After a task is offloaded to an edge server, it may be forwarded to another server for processing, allowing the system to balance load more effectively and use edge resources more flexibly. This added flexibility also makes resource management more challenging: the resulting optimization problem generalizes both the two-dimensional multiple-choice assignment problem and the three-dimensional matching problem.

- In [[RTCSA'25]](</papers/Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing.pdf>), we proposed a (1-\alpha)/2-approximation algorithm for this setting, where \alpha is the fairness factor that constraints the maximum portion of an edge server's resources that can be allocated to a single task. For continuous resource allocation, the gurantee becomes (1-\alpha)/(2+\epsilon), where \epsilon is a small positive constant due to resource discretization.
- In [[RTAS'26]](</papers/Fault-Tolerant Offloading Framework for Real-Time Applications in Mobile Edge Computing.pdf>), we developed the first constant-factor approximation algorithm for this setting, with a 1/10 theoretical guarantee and linear runtime complexity.

#### 1.3 Real-time job mapping and resource management in mobile edge computing
In this line of work, I study energy-efficient job mapping and resource management for deadline-constrained workloads in mobile-edge computing. Each job consists of three operations: offloading, processing, and downloading; for each operation, the scheduler must decide which edge node should execute it. The resulting optimization problem jointly captures job placement, resource allocation, and operation-stage scheduling, generalizing both three-stage flow-shop scheduling and unrelated-machine scheduling.

- In [[RTSS'24]](</papers/Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing.pdf>), we designed the first constant-factor approximation algorithm for this class of problems.

### 2. Distributed Approximation Algorithms for Real-Time Edge Computing

Designing distributed algorithms for real-time task offloading and resource allocation in mobile edge computing systems. In this setting, no global scheduler exists, and each edge server makes local decisions based on limited information.

### 3. System-Level Evaluation for Network-Integrated Real-Time Systems

Designing and implementing simulation frameworks for evaluating real-time task offloading, resource allocation, and scheduling algorithms in mobile edge computing systems. In this line of work, I focus on developing realistic simulators that capture the dynamics of wireless communication, heterogeneous edge resources, and deadline-aware execution. Open-source projects: [mecRT](https://github.com/gaochuanchao/mecRT).
