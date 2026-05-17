export interface Project {
    name: string;
    description: string;
    detail: string;
    refs: { title: string; venue: string; year: number; url?: string }[];
    url: string;
    image: string;
}

export const projects: Project[] = [
    {
        name: "CitizenHelper",
        description:
            "A system for human-centered AI use in disaster management.",
        detail:
            "CitizenHelper integrates crowdsourced volunteering with AI-driven classification to route disaster-related requests to appropriate responders. The system supports real-time social media analytics to inform decision support systems in government agencies and emergency management organizations.",
        refs: [
            {
                title:
                    "Citizen-Helper System for Human-Centered AI Use in Disaster Management",
                venue: "International Handbook of Disaster Research, Springer",
                year: 2023,
                url: "https://link.springer.com/chapter/10.1007/978-981-19-8388-7_34",
            },
        ],
        url: "https://citizenhelper.orc.gmu.edu/",
        image: "/projects/citizenhelper.png",
    },
    {
        name: "CitizenHelper-CERT",
        description:
            "A Human-AI teaming system that harnessed volunteer feedback loops to continuously improve COVID-19 risk detection from real-time data streams.",
        detail:
            "CitizenHelper-CERT paired Community Emergency Response Team (CERT) volunteers with an AI classifier in an active feedback loop. Volunteer judgments corrected model errors in real time, enabling the system to improve detection of COVID-19 risk behaviors on social media without retraining from scratch.",
        refs: [
            {
                title:
                    "Human-AI Teaming for COVID-19 Response: A Practice & Research Collaboration Case Study",
                venue:
                    "Information Systems for Crisis Response and Management (ISCRAM)",
                year: 2022,
                url: "https://idl.iscram.org/files/amandahughes/2022/2470_AmandaHughes_etal2022.pdf",
            },
            {
                title:
                    "Mining Risk Behaviors from Social Media for Pandemic Crisis Preparedness and Response",
                venue:
                    " International Conference on Social Computing, Behavioral-Cultural Modeling & Prediction and Behavior Representation in Modeling and Simulation (SBP-BRiMS)",
                year: 2021,
                url: "https://sbp-brims.org/2021/papers/working-papers/2021_SBP-BRiMS_FinalPDF_55.pdf",
            },
        ],
        url: "https://citizenhelper.orc.gmu.edu/",
        image: "/projects/citizenhelper-cert.png",
    },
    {
        name: "CROMEx",
        description:
            "A practitioner-first visualization dashboard that puts human judgment at the center of AI model selection for real-world emergency deployment.",
        detail:
            "CROMEx (Crowdsourced Multi-Objective Event eXplorer) provides emergency managers with an interactive interface to evaluate and select AI models for incident detection under operational constraints. Rather than automating the choice, it surfaces model behavior and uncertainty so practitioners can make informed deployment decisions.",
        refs: [
            {
                title:
                    "Designing a Human-Centered AI Tool for Proactive Incident Detection Using Crowdsourced Data Sources",
                venue: "Digital Government: Research and Practice (DGOV)",
                year: 2024,
                url: "https://dl.acm.org/doi/10.1145/3633784",
            },
            {
                title:
                    "Practitioner-Centric Approach for Early Incident Detection Using Crowdsourced Data for Emergency Services",
                venue: "IEEE International Conference on Data Mining (ICDM)",
                year: 2021,
                url: "https://ieeexplore.ieee.org/document/9679106/",
            },
        ],
        url: "https://dl.acm.org/doi/pdf/10.1145/3633784",
        image: "/projects/cromex.png",
    },
    {
        name: "SOCYTI",
        description:
            "A browser-based dashboard for analyzing and visualizing real-time user-generated data for understanding public discourse relating to deviant behavior.",
        detail:
            "SOCYTI monitors online communities for violence-inducing and hateful speech patterns, providing researchers and policy analysts with real-time analytics on how deviant discourse evolves in social-cyber spaces. The system was developed in collaboration with the Research Council of Norway–funded SOCYTI project.",
        refs: [
            {
                title:
                    "Violence-Inducing Behavior Prevention in Social-Cyber Space",
                venue: "AI, Data, and Digitalization (SAIDD)",
                year: 2023,
                url: "https://link.springer.com/chapter/10.1007/978-3-031-53770-7_10",
            },
            {
                title:
                    "Eliciting Socio-Technical Research Needs on Countering Violence-Inducing and Hateful Speech in Cyberspace",
                venue: "Digital Society",
                year: 2025,
                url: "https://link.springer.com/article/10.1007/s44206-025-00212-8",
            },
        ],
        url: "https://www.bigdata.vestforsk.no/ongoing/socyti",
        image: "/projects/socyti.jpeg",
    },
    {
        name: "CrisisFACTS",
        description:
            "A system for summarizing social media and news streams for crisis-related events by integrated content-graph analysis.",
        detail:
            "CrisisFACTS automatically aggregates and summarizes information from heterogeneous data streams — Twitter, Reddit, and news feeds — during crisis events. The system uses content-graph integration to surface actionable situation awareness, and was evaluated as part of the TREC 2023 CrisisFACTS shared task.",
        refs: [
            {
                title:
                    "Summarizing Social Media & News Streams for Crisis-related Events by Integrated Content-Graph Analysis: TREC-2023 CrisisFACTS Track",
                venue: "The Text Retrieval Conference (TREC)",
                year: 2023,
                url: "https://trec.nist.gov/pubs/trec32/papers/Human_Info_Lab.F.pdf",
            },
        ],
        url: "https://crisisfacts.github.io/index.html",
        image: "/projects/crisisfacts.png",
    },
];
