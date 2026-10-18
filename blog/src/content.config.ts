import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    thesis: z.string(),
    topic: z.enum(['Tech', 'Geopolitics', 'Economy', 'Travel', 'Opinion', 'Research']),
    type: z.enum(['Post', 'Whitepaper', 'Ebook', 'Brief']),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
