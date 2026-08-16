import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyGallery } from "@/components/property-gallery";
import BookingWidget from "@/components/booking-widget";

export const metadata = {
  title: "Malindi — Keron Premier Properties",
  description: "Luxury coastal stay in Malindi with premium comfort and flexible booking options.",
};

const IMAGES = [
  "/uploads/malindi/Swimming%20Pool.png",
  "/uploads/malindi/Swimming%20Pool2.png",
  "/uploads/malindi/Sitting%20Room.png",
  "/uploads/malindi/Sitting%20Room1.png",
  "/uploads/malindi/Sitting%20Room2.png",
  "/uploads/malindi/Bedroom.png",
  "/uploads/malindi/Bedroom2.png",
  "/uploads/malindi/Bed.png",
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
                <div><h1 className="text-2xl font-semibold text-slate-950">Malindi Coastal Escape</h1><p className="mt-1 text-sm text-slate-500">Malindi, Coast</p></div>
                <div className="sm:text-right"><p className="text-xs text-slate-500">From</p><p className="text-lg font-semibold text-slate-950">KES 6,000 / night</p></div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Stay</p><p className="mt-1 text-sm font-semibold">Short stay</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Location</p><p className="mt-1 text-sm font-semibold">Malindi</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Rate</p><p className="mt-1 text-sm font-semibold">KES 6,000</p></div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">A comfortable coastal stay in Malindi with a relaxed setting and premium accommodation.</p>
            </section>
          </div>
          <div><BookingWidget propertySlug="malindi" price1={6000} price2={6000} price3={6000} /></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
