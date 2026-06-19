import type { Category } from "@/types";

const IMG = {
  wings: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  harness: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  reserve: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
  instruments: "https://images.unsplash.com/photo-1454496526348-38a8fa3549e1?w=800&q=80",
  accessories: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
  rental: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  used: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
};

export const shopCategories: Category[] = [
  {
    slug: "wings",
    name: "Wings",
    description: "Paragliders for every skill level — from tandem and school wings to XC, sport, lightweight, acro, mini wings, and paramotor",
    image: IMG.wings,
    href: "/shop/wings",
    subcategories: [
      { slug: "tandem-paraglider", name: "Tandem Paraglider", description: "Biplace wings for commercial tandem flying and shared flights", image: IMG.wings, href: "/shop/wings/tandem-paraglider" },
      { slug: "first-paraglider", name: "First Paraglider", description: "EN-A school and beginner wings for your first steps into free flight", image: IMG.wings, href: "/shop/wings/first-paraglider" },
      { slug: "progressive-paraglider", name: "Progressive Paraglider", description: "EN-B wings for pilots progressing beyond school level", image: IMG.wings, href: "/shop/wings/progressive-paraglider" },
      { slug: "xc-paraglider", name: "XC Paraglider", description: "Cross-country wings built for distance and efficiency", image: IMG.wings, href: "/shop/wings/xc-paraglider" },
      { slug: "sport-paraglider", name: "Sport Paraglider", description: "High-performance sport wings for ambitious pilots", image: IMG.wings, href: "/shop/wings/sport-paraglider" },
      { slug: "competition-paraglider", name: "Competition Paraglider", description: "Competition-class wings for maximum performance", image: IMG.wings, href: "/shop/wings/competition-paraglider" },
      { slug: "lightweight-paraglider", name: "Lightweight Paraglider", description: "Ultralight wings for hike-and-fly and travelling pilots", image: IMG.wings, href: "/shop/wings/lightweight-paraglider" },
      { slug: "acro-paraglider", name: "Acro Paraglider", description: "Specialist wings designed for aerobatic manoeuvres", image: IMG.wings, href: "/shop/wings/acro-paraglider" },
      { slug: "parakite-mini-wings", name: "Parakite / Mini Wings", description: "Compact mini wings and parakites for specialist flying", image: IMG.wings, href: "/shop/wings/parakite-mini-wings" },
      { slug: "paramotor-wing", name: "Paramotor Wing", description: "Paramotor and PPG-compatible wings", image: IMG.wings, href: "/shop/wings/paramotor-wing" },
    ],
  },
  {
    slug: "harnesses",
    name: "Harnesses",
    description: "Comfortable, safe harnesses for all disciplines",
    image: IMG.harness,
    href: "/shop/harnesses",
    subcategories: [
      { slug: "tandem-harnesses", name: "Tandem Harnesses", image: IMG.harness, href: "/shop/harnesses/tandem-harnesses" },
      { slug: "first-harnesses", name: "First Harnesses", image: IMG.harness, href: "/shop/harnesses/first-harnesses" },
      { slug: "progressive-harnesses", name: "Progressive Harnesses", image: IMG.harness, href: "/shop/harnesses/progressive-harnesses" },
      { slug: "xc-harnesses", name: "XC Harnesses", image: IMG.harness, href: "/shop/harnesses/xc-harnesses" },
      { slug: "competition-harnesses", name: "Competition Harnesses", image: IMG.harness, href: "/shop/harnesses/competition-harnesses" },
      { slug: "acro-harnesses", name: "Acro Harnesses", image: IMG.harness, href: "/shop/harnesses/acro-harnesses" },
      { slug: "mountain-harnesses", name: "Mountain Harnesses", image: IMG.harness, href: "/shop/harnesses/mountain-harnesses" }
    ],
  },
  {
    slug: "reserves",
    name: "Reserves",
    description: "Emergency parachutes for solo and tandem",
    image: IMG.reserve,
    href: "/shop/reserves",
    subcategories: [
      { slug: "solo-reserve", name: "Solo Reserve", image: IMG.reserve, href: "/shop/reserves/solo-reserve" },
      { slug: "tandem-reserve", name: "Tandem Reserve", image: IMG.reserve, href: "/shop/reserves/tandem-reserve" },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Helmets, cockpits, speed systems and more",
    image: IMG.accessories,
    href: "/shop/accessories",
    subcategories: [
      { slug: "helmets", name: "Helmets", image: IMG.accessories, href: "/shop/accessories/helmets" },
      { slug: "cockpits", name: "Cockpits", image: IMG.accessories, href: "/shop/accessories/cockpits" },
      { slug: "speed-systems", name: "Speed Systems", image: IMG.accessories, href: "/shop/accessories/speed-systems" },
      { slug: "reserve-accessories", name: "Reserve Accessories", image: IMG.accessories, href: "/shop/accessories/reserve-accessories" },
      { slug: "instrument-accessories", name: "Instrument Accessories", image: IMG.accessories, href: "/shop/accessories/instrument-accessories" },
    ],
  },
  {
    slug: "connectors",
    name: "Connectors",
    description: "Carabiners, maillons and soft links",
    image: IMG.accessories,
    href: "/shop/connectors",
    subcategories: [
      { slug: "carabiners", name: "Carabiners", image: IMG.accessories, href: "/shop/connectors/carabiners" },
      { slug: "maillons", name: "Maillons", image: IMG.accessories, href: "/shop/connectors/maillons" },
      { slug: "soft-links", name: "Soft Links", image: IMG.accessories, href: "/shop/connectors/soft-links" },
      { slug: "tandem-spreaders", name: "Tandem Spreaders", image: IMG.accessories, href: "/shop/connectors/tandem-spreaders" },
    ],
  },
  {
    slug: "instruments",
    name: "Instruments",
    description: "Variometres, GPS and flight computers",
    image: IMG.instruments,
    href: "/shop/instruments",
    subcategories: [
      { slug: "variometers", name: "Variometers", image: IMG.instruments, href: "/shop/instruments/variometers" },
      { slug: "alti-varios", name: "Alti-Varios", image: IMG.instruments, href: "/shop/instruments/alti-varios" },
      { slug: "gps-varios", name: "GPS Varios", image: IMG.instruments, href: "/shop/instruments/gps-varios" },
    ],
  },
  {
    slug: "rental-equipment",
    name: "Rental Equipment",
    description: "Rent wings, harnesses and instruments",
    image: IMG.rental,
    href: "/shop/rental-equipment",
    subcategories: [
      { slug: "wings", name: "Wings", image: IMG.rental, href: "/shop/rental-equipment/wings" },
      { slug: "harnesses", name: "Harnesses", image: IMG.rental, href: "/shop/rental-equipment/harnesses" },
      { slug: "reserves", name: "Reserves", image: IMG.rental, href: "/shop/rental-equipment/reserves" },
      { slug: "gps-devices", name: "GPS Devices", image: IMG.rental, href: "/shop/rental-equipment/gps-devices" },
    ],
  },
  {
    slug: "used-equipment",
    name: "Used Equipment",
    description: "Quality pre-owned paragliding gear",
    image: IMG.used,
    href: "/shop/used-equipment",
    subcategories: [
      { slug: "used-wings", name: "Used Wings", image: IMG.used, href: "/shop/used-equipment/used-wings" },
      { slug: "used-harnesses", name: "Used Harnesses", image: IMG.used, href: "/shop/used-equipment/used-harnesses" },
      { slug: "used-instruments", name: "Used Instruments", image: IMG.used, href: "/shop/used-equipment/used-instruments" },
    ],
  },
];

export const homeEquipmentCategories = [
  { slug: "wings", name: "Wings", image: IMG.wings, href: "/shop/wings" },
  { slug: "harnesses", name: "Harnesses", image: IMG.harness, href: "/shop/harnesses" },
  { slug: "reserves", name: "Reserves", image: IMG.reserve, href: "/shop/reserves" },
  { slug: "instruments", name: "Instruments", image: IMG.instruments, href: "/shop/instruments" },
  { slug: "accessories", name: "Accessories", image: IMG.accessories, href: "/shop/accessories" },
  { slug: "rental-equipment", name: "Rental Equipment", image: IMG.rental, href: "/shop/rental-equipment" },
  { slug: "used-equipment", name: "Used Equipment", image: IMG.used, href: "/shop/used-equipment" },
];

export const categories = shopCategories;

export function getCategoryBySlug(slug: string) {
  return shopCategories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subSlug: string) {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.subcategories?.find((s) => s.slug === subSlug);
}

export function getAllCategoryPaths() {
  const paths: Category[] = [];
  shopCategories.forEach((cat) => {
    paths.push(cat);
    cat.subcategories?.forEach((sub) => paths.push({ ...sub, parent: cat.name }));
  });
  return paths;
}
