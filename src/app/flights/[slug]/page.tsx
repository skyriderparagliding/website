import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Shield, Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { getFlightBySlug, flights } from "@/data/flights";
import { BookingForm } from "@/components/flights/booking-form";
import { FadeUp } from "@/components/motion/fade-up";
import { formatPrice } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return flights.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const flight = getFlightBySlug(slug);
  if (!flight) return {};
  return createMetadata({
    title: flight.name,
    description: flight.description,
    path: `/flights/${slug}`,
    image: flight.heroImage,
  });
}

export default async function FlightDetailPage({ params }: Props) {
  const { slug } = await params;
  const flight = getFlightBySlug(slug);
  if (!flight) notFound();

  return (
    <div>
      <section className="relative h-[60vh] min-h-[450px] flex items-end">
        <Image
          src={flight.heroImage}
          alt={flight.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
              {flight.duration}
            </p>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">{flight.name}</h1>
            <p className="mt-3 max-w-xl text-lg text-white/80">{flight.tagline}</p>
            <p className="mt-4 text-3xl font-bold text-sky-300">
              {formatPrice(flight.price)}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3 space-y-12">
              <FadeUp>
                <h2 className="text-2xl font-bold text-slate-900">About This Flight</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{flight.description}</p>
              </FadeUp>

              <FadeUp>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Check className="h-6 w-6 text-sky-500" /> What&apos;s Included
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {flight.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-sky-500" /> Safety Information
                </h2>
                <ul className="mt-4 space-y-3">
                  {flight.safety.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600">
                      <Shield className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp>
                <h2 className="text-2xl font-bold text-slate-900">Gallery</h2>
                <div className="mt-4 grid gap-4 grid-cols-2">
                  {flight.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image src={img} alt="" fill className="object-cover" sizes="50vw" />
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-8 shadow-lg">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-sky-500" /> Book This Flight
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Fill in the form and we&apos;ll confirm within 2 hours.
                </p>
                <div className="mt-6">
                  <BookingForm defaultFlightType={flight.slug} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
