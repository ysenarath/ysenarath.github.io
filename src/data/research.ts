export interface ResearchTheme {
    title: string;
    paragraphs: string[];
}

export interface FutureDirection {
    title: string;
    paragraph: string;
}

export const researchOverview =
    "My research focuses on the design, implementation, and experimental evaluation of systems that can adapt to real-world dynamic environments with the support of structured knowledge. The central theme driving my work is the pursuit of “structured knowledge integration for robust and adaptive AI” — bridging the gap between static model assumptions and the ever-changing nature of real-world data.";

export const dissertationThemes: ResearchTheme[] = [
    {
        title: "Internal Knowledge: Replay-Based Continual Learning",
        paragraphs: [
            "Behavioral analytics systems leverage AI models for tasks such as intent detection, hate speech detection, and sentiment analysis to interpret online data streams for decision support. Traditional deep learning approaches suffer from catastrophic forgetting — a model loses previously learned knowledge when adapting sequentially to new tasks. A systematic evaluation of existing continual learning methods including direct replay, Elastic Weight Consolidation (EWC), and Gradient Episodic Memory (GEM) on behavioral detection problems revealed that direct replay achieves the best performance across diverse model architectures. This study established a critical foundation for the KGCL framework, demonstrating that complex regularization-based methods do not necessarily outperform simpler replay strategies, particularly in the large-parameter settings common in text-based deep learning.",
        ],
    },
    {
        title: "Task-Agnostic External Knowledge: Knowledge Graph Augmentation",
        paragraphs: [
            "While replay establishes a strong foundation, it has two key limitations: the memory buffer restricts the amount of knowledge transferred between tasks, and there remains room for meaningful improvement in overall task performance. To address these, the KGCL framework introduces a second level of knowledge that leverages external structured knowledge graphs to augment the memory buffer. A knowledge-guided data augmentation algorithm was developed using a trie-based data structure to identify words and phrases in the memory buffer that correspond to concepts in the knowledge graph, substituting them with semantically related terms to generate enriched training instances. Incorporating this augmented data alongside the replay strategy further improves performance while mitigating catastrophic forgetting across tasks.",
        ],
    },
    {
        title: "Task-Specific External Knowledge: Relevance-Scored Injection",
        paragraphs: [
            "Task-agnostic knowledge augmentation introduces a key limitation: injecting knowledge indiscriminately can incorporate noisy or irrelevant information, negatively impacting model performance. To address this, the KGCL framework introduces a third level of knowledge centered on task-specific relevance scoring. A scoring mechanism was developed that quantifies the relevance of each knowledge triple to a given task by measuring the influence of its associated training data point on the augmented instance it generates, traced through model gradients. This score is used to filter out noisy augmented instances before training, ensuring that only task-relevant knowledge is injected into the model — further improving performance and more effectively mitigating catastrophic forgetting compared to task-agnostic augmentation.",
        ],
    },
];

export const otherThemes: ResearchTheme[] = [
    {
        title: "Emergency Incident Detection from Crowdsourced Data",
        paragraphs: [
            "In collaboration with researchers from Vanderbilt University, I investigated the detection of emergency incidents from crowdsourced Waze data, integrating related streams such as sensor, weather, and traffic data. A Bayesian information fusion approach was developed that systematically combines multiple uncertain signals into a reliable decision. Building on this, the CROME framework was introduced, incorporating deep learning methods with a practitioner-centric design: rather than optimizing for model performance alone, it evaluates model utility across different levels of spatial and temporal resolution, making it directly actionable for emergency responders in the field.",
        ],
    },
    {
        title: "Social Media Analysis for Violence Prevention",
        paragraphs: [
            "In close collaboration with interdisciplinary researchers from the Western Norway Research Institute and the SOCYTI project, I contributed to the development of a real-time social media monitoring system for violence prevention. Technical contributions included hate speech detection, multilingual sentiment analysis, and resilience modeling through social network analysis. Engagements with NGOs and government agency personnel in multiple in-person workshops informed system requirements and grounded the resulting artifacts in real-world operational needs.",
        ],
    },
    {
        title: "Streaming Data Modeling & Human-AI Collaboration",
        paragraphs: [
            "I led the redesign of CitizenHelper, a real-time social media mining platform, overseeing its architecture design and cloud deployment. A core research contribution within this platform involved collaborating with the Community Emergency Response Team (CERT) of the Washington D.C. Metro region to define a risk behavior schema for pandemic crises and developing machine learning models to classify risk-preventing and risk-taking behaviors from COVID-19 Twitter data, achieving up to 88% AUC. The platform incorporates a human-AI collaboration loop where CERT members contributed to data annotation prior to deployment and provided ongoing feedback post-deployment, continuously grounding the system in real-world operational knowledge.",
        ],
    },
];

export const futureDirections: FutureDirection[] = [
    {
        title: "Unified KGCL",
        paragraph:
            "In the near term, I plan to investigate alternative continual learning approaches and jointly optimize knowledge relation selection and exemplar selection. Currently these two problems are addressed through isolated mechanisms, each operating independently, which constrains the overall effectiveness of the knowledge injection process. By jointly considering which knowledge triples and which exemplars are most relevant and complementary to each observed task, I aim to devise a more coherent augmentation strategy that simultaneously maximizes the benefits of both internal and external knowledge.",
    },
    {
        title: "KGCL with Large Language Models",
        paragraph:
            "Another promising direction is extending large language models with external knowledge graphs to ground their generations in structured, contextually relevant knowledge. As LLMs are deployed in dynamic environments where data distributions shift over time, they face compounding challenges: hallucination and temporal misalignment. While RAG-based systems partially address this, they lack the structured relational reasoning that knowledge graphs provide. Building on my dissertation experience, I plan to investigate how graph-structured knowledge can complement RAG pipelines to produce outputs that are factually grounded and capable of multi-hop reasoning, while remaining robust to concept drift.",
    },
    {
        title: "KGCL for Cyber-Physical-Social Systems",
        paragraph:
            "Looking further ahead, I plan to broaden the KGCL framework beyond text-based behavioral analytics to Cyber-Physical-Social Systems such as Smart Emergency Response Systems. This introduces fundamentally different representation and integration challenges, as knowledge must be encoded in forms compatible with structured, spatial, or multimodal data. I plan to explore these challenges to develop a more generalizable KGCL framework, advancing the vision of structured knowledge for robust and adaptive AI across a broader range of real-world applications.",
    },
];
