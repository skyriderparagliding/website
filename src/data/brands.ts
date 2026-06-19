import type { Brand } from "@/types";

export const brands: Brand[] = [
  {
    id: "flow",
    slug: "flow",
    name: "Flow",
    tagline: "Passion for Flight",
    description:
      "Flow Paragliders crafts high-performance wings with Swiss precision. Known for their innovative designs and exceptional build quality, Flow has been a trusted name among pilots worldwide for over two decades.",
    logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    ],
    productCategories: ["wings", "harnesses"],
    featured: true,
  },
  {
    id: "phi",
    slug: "phi",
    name: "PHI",
    tagline: "Lightness Redefined",
    description:
      "PHI Paragliders, founded by Hannes Papesh, revolutionized lightweight paragliding with innovative single-skin and double-skin designs. Their wings are celebrated for exceptional pack volume and flying characteristics.",
    logo: "https://images.unsplash.com/photo-1454496526348-38a8fa3549e1?w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
    ],
    productCategories: ["wings"],
    featured: true,
  },
  {
    id: "sky-paragliders",
    slug: "sky-paragliders",
    name: "Sky Paragliders",
    tagline: "Born to Fly",
    description:
      "Sky Paragliders from the Czech Republic produces reliable, well-tested wings for pilots at every level. Their commitment to safety and progression makes them a favorite among schools and instructors.",
    logo: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    productCategories: ["wings", "harnesses"],
    featured: true,
  },
  {
    id: "supair",
    slug: "supair",
    name: "Supair",
    tagline: "French Harness Excellence",
    description:
      "Supair is the world leader in paragliding harness design. From beginner school harnesses to competition pods, Supair sets the standard for comfort, safety, and innovation in harness technology.",
    logo: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    ],
    productCategories: ["harnesses", "reserves", "accessories"],
    featured: true,
  },
  {
    id: "kortel-design",
    slug: "kortel-design",
    name: "Kortel Design",
    tagline: "Innovation in Motion",
    description:
      "Kortel Design creates cutting-edge harnesses and accessories with a focus on ergonomics and pilot comfort. Their modular cockpit systems are among the most versatile in the industry.",
    logo: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1454496526348-38a8fa3549e1?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    productCategories: ["harnesses", "accessories"],
  },
  {
    id: "skywalk",
    slug: "skywalk",
    name: "Skywalk",
    tagline: "German Engineering",
    description:
      "Skywalk combines Bavarian engineering with a passion for free flight. Their wings and harnesses are known for precise handling, durability, and thoughtful design details.",
    logo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
    ],
    productCategories: ["wings", "harnesses"],
    featured: true,
  },
  {
    id: "troy",
    slug: "troy",
    name: "Troy",
    tagline: "Built to Last",
    description:
      "Troy Paragliders, developed by the Gradient team, is known for durable materials, smooth handling, and wings designed for professional tandem and school use.",
    logo: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    productCategories: ["wings"],
  },
  {
    id: "davinci",
    slug: "davinci",
    name: "Davinci",
    tagline: "Art of Flight",
    description:
      "Davinci Paragliders brings Italian design flair to the skies. Their wings feature elegant lines, excellent performance, and a distinctive aesthetic that stands out on any launch site.",
    logo: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    ],
    productCategories: ["wings"],
  },
];

export function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
}
