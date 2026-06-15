# SkyRiders Paragliding

Premium paragliding website for tandem flights, equipment sales, rentals, and courses in Pokhara, Nepal.

**Tagline:** Fly Higher. Fly Safer.

## Tech Stack

- **Next.js 15+** App Router with Server Components
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Radix UI primitives)
- **Framer Motion**
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── flights/            # Flight booking pages
│   ├── shop/               # E-commerce (categories, products)
│   ├── brands/             # Manufacturer pages
│   ├── blog/               # SEO blog system
│   ├── contact/            # Contact & booking
│   ├── search/             # Global search
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Header, footer, mega menu
│   ├── home/               # Homepage sections
│   ├── shop/               # Product components
│   ├── flights/            # Booking form
│   ├── ui/                 # shadcn/ui components
│   ├── motion/             # Framer Motion wrappers
│   └── seo/                # JSON-LD schemas
├── data/                   # Dummy product & content data
├── lib/                    # Utilities, SEO, search
└── types/                  # TypeScript interfaces
```

## Features

- Full-screen hero video with parallax
- Mega menu navigation (Flights, Shop, Rental, Used, Brands)
- Dynamic product & category routes
- Manufacturer brand pages
- Flight booking forms
- Global search (products, categories, brands, blog)
- SEO: metadata, OpenGraph, structured data, sitemap
- Mobile-first responsive design
- WhatsApp product inquiry integration

## Build

```bash
npm run build
npm start
```

## License

Private — SkyRiders Paragliding
