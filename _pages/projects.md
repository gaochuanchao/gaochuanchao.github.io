---
permalink: /projects/
title: "Projects"
excerpt: "Research projects"
author_profile: true
---

# Projects

This page collects selected research projects, systems, simulators, and experimental artifacts developed as part of my Ph.D. research and ongoing research agenda. These projects connect algorithm design with system-level evaluation for real-time task offloading, scheduling, and resource allocation in edge, cloud, and mobile edge computing systems.

I use this page to highlight concrete research efforts beyond individual papers, including software infrastructure, simulation frameworks, reproducibility artifacts, and future extensions of my work.

## mecRT: Mobile Edge Computing Simulator for Real-Time Applications

[mecRT](https://github.com/gaochuanchao/mecRT) is an open-source simulator for evaluating real-time task offloading and resource allocation algorithms in 5G-enabled mobile edge computing systems.

It integrates 5G network modeling through Simu5G with edge computing abstractions, enabling system-level evaluation under wireless dynamics, deadline constraints, and heterogeneous edge resources.

Key features:

- Deadline-aware task offloading and resource allocation
- Task lifecycle management, including task registration, execution, result retrieval, and deadline monitoring
- 5G-based communication modeling via Simu5G
- Support for adaptive offloading control under changing channel quality
- Support for customizable scheduling policies and experimental evaluation scripts

Related publications:

- **RTAS 2026**: [Fault-Tolerant Offloading Framework for Real-Time Applications in Mobile Edge Computing](</papers/Fault-Tolerant Offloading Framework for Real-Time Applications in Mobile Edge Computing.pdf>)
- **RTSS 2025**: [Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing](</papers/Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing.pdf>)
- **RTCSA Demo 2025**: [VecSim, a Vehicular Edge Computing Simulator for Real-Time Applications](</papers/VecSim, a Vehicular Edge Computing Simulator for Real-Time Applications.pdf>)

Links: [GitHub](https://github.com/gaochuanchao/mecRT)
