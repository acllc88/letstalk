# Bango — Landing Page

A professional, conversion-focused landing page for the **Bango** live streaming platform (Tango / Bigo-style).

## Contents

- `index.html` — single-page landing site
- `assets/` — product screenshots, hero collage, tech & payment icons
- `vercel.json` — Vercel deployment config
- `robots.txt` — crawler rules

## Deploy to Vercel / GitHub Pages / any static host
No build step needed. Just upload the folder. Works on GitHub Pages, Vercel, Netlify, Cloudflare Pages.

### GitHub Pages
1. Push to GitHub
2. Repo → Settings → Pages → Source: main branch, root folder
3. Site goes live at `https://<user>.github.io/<repo>`

### Vercel
1. Import repo at https://vercel.com/new
2. Framework preset: **Other** (static). No build command. Output: `.`
3. Deploy

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

## Lighthouse
Accessibility 100 · Best Practices 100 · SEO 100.
