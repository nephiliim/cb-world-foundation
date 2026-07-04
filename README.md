# CB's World Foundation Charity

Milestone 1 public website for CB's World Foundation Charity.

Built from the handover source of truth:

- Design B: white, deep blue, black, hopeful, soft and storytelling-led
- Next.js 14
- TypeScript
- Tailwind CSS
- App Router
- Mobile-first responsive layout

## Pages included

- Home
- About
- Claudyo's Legacy
- Foundation
- Acts of Kindness
- Gallery
- Media & Press
- Donate
- Feedback
- Blog placeholder
- Shop placeholder
- Contact

## Features included

- Navbar
- Mobile menu
- Footer
- Reusable page hero, section, card grid and button components
- Contact form and `/api/contact` route
- Full public asset folder structure
- Handover docs copied into `/docs`
- Donation CTA linked to GoFundMe

## Asset structure

All real photos and videos should be added inside `public/`.

Important folders:

```txt
public/logo
public/hero
public/founders
public/claudyo
public/gallery
public/acts-of-kindness
public/media
public/videos
public/shop
```

See `docs/assets.md` for detailed placement and naming rules.

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

## Push to GitHub

```bash
git add .
git commit -m "Milestone 1 - CB World Foundation public website"
git push
```

If this is a fresh repo:

```bash
git init
git add .
git commit -m "Milestone 1 - CB World Foundation public website"
git branch -M main
git remote add origin https://github.com/nephiliim/cb-world-foundation.git
git push -u origin main
```

## Next milestone

Milestone 2 should add the admin shell, protected login placeholders and content manager routes.

## Milestone 2 update

Added the first real media assets and rebuilt the Claudyo's Legacy page with:

- Full hero section using Claudyo portrait and tribute artwork
- Tribute gallery
- Foundation videos
- Story cards and timeline structure
- Logo added to the header
- Homepage updated to use real imagery

Media locations:

- `public/claudyo/`
- `public/founders/`
- `public/logo/`
- `public/videos/`
