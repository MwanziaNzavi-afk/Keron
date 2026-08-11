import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Star, UserCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionCard } from "@/components/section-card";
import { PropertyCard } from "@/components/property-card";
import Hero from "@/components/Hero";

const featuredProperties = [
  {
    title: "Bamburi Fisheries Apartments",
    location: "Bamburi Fisheries, Mombasa",
    price: "KES 3,000 / night",
    href: "/properties/bamburi-fisheries-apartments",
    image: "/uploads/bamburi/outside.png",
    bedrooms: "1 Bedroom",
    bathrooms: "1 Bathroom",
    badge: "Featured",
  },
  {
    title: "Malindi Coastal Escape",
    location: "Malindi, Coast",
    price: "KES 6,000 / night",
    href: "/properties/malindi",
    image: "/uploads/malindi/Swimming%20Pool.png",
    bedrooms: "1 Bedroom",
    bathrooms: "1 Bathroom",
    badge: "Coastal",
  },
  {
    title: "Kingston Nyali Residences",
    location: "Nyali, Mombasa",
    price: "KES 8,000 - 20,000 / night",
    href: "/properties/kingston-nyali",
    image: "/uploads/kingston-nyali/Outside.png",
    bedrooms: "1 - 3 Beds",
    bathrooms: "1 - 2 Baths",
    badge: "Premium",
  },
  {
    title: "Studio Mlolongo Retreat",
    location: "Behind Signature Mall, Mlolongo",
    price: "KES 2,500 / night",
    href: "/properties/mlolongo-apartment",
    image: "/uploads/mlolongo/Sitting%20Room.png",
    bedrooms: "Studio",
    bathrooms: "1 Bathroom",
    badge: "Short Stay",
  },
];

const flowImages = [
  {
    src: "/uploads/bamburi/outside.png",
    title: "Coastal calm",
    subtitle: "Bamburi comfort",
  },
  {
    src: "/uploads/kingston-nyali/Outside.png",
    title: "Modern luxury",
    subtitle: "Nyali residences",
  },
  {
    src: "/uploads/malindi/Swimming%20Pool.png",
    title: "Resort-style living",
    subtitle: "Malindi views",
  },
];

const sectionCards = [
  {
    title: "Verified Properties",
    description: "Every listing is validated with legal checks, location verification and premium staging.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Trusted Agents",
    description: "Our dedicated team provides high-touch support through every step of the purchase or rental journey.",
    icon: <UserCheck className="h-6 w-6" />,
  },
  {
    title: "Transparent Transactions",
    description: "Clear pricing, transparent contracts and tailored financing support for every client.",
    icon: <Sparkles className="h-6 w-6" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(4,29,82,0.08),_transparent_28%),linear-gradient(180deg,_#f9fbfd,_#fff)]">
      <Navbar />
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <Hero />

        <section className="relative mt-16 overflow-hidden rounded-[3rem] bg-slate-950/95 px-6 py-12 text-slate-100 shadow-soft ring-1 ring-white/10 sm:px-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22),_transparent_32%)]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-300">Interactive flow</p>
              <h2 className="text-4xl font-semibold sm:text-5xl">Watch property visuals glide naturally into view.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300/90">
                Experience a lively homepage with every image and section designed to feel effortless, polished, and joyful on phones, tablets, and desktops.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: "+238", label: "Sales closed" },
                  { value: "4.9/5", label: "Guest rating" },
                  { value: "+16", label: "Locations" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.8rem] border border-white/15 bg-white/10 p-5 text-center backdrop-blur-xl">
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-200/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 shadow-soft">
              <motion.div
                animate={{ x: [0, -30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="flex gap-4 px-4 py-6 sm:px-6"
              >
                {[...flowImages, ...flowImages].map((item, index) => (
                  <motion.div
                    key={`${item.src}-${index}`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="min-w-[220px] overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-soft"
                  >
                    <div className="relative h-52 overflow-hidden bg-slate-800/90">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.subtitle}</p>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[3rem] bg-white/95 p-8 shadow-soft ring-1 ring-slate-200/70 backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Best selling properties</p>
              <h2 className="mt-3 text-4xl font-semibold text-slate-950">High-demand coastal homes done right.</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                Browse listings that attract guests, buyers and investors fast. Each property is hand-picked for its location, revenue potential, and premium finish.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Properties sold", value: "+238" },
                { label: "Trusted rating", value: "4.9/5" },
                { label: "Guest stays", value: "+1,400" },
              ].map((item) => (
                <div key={item.label} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-center shadow-soft">
                  <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Featured listings</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Lively homes with premium returns and strong demand.</h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-[#041d52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2a71]"
            >
              Browse all listings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.href} {...property} />
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-3">
          {sectionCards.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </section>

        <section className="mt-24 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Why choose Keron</p>
            <h2 className="text-3xl font-semibold text-slate-950">A premium buying and booking journey designed to convert.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              We provide verified listings, legal support, marketing-ready staging, and local market intelligence so you can buy, book or invest with confidence.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Verified Properties",
                "Trusted Agents",
                "Transparent Transactions",
                "Legal Guidance",
              ].map((item) => (
                <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                  <p className="font-semibold text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-soft">
            <Image
              src="/images/hero-gallery.png"
              alt="Luxury real estate showcase"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
