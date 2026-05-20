export interface Education {
    institution: string;
    location: string;
    department: string;
    degree: string;
    date: string;
    thesis?: string;
    advisor?: string;
    gpa?: string;
    concentration?: string;
}

export interface Experience {
    organization: string;
    role?: string;
    period: string;
    description: string;
}

export const education: Education[] = [
    {
        institution: "George Mason University",
        location: "Fairfax, VA",
        department: "School of Computing",
        degree: "PhD in Information Technology",
        date: "May 2026",
        thesis:
            "Modeling Evolving Human Behavior in Online Data Streams via Knowledge-Guided Continual Learning",
        advisor: "Dr. Hemant Purohit",
    },
    {
        institution: "George Mason University",
        location: "Fairfax, VA",
        department: "School of Computing",
        degree: "Master of Science in Applied Information Technology",
        date: "Aug 2022",
        concentration: "Cyber-Human Systems",
        advisor: "Dr. Hemant Purohit",
    },
    {
        institution: "University of Moratuwa",
        location: "Sri Lanka",
        department: "Department of Computer Science and Engineering",
        degree: "Master of Science (Research)",
        date: "Jun 2019",
        thesis: "Affect Level Opinion Mining of Twitter Streams",
        advisor: "Dr. Uthayasanker Thayasivam",
    },
    {
        institution: "University of Moratuwa",
        location: "Sri Lanka",
        department: "Department of Computer Science and Engineering",
        degree: "Bachelor of Science in Engineering (First Class Honours)",
        date: "Jan 2018",
        gpa: "3.95 / 4.20",
        advisor: "Dr. Surangika Ranathunga",
    },
];

export const experience: Experience[] = [
    {
        organization:
            "Institute for Sustainable Earth, George Mason University",
        period: "May 2025 - Aug 2025",
        description:
            "Completed a professional development program designed for graduate fellows, focusing on research communication, leadership, and career development.",
    },
    {
        organization: "Humanitarian Informatics Lab, George Mason University",
        period: "Aug 2019 - May 2025",
        description:
            "Designed methods and tools for real-time analytics of human behavior from social media data related to natural hazards and societal crises to inform decision support systems in government agencies.",
    },
    {
        organization:
            "Center for Climate Change Communication, George Mason University",
        period: "Jun 2021 - Aug 2021",
        description:
            "Analyzed the effectiveness of educational events related to Climate Change Communication by modeling the divergence in the communication behavior of participants using their social media content posted over time.",
    },
    {
        organization: "DataSEARCH, University of Moratuwa",
        period: "Jan 2018 - Jul 2019",
        description:
            "Researched methods for fine-grained emotion detection in Tweets using transfer learning.",
    },
    {
        organization: "CodeGen International (PVT) Ltd.",
        role: "Trainee Software Engineer",
        period: "Jul 2016 - Dec 2016",
        description:
            "Opinion and entity extraction from reviews related to tourist attractions.",
    },
];

export interface FundingEntry {
    title: string;
    funder: string;
    year: string;
    role: string;
}

export const funding: FundingEntry[] = [
    {
        title:
            "NSF SCC-IRG: Resilient Sheltering Decision Support for Emergency Evacuations using Explainable AI",
        funder: "National Science Foundation (NSF)",
        year: "2025",
        role: "Developed technical approach and assisted in proposal writing",
    },
    {
        title:
            "Violence-Inducing Behaviour Prevention in Social-Cyber Space of Local Communities (SOCYTI)",
        funder: "Research Council of Norway (RCN)",
        year: "2023",
        role: "Developed technical approach and assisted in proposal writing",
    },
    {
        title: "Provost Doctoral Research Scholarship",
        funder: "George Mason University",
        year: "2024",
        role: "Awarded for research in Knowledge-Guided Continual Learning",
    },
];

export interface MenteeEntry {
    name: string;
    type: string;
    year: number;
}

export const mentorship: MenteeEntry[] = [
    { name: "Gayatri Ramchandra Vaidya", type: "PhD Student", year: 2026 },
    { name: "Anuridhi Gupta", type: "PhD Student", year: 2025 },
    {
        name: "Rajenthiran Jenarthanan",
        type: "Undergraduate Student",
        year: 2019,
    },
];

export interface ServiceEntry {
    venue: string;
    years: string;
}

export const service: ServiceEntry[] = [
    // \entry{Information Processing & Management (IPM)}{2026}{}
    {
        venue: "Information Processing & Management (IPM)",
        years: "2026",
    },
    {
        venue: "International AAAI Conference on Web and Social Media (ICWSM)",
        years: "2021, 2023-2026",
    },
    { venue: "ACM Web Conference (WWW)", years: "2021-2023, 2026" },
    {
        venue: "AAAI Conference on AI Ethics and Society (AIES)",
        years: "2023-2025",
    },
    {
        venue: "ACM Conference on Computer Supported Cooperative Work (CSCW)",
        years: "2024",
    },
    {
        venue:
            "ACM International Conference on Information and Knowledge Management (CIKM)",
        years: "2022",
    },
    {
        venue:
            "ACM Conference on Human-AI Complementarity and Alignment (HCOMP)",
        years: "2022-2023",
    },
    {
        venue:
            "IEEE Conference on Trust, Privacy and Security in Intelligent Systems (IEEE TPS)",
        years: "2024",
    },
    {
        venue:
            "International Conference on Advances in Social Networks Analysis and Mining (ASONAM)",
        years: "2020-2022",
    },
    { venue: "ACM Web Science Conference (WebSci)", years: "2020, 2024" },
    {
        venue: "International Workshop on Cyber Social Threats (CySoc)",
        years: "2020, 2022, 2024",
    },
    {
        venue:
            "International Symposium on AI, Data, and Digitalization (SAIDD)",
        years: "2020, 2023",
    },
];
