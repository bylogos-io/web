import { defineCollection, defineConfig, s } from "velite";

const docs = defineCollection({
  name: "Docs",
  pattern: "docs/**/*.mdx",
  schema: s.object({
    title: s.string().max(99),
    slug: s.path(),
    description: s.string(),
    order: s.number().default(999), // Para ordenar manualmente los items en el menú
    content: s.mdx(),
    raw: s.raw(),
    toc: s.toc(),
  }),
});

export default defineConfig({
  root: "content",
  collections: {
    docs,
  },
});
