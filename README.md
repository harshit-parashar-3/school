# Prestige Academy Website

A modern, responsive website for Prestige Academy - showcasing excellence in education since 1965.

## Features

- 🎓 **Modern Design** - Clean, professional interface built with React and Tailwind CSS
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation and screen reader support
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Beautiful Animations** - Smooth transitions using Framer Motion
- 📋 **Google Forms Integration** - Easy contact form management
- 📄 **Legal Pages** - Privacy Policy and Terms of Service included
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Form Handling:** React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd school-hub
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
school-hub/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # React components
│   │   ├── home/      # Home page components
│   │   ├── layout/    # Layout components (Navbar, Footer)
│   │   └── ui/        # shadcn/ui components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── index.html         # HTML template
└── package.json       # Dependencies
```

## Pages

- **Home** (`/`) - Landing page with hero, features, programs, stats, testimonials
- **About** (`/about`) - School history, mission, vision, values, leadership
- **Academics** (`/academics`) - Curriculum, programs, facilities
- **Admissions** (`/admissions`) - Application process, requirements, timeline
- **Contact** (`/contact`) - Contact form, location, office hours
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

## Customization

### Update School Information

1. **Contact Details** - Update in `src/pages/Contact.tsx`
2. **Social Media Links** - Update in `src/components/layout/Footer.tsx`
3. **Meta Tags** - Update in `index.html`
4. **Images** - Replace images in `src/assets/`

### Google Form Integration

See `GOOGLE_FORM_SETUP.md` for detailed instructions on setting up the contact form.

### Colors & Theme

The color scheme is defined in `src/index.css` using CSS variables:
- Primary (Navy): `--primary`
- Accent (Gold): `--accent`
- Background: `--background`
- Foreground: `--foreground`

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Cloudflare Pages

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Copyright © 2025 Prestige Academy. All rights reserved.

## Support

For questions or issues, contact: info@prestigeacademy.edu
