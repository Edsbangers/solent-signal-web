# Solent Signal — solentsignal.com

AEO-optimised marketing website for **Solent Signal** — Portsmouth-focused AI Answer Engine Optimisation (AEO) web service.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- Deployable to Vercel or Netlify

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, how it works, pricing preview |
| `/about` | About — team, approach, credentials |
| `/pricing` | Pricing — 3 tiers + FAQ |
| `/get-started` | Lead capture — free audit request form |

## Quick start

```bash
cd ~/projects/solent-signal-web
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

## Formspree setup (lead capture form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — copy the form ID (e.g. `xkgnqpzr`)
3. Open `src/components/LeadCaptureForm.tsx`
4. Replace `YOUR_FORM_ID` on line 6 with your actual form ID:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgnqpzr";
   ```
5. Formspree will forward submissions to your email

## Deploy to Vercel

```bash
npm i -g vercel
vercel            # follow prompts, select the project root
```

Or connect your GitHub repo to Vercel and it will auto-deploy on push.

## Design tokens

| Token | Value | Use |
|---|---|---|
| Background | `#0a0f1e` | Page bg |
| Card bg | `#0d1424` | Cards |
| Green | `#22c55e` | CTAs, checkmarks, badges |
| Blue | `#3b82f6` | Gradient text start |
| Cyan | `#06b6d4` | Gradient text end |
| Text muted | `#94a3b8` | Subtext |

## Schema markup

Every page includes JSON-LD structured data:
- `LocalBusiness` schema — root layout (all pages)
- `FAQPage` schema — home page

## Contact

hello@solentsignal.com
