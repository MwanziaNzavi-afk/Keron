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
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-soft transition"
    >
      <Link href={href} className="relative block overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          width={900}
          height={600}
          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-6 top-6 rounded-full bg-[#041d52] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_42px_rgba(4,29,82,0.24)]">
          {badge ?? "Featured"}
        </div>
      </Link>
      <div className="p-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm text-slate-500">{location}</p>
          </div>
          <div className="inline-flex items-center rounded-full bg-[#d4af37]/15 px-3 py-2 text-sm font-semibold text-[#041d52]">
            <Star className="mr-2 h-4 w-4" />
            4.9
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
            <BedDouble className="h-4 w-4" />
            {bedrooms}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
            <ShowerHead className="h-4 w-4" />
            {bathrooms}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
            <MapPin className="h-4 w-4" />
            {location.split(",")[0]}
          </span>
        </div>
        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="text-lg font-semibold text-slate-950">{price}</p>
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0f4a9c] to-[#041d52] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(4,29,82,0.22)] transition duration-200 hover:-translate-y-0.5 hover:from-[#164185] hover:to-[#08254f] hover:shadow-[0_18px_60px_rgba(4,29,82,0.28)] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
