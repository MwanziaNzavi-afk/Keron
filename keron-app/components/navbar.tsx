"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X, Phone, Briefcase } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Short Stay", href: "/short-stay" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "All Services", description: "Our full real estate offering", href: "/services" },
  { label: "Properties", description: "Browse sales, rentals and investments", href: "/properties" },
  { label: "Short Stay", description: "Book a furnished stay", href: "/short-stay" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-white/85 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between gap-6 px-6 py-4 xl:px-0">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/keron-premier-logo.png"
            alt="Keron Premier Properties"
            width={565}
            height={313}
            className="h-14 w-auto rounded-md object-contain sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[#041d52]"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-[#041d52]"
              onClick={() => setServicesOpen((isOpen) => !isOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen ? (
              <div className="absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft" role="menu">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="block rounded-xl px-4 py-3 transition hover:bg-slate-50"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="block text-sm font-semibold text-slate-950">{item.label}</span>
                    <span className="mt-1 block text-xs text-slate-500">{item.description}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#041d52] hover:text-[#041d52]"
          >
            <Phone className="h-4 w-4" />
            0708 669 141
          </Link>
          <Link
            href="/admin/login"
            className="inline-flex items-center gap-2 rounded-full bg-[#041d52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2a71]"
          >
            <Briefcase className="h-4 w-4" />
            Admin Login
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden border-t border-white/80 bg-white/95 lg:hidden"
        >
          <div className="flex flex-col gap-3 px-6 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="rounded-3xl bg-slate-50 p-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="rounded-3xl px-4 py-3 text-sm font-medium text-[#041d52]"
              onClick={() => setOpen(false)}
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
