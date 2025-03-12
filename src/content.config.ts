import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro:schema'

const site = defineCollection({
  loader: glob({ base: 'src/data/site', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    favicon: z.string()
  })
})

export const collections = { site }
