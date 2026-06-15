export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  manufacturer: string;
  manufacturerSlug: string;
  certification?: string;
  weight?: string;
  sizes?: string[];
  specifications: Record<string, string>;
  technicalData: { label: string; value: string }[];
  featured?: boolean;
  inStock: boolean;
  isRental?: boolean;
  isUsed?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description?: string;
  image: string;
  href: string;
  parent?: string;
  subcategories?: Category[];
};

export type Brand = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  heroImage: string;
  gallery: string[];
  productCategories: string[];
  featured?: boolean;
};

export type Flight = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  duration: string;
  heroImage: string;
  gallery: string[];
  included: string[];
  safety: string[];
  featured?: boolean;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  flightType?: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  flightType: string;
  weight: string;
  pickupLocation: string;
  notes: string;
};
