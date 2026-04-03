# CLAUDE.md — Rayan's Personal Brand Website

This file provides AI assistants with essential context about this codebase: its structure, conventions, workflows, and key decisions.

---

## Project Overview

A personal brand website for Ryan Kearney, a business coach helping men in their 20s–30s build location-independent businesses. Built with Next.js 14, TypeScript, Tailwind CSS, TinaCMS, and GSAP. Deployed on Vercel.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2.5 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4.0 + Custom CSS in `globals.css` |
| CMS | TinaCMS 2.2.0 (Git-backed headless CMS) |
| Animations | GSAP 3.12.5 |
| Deployment | Vercel |

---

## Repository Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout (font, metadata)
│   ├── page.tsx            # Home page — server component, fetches TinaCMS content
│   ├── HomeClient.tsx      # Client wrapper — renders all section components
│   └── globals.css         # All styles (~1,400 lines): Tailwind + custom CSS
├── components/
│   ├── HomeHeader.tsx      # GSAP-animated header (currently unused in main flow)
│   └── sections/
│       ├── Hero.tsx        # Image carousel with auto-rotation
│       ├── About.tsx       # Dark background 2-col layout
│       ├── Perspective.tsx # Numbered list + CTA
│       ├── MyStory.tsx     # Timeline + banner card
│       ├── ForYou.tsx      # Checklist + contrast panel
│       ├── HowIWork.tsx    # 3-step process + CTA
│       ├── Philosophy.tsx  # Pull quote + 2-col text
│       ├── FinalCTA.tsx    # Final CTA with image
│       └── Footer.tsx      # Social links (Instagram, YouTube)
├── content/
│   └── pages/
│       └── home.json       # All homepage content (source of truth)
├── public/
│   └── img/                # 4 professional portrait images
├── tina/
│   ├── config.ts           # TinaCMS schema definition
│   └── tina-lock.json
├── .env.example            # Required environment variables
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## Development Workflow

### Starting the dev server

```bash
npm run dev
```

This runs TinaCMS dev server AND Next.js together via `tinacms dev -c "next dev"`. The TinaCMS admin panel is available at `/admin` and enables live visual editing of content.

### Building for production

```bash
npm run build
# or for Vercel:
npm run vercel-build
```

Both run `next build`. TinaCMS is NOT part of the production build command — content is read from the filesystem (`content/pages/home.json`).

### Linting

```bash
npm run lint
```

Uses Next.js built-in ESLint configuration.

---

## Environment Variables

Copy `.env.example` to `.env` and populate:

```
NEXT_PUBLIC_TINA_CLIENT_ID=   # TinaCMS project client ID
TINA_TOKEN=                   # TinaCMS auth token
GITHUB_BRANCH=                # Branch for TinaCMS to write content to (defaults: main)
```

These are required for TinaCMS to function in development mode and to push content changes back to GitHub.

---

## Content Architecture (TinaCMS)

### How content flows

1. **Schema defined** in `tina/config.ts` — describes all editable fields
2. **Content stored** in `content/pages/home.json` — the single JSON file for the homepage
3. **Content fetched** in `app/page.tsx` (server component):
   - In development: via TinaCMS GraphQL client (enables live editing)
   - In production: via `fs.readFileSync` on `home.json` (no TinaCMS dependency)
4. **Content rendered** in `app/HomeClient.tsx` — passes props to each section component
5. **TinaCMS editing** enabled by wrapping fields with `tinaField()` from `tinacms/dist/rich-text`

### TinaCMS field pattern

All editable text in section components is wrapped like this:

```tsx
<h2 data-tina-field={tinaField(data, "heading")}>
  {data.heading}
</h2>
```

This links the DOM element to TinaCMS for visual editing.

### Content sections (schema in tina/config.ts)

| Section | Key Fields |
|---|---|
| Hero | `tagline`, `headline`, `ctaText`, `ctaSecondaryText` |
| About | `eyebrow`, `heading`, `sub` |
| Perspective | `heading`, `items[]` (array), `ctaText` |
| MyStory | `heading`, `timeline[]` (array), `bannerBody`, `bannerCtaText` |
| ForYou | `heading`, `items[]` (array), `contrastText`, `ctaText` |
| HowIWork | `heading`, `steps[]` (array), `ctaText` |
| Philosophy | `heading`, `col1p1`, `pullquote`, `col1p2`, `col2p1`, `col2p2` |
| FinalCTA | `eyebrow`, `heading`, `body`, `ctaText` |

---

## Component Architecture

### Server / Client split

- `app/page.tsx` — **Server Component** (`force-dynamic`). Fetches all content, passes it as a prop to `HomeClient`.
- `app/HomeClient.tsx` — **Client Component** (`"use client"`). Wraps the page with `useTina` hook for real-time editing, then renders all section components.
- All `components/sections/*.tsx` — **Client Components** (`"use client"`). Receive typed props from `HomeClient`.

### Section component prop pattern

Each section receives a typed `data` prop corresponding to its TinaCMS schema shape:

```tsx
interface HeroProps {
  data: {
    tagline: string;
    headline: string;
    ctaText: string;
    ctaSecondaryText: string;
  };
}

export default function Hero({ data }: HeroProps) { ... }
```

### Image handling

- 4 portrait images in `/public/img/`
- Filenames: `ryan-jana166330.jpg`, `ryan-jana166939 (2).jpg`, `ryan-jana167897.jpg`, `ryan-jana167901.jpg`
- Used across Hero (carousel), Perspective, HowIWork, FinalCTA sections
- All captions reference "SEDONA, AZ"
- Hero auto-rotates through 3 images every 4 seconds with grid overlay transition animation

---

## Styling Conventions

### Color palette

| Token | Hex | Usage |
|---|---|---|
| Cream / Light | `#FAF8F5` | Page background, light sections |
| Dark | `#2C2C2A` | Dark sections (About), text |
| Accent / Terracotta | `#C4785A` | CTAs, highlights, accent elements |
| Green | `#8FA67E` | Contrast panels (ForYou section) |

### CSS approach

All styles live in `app/globals.css`. Tailwind is used for utility classes in JSX, while custom CSS classes handle complex or section-specific layouts. Do not extract section styles into separate CSS modules — keep them in `globals.css`.

### Class naming

BEM-inspired naming tied to section names:

```css
.hero-section { ... }
.hero-carousel { ... }
.about-section { ... }
.about-content { ... }
```

### Responsive design

- Mobile-first media queries in `globals.css`
- Most sections switch from 2-column grid to single column at mobile breakpoints
- Tailwind responsive utilities can be used alongside custom CSS

### Decorative SVG elements

Several sections include inline decorative SVG arcs — do not remove them; they are part of the visual identity.

---

## Key Architectural Decisions

1. **TinaCMS dev/prod split**: Using `fs.readFileSync` in production avoids TinaCMS API dependency and keeps production builds fast and reliable. This was added to fix EOF errors that occurred when TinaCMS wasn't available at build time.

2. **Single `globals.css`**: All styling in one file. This is intentional — do not split into CSS modules or component-scoped styles.

3. **Single `home.json`**: All homepage content in one file, making content updates simple and atomic.

4. **`HomeHeader.tsx` is unused**: It exists but is not rendered. It was created for GSAP header animations. Do not delete it unless certain it will not be needed.

5. **No custom Tailwind theme**: `tailwind.config.js` has no theme extensions. Custom colors are only in CSS variables and `globals.css`, not in Tailwind config.

---

## Git & Deployment

- **Main branch**: `main` — deploys automatically to Vercel
- **Development branches**: feature branches off `main`
- **TinaCMS content branch**: controlled by `GITHUB_BRANCH` env var (default: `main`)
- **Remote**: GitHub repository at `TeamOWD/Rayan-s-Personal-Brand-Website`

When TinaCMS saves content edits, it commits `home.json` back to GitHub on the configured branch.

---

## Common Tasks

### Adding a new content field

1. Add the field to the relevant section schema in `tina/config.ts`
2. Add the field to `content/pages/home.json` with a default value
3. Add the prop to the TypeScript interface in the relevant section component
4. Use `tinaField(data, "fieldName")` on the element for TinaCMS editability
5. Pass the new field from `HomeClient.tsx` to the section component

### Adding a new section

1. Create `components/sections/NewSection.tsx` with `"use client"` directive
2. Define the schema in `tina/config.ts`
3. Add initial content to `content/pages/home.json`
4. Import and render the component in `app/HomeClient.tsx`
5. Add styles in `app/globals.css` following the `.sectionname-element` naming pattern

### Modifying existing content

Content can be edited:
- Directly in `content/pages/home.json`
- Via TinaCMS visual editor at `/admin` during `npm run dev`

### Adding images

Place images in `/public/img/`. Reference them as `/img/filename.jpg` in JSX. Use `next/image` only if optimization is needed — current components use plain `<img>` tags.

---

## What to Avoid

- Do not add ESLint disable comments to suppress legitimate type errors — fix the types
- Do not use `any` types — define proper TypeScript interfaces
- Do not add new npm dependencies without checking if existing ones cover the use case (GSAP is available for animations)
- Do not move styles out of `globals.css` into CSS modules or inline styles
- Do not add Tailwind theme customizations for colors already defined in `globals.css`
- Do not modify `vercel.json` build commands without testing the Vercel build process
- Do not add content directly in JSX — all text content belongs in `home.json` and TinaCMS schema
