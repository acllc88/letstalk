# Bango — Landing Page

A professional, conversion-focused landing page for the **Bango** live streaming platform (Tango / Bigo-style).

## Contents

- `index.html` — single-page landing site
- `assets/` — product screenshots, hero collage, tech & payment icons
- `vercel.json` — Vercel deployment config
- `robots.txt` — crawler rules

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

## Customization
- Edit pricing in `index.html` (search for `price-amount`).
- Replace images in `assets/` to refresh the showcase.
- Update contact email (`achdouzcompanyllc@gmail.com`) and brand name as needed.
- Set your production domain in Open Graph tags for perfect social previews.

## Lighthouse
Accessibility 100 · Best Practices 100 · SEO 100.
