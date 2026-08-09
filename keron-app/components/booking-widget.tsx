"use client";

import { useMemo, useState } from "react";

interface BookingWidgetProps {
  price1: number; // price per night for 1 bedroom
  price2: number; // price per night for 2 bedroom
  price3?: number; // price per night for 3 bedroom
  propertySlug: string;
}

export default function BookingWidget({ price1, price2, price3 = 0, propertySlug }: BookingWidgetProps) {
  const [bedrooms, setBedrooms] = useState<1 | 2 | 3>(2);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
    setFeedback(null);
    setError(null);

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please enter your name, email, and phone number.");
      return;
    }

    if (!checkIn || !checkOut || nights <= 0) {
      setError("Please select valid check-in and check-out dates.");
      return;
    }

    if (guests <= 0) {
      setError("Please enter a valid number of guests.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000"}/api/bookings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          property: propertySlug,
          full_name: fullName,
          email,
          phone,
          bedrooms,
          guests,
          check_in: checkIn,
          check_out: checkOut,
          total_price: total,
          notes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || "Unable to send booking request. Please try again.");
        return;
      }

      setFeedback("Booking request sent! We will contact you soon.");
      setFullName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setCheckIn("");
      setCheckOut("");
      setGuests(2);
      setBedrooms(2);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Booking request failed. Please try again.");
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
          <label className="block text-sm text-slate-600">Full name</label>
          <input
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-slate-600">Email</label>
          <input
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-slate-600">Phone</label>
          <input
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-slate-600">Guests</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-2" type="number" min={1} value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
        </div>

        <div>
          <label className="block text-sm text-slate-600">Notes</label>
          <textarea
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Optional message for your booking"
          />
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

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {feedback ? <p className="text-sm text-emerald-700">{feedback}</p> : null}

        <div className="grid gap-3">
          <button
            onClick={handleBooking}
            disabled={loading}
            className="rounded-full bg-[#041d52] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0b2a71] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Booking Request"}
          </button>
          <a
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-[#041d52]"
            href={`https://wa.me/254708669141?text=Hi,%20I%20want%20to%20book%20this%20property%20(${propertySlug})%20from%20${checkIn}%20to%20${checkOut}.`}
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}
