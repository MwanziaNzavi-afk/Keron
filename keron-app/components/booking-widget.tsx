"use client";

import { useMemo, useState } from "react";

interface BookingWidgetProps {
  price1: number; // price per night for 1 bedroom
  price2: number; // price per night for 2 bedroom
  price3?: number; // price per night for 3 bedroom
}

export default function BookingWidget({ price1, price2, price3 = 0 }: BookingWidgetProps) {
  const [bedrooms, setBedrooms] = useState<1 | 2 | 3>(2);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);
  const [loading, setLoading] = useState(false);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const a = new Date(checkIn);
    const b = new Date(checkOut);
    const diff = Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const total = useMemo(() => {
    const rate = bedrooms === 1 ? price1 : bedrooms === 2 ? price2 : price3;
    return rate * nights;
  }, [bedrooms, nights, price1, price2, price3]);

  async function handleBooking() {
    if (!checkIn || !checkOut || nights <= 0) {
      alert("Please select valid check-in and check-out dates.");
      return;
    }
    setLoading(true);
    try {
      // Placeholder: integrate with Supabase / API route for real booking
      await new Promise((r) => setTimeout(r, 700));
      alert(`Booking request sent. Total: KES ${total.toLocaleString()}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-slate-600">Bedrooms</label>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => setBedrooms(1)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${bedrooms === 1 ? "bg-[#041d52] text-white" : "bg-slate-50 text-slate-700"}`}
            >
              1 Bedroom
            </button>
            <button
              onClick={() => setBedrooms(2)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${bedrooms === 2 ? "bg-[#041d52] text-white" : "bg-slate-50 text-slate-700"}`}
            >
              2 Bedroom
            </button>
            {price3 > 0 ? (
              <button
                onClick={() => setBedrooms(3)}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${bedrooms === 3 ? "bg-[#041d52] text-white" : "bg-slate-50 text-slate-700"}`}
              >
                3 Bedroom
              </button>
            ) : null}
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-600">Check-in</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-2" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm text-slate-600">Check-out</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-2" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm text-slate-600">Guests</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-2" type="number" min={1} value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
        </div>

        <div className="rounded-lg bg-slate-50 p-3 text-sm">
          <div className="flex items-center justify-between">
            <span>Nights</span>
            <strong>{nights}</strong>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span>Rate</span>
            <strong>KES {(bedrooms === 1 ? price1 : bedrooms === 2 ? price2 : price3).toLocaleString()}</strong>
          </div>
          <div className="mt-2 flex items-center justify-between text-lg">
            <span>Total</span>
            <strong>KES {total.toLocaleString()}</strong>
          </div>
        </div>

        <div className="grid gap-3">
          <button onClick={handleBooking} disabled={loading} className="rounded-full bg-[#041d52] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0b2a71]">
            {loading ? "Sending..." : "Send Booking Request"}
          </button>
          <a className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-[#041d52]" href={`https://wa.me/254708669141?text=Hi,%20I%20want%20to%20book%20the%20Bamburi%20Fisheries%20apartment%20(${bedrooms}%20bed)%20from%20${checkIn}%20to%20${checkOut}.`}>
            Message on WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}
