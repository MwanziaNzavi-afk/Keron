import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyGallery } from "@/components/property-gallery";
import BookingWidget from "@/components/booking-widget";

export const metadata = {
  title: "Bamburi Fisheries Apartments — Keron Premier Properties",
  description: "Short stay and premium apartments at Bamburi Fisheries, Mombasa.",
};

const IMAGES = [
  "/uploads/bamburi/outside.png",
  "/uploads/bamburi/sitting-room-1.png",
  "/uploads/bamburi/sitting-room-2.png",
  "/uploads/bamburi/sitting-room-3.png",
  "/uploads/bamburi/dining-room-1.png",
  "/uploads/bamburi/bedroom-1.png",
  "/uploads/bamburi/bedroom-3.png",
  "/uploads/bamburi/bedroom-4.png",
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
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-slate-950">Bamburi Fisheries Apartments</h1>
                  <p className="mt-1 text-sm text-slate-500">Bamburi Fisheries, Mombasa</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xs text-slate-500">From</p>
                  <p className="text-lg font-semibold text-slate-950">KES 3,000 / night</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">1 Bedroom</p><p className="mt-1 text-sm font-semibold">KES 3,000</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">2 Bedrooms</p><p className="mt-1 text-sm font-semibold">KES 4,000</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Wi-Fi</p><p className="mt-1 text-sm font-semibold">Included</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Security</p><p className="mt-1 text-sm font-semibold">24/7</p></div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Modern coastal apartments suitable for short stays, with housekeeping, Wi-Fi, parking and secure access.
              </p>
            </section>
          </div>

          <div>
            <BookingWidget propertySlug="bamburi-fisheries-apartments" price1={3000} price2={4000} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
