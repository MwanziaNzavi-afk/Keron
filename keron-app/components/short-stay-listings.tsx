"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PropertyCard } from "@/components/property-card";

const stays = [
  { title: "Bamburi Fisheries Apartments", location: "Bamburi Fisheries, Mombasa", price: "KES 3,000 - 4,000 / night", href: "/properties/bamburi-fisheries-apartments", image: "/uploads/bamburi/outside.png", bedrooms: "1 - 2 Beds", bathrooms: "1 - 2 Baths", badge: "Featured" },
  { title: "Malindi", location: "Malindi, Coast", price: "KES 6,000 / night", href: "/properties/malindi", image: "/uploads/malindi/Swimming%20Pool.png", bedrooms: "1 Bed", bathrooms: "1 Bath", badge: "Coastal Stay" },
  { title: "Kingston Nyali", location: "Nyali, Mombasa", price: "KES 8,000 - 20,000 / night", href: "/properties/kingston-nyali", image: "/uploads/kingston-nyali/Outside.png", bedrooms: "1 - 3 Beds", bathrooms: "1 - 2 Baths", badge: "Premium" },
  { title: "Studio Mlolongo", location: "Behind Signature Mall, Mlolongo", price: "KES 2,500 net / night", href: "/properties/mlolongo-apartment", image: "/uploads/mlolongo/Sitting%20Room.png", bedrooms: "Studio", bathrooms: "1 Bath", badge: "Short Stay" },
];

export function ShortStayListings() {
  const [query, setQuery] = useState("");
  const matchingStays = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return normalizedQuery ? stays.filter((stay) => `${stay.title} ${stay.location}`.toLowerCase().includes(normalizedQuery)) : stays;
  }, [query]);

  return (
    <>
      <div id="location-search" className="mb-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
        <label htmlFor="location" className="text-sm font-semibold text-slate-950">Search short stays by location</label>
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-200 px-4 focus-within:border-[#041d52]">
          <Search className="h-5 w-5 text-slate-400" />
          <input id="location" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Mombasa, Nyali, Malindi or Mlolongo" className="w-full bg-transparent py-4 text-sm text-slate-950 outline-none placeholder:text-slate-400" />
        </div>
      </div>
      {matchingStays.length ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {matchingStays.map((stay) => <PropertyCard key={stay.href} {...stay} />)}
        </section>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">No short stays match that location yet. Try another area or contact us for help.</div>
      )}
    </>
  );
}
