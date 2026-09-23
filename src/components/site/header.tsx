"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* utility bar */}
      <div className="hidden md:block bg-navy-950 text-white/75 text-[13px]">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-aqua-400" />
              {site.address}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-aqua-400" />
              {site.hours}
            </span>
          </div>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-aqua-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-aqua-400" />
            {site.phone}
          </a>
        </div>
      </div>

      {/* main bar */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/30 fixed top-0 left-0 right-0 animate-in slide-in-from-top-2"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-[74px] flex items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-[15px] font-medium transition-colors hover:text-aqua-300",
                        active ? "text-aqua-400" : "text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-aqua-400 text-navy-950 text-[15px] font-bold px-6 h-11 hover:bg-aqua-300 transition-colors"
            >
              Get a Free Quote
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="lg:hidden bg-navy-900 border-t border-white/10 shadow-xl">
            <nav aria-label="Mobile navigation" className="px-6 py-4">
              <ul className="flex flex-col">
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block py-3.5 text-[16px] font-medium border-b border-white/5 last:border-0",
                          active ? "text-aqua-400" : "text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/contact"
                className="mt-4 mb-2 inline-flex w-full items-center justify-center rounded-full bg-aqua-400 text-navy-950 font-bold px-6 h-12"
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
