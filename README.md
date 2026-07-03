# CB's World Foundation

Milestone 2 of the CB's World Foundation website.

## Built with

- Next.js 14
- React 18
- TypeScript
- App Router
- Global CSS in `app/globals.css`

## Pages included

- Home
- About
- Programs
- Individual programme detail pages
- News
- Gallery
- Donate
- Contact

## Milestone 2 features added

- Mobile menu/navigation
- Editable programme data with dynamic routes at `/programs/[slug]`
- Contact form component
- Contact API route at `/api/contact`
- Donation options controlled from `data/site.ts`
- News/update page controlled from `data/site.ts`
- Cleaner responsive styling

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build for production

```bash
npm run build
npm start
```

## Main editable content

Most starter content is stored in:

```txt
data/site.ts
```

Change the foundation name, contact details, navigation, impact stats, programme cards, donation options, news posts, and values from there.

## Contact form notes

The form validates and posts to:

```txt
app/api/contact/route.ts
```

For now, it logs the enquiry server-side. In the next milestone you can connect it to Resend, Gmail, SendGrid, Airtable, Notion, or a database.

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to Vercel and import the GitHub repo.
3. Keep the default Next.js settings.
4. Click Deploy.

## Milestone 3 ideas

- Connect contact form to real email delivery
- Add real logo and images
- Add a simple admin/CMS layer
- Add Stripe/PayPal donation links
- Add accessibility and SEO polish
