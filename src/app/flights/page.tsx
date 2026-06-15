import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { formatPrice } from "@/lib/utils";
import { flights } from "@/data/flights";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Book a Flight",
  description:
    "Book tandem paragliding, cross country, acro, sunrise and sunset flights in Pokhara, Nepal.",
  path: "/flights",
});

export default function FlightsPage() {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Paragliding over Pokhara"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6">
          <FadeUp>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Book a Flight</h1>
            <p className="mt-3 max-w-xl text-lg text-white/80">
              Choose your adventure above the Annapurna range. All flights include certified pilots,
              safety equipment, and unforgettable views.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {flights.map((flight) => (
              <FadeUp key={flight.id}>
                <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={flight.heroImage}
                      alt={flight.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900">{flight.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">{flight.tagline}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-sky-500">{formatPrice(flight.price)}</span>
                        <span className="ml-2 text-sm text-slate-400">{flight.duration}</span>
                      </div>
                      <Button asChild size="sm">
                        <Link href={`/flights/${flight.slug}`}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
