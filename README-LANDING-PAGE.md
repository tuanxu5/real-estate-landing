# Luxury Real Estate Landing Page

Modern, high-end real estate landing page built with Next.js 16, TypeScript, TailwindCSS v4, and Framer Motion.

## Features

✅ **Hero Section** - Fullscreen background with gradient overlay and CTA buttons
✅ **Sticky Navigation** - Transparent to solid on scroll with active section highlighting
✅ **Introduction** - 2-column layout with elegant typography
✅ **Project Highlights** - Grid of key selling points with stagger animations
✅ **Location** - Google Maps embed with nearby places
✅ **Master Plan** - Image with hover zoom effect
✅ **Amenities** - Grid of amenity cards with hover animations
✅ **Gallery** - Image gallery with lightbox and keyboard navigation
✅ **Contact Form** - Form with validation (name, phone, email)
✅ **Footer** - Contact info and social links
✅ **Mobile Responsive** - Mobile-first design with hamburger menu
✅ **Smooth Animations** - Framer Motion animations throughout

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS v4**
- **Framer Motion** v12
- **Google Fonts** (Playfair Display, Inter)

## Design System

### Colors
- **Primary**: Deep green/emerald (#0F3D3E)
- **Accent**: Gold (#C9A96E)
- **Neutral**: White and grayscale

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Rounded corners (2xl)
- Soft shadows
- Glassmorphism effects
- Hover scale animations

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Add images** to `public/images/`:
   - `hero-background.jpg` - Hero section background
   - `introduction.jpg` - Introduction section image
   - `masterplan.jpg` - Master plan image
   - `gallery/` folder with project images

3. **Run development server**:
```bash
npm run dev
```

4. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── AnimatedSection.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Introduction.tsx
│   ├── ProjectHighlights.tsx
│   ├── Location.tsx
│   ├── MasterPlan.tsx
│   ├── Amenities.tsx
│   ├── Gallery.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── lib/
│   ├── animations.ts       # Framer Motion variants
│   └── data.ts            # Static data (highlights, amenities, gallery)
└── types/
    └── index.ts           # TypeScript interfaces

```

## Customization

### Update Content

Edit `src/lib/data.ts` to customize:
- Project highlights
- Amenities
- Gallery images

### Update Hero

Edit `src/app/page.tsx` to customize:
- Hero title and subtitle
- CTA button labels
- Background image

### Update Colors

Edit `tailwind.config.ts` to customize the color palette.

### Update Fonts

Edit `src/app/layout.tsx` to change fonts.

## Performance

- ✅ Next.js Image optimization
- ✅ Lazy loading for below-fold images
- ✅ Priority loading for hero image
- ✅ Smooth animations with Framer Motion
- ✅ Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
