# JKJ Robotics Portfolio

Portfolio website for Jyotish Kumar Jha — Mechanical Engineer specializing in Robotics, AI, and Autonomous Systems.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1 — GitHub Integration (Recommended)
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub.
3. Select this repository. Framework preset: **Next.js** (auto-detected).
4. Click **Deploy**. No custom settings needed.

### Option 2 — Vercel CLI
```bash
npm i -g vercel
vercel
```

## Contact Form
The contact page embeds a Google Form. To use your own form:
1. Create a Google Form at [forms.google.com](https://forms.google.com).
2. Click **Send → Embed** and copy the `src` URL.
3. Replace `YOUR_GOOGLE_FORM_EMBED_URL` in `app/contact/page.tsx`.

## Environment Variables
This is a static content site. No environment variables are required.
