# Bango — Landing Page

A professional, conversion-focused landing page for the **Bango** live streaming platform (Tango / Bigo-style).

## Contents

- `index.html` — single-page landing site
- `assets/` — product screenshots, hero collage, tech & payment icons
- `vercel.json` — Vercel deployment config
- `robots.txt` — crawler rules

## Environment Variables (for AI chat)
The chat uses a Vercel serverless function (`api/chat.js`) so the OpenRouter API key stays server-side.

1. Copy `.env.example` to `.env` and fill in `OPENROUTER_API_KEY`.
2. For Vercel: go to Project Settings → Environment Variables and add `OPENROUTER_API_KEY` (and optionally `OPENROUTER_MODEL`, `SITE_URL`).
3. Never commit `.env` (already in `.gitignore`).

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

## AI Support Chat
The page includes an AI support chat widget (bottom-right) powered by OpenRouter. The API key is embedded client-side for demo purposes. **For production, move the API key to a backend proxy** to avoid exposing it. Change the model in `index.html` (search `openai/gpt-4o-mini`) as needed.
- Edit pricing in `index.html` (search for `price-amount`).
- Replace images in `assets/` to refresh the showcase.
- Update contact email (`achdouzcompanyllc@gmail.com`) and brand name as needed.
- Set your production domain in Open Graph tags for perfect social previews.

## Lighthouse
Accessibility 100 · Best Practices 100 · SEO 100.
