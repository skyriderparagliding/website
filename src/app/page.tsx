import { HeroSection } from "@/components/home/hero";
import { WhySkyRiders } from "@/components/home/why-skyriders";
import { FeaturedExperiences } from "@/components/home/featured-experiences";
import { EquipmentCategories } from "@/components/home/equipment-categories";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Testimonials } from "@/components/home/testimonials";
import { BlogPreview } from "@/components/home/blog-preview";
import { FAQSection } from "@/components/home/faq";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <>
    <EquipmentCategories />
      <WhySkyRiders />
      <FeaturedExperiences />
      <FeaturedProducts />
      <Testimonials />
      <BlogPreview />
      <FAQSection />
      <Newsletter />
    </>
  );
}
