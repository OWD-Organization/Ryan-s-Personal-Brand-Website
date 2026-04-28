import { defineConfig } from "tinacms";

export default defineConfig({
  branch:
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") return "/";
            return undefined;
          },
        },
        fields: [
          // Hero
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
              { type: "string", name: "ctaSecondaryText", label: "Secondary CTA Text" },
            ],
          },
          // About
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading", ui: { component: "textarea" } },
              { type: "string", name: "sub", label: "Subtext", ui: { component: "textarea" } },
            ],
          },
          // Perspective
          {
            type: "object",
            name: "perspective",
            label: "Perspective Section",
            fields: [
              { type: "string", name: "heading", label: "Heading", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.text?.slice(0, 40) }) },
                fields: [
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                ],
              },
              { type: "string", name: "ctaText", label: "CTA Text" },
            ],
          },
          // My Story
          {
            type: "object",
            name: "mystory",
            label: "My Story Section",
            fields: [
              { type: "string", name: "heading", label: "Heading", ui: { component: "textarea" } },
              {
                type: "object",
                name: "timeline",
                label: "Timeline",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                ],
              },
              { type: "string", name: "bannerBody", label: "Banner Body", ui: { component: "textarea" } },
              { type: "string", name: "bannerCtaText", label: "Banner CTA Text" },
            ],
          },
          // For You
          {
            type: "object",
            name: "foryou",
            label: "For You Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "items",
                label: "List Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.text?.slice(0, 40) }) },
                fields: [
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                ],
              },
              { type: "string", name: "contrastText", label: "Contrast Text", ui: { component: "textarea" } },
              { type: "string", name: "ctaText", label: "CTA Text" },
            ],
          },
          // Lifestyle Audit
          {
            type: "object",
            name: "lifestyleaudit",
            label: "Lifestyle Audit Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading", ui: { component: "textarea" } },
              { type: "string", name: "subtext", label: "Subtext", ui: { component: "textarea" } },
              {
                type: "object",
                name: "products",
                label: "Products",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "price", label: "Price" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "features",
                    label: "Features",
                    list: true,
                    ui: { itemProps: (item) => ({ label: item?.text?.slice(0, 40) }) },
                    fields: [
                      { type: "string", name: "text", label: "Feature Text" },
                    ],
                  },
                  { type: "string", name: "ctaText", label: "CTA Button Text" },
                  { type: "string", name: "ctaUrl", label: "CTA URL" },
                ],
              },
            ],
          },
          // How I Work
          {
            type: "object",
            name: "howwork",
            label: "How I Work Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                ],
              },
              { type: "string", name: "ctaText", label: "CTA Text" },
            ],
          },
          // Philosophy
          {
            type: "object",
            name: "philosophy",
            label: "Philosophy Section",
            fields: [
              { type: "string", name: "heading", label: "Heading", ui: { component: "textarea" } },
              { type: "string", name: "col1p1", label: "Column 1 - Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "pullquote", label: "Pull Quote" },
              { type: "string", name: "col1p2", label: "Column 1 - Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "col2p1", label: "Column 2 - Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "col2p2", label: "Column 2 - Paragraph 2", ui: { component: "textarea" } },
            ],
          },
          // Final CTA
          {
            type: "object",
            name: "finalcta",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading", ui: { component: "textarea" } },
              { type: "string", name: "body", label: "Body Text", ui: { component: "textarea" } },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
            ],
          },
        ],
      },
    ],
  },
});
