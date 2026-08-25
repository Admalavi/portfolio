# Akshata Malavi — Developer Portfolio

A premium, modern, responsive personal portfolio built with **React + Vite**,
**Tailwind CSS**, **Framer Motion**, and **React Icons**.

Sections: Hero, About, Skills, Experience, Projects, GitHub, LeetCode,
Education, Certifications, and Contact.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations, scroll reveals, respects `prefers-reduced-motion`)
- React Icons

No backend is required — this is a fully static site.

## Quick Start

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project Structure

```text
src/
├── components/       # UI sections (Navbar, Hero, About, Skills, ...)
├── data/             # All editable content lives here (profile, projects, skills, certifications)
├── hooks/            # useTheme (dark/light mode)
├── App.jsx
├── main.jsx
└── index.css         # Tailwind + design tokens

public/
├── profile-photo.jpg # add your photo here (see SETUP.md)
├── resume.pdf         # add your resume here (see SETUP.md)
└── favicon.svg
```

## Customizing Content

All personal data is centralized in `src/data/`:

- `profile.js` — name, bio, education, experience, socials, contact form endpoint
- `projects.js` — featured projects
- `skills.js` — categorized technical skills
- `certifications.js` — certifications list

Search the codebase for `CHANGE HERE` comments to find every place that
needs a real link, file, or value before going live. See `SETUP.md` for the
full checklist and deployment instructions.

## Deployment

This project deploys directly to **Vercel** with zero configuration:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- No environment variables required

See `SETUP.md` for step-by-step deployment instructions.

## License

Personal portfolio — content and design belong to Akshata Malavi.
