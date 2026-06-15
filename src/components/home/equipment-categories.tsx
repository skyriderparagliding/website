import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-up";
import { homeEquipmentCategories } from "@/data/categories";

export function EquipmentCategories() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeUp className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Equipment
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Shop by Category
          </h2>
        </FadeUp>

        <StaggerContainer className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {homeEquipmentCategories.map((cat, i) => (
            <StaggerItem key={cat.slug} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <Link href={cat.href} className="group relative block overflow-hidden rounded-2xl">
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={i === 0 ? "50vw" : "25vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <h3 className={`font-bold text-white ${i === 0 ? "text-2xl" : "text-lg"}`}>
                      {cat.name}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-sm text-sky-300 opacity-0 transition-opacity group-hover:opacity-100">
                      Shop now <ArrowRight className="h-3 w-3" />
                    </span>
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
