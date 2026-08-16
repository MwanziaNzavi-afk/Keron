"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid gap-8 py-4 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:py-8">
      <div className="space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/15 px-3.5 py-2 text-xs font-semibold text-[#041d52] sm:text-sm"
        >
          <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Premium real estate in Kenya
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="page-title max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Find a place that feels like yours.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            Discover carefully selected homes, short stays and investment opportunities with trusted local guidance from Keron Premier Properties.
          </motion.p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <Link href="/properties" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#041d52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2a71]">
              Browse properties <ArrowRight className="ml-2.5 h-4 w-4" />
            </Link>
            <Link href="/short-stay" className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#041d52]">
              Book a stay
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-[#041d52] transition hover:bg-[#c79e2d]">
              Talk to an agent
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          {[
            { value: "4.9/5", caption: "Guest rating" },
            { value: "238+", caption: "Deals closed" },
            { value: "16", caption: "Locations" },
          ].map((stat) => (
            <motion.div
              key={stat.caption}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-[0_8px_24px_rgba(4,29,82,.05)] sm:rounded-[1.5rem] sm:p-5"
            >
              <p className="text-xl font-semibold text-slate-950 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500 sm:mt-2 sm:text-xs sm:tracking-[0.2em]">{stat.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.65 }}
        className="relative overflow-hidden rounded-[2rem] bg-[#041d52] p-3.5 text-white shadow-[0_24px_60px_rgba(4,29,82,.16)] sm:rounded-[2.5rem] sm:p-5 lg:p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.22),_transparent_30%)]" />
        <div className="relative z-10 grid gap-3.5 sm:gap-5">
          <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_24px_50px_rgba(0,0,0,.16)] sm:rounded-[2rem]">
            <Image
              src="/images/hero-gallery.png"
              alt="Luxury real estate showcase"
              width={900}
              height={700}
              className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[430px]"
              priority
            />
            <div className="absolute bottom-3 left-3 rounded-2xl bg-[#041d52]/90 px-3.5 py-2.5 text-xs font-semibold text-white backdrop-blur sm:bottom-5 sm:left-5 sm:px-4 sm:py-3 sm:text-sm">
              Coastal living, thoughtfully selected.
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:rounded-[2rem] sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300 sm:text-xs sm:tracking-[0.28em]">Featured stay</p>
                <p className="mt-1.5 text-base font-semibold sm:text-xl">Bamburi Fisheries Apartments</p>
              </div>
              <span className="shrink-0 rounded-full bg-[#d4af37] px-2.5 py-1.5 text-[10px] font-semibold text-[#041d52] sm:px-3 sm:text-xs">Top rated</span>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-200/85 sm:text-sm sm:leading-7">
              A stylish coastal stay with modern finishes and easy booking for leisure and business guests.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
              {["1 Bed", "Wi-Fi", "Secure"].map((tag) => (
                <span key={tag} className="rounded-xl bg-white/10 px-2 py-2 text-center text-[10px] font-semibold text-slate-100 sm:rounded-2xl sm:px-3 sm:py-2.5 sm:text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <Link href="/properties/bamburi-fisheries-apartments" className="rounded-xl bg-[#d4af37] px-2 py-2.5 text-center text-xs font-semibold text-[#041d52] transition hover:bg-[#c79e2d] sm:rounded-2xl sm:py-3">
              View stay
            </Link>
            <Link href="https://wa.me/254708669141" className="rounded-xl border border-white/20 px-2 py-2.5 text-center text-xs font-semibold text-white transition hover:border-white/40 sm:rounded-2xl sm:py-3">
              WhatsApp
            </Link>
            <Link href="tel:+254708669141" className="rounded-xl border border-white/20 px-2 py-2.5 text-center text-xs font-semibold text-white transition hover:border-white/40 sm:rounded-2xl sm:py-3">
              Call agent
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
