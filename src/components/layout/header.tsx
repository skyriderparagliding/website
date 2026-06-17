"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Phone } from "lucide-react";
import { MegaMenu, NavItem } from "./mega-menu";
import { MobileNav } from "./mobile-nav";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500">
            <span className="text-sm font-bold text-white">SR</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-slate-900">SkyRiders</span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-sky-500">
              Paragliding
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center">
          <NavItem
            label="Shop"
            menuKey="shop"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            hasDropdown
          />
          <NavItem
            label="Brands"
            menuKey="brands"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            hasDropdown
          />
          <NavItem
            label="Used Equipment"
            menuKey="used"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            hasDropdown
          />
          <NavItem
            label="Rental"
            menuKey="rental"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            hasDropdown
          />
          <NavItem
            label="Flights"
            menuKey="flights"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            hasDropdown
          />
          <NavItem
            label="Blog"
            href="/blog"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          <NavItem
            label="Contact"
            href="/contact"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="hidden md:flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/flights/tandem-paragliding">Book a Flight</Link>
          </Button>
          <button
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <MegaMenu
        isOpen={!!activeMenu}
        activeMenu={activeMenu}
        onClose={() => setActiveMenu(null)}
      />
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
