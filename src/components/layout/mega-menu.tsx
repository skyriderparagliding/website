"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plane, ShoppingBag, Recycle, Tag, BookOpen } from "lucide-react";
import { shopCategories } from "@/data/categories";
import { brands } from "@/data/brands";
import { flights } from "@/data/flights";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  isOpen: boolean;
  activeMenu: string | null;
  onClose: () => void;
};

export function MegaMenu({ isOpen, activeMenu, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && activeMenu && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-slate-900/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute left-0 right-0 top-full z-50 border-t border-slate-100 bg-white shadow-2xl"
          >
            <div className="mx-auto max-w-7xl px-6 py-8">
              {activeMenu === "flights" && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                  {flights.map((flight) => (
                    <Link
                      key={flight.id}
                      href={`/flights/${flight.slug}`}
                      onClick={onClose}
                      className="group rounded-xl p-4 transition-colors hover:bg-slate-50"
                    >
                      <Plane className="mb-2 h-5 w-5 text-sky-500" />
                      <h4 className="font-semibold text-slate-900 group-hover:text-sky-600">
                        {flight.name}
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">{flight.tagline}</p>
                      <p className="mt-2 text-sm font-semibold text-sky-500">
                        From ${flight.price}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {activeMenu === "shop" && (
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                  {shopCategories.slice(0, 6).map((cat) => (
                    <div key={cat.slug}>
                      <Link
                        href={cat.href}
                        onClick={onClose}
                        className="flex items-center gap-2 font-semibold text-slate-900 hover:text-sky-600"
                      >
                        <ShoppingBag className="h-4 w-4 text-sky-500" />
                        {cat.name}
                      </Link>
                      <ul className="mt-3 space-y-2">
                        {cat.subcategories?.slice(0, 5).map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={sub.href}
                              onClick={onClose}
                              className="text-sm text-slate-500 hover:text-sky-600 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeMenu === "rental" && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {shopCategories
                    .find((c) => c.slug === "rental-equipment")
                    ?.subcategories?.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={sub.href}
                        onClick={onClose}
                        className="rounded-xl p-4 hover:bg-slate-50"
                      >
                        <h4 className="font-semibold text-slate-900">{sub.name}</h4>
                      </Link>
                    ))}
                </div>
              )}

              {activeMenu === "used" && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {shopCategories
                    .find((c) => c.slug === "used-equipment")
                    ?.subcategories?.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={sub.href}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-xl p-4 hover:bg-slate-50"
                      >
                        <Recycle className="h-5 w-5 text-sky-500" />
                        <h4 className="font-semibold text-slate-900">{sub.name}</h4>
                      </Link>
                    ))}
                </div>
              )}

              {activeMenu === "brands" && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
                  {brands.map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/brands/${brand.slug}`}
                      onClick={onClose}
                      className="group rounded-xl p-4 text-center hover:bg-slate-50"
                    >
                      <Tag className="mx-auto mb-2 h-5 w-5 text-sky-500" />
                      <h4 className="font-semibold text-slate-900 group-hover:text-sky-600">
                        {brand.name}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500">{brand.tagline}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function NavItem({
  label,
  menuKey,
  href,
  activeMenu,
  setActiveMenu,
  hasDropdown,
}: {
  label: string;
  menuKey?: string;
  href?: string;
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  hasDropdown?: boolean;
}) {
  const isActive = activeMenu === menuKey;

  if (href && !hasDropdown) {
    return (
      <Link
        href={href}
        className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors"
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onMouseEnter={() => menuKey && setActiveMenu(menuKey)}
      className={cn(
        "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "text-sky-600" : "text-slate-700 hover:text-sky-600"
      )}
    >
      {label}
      {hasDropdown && (
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", isActive && "rotate-180")}
        />
      )}
    </button>
  );
}
