import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "Locations — Keron Premier Properties",
  description: "Explore our featured locations across coastal Kenya and Nairobi.",
};

const LOCATIONS = ["Mombasa", "Nyali", "Shanzu", "Vipingo", "Kilifi", "Malindi", "Watamu", "Diani"];

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-16 xl:px-0">
        <h1 className="text-3xl font-semibold">Locations</h1>
        <p className="mt-3 text-slate-600">Discover our curated properties across Kenya's most desirable locations.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((loc) => (
            <article key={loc} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-soft">
              <h3 className="font-semibold">{loc}</h3>
              <p className="mt-2 text-sm text-slate-600">Hand-picked listings and concierge services in {loc}.</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
