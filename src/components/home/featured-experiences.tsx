import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-up";
import { featuredExperiences } from "@/data/flights";

export function FeaturedExperiences() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeUp className="flex flex-col items-start justify-between gap-4 mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
              Experiences
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Experiences
            </h2>
          </div>
          <Link
            href="/flights"
            className="flex items-center gap-1 text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors"
          >
            View all flights <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredExperiences.map((exp) => (
            <StaggerItem key={exp.slug}>
              <Link href={exp.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white">{exp.name}</h3>
                    <p className="mt-1 text-sm text-white/70">{exp.description}</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
