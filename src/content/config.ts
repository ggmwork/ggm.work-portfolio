
import { z, defineCollection } from 'astro:content';

const ImageOrString = z.union([
  z.string(),
  z.object({
    src: z.string(),
    alt: z.string().optional(),
    width: z.number().optional(),
    height: z.number().optional()
  })
]);

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  cover: ImageOrString.optional(),
  images: z.array(ImageOrString).optional(),
  video: z.string().optional(),
  tags: z.array(z.string()).optional(),
  externalUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  publishDate: z.date().optional(),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export type Project = z.infer<typeof projectSchema>;

export const collections = {
  'projects': projectCollection,
};
