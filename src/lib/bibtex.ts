import { readFileSync } from "node:fs";
import { join } from "node:path";

// @ts-ignore - no type declarations for this CJS package
import bibtexParse from "@orcid/bibtex-parse-js";

export interface BibEntry {
    citationKey: string;
    entryType: string;
    entryTags: {
        author?: string;
        title?: string;
        year?: string;
        keywords?: string;
        booktitle?: string;
        journal?: string;
        school?: string;
        note?: string;
        pages?: string;
        volume?: string;
        number?: string;
        publisher?: string;
        [key: string]: string | undefined;
    };
}

export function loadPapers(): BibEntry[] {
    const bibPath = join(process.cwd(), "public/papers.bib");
    const bibContent = readFileSync(bibPath, "utf-8");
    return bibtexParse.toJSON(bibContent) as BibEntry[];
}

export function hasKeyword(entry: BibEntry, keyword: string): boolean {
    return (entry.entryTags.keywords ?? "")
        .split(",")
        .map((k) => k.trim())
        .includes(keyword);
}

/** Strip LaTeX markup and braces from a string. */
export function cleanLatex(str: string): string {
    return str
        .replace(/\\textbf\{([^}]+)\}/g, "$1")
        .replace(/\\emph\{([^}]+)\}/g, "$1")
        .replace(/\{([^}]+)\}/g, "$1")
        .replace(/\\&/g, "&")
        .replace(/\\%/g, "%")
        .replace(/--/g, "–")
        .trim();
}

/**
 * Format a BibTeX author string as HTML.
 * Authors wrapped in \textbf{} are rendered as <strong>.
 * Returns a string of comma-separated author names.
 */
export function formatAuthors(authorStr: string): string {
    if (!authorStr) return "";
    return authorStr
        .split(" and ")
        .map((a) => {
            const bold = a.match(/\\textbf\{([^}]+)\}/);
            if (bold) return `<strong>${bold[1]}</strong>`;
            return a.trim();
        })
        .join(", ");
}

/** Return the venue string (booktitle, journal, or school) cleaned of LaTeX. */
export function getVenue(entry: BibEntry): string {
    const raw = entry.entryTags.booktitle ??
        entry.entryTags.journal ??
        entry.entryTags.school ??
        "";
    return cleanLatex(raw);
}

/** Return the paper URL (url field) or undefined. */
export function getUrl(entry: BibEntry): string | undefined {
    return entry.entryTags.url;
}
