import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Written by My-Papers/tools/export_publications.py — edit the summaries there, not these files.
const publications = defineCollection({
  loader: glob({
    base: './src/content/publications',
    pattern: '*/index.md',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z
    .object({
      bibkey: z.string(),
      title: z.string(),
      year: z.number(),
      venue: z.string(),
      venue_short: z.string(),
      type: z.string(),
      authors: z.array(z.string()),
      my_role: z.string(),
      thread: z.array(z.string()),
      contribution: z.array(z.enum(['technical', 'practical'])),
      first_author: z.boolean(),
      domain_problem: z.string(),
      technical_problem: z.string(),
      one_liner: z.string(),
      headline_value: z.string(),
      headline_label: z.string(),
      url: z.string().optional(),
      code: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { publications };
