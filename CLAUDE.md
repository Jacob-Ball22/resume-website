# Claude Code Instructions for Resume Website

## Project Overview
Build a modern, responsive resume website using Next.js, TypeScript, and Tailwind CSS. The site should be professional, fast, and easy to maintain.

## Technology Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Bun as package manager
- Supabase for database (optional for contact form)
- Vercel for deployment

## Project Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
└── lib/
    └── data.ts (resume content)
```

## Build Instructions

### Step 1: Initialize Project
```bash
bunx create-next-app@latest . --typescript --tailwind --app --no-src-dir=false
```

### Step 2: Create Components
Create modular components for each resume section. Each component should:
- Be fully typed with TypeScript
- Use Tailwind for styling
- Be responsive (mobile-first)
- Include smooth scroll animations

### Step 3: Implement Features
1. Smooth scrolling navigation
2. Dark mode toggle (optional)
3. Download resume PDF button
4. Contact form with email integration
5. SEO optimization with metadata

### Step 4: Content Integration
- Read content from CONTENT.md
- Structure data in lib/data.ts
- Type all data structures properly

### Step 5: Styling
- Follow design specifications from DESIGN.md
- Ensure consistent spacing and typography
- Add subtle animations and hover effects
- Make fully responsive for all devices

## Code Style Guidelines
- Use functional components with TypeScript
- Implement proper error handling
- Keep components small and focused
- Use semantic HTML elements
- Ensure accessibility (ARIA labels, keyboard navigation)

## Testing Requirements
- Test on multiple screen sizes
- Verify all links work
- Check form validation
- Test PDF download
- Validate SEO metadata

## Performance Optimization
- Optimize images with next/image
- Implement lazy loading
- Minimize bundle size
- Use static generation where possible

## Deployment
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables if using contact form
4. Configure custom domain if available

## Important Notes
- Keep the design professional and clean
- Ensure fast loading times
- Make content easily updatable
- Follow web accessibility standards
- Test thoroughly before deployment