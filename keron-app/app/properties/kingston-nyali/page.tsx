import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyGallery } from "@/components/property-gallery";
import BookingWidget from "@/components/booking-widget";

export const metadata = {
  title: "Kingston Nyali — Keron Premier Properties",
  description: "Premium short-stay apartment in Kingston Nyali with flexible bedroom options.",
};

const IMAGES = [
  "/uploads/kingston-nyali/Outside.png",
  "/uploads/kingston-nyali/Screenshot_1.png",
  "/uploads/kingston-nyali/Screenshot_2.png",
  "/uploads/kingston-nyali/Screenshot_3.png",
  "/uploads/kingston-nyali/Screenshot_4.png",
  "/uploads/kingston-nyali/Screenshot_5.png",
  "/uploads/kingston-nyali/Screenshot_6.png",
  "/uploads/kingston-nyali/Screenshot_7.png",
  "/uploads/kingston-nyali/Screenshot_8.png",
  "/uploads/kingston-nyali/Screenshot_9.png",
  "/uploads/kingston-nyali/Screenshot_10.png",
];

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-8 xl:px-0">
        <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            <PropertyGallery images={IMAGES} />
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-slate-950">Kingston Nyali</h1>
                  <p className="mt-1 text-sm text-slate-500">Premium short-stay apartment in Nyali, Mombasa</p>
                </div>
                <span className="rounded-full bg-[#d4af37]/15 px-3 py-1.5 text-xs font-semibold text-[#041d52]">Premium</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">1 Bedroom</p><p className="mt-1 text-sm font-semibold">KES 8,000</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">2 Bedrooms</p><p className="mt-1 text-sm font-semibold">KES 15,000</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">3 Bedrooms</p><p className="mt-1 text-sm font-semibold">KES 20,000</p></div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">A premium Nyali residence with flexible bedroom options, designed for comfortable short stays.</p>
            </section>
          </div>
          <div><BookingWidget propertySlug="kingston-nyali" price1={8000} price2={15000} price3={20000} /></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
