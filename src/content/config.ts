
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

const sectionSchema = z.object({
  layout: z.enum(['text-left', 'text-right', 'full-width']),
  title: z.string().optional(),
  text: z.string().optional(),
  media: ImageOrString.optional()
});

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
  sections: z.array(sectionSchema).optional(),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const blockSchema = z.object({
  component: z.string(),
  props: z.record(z.any()).optional(),
});

const pageSchema = z.object({
  title: z.string(),
  sections: z.array(blockSchema).optional(),
});

const pageCollection = defineCollection({
  type: 'content',
  schema: pageSchema,
});

export type Project = z.infer<typeof projectSchema>;

export const collections = {
  'projects': projectCollection,
  'pages': pageCollection,
};
