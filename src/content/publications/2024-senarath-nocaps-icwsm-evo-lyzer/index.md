---
bibkey: Senarath2024a
title: "EVO-LYZER: Social Media Mining System for Evolving Communication Behavior Analytics to Aid Climate Change Programs"
year: 2024
venue: NOCAPS 2024 Workshop (Networks and Opinions on Climate Action in the Public Sphere) at ICWSM 2024
type: workshop paper (11 pages)
authors: [Yasas Senarath, Amanda Borth, Edward Maibach, Hemant Purohit]
my_role: first author
themes: [climate-communication, social-media-mining, behavioral-analytics, program-evaluation, visual-analytics]
methods: [Author-Topic Model (Gensim, variational Bayes), seed-keyword priors, random under-sampling, divergence measure (group-level), consistency measure (individual-level), significance testing, web dashboard (modified pyLDAvis)]
datasets: [Climate Matters program participants (738 journalists and TV weathercasters); 496,742 tweets from 11 months before to 11 months after each participant's first event]
url: https://workshop-proceedings.icwsm.org/abstract.php?id=2024_52
code: https://github.com/climate-matters/evo-lyzer
thread: ["human-centered-ai"]
contribution: ["technical", "practical"]
first_author: true
venue_short: "NOCAPS @ ICWSM"
domain_problem: "Does climate-communication training change what journalists post?"
technical_problem: "Measuring longitudinal behavior change from social media"
one_liner: "Topic-model divergence/consistency show +31% climate posting after Climate Matters training"
headline_value: "+31%"
headline_label: "Climate-relevant posting after Climate Matters training"
---
## TL;DR
**Evo-Lyzer** evaluates communication-training programs automatically by mining participants' social media before and after training. It uses an expert-guided author-topic model plus two new measures, **divergence** (group-level change) and **consistency** (individual-level steadiness). For **Climate Matters** (738 journalists and weathercasters, about 497k tweets), climate-relevant posting rose **31% overall and 22% for core climate topics**, with significant gains in consistency.

## Problem
Programs that train journalists and weathercasters to report on climate change need to know whether participants actually *post* more about climate afterwards: the attitude–behavior gap. Traditional evaluation (surveys, interviews, manual coding) is costly, small-scale, self-reported and usually measured at one point in time, so it misses longitudinal shifts.

## Approach
- **Measures**:
  - **Divergence** δr: percent change in a group's mean relevancy (probability of posting relevant content) before vs. after an event (Eqs. 1–2).
  - **Consistency** c = μ/σ of an individual's monthly relevancy, compared before vs. after (Eqs. 3–5).
  - Significance threshold p < 0.05.
- **System**:
  - *Data collection:* Twitter API timelines, 11 months before and after each participant's first event, to cover all seasons.
  - *Preprocessing:* Gensim phrase detection.
  - *Author-Topic Model* (6 topics), guided by **expert seed keywords** in 5 themes (causes, problem, solution, description, analysis; Table 1), with random under-sampling of posts without keywords and keyword priors. Topics refined iteratively with a climate-communication researcher.
  - *Dashboard* (Fig. 4): tweet tables, timeline and word cloud, topic explorer (modified pyLDAvis), and divergence and consistency plots.

![Table 1: Expert seed keywords](figures/table-1.png)
*Table 1: Seed keywords from Climate Matters experts, used as topic-model priors.*

## Key results
- **Topics** (Table 2): topics 1–2 cover core climate issues (emissions, fossil fuels); topics 3–5 cover weather and climatic events; topic 6 is irrelevant.
- **Relevance detection:** 200 annotated tweets give **AUC 0.83** for topics 1–2 vs. the rest (single annotator) (Fig. 1b).
- **Divergence** (Fig. 2):
  - Topics 1–5: relevancy **0.31 → 0.41 (+31.2%, p = 1.5e-11)**.
  - Core topics 1–2: **0.074 → 0.090 (+21.7%, p = 8.0e-4)**.
- **Consistency** (Fig. 3):
  - Topics 1–5: 2.58 → 2.63 (+2.1%, p = 8.9e-7).
  - Core topics: **0.41 → 0.55 (+36.2%, p = 6.6e-7)**.
- Conclusion: participants' climate communication increased and became more consistent after Climate Matters events.

![Fig. 2: Divergence in topic relevance](figures/fig-2.png)
*Fig. 2: Distribution of relevancy before (orange) and after (blue) events: (a) all relevant topics, (b) core climate topics.*

## Contributions
1. An innovative social-media-mining system for measuring evolving communication behavior to support evaluation of intervention programs.
2. Divergence and consistency measures operationalized at group and individual levels.
3. The Evo-Lyzer system (web dashboard), reusable across domains.
4. Validation in a real climate-communication program case study.

## Limitations & future work
- Needs human input: keyword lists, topic review and topic labelling.
- **No control group**, so the changes are within-participant over time.
- The X/Twitter API is no longer free; Mastodon or online articles are suggested alternatives.
- Future work: BERT-based representations and more measures.
