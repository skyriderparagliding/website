import type { Product } from "@/types";

const wingImg = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";
const harnessImg = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80";

export const products: Product[] = [
  {
    id: "phi-sola",
    slug: "phi-sola",
    name: "PHI Sola",
    shortDescription: "Lightweight beginner-friendly EN-A paraglider",
    description:
      "A lightweight beginner-friendly paraglider designed for maximum safety and easy progression. The PHI Sola features PHI's innovative single-skin technology, offering exceptional pack volume and forgiving handling characteristics perfect for new pilots.",
    price: 517000,
    images: [wingImg, "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"],
    category: "wings",
    subcategory: "first-paraglider",
    manufacturer: "PHI",
    manufacturerSlug: "phi",
    certification: "EN-A",
    weight: "4.2 kg",
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Cell Count": "42", "Aspect Ratio": "4.8", "Min Sink": "1.0 m/s" },
    technicalData: [
      { label: "Certification", value: "EN-A" },
      { label: "Weight Range (kg)", value: "55–95" },
      { label: "Flat Area (m²)", value: "24–28" },
      { label: "Pack Volume (L)", value: "38" },
      { label: "Riser Length", value: "520 mm" },
      { label: "Line Material", value: "Edelrid" },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "skywalk-tequila-5",
    slug: "skywalk-tequila-5",
    name: "Skywalk Tequila 5",
    shortDescription: "Progressive EN-B wing for growing pilots",
    description:
      "The Tequila 5 is Skywalk's benchmark progressive wing. Excellent climb rate, precise handling, and a wide speed range make it the perfect step-up from school wings.",
    price: 571000,
    images: [wingImg],
    category: "wings",
    subcategory: "progressive-paraglider",
    manufacturer: "Skywalk",
    manufacturerSlug: "skywalk",
    certification: "EN-B",
    weight: "5.1 kg",
    sizes: ["XS", "S", "M", "L", "XL"],
    specifications: { "Cell Count": "56", "Aspect Ratio": "5.4", "Min Sink": "0.9 m/s" },
    technicalData: [
      { label: "Certification", value: "EN-B / LTF-B" },
      { label: "Weight Range (kg)", value: "65–110" },
      { label: "Flat Area (m²)", value: "22–30" },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "flow-fusion-3",
    slug: "flow-fusion-3",
    name: "Flow Fusion 3",
    shortDescription: "High-performance EN-C sports wing",
    description:
      "The Fusion 3 delivers competition-level performance in an accessible EN-C package. Aggressive handling with excellent speed and glide for ambitious XC pilots.",
    price: 650000,
    salePrice: 610000,
    images: [wingImg],
    category: "wings",
    subcategory: "sports-paraglider",
    manufacturer: "Flow",
    manufacturerSlug: "flow",
    certification: "EN-C",
    weight: "5.8 kg",
    sizes: ["S", "M", "L"],
    specifications: { "Cell Count": "72", "Aspect Ratio": "6.2" },
    technicalData: [
      { label: "Certification", value: "EN-C" },
      { label: "Weight Range (kg)", value: "80–105" },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "supair-access-3",
    slug: "supair-access-3",
    name: "Supair Access 3",
    shortDescription: "Versatile school and progression harness",
    description:
      "The Access 3 is the world's most popular school harness. Adjustable back protection, comfortable seat, and durable construction make it ideal for training and early progression.",
    price: 118000,
    images: [harnessImg],
    category: "harnesses",
    subcategory: "first-harnesses",
    manufacturer: "Supair",
    manufacturerSlug: "supair",
    weight: "3.2 kg",
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Protection": "Foam + Airbag", "Storage": "2 side pockets" },
    technicalData: [
      { label: "Weight", value: "3.2 kg" },
      { label: "Max Load", value: "120 kg" },
      { label: "Certification", value: "EN 1651" },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "supair-delight-4",
    slug: "supair-delight-4",
    name: "Supair Delight 4",
    shortDescription: "Premium reversible XC harness",
    description:
      "The Delight 4 combines comfort, storage, and reversibility in a lightweight package. The go-to harness for serious cross-country pilots.",
    price: 172000,
    images: [harnessImg],
    category: "harnesses",
    subcategory: "xc-harnesses",
    manufacturer: "Supair",
    manufacturerSlug: "supair",
    weight: "4.1 kg",
    sizes: ["S", "M", "L"],
    specifications: { "Reversible": "Yes", "Cockpit": "Optional" },
    technicalData: [
      { label: "Weight", value: "4.1 kg" },
      { label: "Volume (L)", value: "95" },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "ozone-atom-3",
    slug: "ozone-atom-3",
    name: "Ozone Atom 3",
    shortDescription: "Trusted EN-A school wing",
    description:
      "The Atom 3 remains the gold standard for paragliding schools worldwide. Forgiving, stable, and durable — the perfect wing to learn on.",
    price: 465000,
    images: [wingImg],
    category: "wings",
    subcategory: "first-paraglider",
    manufacturer: "Sky Paragliders",
    manufacturerSlug: "sky-paragliders",
    certification: "EN-A",
    weight: "5.4 kg",
    sizes: ["XS", "S", "M", "L", "XL"],
    specifications: { "Cell Count": "38" },
    technicalData: [{ label: "Certification", value: "EN-A" }],
    inStock: true,
  },
  {
    id: "gin-genie-lite-4",
    slug: "gin-genie-lite-4",
    name: "Gin Genie Lite 4",
    shortDescription: "Lightweight pod harness for XC",
    description: "A lightweight pod harness with excellent aerodynamics and all-day comfort for long cross-country flights.",
    price: 211000,
    images: [harnessImg],
    category: "harnesses",
    subcategory: "xc-harnesses",
    manufacturer: "Kortel Design",
    manufacturerSlug: "kortel-design",
    weight: "3.8 kg",
    sizes: ["S", "M", "L"],
    specifications: {},
    technicalData: [{ label: "Weight", value: "3.8 kg" }],
    inStock: true,
  },
  {
    id: "supair-sprint",
    slug: "supair-sprint",
    name: "Supair Sprint",
    shortDescription: "Lightweight solo reserve parachute",
    description: "Compact, lightweight reserve parachute with fast opening characteristics. Essential safety equipment for every pilot.",
    price: 92000,
    images: ["https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"],
    category: "reserves",
    subcategory: "solo-reserve",
    manufacturer: "Supair",
    manufacturerSlug: "supair",
    weight: "1.4 kg",
    sizes: ["S", "M", "L"],
    specifications: { "Shape": "PDA", "Opening": "< 2s" },
    technicalData: [
      { label: "Weight", value: "1.4 kg" },
      { label: "Max Load", value: "120 kg" },
      { label: "Certification", value: "EN 12491" },
    ],
    inStock: true,
  },
  {
    id: "flymaster-gps-sd",
    slug: "flymaster-gps-sd",
    name: "Flymaster GPS SD",
    shortDescription: "Compact GPS variometer",
    description: "The Flymaster GPS SD is a compact, powerful flight instrument with GPS navigation, thermal assistant, and live tracking.",
    price: 60000,
    images: ["https://images.unsplash.com/photo-1454496526348-38a8fa3549e1?w=800&q=80"],
    category: "instruments",
    subcategory: "gps-varios",
    manufacturer: "Flow",
    manufacturerSlug: "flow",
    specifications: { "Display": "2.4\" color", "Battery": "20+ hours" },
    technicalData: [
      { label: "GPS", value: "Yes" },
      { label: "Vario", value: "Yes" },
      { label: "Weight", value: "180g" },
    ],
    inStock: true,
  },
  {
    id: "rental-wing-package",
    slug: "rental-wing-package",
    name: "Wing Rental Package",
    shortDescription: "Weekly wing rental — all sizes available",
    description: "Rent a fully inspected paraglider wing for your flying holiday in Pokhara. Includes daily inspection and damage waiver.",
    price: 20000,
    images: [wingImg],
    category: "rental-equipment",
    subcategory: "wings",
    manufacturer: "SkyRiders",
    manufacturerSlug: "sky-riders",
    specifications: { "Period": "Per week" },
    technicalData: [{ label: "Deposit", value: "Rs. 65,000" }],
    isRental: true,
    inStock: true,
  },
  {
    id: "used-phi-allegro",
    slug: "used-phi-allegro",
    name: "Used PHI Allegro (EN-B)",
    shortDescription: "Excellent condition, 80 hours",
    description: "Pre-owned PHI Allegro in excellent condition. Professionally inspected, porosity tested, and line-checked by our certified technicians.",
    price: 293000,
    images: [wingImg],
    category: "used-equipment",
    subcategory: "used-wings",
    manufacturer: "PHI",
    manufacturerSlug: "phi",
    certification: "EN-B",
    weight: "4.8 kg",
    sizes: ["M"],
    specifications: { "Hours": "80", "Condition": "Excellent" },
    technicalData: [
      { label: "Hours Flown", value: "80" },
      { label: "Porosity", value: "Pass" },
      { label: "Last Service", value: "Jan 2026" },
    ],
    isUsed: true,
    inStock: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string, subcategory?: string) {
  return products.filter(
    (p) =>
      p.category === category &&
      (!subcategory || p.subcategory === subcategory)
  );
}

export function getProductsByBrand(brandSlug: string) {
  return products.filter((p) => p.manufacturerSlug === brandSlug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          p.manufacturerSlug === product.manufacturerSlug)
    )
    .slice(0, limit);
}
