import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import BookingWidget from "@/components/booking-widget";
import { PropertyGallery } from "@/components/property-gallery";

export const metadata = {
  title: "Studio Mlolongo | Keron Premier Properties",
  description: "Short-stay studio behind Signature Mall in Mlolongo.",
};

const images = ["/uploads/mlolongo/Sitting%20Room.png"];

export default function MlolongoApartmentPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-8 xl:px-0">
        <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            <PropertyGallery images={images} />
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div><h1 className="text-2xl font-semibold text-slate-950">Studio Mlolongo</h1><p className="mt-1 text-sm text-slate-500">Behind Signature Mall, Mlolongo</p></div>
                <div className="sm:text-right"><p className="text-xs text-slate-500">From</p><p className="text-lg font-semibold text-slate-950">KES 2,500 / night</p></div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Type</p><p className="mt-1 text-sm font-semibold">Studio</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Bathroom</p><p className="mt-1 text-sm font-semibold">1</p></div>
                <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Wi-Fi</p><p className="mt-1 text-sm font-semibold">Included</p></div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">Comfortable short-stay studio accommodation conveniently located behind Signature Mall.</p>
            </section>
          </div>
          <div><BookingWidget propertySlug="mlolongo-apartment" price1={2500} price2={2500} /></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
