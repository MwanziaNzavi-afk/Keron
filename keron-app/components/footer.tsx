import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Short Stay", href: "/short-stay" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#041d52] text-white sm:mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(150px,.8fr)_minmax(220px,1fr)] lg:gap-16">
          <div className="min-w-0">
            <Link href="/" aria-label="Keron Premier Properties home" className="inline-block">
              <div className="flex h-[76px] w-[190px] items-center justify-center overflow-hidden rounded-xl bg-[#03163e] p-3 shadow-lg ring-1 ring-white/10 sm:h-[86px] sm:w-[215px]">
                <Image
                  src="/images/keron-premier-logo.png"
                  alt="Keron Premier Properties"
                  width={565}
                  height={313}
                  className="h-auto w-full object-contain"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-200/80 sm:text-[15px] sm:leading-7">
              Premium property sales, rentals, short stays and investment consultancy across Kenya.
            </p>

            <div className="mt-5 grid gap-3 text-sm text-slate-200/85 sm:max-w-lg sm:grid-cols-2">
              <a href="tel:+254708669141" className="flex min-w-0 items-center gap-2.5 rounded-lg py-1 transition hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-[#d4af37]" />
                <span>0708 669 141</span>
              </a>
              <a href="mailto:keronpremierproperties@gmail.com" className="flex min-w-0 items-center gap-2.5 rounded-lg py-1 transition hover:text-white sm:col-span-2">
                <Mail className="h-4 w-4 shrink-0 text-[#d4af37]" />
                <span className="break-all">keronpremierproperties@gmail.com</span>
              </a>
              <div className="flex min-w-0 items-start gap-2.5 py-1 sm:col-span-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                <span>Mombasa • Nairobi • Diani • Vipingo</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">Explore</h3>
            <nav className="grid gap-3 text-sm text-slate-200/85" aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group inline-flex w-fit items-center gap-1.5 transition hover:text-white">
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="min-w-0">
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">Connect</h3>
            <div className="flex gap-3">
              <a href="https://instagram.com/keronpremierproperties8?igsh=MTl0dW16anltNGFnZQ==" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/15 hover:ring-[#d4af37]/50">
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <Link href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/15 hover:ring-[#d4af37]/50">
                <Linkedin className="h-4.5 w-4.5" />
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:p-5">
              <p className="text-sm font-semibold text-white">Business Hours</p>
              <p className="mt-1.5 text-sm leading-6 text-slate-300">Monday – Saturday<br className="sm:hidden" /> 8:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#03163e]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-[11px] text-slate-300/75 sm:flex-row sm:px-6 sm:text-left sm:text-xs lg:px-8">
          <p>© {new Date().getFullYear()} Keron Premier Properties. All rights reserved.</p>
          <p className="text-slate-400">Where Dreams Find an Address</p>
        </div>
      </div>
    </footer>
  );
}
