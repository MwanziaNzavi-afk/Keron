import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyCard } from "@/components/property-card";

export const metadata = {
  title: "Short Stay — Keron Premier Properties",
  description: "Short stay luxury apartments and serviced properties for nightly bookings.",
};

const stays = [
  {
    title: "Bamburi Fisheries Apartments",
    location: "Bamburi Fisheries, Mombasa",
    price: "KES 3,000 - 4,000 / night",
    href: "/properties/bamburi-fisheries-apartments",
    image: "/images/bamburi-apartment.svg",
    bedrooms: "1 - 2 Beds",
    bathrooms: "1 - 2 Baths",
    badge: "Featured",
  },
  {
    title: "Mlolongo ",
    location: "Mlolongo",
    price: "KES 2,500 / night",
    href: "/properties/mlolongo-apartment",
    image: "/images/mlolongo.svg",
    bedrooms: "1 Bed",
    bathrooms: "1 Bath",
    badge: "Short Stay",
  },
];

export default function ShortStayPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Short Stay</h1>
          <p className="mt-2 text-slate-600">Hand-picked short-stay apartments with premium amenities and concierge support.</p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stays.map((s) => (
            <PropertyCard key={s.href} {...s} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
