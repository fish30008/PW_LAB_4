# Stationery Magazine (Astro + TinaCMS)

Static landing page built with Astro. Content is stored in `src/content/site.json` and edited through TinaCMS.

## Requirements

- Node.js 20+
- npm

## Setup

```sh
npm install
cp .env.example .env
```

Fill the variables in `.env`:

- `TINA_CLIENT_ID`
- `TINA_TOKEN`
- `GITHUB_BRANCH` (usually `main`)

## Commands

- `npm run dev` - Run Astro + TinaCMS together
- `npm run dev:site` - Run Astro only
- `npm run build` - Build Tina admin and Astro site
- `npm run build:cms` - Build Tina admin only
- `npm run build:site` - Build Astro site only
- `npm run preview` - Preview production build

## Content Editing

1. Start dev server:
   - `npm run dev`
2. Open CMS:
   - `http://localhost:4321/admin`
3. Edit:
   - `src/content/site.json` via Tina UI
4. Save changes:
   - Tina commits to your connected Git branch.

## Deployment

Use Netlify or Vercel.

- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables:
  - `TINA_CLIENT_ID`
  - `TINA_TOKEN`
  - `GITHUB_BRANCH`

After deployment, `/admin` serves the Tina editor from `public/admin`.
