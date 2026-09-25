# Faslulhaq Farees portfolio

Built with **Next.js (App Router)**, **React**, **Tailwind CSS v4** and **Framer Motion**. Deployed on Vercel.

## Run it on your computer

You need **Node.js 20 or newer** (download the LTS version from nodejs.org). Check with `node -v`.

```bash
npm install      # first time only: downloads Next.js, React, Tailwind, etc.
npm run dev      # starts the site at http://localhost:3000
```

Leave `npm run dev` running while you edit. The page updates each time you save.

To test a production build (the same thing Vercel runs):

```bash
npm run build
npm start
```

## Where things are

```
src/
  data/portfolio.js      ALL your content: text, projects, skills, links  <- edit this
  app/
    layout.jsx           page <head>: title, description, font
    page.jsx             puts the sections in order
    globals.css          theme colours and shared styles
    icon.svg             browser tab icon
  components/            one file per section (Hero, About, Resume, Skills, ...)
public/
  faslulhaq-farees-cv.pdf
```

## Common edits (all in `src/data/portfolio.js`)

- **Your photo:** put a square photo at `public/profile.jpg`, then set `photo: "/profile.jpg"`.
- **Project links:** set each project's `github` to its own repo, and `demo` to a live URL (or leave `null`).
- **Project screenshots:** put images in `public/projects/`, then set e.g. `image: "/projects/eduflex.png"`.
- **Typing text:** edit the `roles` list.
- **Core skills %:** edit `coreSkills`. Use numbers you can back up in an interview.
- **Certificate links:** set `link` on any certification to show a "View credential" link.
- **Contact form:** create a free form at formspree.io and paste its URL into `formspreeEndpoint`. Until then the form opens the visitor's email app.
- **New skill icon:** add the skill to `skillGroups`, then add a matching icon in the `iconMap` in `src/components/Skills.jsx` (icons come from react-icons.github.io).

## Change colours

Edit the `@theme` block at the top of `src/app/globals.css`. `--color-accent` is the yellow.

## Deploy to Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Portfolio in Next.js"
   git branch -M main
   git remote add origin https://github.com/haq-ops/portfolio.git
   git push -u origin main
   ```
2. On vercel.com: **Add New → Project**, import the repo. Vercel detects **Next.js** automatically. Click **Deploy**.

Every `git push` after that redeploys the site.
