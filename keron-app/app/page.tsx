import Link from "next/link";
import Image from "next/image";
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
    image: "/images/bamburi-apartment.svg",
    bedrooms: "1 Bedroom",
    bathrooms: "1 Bathroom",
    badge: "Featured",
  },
  {
    title: "Mlolongo Apartment",
    location: "Mlolongo, Nairobi",
    price: "KES 2,500 / night",
    href: "/properties/mlolongo-apartment",
    image: "/images/mlolongo.svg",
    bedrooms: "1 Bedroom",
    bathrooms: "1 Bathroom",
    badge: "Short Stay",
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
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <Hero />

        <section className="mt-20 space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Investment-ready sales</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Premium property solutions for every buyer and investor.</h2>
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 shadow-soft">
              Discover curated listings, trusted agents, and private short-stay offers.
            </div>
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
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Why Choose Us</p>
            <h2 className="text-3xl font-semibold text-slate-950">Luxury service built on trust, experience and compelling returns.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Keron Premier Properties offers an elevated customer experience with transparent transactions, verified listings, legal support and local market intelligence.
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
              src="/images/hero-gallery.svg"
              alt="Luxury real estate showcase"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-24 rounded-[3rem] bg-[#041d52] p-10 text-white shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-300/80">CEO Message</p>
              <h2 className="text-3xl font-semibold">A personal welcome from our founder.</h2>
              <p className="max-w-xl leading-8 text-slate-200/90">
                “At Keron Premier Properties, we blend local market knowledge with a premium customer experience. Every property, service and guest stay is curated to exceed expectations and build long-term trust.”
              </p>
              <p className="font-semibold text-[#d4af37]">Yvon Khasiala — Founder</p>
            </div>
            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/10 p-8">
              <div className="rounded-3xl bg-[#0b2a71]/95 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-300/80">Office</p>
                <p className="mt-3 text-xl font-semibold">Mombasa Coastal HQ</p>
              </div>
              <div className="rounded-3xl bg-[#0b2a71]/95 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-300/80">Featured Location</p>
                <p className="mt-3 text-xl font-semibold">Bamburi Fisheries</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
