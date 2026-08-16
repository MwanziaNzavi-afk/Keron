"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, MapPin, ShowerHead, Star } from "lucide-react";

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  href: string;
  image: string;
  bedrooms: string;
  bathrooms: string;
  badge?: string;
}

export function PropertyCard({ title, location, price, href, image, bedrooms, bathrooms, badge }: PropertyCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(4,29,82,0.08)] transition"
    >
      <Link href={href} className="relative block overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          width={900}
          height={600}
          className="h-[230px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[250px]"
        />
        <div className="absolute left-4 top-4 rounded-full bg-[#041d52] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(4,29,82,0.2)]">
          {badge ?? "Featured"}
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-6 text-slate-950 sm:text-xl">{title}</h3>
            <p className="mt-1.5 text-sm leading-5 text-slate-500">{location}</p>
          </div>
          <div className="inline-flex shrink-0 items-center rounded-full bg-[#d4af37]/15 px-2.5 py-1.5 text-xs font-semibold text-[#041d52]">
            <Star className="mr-1.5 h-3.5 w-3.5" />
            4.9
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1.5">
            <BedDouble className="h-3.5 w-3.5" />
            {bedrooms}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1.5">
            <ShowerHead className="h-3.5 w-3.5" />
            {bathrooms}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {location.split(",")[0]}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="text-base font-semibold leading-5 text-slate-950">{price}</p>
          <Link
            href={href}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-[#1d5ebf] via-[#0c3f8a] to-[#041d52] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.03em] text-white shadow-[0_12px_28px_rgba(4,29,82,0.18)] transition duration-200 hover:from-[#1149a7] hover:via-[#0b3474] hover:to-[#041d52] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
