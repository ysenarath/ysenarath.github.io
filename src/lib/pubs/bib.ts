// Minimal BibTeX reader for public/papers.bib: formatted citations and copyable entries.
import fs from 'node:fs';
import path from 'node:path';
import { PUBS } from '../../data/publications';

export interface BibEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
  raw: string;
}

let cache: Map<string, BibEntry> | null = null;

function readField(src: string, i: number): [string, number] {
  // value starts at src[i]: either {…} with nesting, "…", or a bare token
  if (src[i] === '{') {
    let depth = 0, j = i;
    for (; j < src.length; j++) {
      if (src[j] === '{') depth++;
      else if (src[j] === '}' && --depth === 0) break;
    }
    return [src.slice(i + 1, j), j + 1];
  }
  if (src[i] === '"') {
    const j = src.indexOf('"', i + 1);
    return [src.slice(i + 1, j), j + 1];
  }
  const m = /^[^,\n}]+/.exec(src.slice(i));
  return [m ? m[0].trim() : '', i + (m ? m[0].length : 0)];
}

export function loadBib(): Map<string, BibEntry> {
  if (cache) return cache;
  const text = fs.readFileSync(path.resolve(process.cwd(), 'public/papers.bib'), 'utf8');
  cache = new Map();
  for (const chunk of text.split(/\n(?=@)/)) {
    const head = /^@(\w+)\{([^,]+),/.exec(chunk.trim());
    if (!head) continue;
    const body = chunk.trim();
    const fields: Record<string, string> = {};
    const re = /(\w+)\s*=\s*/g;
    let m: RegExpExecArray | null;
    let pos = head[0].length;
    re.lastIndex = pos;
    while ((m = re.exec(body))) {
      const [val, end] = readField(body, m.index + m[0].length);
      fields[m[1].toLowerCase()] = val;
      re.lastIndex = end;
    }
    cache.set(head[2].trim(), { type: head[1].toLowerCase(), key: head[2].trim(), fields, raw: body });
  }
  return cache;
}

const clean = (s = '') => s.replace(/\\textbf\{/g, '{').replace(/[{}]/g, '').replace(/\\&/g, '&').replace(/\s+/g, ' ').trim();

export function formatAuthors(authorField: string): { name: string; self: boolean }[] {
  return clean(authorField)
    .split(/\s+and\s+/)
    .map((a) => {
      const [last, first = ''] = a.includes(',') ? a.split(',').map((x) => x.trim()) : [a.split(' ').pop()!, a.split(' ').slice(0, -1).join(' ')];
      const initials = first.split(/[\s-]+/).filter(Boolean).map((p) => p[0] + '.').join(' ');
      return { name: `${last}, ${initials}`.replace(/,\s*$/, ''), self: PUBS.selfNames.some((n) => last.includes(n)) };
    });
}

export function citation(key: string) {
  const e = loadBib().get(key);
  if (!e) return null;
  const f = e.fields;
  const where = clean(f.booktitle || f.journal || f.school || '');
  const vol = f.volume ? ` ${clean(f.volume)}${f.number ? `(${clean(f.number)})` : ''}` : '';
  const pages = f.pages ? `, ${clean(f.pages).replace('--', '–')}` : '';
  return {
    authors: formatAuthors(f.author || ''),
    year: clean(f.year),
    title: clean(f.title),
    where: `${where}${vol}${pages}`,
    note: clean(f.note || ''),
    url: f.url ? clean(f.url) : undefined,
    bibtex: e.raw.replace(/\\textbf\{([^}]*)\}/g, '$1'),
  };
}
