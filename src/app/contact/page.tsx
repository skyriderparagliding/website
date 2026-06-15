import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { BookingForm } from "@/components/flights/booking-form";
import { FadeUp } from "@/components/motion/fade-up";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with SkyRiders Paragliding in Pokhara. Book flights, ask about equipment, or get flying permit assistance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Ready to fly? Have questions about equipment? We&apos;re here to help.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeUp>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50">
                    <MapPin className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="mt-1 text-slate-600">{SITE_CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50">
                    <Phone className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="mt-1 text-sky-500 hover:text-sky-600">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50">
                    <Mail className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="mt-1 text-sky-500 hover:text-sky-600">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50">
                    <Clock className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Hours</h3>
                    <p className="mt-1 text-slate-600">Daily 6:00 AM – 6:00 PM (NPT)</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="font-semibold text-slate-900">Services</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>Tandem Paragliding Flights</li>
                    <li>Paragliding Equipment Sales</li>
                    <li>Equipment Rental</li>
                    <li>Used Equipment Marketplace</li>
                    <li>Pilot Training Courses (P1–P4)</li>
                    <li>CAAN Flying Permit Assistance</li>
                  </ul>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg">
                <h2 className="text-xl font-bold text-slate-900">Book a Flight</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Or send us a booking request and we&apos;ll get back to you shortly.
                </p>
                <div className="mt-6">
                  <BookingForm />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
