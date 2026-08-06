Deployment to Vercel
====================

Quick steps to deploy this Next.js App Router project to Vercel.

1) Create a Git repository and push your code to GitHub (or another Git provider):

```bash
git init
git add .
git commit -m "Initial keron premier properties"
# create a GitHub repo and add remote, e.g.:
git remote add origin git@github.com:YOUR_USERNAME/keron-premier-properties.git
git branch -M main
git push -u origin main
```

2) Deploy with Vercel CLI (recommended) or via the Vercel dashboard.

CLI:
```bash
npm i -g vercel
vercel login
vercel --prod
```

During `vercel` it will ask to link the project. Choose the Git repository or link manually.

3) Environment variables
- If you plan to add Supabase, Auth, or other services, set the following in Vercel Dashboard > Settings > Environment Variables (or use `vercel env add`):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY` (server-only)

4) Notes
- Build command: `npm run build` (Vercel detects automatically for Next.js)
- Output directory: handled by Vercel for Next.js projects
- If you need to run migrations or seed data during deploy, create a separate GitHub Action or use Vercel's post-build hooks.

If you want, I can:
- Create a Git commit and push the repository for you (I will need your consent to run git commands here).
- Run `vercel` from this machine (you'll need to login interactively).
- Add automatic environment variable scaffolding for Supabase.
