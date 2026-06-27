# JO's Property Management

Premium UK short-term rental management website. Built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Icons | Lucide React |
| Email | Resend |
| Deployment | Vercel |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Fill in your `RESEND_API_KEY` from [resend.com](https://resend.com).

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, calculator, dashboard, process, testimonials, case studies, FAQ |
| `/about` | About — philosophy, expertise, stats |
| `/investors` | Investors — portfolio advisory, services, case studies |
| `/insights` | Blog index — property investing articles |
| `/contact` | Contact — consultation booking form |

---

## Project Structure

```
app/
  layout.tsx          # Root layout — fonts, metadata, nav, footer
  globals.css         # Brand tokens, base styles, typography
  page.tsx            # Home page
  about/page.tsx
  investors/page.tsx
  insights/page.tsx
  contact/page.tsx    # Client component (interactive form)
  api/
    contact/route.ts  # Email API using Resend

components/
  Navbar.tsx          # Sticky nav with blur backdrop
  Footer.tsx
  ui/
    primitives.tsx    # Eyebrow, AnimatedSection, StatCard, etc.
  sections/
    Hero.tsx          # Full-viewport hero with JO monogram watermark
    TrustBar.tsx
    Services.tsx
    Calculator.tsx    # Interactive revenue calculator (client)
    Dashboard.tsx     # Owner dashboard mockup
    HomeSections.tsx  # ProcessTimeline, Testimonials, CaseStudies,
                      # Comparison, FAQ, FinalCTA
```

---

## Brand Tokens

```css
--obsidian:     #0f0f0f   /* Primary background */
--charcoal:     #1c1c1c   /* Card backgrounds */
--slate:        #262626   /* Elevated surfaces */
--mid:          #303030   /* Chart backgrounds */
--gold:         #b8a070   /* Primary accent */
--gold-light:   #d4bc8e   /* Hover gold */
--cream:        #f2ede4   /* Headline text */
--muted:        rgba(242,237,228,0.52) /* Body text */
```

Typography:
- **Display**: Cormorant Garamond (Google Fonts) — headlines, quotes
- **UI**: DM Sans (Google Fonts) — labels, body, navigation

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# RESEND_API_KEY = your_key
# NEXT_PUBLIC_SITE_URL = https://jopropertymanagement.co.uk
```

---

## Domain

Recommended: `jopropertymanagement.co.uk`

Register at [Namecheap](https://namecheap.com) or [123-reg](https://123-reg.co.uk), then connect to Vercel via DNS settings.

---

## Next Steps

1. Add real property photography (replace placeholder image areas)
2. Set up Sanity.io CMS for the Insights blog
3. Connect Resend for live email delivery
4. Add Google Analytics or Vercel Analytics
5. Set up sitemap.xml and robots.txt (Next.js generates sitemap automatically)
6. Commission real case study content from clients

---

## Lighthouse Targets

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
