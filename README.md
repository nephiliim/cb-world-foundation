# CB’S WORLD Foundation Charity - Gallery and Feedback Update

This update adds:

- New gallery page with photos and videos
- Main homepage portrait changed in `data/site.ts`
- Site name changed to `CB’S WORLD Foundation Charity`
- Anonymous feedback highlights page
- Captions for:
  - Knife crime awareness event
  - Bleed control kits
  - Bereaved Parents Month
  - Claudyo’s music and voice
  - Graduation / “don’t judge a book by its cover” message

## Install

Copy these folders/files into your project root:

```text
app/gallery/page.tsx
app/gallery/gallery.module.css
app/feedback/page.tsx
app/feedback/feedback.module.css
data/media.ts
data/site.ts
public/images/gallery/
public/videos/gallery/
```

Then run:

```cmd
npm run build
git add .
git commit -m "Add gallery media and anonymous feedback"
git push
```

## Important

The feedback page is anonymised. Before publishing real feedback, remove all names, phone numbers, faces, addresses, school names, or private details unless explicit permission has been given.

## Note about videos

The videos are stored in `public/videos/gallery`. This works, but later it would be better to move videos to Supabase Storage so the GitHub repository stays smaller and the website loads faster.
