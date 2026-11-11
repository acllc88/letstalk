# Bango — Landing Page

A professional, conversion-focused landing page for the **Bango** live streaming platform (Tango / Bigo-style).

## Contents

- `index.html` — single-page landing site
- `assets/` — product screenshots, hero collage, tech & payment icons
- `vercel.json` — Vercel deployment config
- `robots.txt` — crawler rules

## Deploy to Vercel / GitHub Pages / any static host
No build step needed. Just upload the folder. Works on GitHub Pages, Vercel, Netlify, Cloudflare Pages.

### Before you deploy (one-minute check)
- **Canonical URL for social sharing.** `og:image` and `twitter:image` use `/assets/...`. Crawlers need an absolute URL, so once you know your domain replace them with e.g. `https://yourdomain.com/assets/incodeslab/images/products/bango/hero-collage.webp`. Everything else works as-is.
- **Custom domain?** The favicon and OG tags start with `/`, so they assume the site is served from a domain root. On a GitHub Pages *project* site (`user.github.io/repo/`) change those three paths to start with `assets/` instead of `/assets/`.

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
Accessibility 100 · Best Practices 100 · SEO 100 (desktop run via Chrome Lighthouse).

## Verified
- 40 product images load (all local, `loading="lazy"` + intrinsic `width`/`height`)
- No console errors, no horizontal overflow at 360, 390, 980, 1000, 1100 and 1280px
- Lightbox: click, Enter/Space, Escape, focus restore
- FAQ: one open at a time, `aria-expanded` kept in sync
