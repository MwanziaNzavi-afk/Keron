"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: Save to Supabase or send email via API route
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <label className="block text-sm text-slate-600">Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 p-2" />

      <label className="mt-4 block text-sm text-slate-600">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 p-2" />

      <label className="mt-4 block text-sm text-slate-600">Message</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 p-2" rows={5} />

      <div className="mt-4 grid gap-2">
        <button className="rounded-full bg-[#041d52] px-4 py-3 text-sm font-semibold text-white">Send Message</button>
        {sent && <div className="text-sm text-green-600">Thank you — we will get back to you shortly.</div>}
      </div>
    </form>
  );
}
