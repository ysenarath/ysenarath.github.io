// Small helpers for turning summary markdown into plain display text.

export function section(body = '', heading: string): string {
  const re = new RegExp(`^##\\s+${heading}[^\\n]*\\n([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, 'mi');
  return re.exec(body)?.[1].trim() ?? '';
}

export function plain(md: string): string {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[\[([^\]]+)\]\]/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s*\(p\.\s?\d+(?:[–-]\d+)?\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export const tldr = (body = '') => plain(section(body, 'TL;DR'));

/** "co-author (2nd of 5): feature engineering…" -> { label: "Co-author (2nd of 5)", detail: "feature engineering…" } */
export function role(myRole: string) {
  const [label, ...rest] = myRole.split(':');
  const l = label.trim();
  return { label: l.charAt(0).toUpperCase() + l.slice(1), detail: rest.join(':').trim() };
}
