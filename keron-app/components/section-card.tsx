"use client";

import { motion } from "framer-motion";

interface SectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function SectionCard({ title, description, icon }: SectionCardProps) {
  return (
    <motion.article
      initial={{ y: 14, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card group rounded-[1.5rem] p-5 transition hover:-translate-y-1 hover:border-[#d4af37]/40 sm:rounded-[2rem] sm:p-7"
    >
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#041d52] text-white shadow-soft sm:h-14 sm:w-14 sm:rounded-3xl">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-950 sm:mt-5 sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">{description}</p>
    </motion.article>
  );
}
