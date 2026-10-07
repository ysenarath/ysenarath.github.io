// Settings for the /publications section.
export const PUBS = {
  title: 'Publications',
  thesis:
    'I build AI that turns noisy social and crowdsourced data into information emergency responders and online communities can act on, from methods to the tools practitioners use.',
  // Name variants highlighted in author lists
  selfNames: ['Senarath', 'Wijesuriya'],
};

// Order here is the lane order on the research map (top to bottom).
// Colors are CSS tokens defined in src/styles/publications.css as --t-<id>.
export const THREADS: Record<string, { name: string; short: string; blurb: string }> = {
  'incident-detection': {
    name: 'Crowdsourced incident detection',
    short: 'Incident detection',
    blurb: 'Detecting emergencies from noisy crowdsourced reports, from Bayesian fusion to practitioner-centric multi-objective models and the tool that puts them in responders’ hands.',
  },
  'continual-learning': {
    name: 'Continual learning',
    short: 'Continual learning',
    blurb: 'Keeping behavior classifiers current as topics, targets and languages drift, without forgetting what they already know.',
  },
  'harmful-speech': {
    name: 'Harmful online behavior',
    short: 'Harmful speech',
    blurb: 'Hate, propaganda and violence-inducing speech: semantic, multilingual and human-in-the-loop detection.',
  },
  'human-centered-ai': {
    name: 'Human-centered AI for crises',
    short: 'Human-centered AI',
    blurb: 'Systems built with emergency managers and volunteers: streaming analytics, annotation and decision support.',
  },
  'knowledge-llm': {
    name: 'Knowledge graphs & LLM QA',
    short: 'Knowledge & LLMs',
    blurb: 'Knowledge bases, retrieval and LLM question answering over fragmented disaster data.',
  },
  'early-nlp': {
    name: 'Sentiment, emotion & aspects',
    short: 'Early NLP',
    blurb: 'Early work on aspect extraction, emotion analysis and corpora for low-resource languages.',
  },
};

export const threadColor = (id: string) => `var(--t-${id})`;
