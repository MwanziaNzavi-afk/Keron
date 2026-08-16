"use client";

import { useMemo, useState } from "react";

interface BookingWidgetProps {
  price1: number;
  price2: number;
  price3?: number;
  propertySlug: string;
}

const WHATSAPP_NUMBER = "254708669141";

export default function BookingWidget({ price1, price2, price3 = 0, propertySlug }: BookingWidgetProps) {
  const [bedrooms, setBedrooms] = useState<1 | 2 | 3>(2);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(`${checkIn}T00:00:00`);
    const end = new Date(`${checkOut}T00:00:00`);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const rate = bedrooms === 1 ? price1 : bedrooms === 2 ? price2 : price3;
  const total = rate * nights;

  function handleWhatsApp() {
    setError(null);

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please enter your full name, email and phone number.");
      return;
    }

    if (!checkIn || !checkOut || nights <= 0) {
      setError("Please select valid check-in and check-out dates.");
      return;
    }

    if (guests < 1) {
      setError("Please enter at least 1 guest.");
      return;
    }

    const propertyName = propertySlug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

    const message = [
      "*KERON PREMIER PROPERTIES — BOOKING ENQUIRY*",
      "",
      `*Property:* ${propertyName}`,
      `*Bedrooms:* ${bedrooms}`,
      `*Check-in:* ${checkIn}`,
      `*Check-out:* ${checkOut}`,
      `*Nights:* ${nights}`,
      `*Guests:* ${guests}`,
      `*Rate:* KES ${rate.toLocaleString()}`,
      `*Estimated Total:* KES ${total.toLocaleString()}`,
      "",
      "*CUSTOMER DETAILS*",
      `*Full name:* ${fullName.trim()}`,
      `*Email:* ${email.trim()}`,
      `*Phone:* ${phone.trim()}`,
      `*Notes:* ${notes.trim() || "None"}`,
      "",
      "Please confirm availability and booking details. Thank you.",
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <aside className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600">Bedrooms</label>
          <div className="mt-2 flex gap-2">
            {[1, 2, 3].map((value) => price3 > 0 || value < 3 ? (
              <button key={value} type="button" onClick={() => setBedrooms(value as 1 | 2 | 3)} className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${bedrooms === value ? "bg-[#041d52] text-white" : "bg-slate-50 text-slate-700"}`}>
                {value} Bedroom{value > 1 ? "s" : ""}
              </button>
            ) : null)}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Check-in</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-3" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Check-out</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-3" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Full name</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-3" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" autoComplete="name" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Email</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-3" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Phone</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-3" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="07XX XXX XXX" autoComplete="tel" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Guests</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 p-3" type="number" min={1} value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Notes</label>
          <textarea className="mt-2 w-full rounded-lg border border-slate-200 p-3" value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Optional message for your booking" />
        </div>

        <div className="rounded-lg bg-slate-50 p-3 text-sm">
          <div className="flex items-center justify-between"><span>Nights</span><strong>{nights}</strong></div>
          <div className="mt-2 flex items-center justify-between"><span>Rate</span><strong>KES {rate.toLocaleString()}</strong></div>
          <div className="mt-2 flex items-center justify-between text-lg"><span>Total</span><strong>KES {total.toLocaleString()}</strong></div>
        </div>

        {error ? <p className="text-sm font-medium text-red-600" role="alert">{error}</p> : null}

        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.22)] transition hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.34-1.66a11.87 11.87 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.45-8.41ZM12.09 21.75h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.22C2.19 6.44 6.63 2 12.09 2a9.82 9.82 0 0 1 6.99 2.9 9.88 9.88 0 0 1 2.9 7c0 5.46-4.44 9.85-9.89 9.85Zm5.42-7.39c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" />
          </svg>
          Message on WhatsApp
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">Your booking details will be prepared in WhatsApp for our team to review.</p>
      </div>
    </aside>
  );
}
