import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyGallery } from "@/components/property-gallery";
import BookingWidget from "@/components/booking-widget";
import Image from "next/image";

export const metadata = {
  title: "Bamburi Fisheries Apartments — Keron Premier Properties",
  description: "Short stay and premium apartments at Bamburi Fisheries, Mombasa. 1 or 2 bedroom options available.",
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
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <div className="grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <PropertyGallery images={IMAGES} />

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-semibold text-slate-950">Bamburi Fisheries Apartments</h1>
                  <p className="mt-2 text-sm text-slate-600">Bamburi Fisheries, Mombasa</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Starting from</p>
                  <p className="mt-1 text-xl font-semibold text-slate-950">KES 3,000 / night</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold">Overview</h3>
                  <p className="mt-3 text-sm text-slate-600">Premium coastal short stay accommodation with modern interiors, concierge service, private security and housekeeping. Units available as 1 or 2 bedroom configurations to match your needs.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Amenities</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                    <li>Parking</li>
                    <li>Restaurant</li>
                    <li>Free Wi-Fi</li>
                    <li>Smart TV</li>
                    <li>Free SGR Transfer</li>
                    <li>24/7 Security</li>
                    <li>Housekeeping</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Pricing</h3>
                <div className="mt-3 flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm text-slate-600">1 Bedroom</p>
                    <p className="mt-1 text-lg font-semibold">KES 3,000 / night</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm text-slate-600">2 Bedroom</p>
                    <p className="mt-1 text-lg font-semibold">KES 4,000 / night</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Availability</h3>
                <p className="mt-3 text-sm text-slate-600">Use the booking widget to select dates and check availability. For group or long-term enquiries contact us directly via WhatsApp or phone.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="mt-3 text-sm text-slate-600">Bamburi Fisheries, Mombasa — coastal frontage with easy access to local attractions and transport.</p>
              <div className="mt-4 h-64 w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps?q=Bamburi+Mombasa&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div>
            <BookingWidget propertySlug="bamburi-fisheries-apartments" price1={3000} price2={4000} />

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-soft">
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-slate-600">Phone: <a className="text-[#041d52] font-semibold" href="tel:+254708669141">0708 669 141</a></p>
              <p className="mt-2 text-slate-600">Email: <a className="text-[#041d52] font-semibold" href="mailto:keronpremierproperties@gmail.com">keronpremierproperties@gmail.com</a></p>
              <a className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] px-4 py-3 text-sm font-semibold text-[#041d52]" href="https://wa.me/254708669141">
                Message on WhatsApp
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              <p>Tip: place your high-resolution photos in <strong>public/uploads/bamburi/</strong> named 1.jpg, 2.jpg, 3.jpg — the page will pick them up automatically if you update the IMAGES array.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
