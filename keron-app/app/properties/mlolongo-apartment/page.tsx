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
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <div className="grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <PropertyGallery images={images} />
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-semibold text-slate-950">Studio Mlolongo</h1>
                  <p className="mt-2 text-sm text-slate-600">Behind Signature Mall, Mlolongo</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Net price</p>
                  <p className="mt-1 text-xl font-semibold text-slate-950">KES 2,500 / night</p>
                </div>
              </div>
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <h2 className="text-lg font-semibold">Overview</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">A comfortable short-stay studio in Mlolongo, conveniently positioned behind Signature Mall.</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Stay details</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Studio accommodation with one bathroom. Select your dates to send a booking request.</p>
                </div>
              </div>
            </section>
          </div>
          <BookingWidget price1={2500} price2={2500} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
