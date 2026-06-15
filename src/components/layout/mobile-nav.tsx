"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { shopCategories } from "@/data/categories";
import { flights } from "@/data/flights";
import { brands } from "@/data/brands";
import { Button } from "@/components/ui/button";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed inset-0 top-[72px] z-50 overflow-y-auto bg-white lg:hidden"
        >
          <div className="px-4 py-6 space-y-6">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-sky-500">
                Flights
              </h3>
              <div className="space-y-1">
                {flights.map((f) => (
                  <Link
                    key={f.id}
                    href={`/flights/${f.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-slate-700 hover:bg-slate-50"
                  >
                    {f.name}
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-sky-500">
                Shop
              </h3>
              <div className="space-y-1">
                {shopCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={cat.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-slate-700 hover:bg-slate-50"
                  >
                    {cat.name}
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-sky-500">
                Brands
              </h3>
              <div className="grid grid-cols-2 gap-1">
                {brands.map((b) => (
                  <Link
                    key={b.id}
                    href={`/brands/${b.slug}`}
                    onClick={onClose}
                    className="rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-1 border-t border-slate-100 pt-4">
              <Link
                href="/blog"
                onClick={onClose}
                className="block rounded-lg px-3 py-2.5 text-slate-700 hover:bg-slate-50"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="block rounded-lg px-3 py-2.5 text-slate-700 hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>

            <Button asChild className="w-full">
              <Link href="/flights/tandem-paragliding" onClick={onClose}>
                Book a Flight
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
