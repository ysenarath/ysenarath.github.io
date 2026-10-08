---
bibkey: Senarath2023a
title: "Violence-Inducing Behavior Prevention in Social-Cyber Space"
year: 2023
venue: International Symposium on AI, Data and Digitalization (SAIDD 2023), Springer CCIS vol. 1810, pp. 151–159 (published 2024)
type: symposium position / project paper (9 pages)
authors: [Yasas Senarath, Hemant Purohit, Rajendra Akerkar]
my_role: first author
themes: [social-cybersecurity, hate-speech-detection, community-resilience, multilingual-nlp, knowledge-graphs]
methods: [project design, stakeholder requirements (questionnaires and interviews), ontology of violence-inducing behavior, knowledge-base data augmentation (WordNet / Open Multilingual WordNet / DBpedia), LLM-assisted labelling, multimodal fusion (planned)]
datasets: [planned Norwegian hate-speech dataset (Twitter, Hurtlex keywords); existing English and multilingual hate-speech datasets]
url: https://link.springer.com/chapter/10.1007/978-3-031-53770-7_10
thread: ["deviant-behavior", "continual-learning"]
contribution: ["practical"]
first_author: true
venue_short: "SAIDD (Springer)"
domain_problem: "Online hate erodes community resilience; Norway lacks tools"
technical_problem: "Sparse, monolingual labels; poor generalization across target identities; multimodality"
one_liner: "Project design for multilingual, KB-augmented violence-inducing behavior detection"
headline_value: "Norway–US"
headline_label: "Research Council of Norway project on violence-inducing speech"
---
## TL;DR
A project paper describing **SOCYTI**, a Research Council of Norway project (Western Norway Research Institute and GMU). It aims to give local community services real-time, multilingual (including **Norwegian**) and multimodal detection of violence-inducing online behaviors such as hate speech, using **knowledge-base-driven augmentation** to make detectors robust across targeted identity groups.

## Problem
Hate speech, radicalization and polarization harm **community resilience**, a community's ability to cope with disasters together. Existing resilience indices (FEMA, UNISDR, EU Resiloc) ignore dynamic social-atmosphere risks. The paper lists four challenges:
1. Human-behavior indicators are missing from resilience models.
2. Social cybersecurity has few studies, and the definitions of malicious behavior are fragmented.
3. Labelled data is sparse (≈7% malicious) and English-centric; there is **no Norwegian dataset**, and models do not generalize across target identities.
4. Malicious content is increasingly multimodal.

## Approach (planned and ongoing)
- **Three objectives**:
  1. Characterize violence-inducing behaviors that harm resilience, and extend resilience indices.
  2. Infer them from multimodal, multilingual posts while respecting privacy.
  3. Build a real-time detection system for proactive intervention.
- **Stakeholder-driven** (Fig. 1): social scientists ran questionnaires and interviews to define scenarios, a community resilience index and an **ontology** of violence-inducing behavior.
- **Data:** Norwegian tweets collected with Hurtlex hate keywords, labelled hateful or not by manual review plus **LLM predictions**.
- **System** (Fig. 2): hate-speech detection as the foundation.
  - **Identity-term augmentation with WordNet synonyms** to cover under-represented target groups.
  - A custom knowledge base that extends WordNet using LLM-assisted mining.
  - Open Multilingual WordNet and DBpedia for cross-lingual context.
  - Continual training to follow evolving discourse.
  - Multimodal fusion by concatenating text and image encodings.

![Fig. 1: SOCYTI approach](figures/fig-1.png)
*Fig. 1: Stakeholder questionnaires → scenarios, resilience index, ontology → annotated datasets → detection models → inference → visualization and reporting.*

![Fig. 2: SOCYTI architecture](figures/fig-2.png)
*Fig. 2: Behavior-centric automation linking community resilience, social cybersecurity, external knowledge (WordNet), ontology and deep-learning models.*

## Key results
- None yet. This is an ongoing-project overview with no experiments.

## Contributions
- An overview of SOCYTI's scope, objectives, background challenges and planned approach.
- A proposed hate-speech detection system as the basis for detecting violence-inducing behavior.
