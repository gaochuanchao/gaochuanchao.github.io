---
permalink: /research/
title: "Research"
excerpt: "Research directions"
author_profile: true
---

# Research

My research studies **coordination, resource allocation, and scheduling in distributed real-time computing systems**. I am interested in systems where computation, communication, and timing constraints interact, such as mobile edge computing, network-integrated cyber-physical systems, vehicular systems, and deterministic component-based real-time systems.

A central goal of my work is to develop methods that are both **theoretically grounded** and **system-aware**: algorithms should provide rigorous performance guarantees, while also capturing practical constraints such as wireless dynamics, heterogeneous resources, communication delays, deadline-aware execution, and distributed decision making.

## Main Research Directions

### 1. Algorithmic Foundations for Real-Time Edge Computing
This line of work develops approximation algorithms and optimization models for real-time task offloading, resource allocation, and scheduling in mobile edge computing systems. The key challenge is that each task may require multiple types of resources, such as wireless bandwidth and edge computation, while also having strict timing requirements.

#### 1.1 Real-time task offloading and resource allocation

I study real-time task offloading problems where the scheduler must decide which edge server should process each task, how much bandwidth should be allocated for offloading, and how much computation capacity should be allocated for execution.

These problems generalize classical assignment and scheduling problems by introducing multi-dimensional resource constraints, heterogeneous task-server choices, and deadline-aware feasibility requirements. My work develops approximation algorithms with provable performance guarantees for these problem classes.

Representative work:
- In [[RAGE'25]](</papers/Local Ratio based Real-time Job Offloading and Resource Allocation in Mobile Edge Computing.pdf>), we proposed the first constant-factor approximation algorithm for this class of problems, with a 1/6 guarantee.
- In [[RTSS'25]](</papers/Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing.pdf>), we improved the guarantee to 1/4 with cubic runtime complexity, and further showed how to improve the guarantee to 1/(2+ε) with higher runtime complexity.

#### 1.2 Forwarding-enabled real-time offloading

I also study forwarding-enabled offloading, where a task may first be offloaded to one edge server and then forwarded to another server for processing. This added flexibility can improve resource utilization and load balancing, but it also creates more complex interactions among communication, computation, and timing constraints.

Representative work:
- In [[GLOBECOM'22]](</papers/Deadline-constrained Multi-resource Task Mapping and Allocation for Edge-Cloud System.pdf>), we proposed a greedy heuristic algorithm for forwarding-enabled offloading.
- In [[RTSS'22]](</papers/Work-in-Progress Deadline-Constrained Multi-Resource Allocation in Edge-Cloud System.pdf>), we defined a forwarding model that considers resource contentions during task forwarding.
- In [[RTCSA'25]](</papers/Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing.pdf>), we developed approximation algorithms for forwarding-enabled real-time task allocation under fairness constraints.
- In [[RTAS'26]](</papers/Fault-Tolerant Offloading Framework for Real-Time Applications in Mobile Edge Computing.pdf>), we developed FastSA, the first constant-factor approximation algorithm for this setting, with a 1/10 theoretical guarantee and linear runtime complexity.

#### 1.3 Real-time job mapping and multi-stage resource management
In this direction, I study deadline-constrained jobs that consist of multiple execution stages, such as offloading, processing, and downloading. The scheduler must jointly decide where each stage should execute, when it should execute, and how much resource should be allocated to it.

These problems connect real-time scheduling, flow-shop scheduling, unrelated-machine scheduling, and edge resource management.

Representative work:
- In [[RTSS'24]](</papers/Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing.pdf>), we designed the first constant-factor approximation algorithm for energy-efficient real-time job mapping and resource management in mobile edge computing.

### 2. Distributed Coordination for Network-Integrated Real-Time Systems

Many edge and cyber-physical systems cannot rely on a single centralized scheduler. Edge servers, vehicles, sensors, and controllers often need to make decisions based on partial and local information. This motivates distributed algorithms that can provide predictable behavior despite limited coordination.

In this line of work, I study distributed resource allocation and scheduling problems where each node makes local decisions while still contributing to global timing and resource objectives. I am particularly interested in understanding the tradeoff between algorithmic guarantees, communication overhead, and implementation practicality.

Current interests include:
- distributed approximation algorithms for real-time task allocation;
- local decision making under deadline and resource constraints;
- coordination mechanisms for edge servers and cyber-physical components;
- the cost of information exchange in distributed scheduling.

### 3. Simulation Infrastructure
I design and implement simulation frameworks for evaluating real-time task offloading, resource allocation, scheduling, and coordination algorithms. My goal is to connect theoretical algorithm design with realistic system-level evaluation.

This direction includes simulation infrastructure for mobile edge computing and vehicular edge systems, as well as broader interests in co-simulation and parallel discrete-event simulation for distributed cyber-physical systems.

Representative work:
- [mecRT](https://github.com/gaochuanchao/mecRT) is an open-source simulation framework for evaluating real-time task offloading, resource allocation, and scheduling algorithms in mobile edge computing systems.
- In [[RTCSA'25]](</papers/VecSim, a Vehicular Edge Computing Simulator for Real-Time Applications.pdf>), we proposed VecSim, a vehicular edge computing simulator for real-time applications, which is open-sourced as part of the mecRT project.
- [CPSSim](https://github.com/gaochuanchao/CPSSim) is a portable, deterministic, event-driven C++ simulator for studying the interaction between real-time execution and cyber-physical behavior. The first validated scenario is the Bosch Physics-Driven Real-Time CPS Challenge: a distributed vehicle-control chain whose timing behavior affects physical performance and whose physical state can inform online scheduling.

Current interests include:
- simulation support for cyber-physical systems;
- scalable simulation methods for edge and vehicular systems;
- reproducible evaluation infrastructure for scheduling and resource-allocation algorithms.


