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
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <div className="grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <PropertyGallery images={IMAGES} />
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
              <h1 className="text-3xl font-semibold text-slate-950">Kingston Nyali</h1>
              <p className="mt-2 text-sm text-slate-600">Premium short-stay apartment in Kingston Nyali.</p>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-600">1 Bedroom</p>
                  <p className="mt-1 text-lg font-semibold">KES 8,000 / night</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-600">2 Bedrooms</p>
                  <p className="mt-1 text-lg font-semibold">KES 15,000 / night</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-600">3 Bedrooms</p>
                  <p className="mt-1 text-lg font-semibold">KES 20,000 / night</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <BookingWidget price1={8000} price2={15000} price3={20000} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
