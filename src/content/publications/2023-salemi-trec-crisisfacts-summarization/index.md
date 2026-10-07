---
bibkey: Salemi2023a
title: "Summarizing Social Media & News Streams for Crisis-related Events by Integrated Content-Graph Analysis: TREC-2023 CrisisFACTS Track"
year: 2023
venue: Thirty-Second Text REtrieval Conference (TREC 2023), CrisisFACTS track
type: shared-task system paper (6 pages)
authors: [Hossein Salemi, Yasas Senarath, Tarin Sultana Sharika, Anuridhi Gupta, Hemant Purohit]
my_role: "co-author (2nd of 5): system pipeline, fact extraction, graph scoring, writing and review"
themes: [crisis-informatics, summarization, information-retrieval, knowledge-graphs, stream-processing]
methods: [fact extraction (REBEL seq2seq relation extraction; ClausIE open IE), KeyBERT query extension, PyTerrier indexing (DFReeKLIM), Sentence-BERT similarity, fact–term–query graph, closeness centrality ranking]
datasets: [TREC 2023 CrisisFACTS multi-stream data (Twitter, Reddit, Facebook, NELA news) with FEMA ICS-209-derived queries]
url: https://trec.nist.gov/pubs/trec32/papers/Human_Info_Lab.F.pdf
thread: ["knowledge-llm"]
contribution: ["technical"]
first_author: false
venue_short: "TREC"
domain_problem: "Responders need concise fact summaries from crisis streams"
technical_problem: "Extracting facts and ranking them by importance to responder queries"
one_liner: "Fact extraction + query-extended filtering + graph centrality ranking of crisis facts"
headline_value: "0.613"
headline_label: "BERTScore F1 against NIST summaries (ClausIE variant)"
---
## TL;DR
A TREC CrisisFACTS system that turns multi-platform crisis streams into ranked fact lists. It **extracts facts** (REBEL or ClausIE), **filters** them with KeyBERT-extended indicative terms from responders' queries, and **ranks** them by closeness centrality in a graph linking facts, terms and queries. The ClausIE variant (B) scores best: **BERTScore F1 0.613** against NIST summaries, comprehensiveness 0.136 and redundancy score 0.507.

## Problem
Disaster responders need concise, timely facts from noisy, multi-source streams (Twitter, Reddit, Facebook, news). Matching a query isn't enough; a fact must matter for disaster-management information needs, which CrisisFACTS expresses as FEMA ICS-209-style queries.

## Approach
System design (Fig. 1), run per event-day:
1. **Text to Fact:** Method A uses **REBEL** (BART seq2seq relation extraction, 200+ relation types); Method B uses **ClausIE** (dependency-based open information extraction).
2. **Query Extender:** **KeyBERT** expands each query's indicative terms (Table 1).
3. **Filtering:** PyTerrier index (DFReeKLIM weighting); top-K facts retrieved per extended term, each with a relevance score.
4. **Scoring** (Fig. 2): a graph with fact, term and query nodes. Fact–fact and fact–query edges carry Sentence-BERT cosine similarity (pruned below 0.5); fact–term edges carry min–max-normalized retrieval scores. **Closeness centrality** with distance = 1 − weight gives each fact's importance (Eqs. 1–3).

![Fig. 1: System design](figures/fig-1.png)
*Fig. 1: Streams → text-to-fact → filtering by extended indicative terms → graph creation → centrality → ranked fact list.*

![Fig. 2: Scoring graph](figures/fig-2.png)
*Fig. 2: Fact, term and query nodes with fact–fact, fact–term and fact–query edges.*

## Key results
- **BERTScore (Table 2), F1 vs. NIST / Wikipedia summaries:** Method A 0.597 / 0.445; **Method B 0.613 / 0.480**.
- **ROUGE (Table 3), F1 vs. NIST / Wikipedia:** A 0.211 / 0.039; **B 0.319 / 0.028**. ROUGE against Wikipedia is very low for both.
- **Manual fact matching (Table 4):** redundancy score (precision-based, higher is better) A 0.305 / **B 0.507**; comprehensiveness (recall-based) A 0.058 / **B 0.136**.
- Method B is better across metrics, possibly because the scoring module handles ClausIE facts better.

## Contributions
- A modular system with an **integrated content-graph analysis** for ranking crisis facts, usable with any extractive or abstractive fact generator.
- Evaluation of two fact-extraction methods on TREC CrisisFACTS 2023.
