import type { BlogPost } from "@/types";

const blogImg = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80";

export const blogCategories = [
  "Tandem Paragliding",
  "Equipment Reviews",
  "Flying Tips",
  "Safety Guides",
  "Pokhara Travel",
  "Beginner Guides",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: "tandem-guide-pokhara",
    slug: "complete-guide-tandem-paragliding-pokhara",
    title: "Complete Guide to Tandem Paragliding in Pokhara",
    excerpt:
      "Everything you need to know before your first tandem flight over the Annapurna range — from what to wear to the best time of year to fly.",
    content: `
## Why Pokhara is the World's Best Tandem Destination

Pokhara, Nepal's adventure capital, offers some of the most spectacular paragliding in the world. With the Annapurna range as your backdrop and Phewa Lake below, every flight is unforgettable.

## What to Expect

Your tandem experience begins with a safety briefing at our launch site on Sarangkot hill. After harnessing up with your certified pilot, you'll run a few steps and be airborne within seconds.

## Best Time to Fly

The flying season runs from September through May. October-November and March-April offer the clearest skies and most stable conditions.

## What to Bring

- Comfortable closed-toe shoes
- Sunglasses with a strap
- Light jacket (it gets cooler at altitude)
- Camera or GoPro (we provide footage too)

## Pricing & Booking

Tandem flights start at Rs. 12,500. Book online or via WhatsApp for instant confirmation.
    `,
    category: "Tandem Paragliding",
    author: "SkyRiders Team",
    publishedAt: "2026-01-15",
    readTime: "8 min",
    image: blogImg,
    featured: true,
  },
  {
    id: "best-beginner-paragliders-2026",
    slug: "best-beginner-paragliders-2026",
    title: "Best Beginner Paragliders in 2026",
    excerpt:
      "Our expert picks for EN-A wings that offer the perfect balance of safety, forgiveness, and progression potential.",
    content: `
## Top EN-A Wings for 2026

Choosing your first wing is one of the most important decisions in your flying career. Here are our top recommendations.

### 1. PHI Sola
Lightweight, compact, and incredibly forgiving. Perfect for travel and progression.

### 2. Ozone Atom 3
The school standard worldwide. Proven durability and predictable handling.

### 3. Skywalk Tequila 5
While technically EN-B, many schools use it as a progression wing from day one.

## What to Look For

- EN-A or EN-A/B certification
- Appropriate weight range for your all-up weight
- Good resale value
- Manufacturer support and parts availability
    `,
    category: "Equipment Reviews",
    author: "SkyRiders Team",
    publishedAt: "2026-02-01",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    featured: true,
  },
  {
    id: "en-a-vs-en-b",
    slug: "en-a-vs-en-b-paragliders-explained",
    title: "EN-A vs EN-B Paragliders Explained",
    excerpt:
      "Understanding paraglider certification classes is essential for every pilot. We break down the differences and help you choose.",
    content: `
## Certification Classes Overview

The EN certification system rates paragliders on a scale from EN-A (most passive) to EN-D (most demanding).

## EN-A Wings
- Designed for beginners and training
- Maximum passive safety
- Forgiving in collapses and turbulence
- Lower performance ceiling

## EN-B Wings
- For intermediate pilots
- Better performance and speed
- Require more active piloting
- Still good passive safety

## Which Should You Choose?

New pilots should always start with EN-A. After 50+ solo flights and proper training, EN-B becomes appropriate.
    `,
    category: "Beginner Guides",
    author: "SkyRiders Team",
    publishedAt: "2026-01-20",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
    featured: true,
  },
  {
    id: "choose-first-harness",
    slug: "how-to-choose-your-first-harness",
    title: "How to Choose Your First Harness",
    excerpt:
      "From school harnesses to reversible XC pods — a comprehensive guide to finding the perfect harness for your flying style.",
    content: `
## Types of Harnesses

### School Harnesses
Basic, durable, adjustable. Perfect for training with foam protection.

### Reversible Harnesses
Wing storage built in. Essential for hike-and-fly and travel.

### Pod Harnesses
Aerodynamic cocoon for long XC flights. Maximum comfort and performance.

## Key Features to Consider

- Back protection (foam vs airbag)
- Weight and pack volume
- Storage capacity
- Reserve container position
- Certification (EN 1651)
    `,
    category: "Equipment Reviews",
    author: "SkyRiders Team",
    publishedAt: "2026-02-10",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
  },
  {
    id: "pokhara-travel-guide",
    slug: "pokhara-travel-guide-paragliders",
    title: "Pokhara Travel Guide for Paragliders",
    excerpt:
      "Planning a flying trip to Nepal? Our local guide covers launch sites, accommodation, permits, and the best restaurants in Lakeside.",
    content: `
## Getting to Pokhara

Fly into Pokhara International Airport or take a scenic 25-minute flight from Kathmandu.

## Where to Stay

Lakeside offers the best access to flying sites and our pickup service. Budget to luxury options available.

## Flying Permits

We assist with all CAAN permit applications. Allow 2-3 business days for processing.

## Beyond Flying

Phewa Lake boating, World Peace Pagoda hikes, and Annapurna base camp treks are all within reach.
    `,
    category: "Pokhara Travel",
    author: "SkyRiders Team",
    publishedAt: "2026-01-25",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
  },
  {
    id: "pre-flight-safety-checklist",
    slug: "pre-flight-safety-checklist",
    title: "Essential Pre-Flight Safety Checklist",
    excerpt:
      "Never skip these checks before every flight. Our certified instructors share the daily safety protocol used by professional pilots.",
    content: `
## Daily Equipment Check

1. Visual inspection of wing fabric and lines
2. Carabiner and maillon check
3. Reserve pin and handle verification
4. Harness buckle and leg strap check
5. Helmet and instrument check

## Weather Assessment

- Wind speed and direction at launch and landing
- Cloud development and overdevelopment risk
- Thermal activity forecast
- Landing zone accessibility

## Personal Readiness

- Hydration and nutrition status
- Fatigue assessment
- Mental preparedness
    `,
    category: "Safety Guides",
    author: "SkyRiders Team",
    publishedAt: "2026-02-05",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts() {
  return blogPosts.filter((p) => p.featured);
}
