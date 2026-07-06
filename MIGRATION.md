# Migration steps

1. Back up the current project folder.
2. Copy this V5 project over the existing repo.
3. Keep your existing `.env.local` file.
4. Run `npm install`.
5. Run `npm run build`.
6. Commit and push.

If you want a safe route, create a new branch first:

```bash
git checkout -b v5-clean-rebuild
```
