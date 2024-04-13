import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const artCollections = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			artwork: image(),
			title: z.string(),
			category: z.enum(["traditional", "photography", "digital"]),
			artist: z.string(),
			techniques: z.optional(z.array(z.string())),
			materials: z.array(z.string()),
		}),
});

export const collections = {
	art: artCollections,
};
