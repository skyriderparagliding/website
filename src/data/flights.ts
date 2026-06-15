import type { Flight } from "@/types";

const hero = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80";
const gallery = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
];

export const flights: Flight[] = [
  {
    id: "tandem-paragliding",
    slug: "tandem-paragliding",
    name: "Tandem Paragliding",
    tagline: "Your first flight over the Annapurna range",
    description:
      "Experience the magic of free flight with our certified tandem pilots. Soar above Pokhara's Phewa Lake with breathtaking views of the Annapurna and Machapuchare peaks. No experience necessary — just bring your sense of adventure.",
    price: 95,
    duration: "20–30 minutes",
    heroImage: hero,
    gallery,
    included: [
      "Certified tandem pilot",
      "Full safety briefing",
      "GoPro video & photos",
      "Hotel pickup & drop-off",
      "Flight certificate",
      "Insurance coverage",
    ],
    safety: [
      "All pilots APPI/Tandem certified with 1000+ flights",
      "Daily equipment inspection protocol",
      "Weather assessment before every flight",
      "Weight limit: 30–100 kg",
      "Reserve parachute on every flight",
    ],
    featured: true,
  },
  {
    id: "cross-country-flight",
    slug: "cross-country-flight",
    name: "Cross Country Flight",
    tagline: "Extended soaring above the Himalayas",
    description:
      "For experienced passengers or pilots looking for an extended adventure. Fly cross-country routes along the Annapurna range with thermalling and ridge soaring. Minimum 45 minutes airborne with spectacular mountain views.",
    price: 180,
    duration: "45–60 minutes",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
    gallery,
    included: [
      "Expert XC tandem pilot",
      "Extended flight time",
      "In-flight commentary",
      "GoPro footage",
      "Light snacks & water",
      "Transport to launch site",
    ],
    safety: [
      "Advanced weather monitoring",
      "XC-rated equipment only",
      "Radio communication throughout",
      "Pre-flight fitness assessment",
      "Emergency landing plan briefed",
    ],
    featured: true,
  },
  {
    id: "acro-flight",
    slug: "acro-flight",
    name: "Acro Flight",
    tagline: "Adrenaline-packed aerobatic experience",
    description:
      "For thrill-seekers only. Experience wing-overs, spirals, and controlled acro maneuvers with our specialist acro pilots. An unforgettable adrenaline rush above Pokhara's stunning landscape.",
    price: 150,
    duration: "15–20 minutes",
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80",
    gallery,
    included: [
      "Specialist acro pilot",
      "Full safety briefing",
      "GoPro video package",
      "Acro flight certificate",
      "Post-flight debrief",
    ],
    safety: [
      "Strict health screening required",
      "Not suitable for heart conditions",
      "Acro-rated reserve systems",
      "Maximum weight 85 kg",
      "Signed waiver mandatory",
    ],
  },
  {
    id: "sunrise-flight",
    slug: "sunrise-flight",
    name: "Sunrise Flight",
    tagline: "Golden hour magic over the mountains",
    description:
      "Take off at dawn as the first light paints the Himalayas gold. The most serene and photogenic flight experience in Pokhara. Calm morning air and spectacular sunrise views make this our most popular premium experience.",
    price: 120,
    duration: "25–35 minutes",
    heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80",
    gallery,
    included: [
      "Early morning launch",
      "Premium tandem pilot",
      "Sunrise photo package",
      "Breakfast voucher",
      "Hotel pickup at 5:30 AM",
      "Flight certificate",
    ],
    safety: [
      "Calm morning conditions only",
      "Pre-dawn weather check",
      "Thermal-free flight path",
      "Warm clothing provided",
      "Limited daily slots",
    ],
    featured: true,
  },
  {
    id: "sunset-flight",
    slug: "sunset-flight",
    name: "Sunset Flight",
    tagline: "Fly into the golden Himalayan dusk",
    description:
      "Glide through the golden hour as the sun sets behind the Annapurna range. A romantic, peaceful flight perfect for couples and photographers. Watch Pokhara transform as day turns to night from 3,000 feet.",
    price: 120,
    duration: "25–35 minutes",
    heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80",
    gallery,
    included: [
      "Sunset specialist pilot",
      "Golden hour photography",
      "Champagne toast on landing",
      "Hotel pickup & drop-off",
      "Premium video package",
      "Flight certificate",
    ],
    safety: [
      "Strict landing-before-dark policy",
      "Enhanced visibility equipment",
      "Calm evening conditions required",
      "Limited seasonal availability",
      "Weather backup date offered",
    ],
    featured: true,
  },
];

export function getFlightBySlug(slug: string) {
  return flights.find((f) => f.slug === slug);
}

export const featuredExperiences = [
  { slug: "tandem-paragliding", name: "Tandem Flight", description: "Perfect first flight experience", image: hero, href: "/flights/tandem-paragliding" },
  { slug: "cross-country-flight", name: "Cross Country Flight", description: "Extended soaring adventure", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", href: "/flights/cross-country-flight" },
  { slug: "acro-flight", name: "Acro Experience", description: "Thrilling aerobatic maneuvers", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", href: "/flights/acro-flight" },
  { slug: "learn-to-fly", name: "Learn to Fly", description: "P1 to P4 pilot courses", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", href: "/contact" },
];
