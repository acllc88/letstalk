# Bango — Landing Page

A professional, conversion-focused landing page for the **Bango** live streaming platform (Tango / Bigo-style).

## Contents

- `index.html` — single-page landing site
- `assets/` — product screenshots, hero collage, tech & payment icons
- `api/chat.js` — Vercel serverless function for the AI support chat (key built in)
- `vercel.json` — Vercel deployment config
- `robots.txt` — crawler rules

## AI bot
The chat works out of the box — the OpenRouter key is built into the serverless function (`api/chat.js`), so no environment variables are required.

**Security note:** because the key is in `api/chat.js`, it is visible in your GitHub repo. The key is still hidden from end users (it lives server-side, not in the browser). For better security, move the key to a Vercel Environment Variable (`OPENROUTER_API_KEY`) and remove it from `api/chat.js` — the function automatically prefers the env var when present.

## Environment Variables (optional)
- `OPENROUTER_API_KEY` — overrides the built-in key
- `OPENROUTER_MODEL` — e.g. `openai/gpt-4o-mini` (default)
- `SITE_URL` — your production URL

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
cd "Live Stream App"
vercel
```

### Option 2 — GitHub + Vercel (recommended)
1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Other** (static). No build command needed.
4. Output directory: `.` (root).
5. Deploy.

## Push to GitHub
```bash
cd "Live Stream App"
git init
git add .
git commit -m "Initial commit: Bango landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Troubleshooting: Chat shows "Network error"
- The chat only works on the **deployed Vercel site** (not when opening index.html locally or via a plain static server), because it calls the serverless function `/api/chat`.
- Check Vercel function logs: Project → Functions → /api/chat for errors.

## Customization
- Edit pricing in `index.html` (search for `price-amount`).
- Replace images in `assets/` to refresh the showcase.
- Update contact email (`achdouzcompanyllc@gmail.com`) and brand name as needed.

## Lighthouse
Accessibility 100 · Best Practices 100 · SEO 100.
