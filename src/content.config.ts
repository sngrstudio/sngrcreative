import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro:schema'

export const collections = {
  site: defineCollection({
    loader: glob({ base: 'src/data/site', pattern: '**/*.json' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      favicon: z.string()
    })
  }),
  home: defineCollection({
    loader: glob({ base: 'src/data/home', pattern: '**/*.json' }),
    schema: ({ image }) =>
      z.object({
        logo: image()
      })
  })
}
