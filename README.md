# Bango — Landing Page

A professional, conversion-focused landing page for the **Bango** live streaming platform (Tango / Bigo-style).

## Contents

- `index.html` — single-page landing site (chat is client-side, works on any static host)
- `assets/` — product screenshots, hero collage, tech & payment icons
- `api/chat.js` — optional Vercel serverless function (secure proxy alternative)
- `vercel.json` — Vercel deployment config
- `robots.txt` — crawler rules

## AI Support Chat (client-side)
The chat widget calls OpenRouter **directly from the browser** (no backend/Vercel needed), so it works on any static host (GitHub Pages, etc.). The OpenRouter API key is embedded in `index.html`.

**⚠️ The key you provided currently returns "User not found." (401) from OpenRouter.** You need to generate a new key:
1. Go to https://openrouter.ai → sign in / create an account
2. Open **Keys** → **Create Key**
3. Replace the key in `index.html` (search `sk-or-v1-`) with your new key

**Security note:** embedding the key in frontend code exposes it to anyone who views source. For production, consider routing through a backend proxy. The `api/chat.js` serverless function (Vercel) is included as an optional secure alternative — if you use it, point the chat `fetch` back to `/api/chat`.

## Troubleshooting: Chat shows "Sorry, I had trouble responding"
- The OpenRouter key is invalid/expired → generate a new one (see above)
- Check the browser console (F12) for the exact error (401 = bad key, 429 = rate limit)
- Make sure the model `openai/gpt-4o-mini` is available on your OpenRouter account

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
