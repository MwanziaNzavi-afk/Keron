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
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <div className="grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <PropertyGallery images={IMAGES} />
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
              <h1 className="text-3xl font-semibold text-slate-950">Malindi</h1>
              <p className="mt-2 text-sm text-slate-600">Luxury coastal stay in Malindi.</p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-600">Starting from</p>
                <p className="mt-1 text-lg font-semibold">KES 6,000 / night</p>
              </div>
            </div>
          </div>
          <div>
            <BookingWidget propertySlug="malindi" price1={6000} price2={6000} price3={6000} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
