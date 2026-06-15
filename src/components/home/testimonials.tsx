import Image from "next/image";
import { Star } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-up";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeUp className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Thousands of Happy Flyers
          </h2>
        </FadeUp>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="rounded-2xl bg-slate-800/50 p-8 backdrop-blur">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.location}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
