# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness. Brand colours (yellow accent, navy) and the school's copy and images are retained from [tis.edu.in](https://tis.edu.in/).

## 🚀 Live Demo
- **Live URL:** https://tis-homepage-redesign-by-karishma.vercel.app
- **Repository:** https://github.com/karishma1259/tis-homepage-redesign-by-karishma

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 3 with CSS-variable theme tokens
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Icons:** Lucide React
- **Fonts:** Bricolage Grotesque + DM Sans (self-hosted via Fontsource)
- **Deployment:** Vercel

## ✨ Standout Features Implemented
1. **Custom Cursor:** a spring-driven ring (`useMotionValue` + `useSpring`) that scales up over links, buttons and cards. It is disabled on touch devices using the `(hover: hover) and (pointer: fine)` media query.
2. **Scroll-Triggered Reveals:** `RevealGroup` / `RevealItem` use Framer Motion variants and `whileInView` to stagger cards in once (0.5s, `once: true`).
3. **Animated Theme Switcher:** pill toggle with a sliding knob; the theme persists via `next-themes` and respects the system setting.
4. **Scroll Progress Bar:** `useScroll` + `useSpring` scale a bar fixed to the top of the viewport.

Also included: staggered hero headline, self-drawing underline, parallax photo columns, looping marquee, validated enquiry form, `prefers-reduced-motion` support, skip link and a keyboard-accessible mobile menu.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/karishma1259/tis-homepage-redesign-by-karishma.git
   cd tis-homepage-redesign-by-karishma
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Production check: `npm run build && npm start`

## 🧱 Component Architecture Overview
- `src/components/ui/` - Button, Photo, SectionHeading, DrawnUnderline
- `src/components/layout/` - Navbar, MobileNav, Footer
- `src/components/sections/` - Hero, Marquee, About, Sports, Philosophy, Stats, Rankings, Personalities, Awards, VirtualTour, Testimonials, Collaborations, Enquire, EnquiryForm
- `src/components/animation/` - CustomCursor, ScrollProgress, ThemeToggle, Reveal
- `src/hooks/` - useFinePointer, useScrolled, useLockBodyScroll, useEnquiryForm
- `src/data/` - all static content (copy, links, image URLs) kept out of components

## 🎨 Brand Identity Retained
Yellow and navy palette, "Let's do it with Tulas" tagline, sports list, rankings, personalities, awards, parent reviews, collaborations and contact details from tis.edu.in.

## 📝 Notes
- Images are self-hosted in `public/images` (downloaded from tis.edu.in with `scripts/download-images.mjs`).
- The enquiry form is front-end only (validation + success state); there is no backend or OTP step.
