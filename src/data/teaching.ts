export interface TeachingEntry {
    role: string;
    institution: string;
    location: string;
    period: string;
    courses: string[];
    note?: string;
}

export interface Tutorial {
    title: string;
    event: string;
    location: string;
    year: string;
    status?: string;
    presenters?: string[];
}

export const tutorials: Tutorial[] = [
    {
        title: "Continual Learning for Online Behavioral Analytics: A Tutorial",
        event: "International AAAI Conference on Web and Social Media (ICWSM)",
        location: "Los Angeles, CA",
        year: "May 2026",
        presenters: [
            "Yasas Senarath Wijesuriya",
            "Dr. Marcos Zampieri",
            "Dr. Hemant Purohit",
        ],
    },
];

export const assistantships: TeachingEntry[] = [
    {
        role: "Graduate Teaching Assistant",
        institution: "George Mason University",
        location: "Fairfax, VA",
        period: "Aug 2025 - May 2026",
        courses: [
            "Database Fundamentals (Fall 2025, Spring 2026)",
            "Data Analytics in Social Media (Fall 2025)",
            "Introduction to Research in Applied IT (Spring 2026)",
        ],
    },
];

export const instructorships: TeachingEntry[] = [
    {
        role: "Visiting Instructor",
        institution: "University of Moratuwa",
        location: "Sri Lanka",
        period: "Jan 2018 - Jul 2019",
        courses: ["Data Science", "Advanced Algorithms", "Data Structures"],
    },
];
