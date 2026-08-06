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
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card group rounded-[2rem] border border-white/25 p-8 transition hover:-translate-y-1 hover:border-[#d4af37]/40"
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#041d52] text-white shadow-soft">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </motion.article>
  );
}
