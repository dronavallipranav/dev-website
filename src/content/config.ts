import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  posts: postCollection,
};