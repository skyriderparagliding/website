import Link from "next/link";
import { Share2, Globe, Video, Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { shopCategories } from "@/data/categories";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500">
                <span className="text-sm font-bold text-white">SR</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">SkyRiders</span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-sky-400">
                  Paragliding
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {SITE_CONFIG.tagline} Premium tandem flights, equipment sales, and
              flying courses in Pokhara, Nepal.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-sky-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-sky-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-sky-500 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Video className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Flights & Courses
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/flights/tandem-paragliding" className="hover:text-sky-400 transition-colors">Tandem Paragliding</Link></li>
              <li><Link href="/flights/cross-country-flight" className="hover:text-sky-400 transition-colors">Cross Country</Link></li>
              <li><Link href="/flights/sunrise-flight" className="hover:text-sky-400 transition-colors">Sunrise Flight</Link></li>
              <li><Link href="/flights/sunset-flight" className="hover:text-sky-400 transition-colors">Sunset Flight</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Flying Courses</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>
            <ul className="space-y-2.5 text-sm">
              {shopCategories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={cat.href} className="hover:text-sky-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                {SITE_CONFIG.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-sky-400" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-sky-400 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-sky-400 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
