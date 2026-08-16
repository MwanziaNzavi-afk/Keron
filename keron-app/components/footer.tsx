import Link from "next/link";
import Image from "next/image";
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
    <footer className="mt-16 border-t border-white/15 bg-[#041d52] text-white/90 sm:mt-24">
      <div className="container mx-auto grid gap-9 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.5fr_0.8fr_0.8fr] xl:px-0">
        <div className="space-y-4">
          <Image
            src="/images/keron-premier-logo.png"
            alt="Keron Premier Properties"
            width={565}
            height={313}
            className="h-16 w-auto rounded-md object-contain sm:h-20"
          />
          <p className="max-w-md text-sm leading-6 text-slate-200/80 sm:leading-7">
            Premium property sales, rentals, short stays and investment consultancy across Kenya.
          </p>
          <div className="grid gap-2.5 text-xs text-slate-200/80 sm:text-sm">
            <div className="flex items-center gap-2.5"><MapPin className="h-4 w-4 shrink-0" /> Mombasa • Nairobi • Diani • Vipingo</div>
            <a href="tel:+254708669141" className="flex items-center gap-2.5 hover:text-white"><Phone className="h-4 w-4 shrink-0" /> 0708 669 141</a>
            <a href="mailto:keronpremierproperties@gmail.com" className="flex items-center gap-2.5 break-all hover:text-white"><Mail className="h-4 w-4 shrink-0" /> keronpremierproperties@gmail.com</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300/90">Explore</h3>
          <div className="grid gap-2.5 text-sm text-slate-200/80">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300/90">Connect</h3>
          <div className="flex gap-2.5">
            <a href="https://instagram.com/keronpremierproperties8?igsh=MTl0dW16anltNGFnZQ==" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"><Instagram className="h-4.5 w-4.5" /></a>
            <Link href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"><Linkedin className="h-4.5 w-4.5" /></Link>
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-6 text-slate-200/80 sm:text-sm">
            <p className="font-semibold text-white">Business Hours</p>
            <p>Mon - Sat: 8:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#03163e] px-4 py-3 text-center text-[11px] text-slate-300/80 sm:text-xs">
        © 2026 Keron Premier Properties. All rights reserved.
      </div>
    </footer>
  );
}
