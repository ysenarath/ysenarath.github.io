// Settings for the /newspaper view: the same content as the rest of the site, set as a
// broadsheet. Each site section is a newspaper section with its own page code.
export const NP_BASE = "/newspaper/";

export const NP_SECTIONS = [
    { href: NP_BASE, label: "Front page", page: "A1" },
    { href: `${NP_BASE}research/`, label: "Research", page: "A2" },
    { href: `${NP_BASE}publications/`, label: "Publications", page: "B1" },
    { href: `${NP_BASE}projects/`, label: "Projects", page: "C1" },
    { href: `${NP_BASE}profile/`, label: "Profile", page: "D1" },
] as const;

export type NpSection = (typeof NP_SECTIONS)[number]["label"];

export const npPage = (label: NpSection) =>
    NP_SECTIONS.find((s) => s.label === label)!;

// The research motto from the About text, set in the nameplate's left ear.
export const NP_MOTTO =
    "Structured knowledge integration for robust and adaptive AI";

// The edition is the build date.
export const npEdition = () =>
    new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
