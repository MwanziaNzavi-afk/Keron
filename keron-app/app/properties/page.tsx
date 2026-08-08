import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PropertyCard } from "@/components/property-card";

export const metadata = {
  title: "Properties — Keron Premier Properties",
  description: "Browse our featured properties for sale, rent and short stay.",
};

const properties = [
  {
    title: "Bamburi Fisheries Apartments",
    location: "Bamburi Fisheries, Mombasa",
    price: "KES 3,000 - 4,000 / night",
    href: "/properties/bamburi-fisheries-apartments",
    image: "/uploads/bamburi/outside.png",
    bedrooms: "1 - 2 Beds",
    bathrooms: "1 - 2 Baths",
    badge: "Featured",
  },
  {
    title: "Malindi",
    location: "Malindi, Coast",
    price: "KES 6,000 / night",
    href: "/properties/malindi",
    image: "/uploads/malindi/Swimming%20Pool.png",
    bedrooms: "1 Bed",
    bathrooms: "1 Bath",
    badge: "Coastal Stay",
  },
  {
    title: "Kingston Nyali",
    location: "Nyali, Mombasa",
    price: "KES 8,000 - 20,000 / night",
    href: "/properties/kingston-nyali",
    image: "/uploads/kingston-nyali/Outside.png",
    bedrooms: "1 - 3 Beds",
    bathrooms: "1 - 2 Baths",
    badge: "Premium",
  },
  {
    title: "Studio Mlolongo",
    location: "Behind Signature Mall, Mlolongo",
    price: "KES 2,500 net / night",
    href: "/properties/mlolongo-apartment",
    image: "/uploads/mlolongo/Sitting%20Room.png",
    bedrooms: "Studio",
    bathrooms: "1 Bath",
    badge: "Short Stay",
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Properties</h1>
          <p className="mt-2 text-slate-600">Explore our curated listings — filter by location, type, price and features.</p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.href} {...p} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
