---
bibkey: DellaVella2025
title: "Eliciting Socio-Technical Research Needs on Countering Violence-Inducing and Hateful Speech in Cyberspace"
year: 2025
venue: "Digital Society (Springer), vol. 4, no. 2, article 62"
type: journal article (27 pages; conceptual / mixed-methods)
authors: [Dante Della Vella, Yasas Senarath, Ehtesham Hashmi, Mohamed Abomhara, Sarang Shaikh, Torborg Igland, Carol Azungi Dralega, Sule Yildirim Yayilgan, Hemant Purohit, Rajendra Akerkar]
my_role: "co-author (2nd of 10): technical framework (Fig. 3 architecture), datasets and detection-model sections, writing and review; helped with workshops (did not run the interviews or surveys)"
themes: [hate-speech-detection, social-cybersecurity, participatory-design, responsible-ai, multilingual-nlp]
methods: [participatory design, mixed methods (victim survey, stakeholder interviews and workshops), stakeholder theory, socio-technical theory, NIST AI RMF, conceptual system framework (detection, exploration, context analysis, ontology / knowledge graph, continual learning, XAI)]
datasets: [victim survey (71 respondents, Feb–Apr 2024); 20 interviews + 2 workshops with 25 people from 20 Norwegian organizations; existing English, Norwegian and multilingual HS datasets; 15,000 new English/Norwegian tweets (1,500 being expert-labelled)]
url: https://link.springer.com/article/10.1007/s44206-025-00212-8
thread: ["harmful-speech"]
contribution: ["technical", "practical"]
first_author: false
venue_short: "Digital Society"
domain_problem: "Victims and responders need support against online hate"
technical_problem: "Designing a responsible multilingual, multimodal detection framework"
one_liner: "Participatory needs study (victims + 20 orgs) \u2192 responsible multilingual HS framework"
headline_value: "20 orgs"
headline_label: "Plus 71 victims surveyed to shape the framework"
---
## TL;DR
The main SOCYTI journal paper. A **participatory-design** study of Norwegian hate-speech **victims** (survey, n = 71) and **responders** (25 people from 20 organizations) identifies four needs: emotional support, awareness, legal clarity and technology. These feed a **conceptual multilingual, multimodal AI framework** for hate-speech **investigation** and **prevention**: detection, exploration, social network analysis and trend monitoring, an ontology and knowledge graph, continual model adaptation and explainable AI, under explicit legal and ethical safeguards.

## Problem
Online hate speech harms individuals and community cohesion. It is ambiguous, culturally specific and evolving; only about 7% of content is hateful; labelled data is mostly English; and moderation tools ignore stakeholders' needs and rights. Norwegian context and data are especially scarce.

## Approach
- **Theory:** Stakeholder theory, participatory design, socio-technical theory, and the NIST AI Risk Management Framework.
- **Methods** (Fig. 1): the SOCYTI social-science team ran a **victim survey** (about 300 reached, 71 responses; purposive and snowball sampling through advocacy groups) and **responder workshops (2) and interviews (20)** with 25 individuals from 20 organizations (municipalities, Konfliktrådet, NGOs, police, a NATO advisor).
- **Framework** (Fig. 3):
  - questionnaires and interviews → stakeholder needs → legal and ethical considerations → ontology;
  - scenarios: **data collection → detecting types of malicious speech → context analysis and exploration analysis → social network analysis and trend monitoring → evidence and preventive action.**
- **Scenarios**: (1) **HS investigation**: detection and exploration, gathering evidence for case assessment by humans. (2) **HS prevention**: detection and context analysis (SNA, event-linked trends, heat maps) to target interventions.
- **Technical components**:
  - transformer-based binary and multiclass detection;
  - target labels: potentially hateful, offensive or abusive, and neutral;
  - **15k English/Norwegian tweets** collected, with 1,500 expert-labelled and the rest weakly labelled;
  - plans for Mastodon, Bluesky and Reddit data, and multimodal data;
  - SNA with community detection;
  - an **ontology-guided knowledge graph** queried with SPARQL or natural language;
  - **continual adaptation** (drift detection with DDM/EDDM, defenses against catastrophic forgetting);
  - **XAI** (SHAP, LIME);
  - human-in-the-loop review, GDPR, EU AI Act, ethical and data-protection impact assessments.

![Fig. 3: Conceptual framework](figures/fig-3.png)
*Fig. 3: Stakeholder inputs → needs and legal/ethical analysis → ontology → scenario pipeline (data collection → detection → context and exploration analysis → SNA and trend monitoring → evidence and preventive action).*

![Fig. 1: Stakeholder needs methodology](figures/fig-1.png)
*Fig. 1: SOCYTI social-science team: quantitative victim survey (76 respondents shown in the figure; 71 in the text) and qualitative workshops and interviews with organizations.*

## Key findings (stakeholder needs)
- **Emotional and psychological support** (Fig. 2): victims reported anger (43), fear (29), violation (28), shame (27), humiliation (15) and pride in identity (13). Only 25% got help from friends and family, and 14.6% from support groups. Front-line responders from minority backgrounds face secondary trauma.
- **Awareness:** 41 respondents knew of no resources; only 3 knew of legal resources.
- **Legal and institutional:** only 2 respondents (3%) got help from police. Norway's §185 is vague; platform moderation is retreating (Meta, X).
- **Technology:** responders are overwhelmed by volume and need ML-assisted monitoring; victims need easier reporting.

## Contributions
- A holistic conceptual framework for countering online hate speech grounded in participatory stakeholder-needs analysis.
- Two scenario paths (prevention, investigation) and their components, plus legal and ethical safeguards for deployment.

## Limitations
- Small, self-selected survey sample (n = 71, highly educated, engaged with support networks).
- Conceptual: the system is still being built; no detection results are reported.
