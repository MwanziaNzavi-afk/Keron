"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/15 px-4 py-2 text-sm font-semibold text-[#041d52] shadow-soft"
        >
          <Sparkles className="h-4 w-4" />
          Kenya’s top luxury property marketplace
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="page-title max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-6xl"
          >
            Turn premium listings into fast, confident property decisions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-2xl text-lg leading-8 text-slate-600"
          >
            Explore coastal homes, investment land and short-stay residences with curated support, verified contracts and expert local guidance.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <Link href="/properties" className="inline-flex items-center justify-center rounded-full bg-[#041d52] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0b2a71]">
              Browse Listings
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <Link href="/short-stay" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-[#041d52]">
              Book a stay
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-4 text-sm font-semibold text-[#041d52] transition hover:bg-[#c79e2d]">
              Talk to an agent
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { value: "+4.9", caption: "Guest rating" },
            { value: "238+", caption: "Deals closed" },
            { value: "16", caption: "Premium locations" },
          ].map((stat) => (
            <motion.div
              key={stat.caption}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-soft"
            >
              <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-500">{stat.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative overflow-hidden rounded-[3rem] bg-[#041d52] p-8 text-white shadow-soft"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.24),_transparent_28%)]" />
        <div className="relative z-10 grid gap-6">
          <Image
            src="/images/hero-gallery.png"
            alt="Luxury real estate showcase"
            width={900}
            height={700}
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-[0_50px_90px_rgba(0,0,0,0.18)]"
          />

          <div className="grid gap-4 rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl text-slate-100">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-200/90">Featured stay</p>
                <p className="mt-2 text-xl font-semibold">Bamburi Fisheries Apartments</p>
              </div>
              <div className="rounded-3xl bg-[#d4af37] px-4 py-3 text-sm font-semibold text-[#041d52]">Top rated</div>
            </div>
            <p className="text-sm leading-7 text-slate-200/85">
              A stylish coastal retreat with private pool access, luxury finishes and concierge support for leisure guests and corporate travelers.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "1 Bed",
                "Sea view",
                "Fast booking",
              ].map((tag) => (
                <span key={tag} className="rounded-3xl bg-white/10 px-4 py-3 text-center text-sm font-semibold text-slate-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Link href="/properties/bamburi-fisheries-apartments" className="rounded-3xl bg-[#d4af37] px-5 py-4 text-center text-sm font-semibold text-[#041d52] transition hover:bg-[#c79e2d]">
              Book now
            </Link>
            <Link href="https://wa.me/254708669141" className="rounded-3xl border border-white/20 px-5 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40">
              WhatsApp
            </Link>
            <Link href="tel:+254708669141" className="rounded-3xl border border-white/20 px-5 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40">
              Call agent
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
