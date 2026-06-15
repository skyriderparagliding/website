import type { Testimonial, FAQ } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "Absolutely incredible experience! The views of the Annapurna range were breathtaking. Our pilot was professional, calm, and made us feel completely safe. The GoPro footage is something we'll treasure forever.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    flightType: "Tandem Paragliding",
  },
  {
    id: "2",
    name: "Marco Rossi",
    location: "Milan, Italy",
    rating: 5,
    text: "I bought my first wing and harness from SkyRiders. Their expertise helped me choose the perfect setup. The team even helped with my CAAN permit. True professionals who care about the sport.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "The sunrise flight was magical. Watching the Himalayas turn golden as the sun rose was a spiritual experience. SkyRiders made everything seamless from hotel pickup to landing.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    flightType: "Sunrise Flight",
  },
  {
    id: "4",
    name: "James & Emma Wilson",
    location: "Sydney, Australia",
    rating: 5,
    text: "We did the sunset flight as a couple and it was the highlight of our Nepal trip. Champagne on landing was a lovely touch. Already planning our return for the XC course!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    flightType: "Sunset Flight",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Do I need any experience to fly tandem?",
    answer:
      "No experience is necessary for tandem paragliding. Our certified pilots handle everything — you simply need to run a few steps at takeoff and enjoy the flight. We welcome complete beginners of all ages (minimum 6 years old).",
  },
  {
    id: "2",
    question: "What is the weight limit for tandem flights?",
    answer:
      "The weight limit for tandem flights is 30–100 kg (66–220 lbs). This ensures optimal wing loading and safety. Please contact us if you're outside this range and we'll discuss options.",
  },
  {
    id: "3",
    question: "What happens if the weather is bad?",
    answer:
      "Safety is our priority. If conditions are unsuitable, we'll reschedule your flight at no extra cost or provide a full refund. We monitor weather closely and will contact you the evening before if there's a concern.",
  },
  {
    id: "4",
    question: "Do you ship equipment internationally?",
    answer:
      "Yes, we ship worldwide. Shipping costs and delivery times vary by destination. Contact us for a quote. All equipment is professionally packed and fully insured during transit.",
  },
  {
    id: "5",
    question: "Can I rent equipment for my Pokhara trip?",
    answer:
      "Absolutely! We offer weekly rentals on wings, harnesses, reserves, and GPS devices. All rental equipment is inspected daily and maintained to the highest standards. A refundable deposit is required.",
  },
  {
    id: "6",
    question: "How do I get a flying permit in Nepal?",
    answer:
      "We provide full assistance with CAAN (Civil Aviation Authority of Nepal) permit applications. The process typically takes 2–3 business days. Bring your passport, pilot license, and insurance certificate.",
  },
];

export const whySkyRiders = [
  {
    icon: "Award",
    title: "Certified Pilots",
    description: "APPI & APPI Tandem certified with 1000+ flights each",
  },
  {
    icon: "Shield",
    title: "Premium Equipment",
    description: "Top brands from PHI, Supair, Skywalk and more",
  },
  {
    icon: "Heart",
    title: "Safety First",
    description: "Daily inspections, reserve on every flight, full insurance",
  },
  {
    icon: "Users",
    title: "Thousands of Happy Flyers",
    description: "4.9★ rating from over 3,000 flights since 2015",
  },
];
