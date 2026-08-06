"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/15 px-4 py-2 text-sm font-semibold text-[#041d52] shadow-soft">
          <Sparkles className="h-4 w-4" />
          Redefining premium estate ownership across Kenya
        </div>
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="page-title max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-6xl"
          >
            Where Dreams Find an Address
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-2xl text-lg leading-8 text-slate-600"
          >
            Helping individuals, families and investors find premium homes, apartments, land and commercial property throughout Kenya.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <Link href="/properties" className="inline-flex items-center justify-center rounded-full bg-[#041d52] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0b2a71]">
              Browse Properties
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <Link href="/short-stay" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-[#041d52]">
              Book Accommodation
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-4 text-sm font-semibold text-[#041d52] transition hover:bg-[#c79e2d]">
              Talk to an Agent
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[3rem] bg-[#041d52] p-8 text-white shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.24),_transparent_28%)]" />
        <div className="relative z-10 grid gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-200/90">Featured Stay</p>
            <h2 className="mt-4 text-3xl font-semibold">Bamburi Fisheries Apartments</h2>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-200/80">Premium coastal short stay accommodation with modern interiors, concierge service, and private security.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#0b2a71]/95 p-5">
                <p className="text-sm text-slate-300">1 Bedroom</p>
                <p className="mt-2 text-xl font-semibold">KES 3,000/night</p>
              </div>
              <div className="rounded-3xl bg-[#0b2a71]/95 p-5">
                <p className="text-sm text-slate-300">2 Bedroom</p>
                <p className="mt-2 text-xl font-semibold">KES 4,000/night</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/10 p-6 text-sm text-slate-100">
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">Available Units</span>
              <span>1 Bedroom, 2 Bedroom</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">Amenities</span>
              <span>Parking, Restaurant, Free Wi-Fi</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">Experience</span>
              <span>Quiet Environment, 24/7 Security, Housekeeping</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link href="/properties/bamburi-fisheries-apartments" className="rounded-3xl bg-[#d4af37] px-5 py-4 text-center text-sm font-semibold text-[#041d52] transition hover:bg-[#c79e2d]">
              Book Now
            </Link>
            <Link href="https://wa.me/254708669141" className="rounded-3xl border border-white/20 px-5 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40">
              WhatsApp
            </Link>
            <Link href="tel:+254708669141" className="rounded-3xl border border-white/20 px-5 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40">
              Call Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
