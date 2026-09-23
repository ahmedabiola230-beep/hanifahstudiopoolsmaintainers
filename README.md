# Cerulea Pools

Marketing website for Cerulea Pools, a pool design, build and care company based in Austin, Texas. The site covers the full story of the business: what they build, how they maintain it, what it costs, and how to get in touch.

## Pages

| Route | What it contains |
| --- | --- |
| `/` | Hero with stats, services showcase, testimonials, why choose us, process, projects carousel, pricing plans, FAQ |
| `/about` | Company story, stats, values, call to action |
| `/services` | Six detailed service sections with images |
| `/projects` | Six completed project cards |
| `/pricing` | Three care plans, what is included, billing FAQ |
| `/contact` | Working contact form with validation and success state, contact info cards |

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com) with a custom navy, aqua and ice palette
- shadcn/ui primitives (accordion, sheet and a few others)
- Framer Motion for scroll reveal animations
- Prisma is wired up in the scaffold but the site ships with no server side data, the contact form is handled client side

## Getting started

```bash
# install dependencies (bun, npm or pnpm all work)
bun install

# start the dev server on http://localhost:3000
bun run dev
```

The first run creates the local SQLite database through `prisma db push`, which happens automatically in the dev script setup. No environment variables are required for the site itself.

## Production build

For Vercel the default build is all you need:

```bash
bun run build
```

To self host the standalone output somewhere else, use:

```bash
bun run build:standalone
bun run start
```

## Deploying to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel detects Next.js automatically, leave the defaults and hit Deploy

No environment variables are needed. Every push to the connected branch triggers a fresh deployment.

## Project structure

```
src/
  app/            # one folder per page, App Router
  components/
    site/         # header, footer, logo, home page sections, forms
    ui/           # shadcn/ui primitives
  lib/
    site.ts       # brand info, nav, services, projects, pricing, faq data
```

All website copy lives in `src/lib/site.ts` and the page files, so text updates never require touching component logic.

---

Website designed by hanifah Studio.
