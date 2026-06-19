---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

# Gao Chuanchao

I am a postdoctoral researcher at Uppsala University, Sweden, working with [Prof. Yi Wang](https://user.it.uu.se/~wangyi/). I received my Ph.D. from the College of Computing and Data Science at Nanyang Technological University (NTU), Singapore, under the supervision of [Prof. Arvind Easwaran](https://personal.ntu.edu.sg/arvinde/).

My research focuses on *algorithmic foundations for heterogeneous resource allocation and scheduling* in real-time, network-integrated edge/cloud systems. I work on approximation algorithms, distributed scheduling, and system-level evaluation for mobile edge computing and cyber-physical systems.

I am particularly interested in developing provable algorithms that remain connected to practical constraints such as wireless dynamics, deadline-aware execution, and heterogeneous edge resources.

📎 Download my [Curriculum Vitae](/papers/AcademicCV.pdf).

📎 Download my [Research Statement](/papers/ResearchStatement.pdf).

## Research Profile

- Approximation algorithms for real-time edge computing
- Distributed resource allocation in mobile edge computing systems
- System-level evaluation for network-integrated real-time systems
- Heterogeneous resource scheduling and combinatorial optimization

See more on my [research directions](/research/).

## Projects

- **[mecRT](https://github.com/gaochuanchao/mecRT)**: an open-source simulation framework for evaluating real-time task offloading, resource allocation, and scheduling algorithms in mobile edge computing systems.

See more on [projects](/projects/).

## Selected Publications

- `Chuanchao Gao`, Yiyang Gao, Michael Yuhas, Arvind Easwaran. *Fault-Tolerant Offloading Framework for Real-Time Applications in Mobile Edge Computing*. **IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS)**, 2026. [[Download]](</papers/Fault-Tolerant Offloading Framework for Real-Time Applications in Mobile Edge Computing.pdf>) [[Research Artifact: mecRT]](https://github.com/gaochuanchao/mecRT)

  <details class="overview-details">
  <summary>Brief overview</summary>
  <div class="details-content">

  This paper studies forwarding-enabled offloading for real-time applications in mobile edge computing systems. After a task is offloaded to an edge server, it may be forwarded to another server for processing, allowing the system to balance load more effectively and use edge resources more flexibly. This added flexibility also makes resource management more challenging: the resulting optimization problem generalizes both the two-dimensional multiple-choice assignment problem and the three-dimensional matching problem. We develop FastSA, the first constant-factor approximation algorithm for this setting, with a 1/10 theoretical guarantee and linear runtime complexity.

  </div>
  </details>

- `Chuanchao Gao`, Arvind Easwaran. *Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing*. **IEEE Real-Time Systems Symposium (RTSS)**, 2025. [[HTML]](https://doi.org/10.1109/RTSS66672.2025.00023) [[Download]](</papers/Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing.pdf>) [[Research Artifact: mecRT]](https://github.com/gaochuanchao/mecRT)

  <details class="overview-details">
  <summary>Brief overview</summary>
  <div class="details-content">

  This paper studies real-time task offloading in vehicular edge computing, where each offloaded task must be assigned an edge server, the bandwidth for offloading, and computation resources for processing. The resulting optimization problem generalizes the Generalized Assignment Problem (GAP) by introducing two-dimensional resource constraints and multiple resource-allocation choices for each task-server pair. We formalize this setting as the two-dimensional multiple-choice assignment problem and design SARound, a 1/4-approximation algorithm. We also show how to improve the guarantee to 1/(2+epsilon) with higher runtime complexity, yielding the best known approximation guarantee for this class of problems.

  </div>
  </details>

- `Chuanchao Gao`, Niraj Kumar, Arvind Easwaran. *Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing*. **IEEE Real-Time Systems Symposium (RTSS)**, 2024. [[HTML]](https://doi.org/10.1109/RTSS62706.2024.00012) [[Download]](</papers/Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing.pdf>) [[Experiments Data]](https://github.com/CPS-research-group/CPS-NTU-Public/tree/RTSS2024)

  <details class="overview-details">
  <summary>Brief overview</summary>
  <div class="details-content">

  This paper studies energy-efficient job mapping and resource management for deadline-constrained workloads in mobile-edge computing. Each job consists of three operations: offloading, processing, and downloading; for each operation, the scheduler must decide which edge node should execute it. The resulting optimization problem jointly captures job placement, resource allocation, and operation-stage scheduling, generalizing both three-stage flow-shop scheduling and unrelated-machine scheduling. We design LHJS, the first constant-factor approximation algorithm for this class of problems, to reduce energy consumption while preserving real-time guarantees.

  </div>
  </details>

See the full [publication list](/publications/).

## Education

- **Aug 2021 - Feb 2026**<br>
  **Ph.D. in Computer Science and Engineering**, Interdisciplinary Graduate Programme, <a href="https://www.ntu.edu.sg/"><img class="png" src="/images/NTU.png" width="20pt"></a> Nanyang Technological University, Singapore
- **Jan 2020 - Jul 2021**<br>
  **Graduate Studies (M.Eng. coursework and research)**, School of Computer Science and Engineering, <a href="https://www.ntu.edu.sg/"><img class="png" src="/images/NTU.png" width="20pt"></a> Nanyang Technological University, Singapore
- **Aug 2013 - Jul 2017**<br>
  **B.Eng. in Mechanical and Aerospace Engineering (First Class Honours)**, School of Mechanical and Aerospace Engineering, <a href="https://www.ntu.edu.sg/"><img class="png" src="/images/NTU.png" width="20pt"></a> Nanyang Technological University, Singapore

## Patents

- Heejong Park, **Chuanchao Gao**, Arvind Easwaran, Cheng Chia Loon. *Material Handling Method Based on Digital Twin*. Taiwan Patent No. I806148 B.

## Awards

- **Best Demo Award**, RTCSA 2025 - *VecSim: A Vehicular Edge Computing Simulator for Real-Time Applications* [[mecRT]](https://github.com/gaochuanchao/mecRT/tree/main/src)
- **NTU Research Scholarship**, 2021-2025
- **NTU Science and Engineering Undergraduate Scholarship**, 2013-2017

## Work Experience

- **Equipment Engineer**, United Microelectronics Corporation (Singapore)<br>
  *Jun 2017 - Jan 2020*
- **Research Assistant**, Nanyang Technological University, Singapore<br>
  *Jun 2020 - Jun 2021*
