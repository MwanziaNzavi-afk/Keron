import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Short Stay", href: "/short-stay" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#041d52] text-white/90">
      <div className="container mx-auto grid gap-10 px-6 py-16 xl:px-0 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-3xl bg-[#d4af37] text-[#041d52] shadow-card">
              <span className="text-lg font-black">KP</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-200/80">Keron Premier Properties</p>
              <p className="text-2xl font-semibold text-white">Where Dreams Find an Address</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-200/80">
            Luxury property sales, rentals, short stay stays and investment consultancy across Kenya’s premium coastal and Nairobi corridors.
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-200/80">
            <MapPin className="h-4 w-4" />
            Mombasa • Nairobi • Diani • Vipingo
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-200/80">
            <Phone className="h-4 w-4" />
            0708 669 141
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-200/80">
            <Mail className="h-4 w-4" />
            keronpremierproperties@gmail.com
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-slate-300/90">Explore</h3>
          <div className="grid gap-3 text-sm text-slate-200/80">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-slate-300/90">Connect</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200/80">
            <p className="font-semibold text-white">Business Hours</p>
            <p>Mon - Sat: 8:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#03163e] text-center text-xs text-slate-300/80 py-4">
        © 2026 Keron Premier Properties. All rights reserved.
      </div>
    </footer>
  );
}
