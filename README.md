# Jacob Ball — Personal Resume Website

A modern, responsive personal resume website built with Next.js, TypeScript, and Tailwind CSS. This site showcases my background as a Marine Corps veteran, Fordham University student, and aspiring data scientist.

**Live site:** [jacob-ball.com](https://jacob-ball.com/)

---

## About This Project

This website serves as an interactive, always-up-to-date version of my resume. It was built entirely with the help of **Claude AI (Claude Code)** — Anthropic's AI coding assistant — which I used to scaffold the project, write every component, and iterate on the design based on my feedback.

The process was entirely conversational: I described what I wanted, Claude wrote the code, and I reviewed and refined it. This project is itself a demonstration of how I approach problems — combining technical knowledge with modern tools to build something professional and polished.

---

## Built With

- **[Next.js 15](https://nextjs.org/)** — React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[Formspree](https://formspree.io/)** — Contact form email delivery
- **[Vercel](https://vercel.com/)** — Hosting and deployment

---

## Features

- **Responsive design** — Works on mobile, tablet, and desktop
- **Dark mode** — System-aware with manual toggle
- **Smooth navigation** — Sticky header with active section highlighting
- **Animated hero** — Typewriter effect cycling through job titles
- **Interactive experience cards** — Expandable accordion cards with timeline layout
- **Skills section** — Filterable by category with proficiency indicators
- **Projects showcase** — Linked directly to GitHub repositories
- **Contact form** — Working email delivery via Formspree
- **Resume download** — Direct PDF download button

---

## How I Used Claude AI to Build This

This project was built using **Claude Code**, Anthropic's AI coding assistant integrated into VS Code. Here's how the workflow looked:

1. **Project setup** — I provided markdown spec files outlining the content, design preferences, and features I wanted. Claude read these files and scaffolded the entire Next.js project from scratch.

2. **Component development** — Each section (Hero, Experience, Education, Skills, Projects, Contact) was built as a separate React component. I described what I wanted each section to look and behave like, and Claude wrote the TypeScript and Tailwind code.

3. **Iterative refinement** — Throughout the process, I requested specific changes: adjusting which job titles appear in the typewriter animation, making experience cards expand by default, updating copy, fixing broken links, and integrating Formspree for the contact form.

4. **Git & deployment** — Claude helped me set up the Git repository correctly (including resolving an issue where Git was accidentally initialized in the wrong directory), push to GitHub, and configure Vercel for automatic deployments.

The end result is a fully functional, production-deployed website — built through natural conversation rather than writing every line of code by hand.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, SEO metadata, fonts
│   ├── page.tsx         # Main page — assembles all sections
│   └── globals.css      # Design system, custom utilities
├── components/
│   ├── Header.tsx       # Sticky nav with dark mode toggle
│   ├── Hero.tsx         # Intro section with typewriter animation
│   ├── Experience.tsx   # Work history with expandable cards
│   ├── Education.tsx    # Degrees, GPA, coursework
│   ├── Skills.tsx       # Filterable skills with proficiency bars
│   ├── Projects.tsx     # Project showcase with GitHub links
│   ├── Contact.tsx      # Contact form (Formspree)
│   └── Footer.tsx       # Links and back-to-top
└── lib/
    └── data.ts          # All resume content in one place
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## About Me

I'm a Marine Corps veteran and Fordham University student pursuing a B.S. in Information Technology & Systems and an M.S. in Data Science. My background spans network administration, cybersecurity, and machine learning — and I'm actively seeking internship and job opportunities in data science and analytics.

- **LinkedIn:** [linkedin.com/in/jacob-ball22](https://www.linkedin.com/in/jacob-ball22/)
- **GitHub:** [github.com/Jacob-Ball22](https://github.com/Jacob-Ball22)
- **Email:** jeball22@gmail.com
