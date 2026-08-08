import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyGallery } from "@/components/property-gallery";
import BookingWidget from "@/components/booking-widget";
import Image from "next/image";

export const metadata = {
  title: "Mlolongo Apartment — Keron Premier Properties",
  description: "Comfortable short stay apartment in Mlolongo with essential amenities and modern finishes.",
};

// Use the actual uploaded filenames present in public/uploads/mlolongo/
const IMAGES = [
  "/uploads/nyali-coral-sands/balcony.png",
  "/uploads/nyali-coral-sands/sitting-room.png",
  "/uploads/nyali-coral-sands/bedroom-1.jpeg",
  "/uploads/nyali-coral-sands/bedroom-2.jpeg",
  "/uploads/nyali-coral-sands/kitchenette-1.png",
  "/uploads/nyali-coral-sands/kitchenette-2.png",
  "/uploads/nyali-coral-sands/washroom.png",
];

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <PropertyGallery images={IMAGES} />

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-semibold text-slate-950">Mlolongo Apartment</h1>
                  <p className="mt-2 text-sm text-slate-600">Mlolongo — convenient access to Nairobi routes and commuter links</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Starting from</p>
                  <p className="mt-1 text-xl font-semibold text-slate-950">KES 2,500 / night</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold">Overview</h3>
                  <p className="mt-3 text-sm text-slate-600">Comfortable, secure apartment with modern finishes suitable for business travelers and short family stays. Hot water, kitchen facilities and reliable Wi-Fi included.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Amenities</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                    <li>Wi-Fi</li>
                    <li>Parking</li>
                    <li>Smart TV</li>
                    <li>Security</li>
                    <li>Kitchen</li>
                    <li>Hot Shower</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Pricing</h3>
                <div className="mt-3 flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm text-slate-600">Per Night</p>
                    <p className="mt-1 text-lg font-semibold">KES 2,500</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="mt-3 text-sm text-slate-600">Mlolongo area — well positioned for Nairobi-bound travelers and offers convenient transport links.</p>
              <div className="mt-4 h-64 w-full overflow-hidden rounded-lg">
                <iframe src="https://www.google.com/maps?q=Mlolongo&output=embed" className="h-full w-full border-0" loading="lazy" />
              </div>
            </div>
          </div>

          <div>
            <BookingWidget price1={2500} price2={2500} />

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-soft">
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-slate-600">Phone: <a className="text-[#041d52] font-semibold" href="tel:+254708669141">0708 669 141</a></p>
              <p className="mt-2 text-slate-600">Email: <a className="text-[#041d52] font-semibold" href="mailto:keronpremierproperties@gmail.com">keronpremierproperties@gmail.com</a></p>
              <a className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] px-4 py-3 text-sm font-semibold text-[#041d52]" href="https://wa.me/254708669141">
                Message on WhatsApp
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              <p>Tip: you can reuse these images across listings, blog posts and the homepage to enhance the visual experience.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
