export type NewsCategory = "talk" | "grant" | "award" | "paper";

export interface NewsItem {
    year: number;
    month?: number;
    category: NewsCategory;
    title: string;
    venue?: string;
    location?: string;
    description?: string;
}

export const newsItems: NewsItem[] = [
    // Talks
    {
        year: 2025,
        category: "talk",
        title:
            "Human-centered AI Use in Disaster Management using Crowdsourced Data",
        venue:
            "4th Workshop on Social Networks and Artificial Intelligence for Disaster Risk Management",
        location: "Castelo Branco, Portugal",
    },
    {
        year: 2025,
        category: "talk",
        title:
            "Infrastructure Risk Forecasting using Citizen Sensing & Physical Sensing Data Streams for AI-empowered Disaster Response",
        venue: "The International Telecommunication Union (ITU)",
        location: "Frascati, Italy (Hybrid)",
    },
    {
        year: 2025,
        category: "talk",
        title: "Early Warning System for Transport Risk Detection",
        venue:
            "Institute for a Sustainable Earth (ISE) Summer Grad Fellows Professional Development Series",
        location: "George Mason University, Fairfax, VA",
    },
    {
        year: 2025,
        category: "talk",
        title:
            "Detecting Evolving Violence-Inducing Behaviors in the Social-Cyber Space through Continual Learning",
        venue: "Information Sciences and Technology (IST) PhD Symposium",
        location: "George Mason University, Fairfax, VA",
    },
    // Grants
    {
        year: 2025,
        category: "grant",
        title:
            "NSF SCC-IRG: Resilient Sheltering Decision Support for Emergency Evacuations using Explainable AI",
        venue: "National Science Foundation (NSF)",
        description:
            "Contributed to developing the technical approach and assisting in proposal writing.",
    },
    {
        year: 2024,
        category: "grant",
        title: "Provost Doctoral Research Scholarship (2024-25)",
        venue: "George Mason University",
        description:
            "Competitive scholarship supporting continued progress toward doctoral degree completion.",
    },
    {
        year: 2023,
        category: "grant",
        title:
            "Violence-Inducing Behaviour Prevention in Social-Cyber Space of Local Communities (SOCYTI)",
        venue: "Research Council of Norway",
        description:
            "Contributed to developing the technical approach and proposal writing.",
    },
    // Awards
    {
        year: 2021,
        category: "award",
        title: "1st Runner-Up — Unbounded by Dell Technologies Hackathon",
        description:
            "Secured 1st runner-up for CoviSave, a COVID-19 safety application, at the Dell EMC Unbounded Hackathon.",
    },
    {
        year: 2018,
        category: "award",
        title: "CINTEC Award",
        venue: "University of Moratuwa",
        description:
            "Recognized for the highest graded final year project at the Department of Computer Science and Engineering.",
    },
    {
        year: 2018,
        category: "award",
        title: "Gold Award for Most Outstanding Digital Communication Project",
        venue: "Rotaract District 3220 Sri Lanka & Maldives",
        description:
            "Honored at the 28th Rotaract District Assembly for the community initiative TrainLK.",
    },
];
