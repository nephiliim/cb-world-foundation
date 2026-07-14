# CB'S WORLD Foundation Website & CMS

Official website and custom CMS for **CB'S WORLD Foundation Charity**.

Built with:

- Next.js 16
- TypeScript
- Supabase
- Vercel
- Formspree

---

# Features

## Public Website

- Homepage
- Foundation
- Justice
- Claudyo's Legacy
- Legacy Wall
- Gallery
- News
- Events
- Contact
- Donate
- Feedback

---

## Admin CMS

Accessible via:

```
/admin
```

Modules:

- Dashboard
- Homepage CMS
- News CMS
- Events CMS
- Gallery CMS
- Legacy Wall Moderation

Features:

- Create
- Edit
- Delete
- Draft / Publish
- Image Upload
- Homepage Editor

---

# Technology

Frontend

- Next.js
- React
- TypeScript

Backend

- Supabase Database
- Supabase Storage

Hosting

- Vercel

Forms

- Formspree

---

# Local Development

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# Environment Variables

Create:

```
.env.local
```

Required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_API_KEY=
FORMSPREE_ENDPOINT=
```

Never commit this file.

---

# CMS

## Homepage

Manage:

- Hero title
- Hero text
- CTA buttons
- Mission section
- Final CTA

---

## News

Create news articles.

Supports:

- Draft
- Published
- Edit
- Delete

---

## Events

Manage:

- Community events
- School visits
- Campaigns
- Memorial events

---

## Gallery

Upload:

- Images
- Videos

Supports:

- Categories
- Captions

---

## Legacy Wall

Visitor messages are saved as pending.

Admin can:

- Approve
- Draft
- Delete

Only published messages appear publicly.

---

# Uploads

Media is uploaded to Supabase Storage.

Supported:

- Images
- Videos

---

# Deployment

Production is hosted on Vercel.

Deploy:

```bash
git add .

git commit -m "Update"

git push
```

Vercel automatically deploys the latest commit.

---

# Database

Supabase Tables

- cms_news
- cms_events
- cms_gallery
- cms_settings
- legacy_messages

---

# Backups

Recommended:

Weekly

- Export Supabase database

Monthly

- Download Storage bucket

Git

Create release tags:

```bash
git tag v1.0
git push origin v1.0
```

---

# Troubleshooting

## CMS says Unauthorized

Check:

- ADMIN_API_KEY
- Vercel Environment Variables
- Browser Local Storage

---

## Images not showing

Check:

- Supabase Storage
- Bucket permissions
- Public URL

---

## Build Errors

Delete:

```
.next
```

Run:

```bash
npm install

npm run dev
```

---

# Future Improvements

- Rich Text Editor
- Search
- User Accounts
- Scheduled Publishing
- SEO Manager
- Analytics Dashboard

---

# Maintainer

CB'S WORLD Foundation

Developed with Next.js, Supabase and Vercel.

Long Live Claudyo 💙