# Setup Guide

This guide walks you through installing, running, customizing, and
deploying your portfolio.

## 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org) 18+ installed, then run:

```bash
npm install
```

## 2. Run Locally

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).
The page auto-reloads as you edit files.

## 3. Add Your Profile Photo

1. Add your photo file to `public/profile-photo.jpg` (any image editor /
   file manager works — just make sure the filename matches exactly).
2. The Hero section already references it at:
   `src/components/Hero.jsx` → look for the comment:
   `// CHANGE HERE: Replace public/profile-photo.jpg with your actual profile photo.`
3. If the file is missing, the site automatically shows a clean "AM"
   monogram fallback, so nothing breaks if you skip this step for now.

## 4. Add Your Resume

1. Replace `public/resume.pdf` with your actual, up-to-date resume
   (keep the same filename).
2. The comment marking this is in `src/data/profile.js`:
   `// CHANGE HERE: Add your latest resume as public/resume.pdf.`
3. The "Download Resume" button in the Hero section links to `/resume.pdf`
   automatically — no other code changes needed.

## 5. Add Your Project GitHub Links

Open `src/data/projects.js` and fill in the empty `github: ""` fields for:

- Speakmate-AI
- ExpenseFlow Lite
- SkyCast
- The second live project (also update its placeholder `title`)

Each spot is marked with a `// CHANGE HERE` comment right above it.

## 6. Add Certificate Links

Open `src/data/certifications.js` and fill in the `url: ""` field for any
certificate you'd like to link to (marked with `// CHANGE HERE`). Leaving
a `url` empty is fine — the card will simply show "Certificate link coming
soon" instead of a broken link.

## 7. Change Project / Personal Information

All editable content lives in `src/data/`:

| File | Contains |
|---|---|
| `profile.js` | Name, bio, education, experience, socials, contact form endpoint |
| `projects.js` | Featured projects & the second live project |
| `skills.js` | Categorized technical skills |
| `certifications.js` | Certifications list |

Edit these plain JavaScript objects directly — no need to touch component
code for content changes.

## 8. (Optional) Enable a Hosted Contact Form

By default, the contact form falls back to opening the visitor's email
client (`mailto:`) when submitted. If you'd like messages to be delivered
without relying on `mailto:`, sign up for a free endpoint at
[Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com),
then paste it into `src/data/profile.js`:

```js
// CHANGE HERE: Add Formspree/Web3Forms endpoint if a hosted contact form is required.
export const contactFormEndpoint = "https://formspree.io/f/your-id";
```

## 9. Build for Production

```bash
npm run build
```

This generates an optimized static build in the `dist/` folder. Preview it
locally with:

```bash
npm run preview
```

## 10. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Admalavi/YOUR-REPO-NAME.git
git push -u origin main
```

(Create the empty repository on GitHub first, then copy its URL into the
`git remote add` command above.)

## 11. Deploy to Vercel

**Option A — Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and select your portfolio repository.
3. Vercel auto-detects the Vite framework preset. Confirm these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. No environment variables are needed.

**Option B — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

Your site will be live at a `*.vercel.app` URL, with automatic redeploys
on every push to `main`.

## Full List of "CHANGE HERE" Items

Search your editor for `CHANGE HERE` to find every one of these:

1. `public/profile-photo.jpg` — your real profile photo
2. `public/resume.pdf` — your real resume
3. Speakmate-AI GitHub URL (`src/data/projects.js`)
4. ExpenseFlow Lite GitHub URL (`src/data/projects.js`)
5. SkyCast GitHub URL (`src/data/projects.js`)
6. Second live project's real name (`src/data/projects.js`)
7. Second live project's GitHub URL (`src/data/projects.js`)
8. Certificate URLs, one per certification (`src/data/certifications.js`)
9. Contact form endpoint, optional (`src/data/profile.js`)

That's it — your portfolio is ready to customize and ship. 🚀
