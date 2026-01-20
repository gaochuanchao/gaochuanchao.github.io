---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D. student in the College of Computing and Data Science at Nanyang Technological University (NTU), Singapore, supervised by [Prof. Arvind Easwaran](https://personal.ntu.edu.sg/arvinde/). I am a member of the [Cyber-Physical Systems Research Group](https://cps-research-group.github.io/) at NTU.

My research focuses on *algorithmic foundations for heterogeneous resource allocation and scheduling*, with an emphasis on combinatorial optimization and approximation algorithms motivated by real-time and distributed systems.

**I am actively seeking postdoctoral positions starting in February 2026.**
 I am particularly interested in research directions related to *heterogeneous resource scheduling* and *network-integrated computing systems*, with a focus on developing provable, mathematically grounded algorithms that **bridge theory and practice**.



📎 Download my [Curriculum Vitae](../papers/AcademicCV.pdf) .



#### 🔬 Research Interests

- Approximation algorithms
- Combinatorial optimization
- Real-time scheduling
- Heterogeneous resource allocation
- Network-integrated and cyber-physical systems



<span class='anchor' id='-educations'></span>

# 🎓 Education
- **Aug 2021 – Jan 2026**
   **Ph.D. in Computer Science and Engineering**,
   Interdisciplinary Graduate Programme, <a href="https://www.ntu.edu.sg/"><img class="png" src="/images/NTU.png" width="20pt"></a> Nanyang Technological University, Singapore
- **Jan 2020 – Jul 2021**
   **Graduate Studies (M.Eng. coursework and research)**,
   School of Computer Science and Engineering, <a href="https://www.ntu.edu.sg/"><img class="png" src="/images/NTU.png" width="20pt"></a> Nanyang Technological University, Singapore
- **Aug 2013 – Jul 2017**
   **B.Eng. in Mechanical and Aerospace Engineering (First Class Honours)**,
   School of Mechanical and Aerospace Engineering, <a href="https://www.ntu.edu.sg/"><img class="png" src="/images/NTU.png" width="20pt"></a> Nanyang Technological University, Singapore



<span class='anchor' id='-projects'></span>

## 💻 Open Source Project

- **[mecRT](https://github.com/gaochuanchao/mecRT/tree/main/src)**
  A simulation framework for **real-time mobile edge computing**, supporting full task lifecycle management, including task registration, resource allocation and scheduling, dynamic offloading control.



<span class='anchor' id='-publications'></span>

# 📝 Publication

### 2025
- `Chuanchao Gao`, Arvind Easwaran.
  *Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing.*
  **IEEE Real-Time Systems Symposium (RTSS)**, 2025. [HTML] [[Download]](../papers/Real-Time Service Subscription and Adaptive Offloading Control in Vehicular Edge Computing.pdf) [[Open Source Project: mecRT]](https://github.com/gaochuanchao/mecRT/tree/main/src) 
- `Chuanchao Gao`, Arvind Easwaran. 
  *Energy-Efficient Joint Offloading and Resource Allocation for Deadline-Constrained Tasks in Multi-Access Edge Computing.*
  IEEE International Conference on Embedded and Real-Time Computing Systems and Applications (RTCSA), 2025.  [[HTML]](https://ieeexplore-ieee-org.remotexs.ntu.edu.sg/document/11153106) [[Download]](../papers/Energy-Efficient Joint Offloading and Resource Allocation for Deadline-Constrained Tasks in Multi-Access Edge Computing.pdf) 
- `Chuanchao Gao` and Arvind Easwaran. 
  *VecSim, a Vehicular Edge Computing Simulator for Real-Time Applications.*
  Demo Session of IEEE International Conference on Embedded and Real-Time Computing Systems and Applications (RTCSA), 2025. [[HTML]](https://ieeexplore.ieee.org/document/11153192) [[Download]](../papers/VecSim, a Vehicular Edge Computing Simulator for Real-Time Applications.pdf) [[Open Source Project: mecRT]](https://github.com/gaochuanchao/mecRT/tree/main/src)
- `Chuanchao Gao` and Arvind Easwaran. 
  *Local Ratio based Real-time Job Offloading and Resource Allocation in Mobile Edge Computing.* 
  International Workshop on Real-time and IntelliGent Edge computing (RAGE), 2025. [[HTML]](https://doi.org/10.1145/3722567.3727843) [[Download]](..\papers\Local Ratio based Real-time Job Offloading and Resource Allocation in Mobile Edge Computing.pdf) 

### 2024

- `Chuanchao Gao`, Niraj Kumar, Arvind Easwaran.
  *Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing.*
  **IEEE Real-Time Systems Symposium (RTSS)**, 2024. [[HTML]](https://ieeexplore.ieee.org/abstract/document/10844747)  [[Download]](../papers/Energy-Efficient Real-Time Job Mapping and Resource Management in Mobile-Edge Computing.pdf) [[Experiments Data]](https://github.com/CPS-research-group/CPS-NTU-Public/tree/RTSS2024)
- Niraj Kumar, `Chuanchao Gao`, Arvind Easwaran.
  *Optimal Fixed Priority Scheduling in Multi-Stage Multi-Resource Distributed Real-Time Systems.*
  Design, Automation & Test in Europe Conference & Exhibition (DATE), 2024. [[HTML]](https://ieeexplore-ieee-org.remotexs.ntu.edu.sg/abstract/document/10546551)  [[Download]](..\papers\Optimal Fixed Priority Scheduling in Multi-Stage Multi-Resource Distributed Real-Time Systems.pdf) [[Experiments Data]](https://github.com/CPS-research-group/CPS-NTU-Public/tree/DATE2024) 

### 2022

- `Chuanchao Gao`, Aryaman Shaan, Arvind Easwaran.
  *Deadline-constrained Multi-resource Task Mapping and Allocation for Edge-Cloud Systems.*
  IEEE Global Communications Conference, 2022. [[HTML]](https://ieeexplore.ieee.org/abstract/document/10001137)  [[Download]](..\papers\Deadline-constrained Multi-resource Task Mapping and Allocation for Edge-Cloud System.pdf) [[Experiments Data]](https://github.com/CPS-research-group/CPS-NTU-Public/tree/GLOBECOM2022) 

- `Chuanchao Gao`, Arvind Easwaran.
  *Work-in-Progress: Deadline-Constrained Multi-Resource Allocation in Edge-Cloud System.*
  **IEEE Real-Time Systems Symposium (RTSS)**, 2022. [[HTML]](https://ieeexplore.ieee.org/abstract/document/9984794)  [[Download]](..\papers\Work-in-Progress Deadline-Constrained Multi-Resource Allocation in Edge-Cloud System.pdf) 

### 2021

- `Chuanchao Gao`, Heejong Park, and Arvind Easwaran. 
  *An anomaly detection framework for digital twin driven cyber-physical systems.*
  International Conference on Cyber-Physical Systems (ICCPS), 2021. [[HTML]](https://dl.acm.org/doi/abs/10.1145/3450267.3450533)  [[Download]](..\papers\An anomaly detection framework for digital twin driven cyber-physical systems.pdf) 



<span class='anchor' id='-patents'></span>

# 🏅Patents

- Heejong Park, **Chuanchao Gao**, Arvind Easwaran, Cheng Chia Loon.
   *Material Handling Method Based on Digital Twin.*
   Taiwan Patent No. I806148 B.



<span class='anchor' id='-awards'></span>

# 🏅Awards

- **Best Demo Award**, RTCSA 2025 — *VecSim: A Vehicular Edge Computing Simulator for Real-Time Applications* [[mecRT]](https://github.com/gaochuanchao/mecRT/tree/main/src) 
- **NTU Research Scholarship**, 2021–2025
- **NTU Science and Engineering Undergraduate Scholarship**, 2013–2017



<span class='anchor' id='-working'></span>

# 💻 Work Experience
- **Equipment Engineer**, United Microelectronics Corporation (Singapore)
   *Jun 2017 – Jan 2020*
- **Research Assistant**, Nanyang Technological University, Singapore
   *Jun 2020 – Jun 2021*
