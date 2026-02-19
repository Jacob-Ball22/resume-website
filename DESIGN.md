# Design Specifications

## Color Scheme

### Light Mode
- **Primary Color**: #2563eb (Blue - for headers, links, CTAs)
- **Secondary Color**: #10b981 (Green - for success states, highlights)
- **Text Primary**: #111827 (Dark gray - main text)
- **Text Secondary**: #6b7280 (Medium gray - secondary text)
- **Background**: #ffffff (White)
- **Surface**: #f9fafb (Light gray - for cards/sections)
- **Border**: #e5e7eb (Light gray)

### Dark Mode (Optional)
- **Primary Color**: #3b82f6 (Lighter blue)
- **Secondary Color**: #34d399 (Lighter green)
- **Text Primary**: #f9fafb (Light gray)
- **Text Secondary**: #d1d5db (Medium gray)
- **Background**: #111827 (Dark gray)
- **Surface**: #1f2937 (Darker gray)
- **Border**: #374151 (Gray)

## Typography

### Font Families
- **Headings**: Inter, system-ui, sans-serif
- **Body Text**: Inter, system-ui, sans-serif
- **Code/Technical**: 'Fira Code', 'Courier New', monospace

### Font Sizes (Mobile → Desktop)
- **Hero Title**: 2.5rem → 4rem
- **H1**: 2rem → 3rem
- **H2**: 1.5rem → 2rem
- **H3**: 1.25rem → 1.5rem
- **Body**: 1rem → 1.125rem
- **Small**: 0.875rem → 0.875rem

### Font Weights
- **Headings**: 700-800 (Bold)
- **Subheadings**: 600 (Semi-bold)
- **Body**: 400 (Regular)
- **Emphasis**: 500 (Medium)

## Layout

### Spacing System
Use consistent spacing based on 8px grid:
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

### Container
- Max width: 1200px
- Padding: 1rem on mobile, 2rem on desktop
- Centered with auto margins

### Grid System
- Mobile: 1 column
- Tablet (768px+): 2 columns where appropriate
- Desktop (1024px+): 3-4 columns for skills/projects

## Components

### Navigation
- Sticky header with blur background
- Smooth scroll to sections
- Mobile hamburger menu
- Active section highlighting

### Hero Section
- Large name/title
- Professional photo (optional)
- Brief tagline
- CTA buttons (Contact, Download Resume)
- Animated text or subtle gradient

### Experience Cards
- Clean card design with subtle shadow
- Company logo (if available)
- Timeline indicator
- Hover effect for expansion

### Skills Section
- Grouped by category
- Progress bars or skill level indicators
- Icons for each technology (optional)
- Grid layout

### Project Cards
- Screenshot or placeholder image
- Tech stack tags
- Links to GitHub/Live demo
- Hover overlay with description

### Contact Section
- Contact form with validation
- Social media links with icons
- Professional but approachable tone

## Animations

### Entrance Animations
- Fade in on scroll
- Slide up for cards
- Stagger animation for lists

### Hover Effects
- Scale: 1.02-1.05 for cards
- Color transitions: 200ms ease
- Shadow elevation changes
- Underline animations for links

### Smooth Transitions
- Page scrolling: smooth
- Theme toggle: 300ms
- Menu open/close: 200ms

## Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1279px
- Large Desktop: 1280px+

## Accessibility
- Minimum contrast ratio: 4.5:1 for normal text
- Focus indicators on all interactive elements
- Keyboard navigation support
- Screen reader friendly markup
- Alt text for all images

## Icon Set
Use consistent icon library (recommendations):
- Heroicons
- Lucide React
- React Icons
- Font Awesome

## Special Features

### Download Resume Button
- Prominent placement
- PDF icon
- Hover effect
- Track downloads (optional)

### Dark Mode Toggle
- Sun/Moon icon
- Smooth transition
- Persist preference

### Back to Top Button
- Appears on scroll
- Smooth scroll animation
- Fixed position bottom-right

## Performance Considerations
- Optimize images (WebP format)
- Lazy load below-fold content
- Minimize CSS/JS bundles
- Use system fonts where possible
- Enable caching strategies