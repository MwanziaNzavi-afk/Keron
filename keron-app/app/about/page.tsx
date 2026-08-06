import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "About — Keron Premier Properties",
  description: "About Keron Premier Properties — our mission, values and team.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-16 xl:px-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold text-slate-950">About Keron Premier Properties</h1>
            <p className="mt-4 text-lg text-slate-600">Where Dreams Find an Address — we deliver luxury real estate sales, rentals and curated short-stay experiences across Kenya.</p>

            <section className="mt-8 space-y-6">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-slate-600">To connect discerning buyers, renters and investors with premium properties through transparent transactions, verified listings and exceptional service.</p>

              <h2 className="text-2xl font-semibold">Our Values</h2>
              <ul className="mt-3 list-inside list-disc text-slate-600">
                <li>Integrity — we vet every listing carefully.</li>
                <li>Service — white-glove attention from viewing to handover.</li>
                <li>Expertise — local market intelligence and legal guidance.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold">Founder</h2>
              <p className="mt-3 text-slate-600">Yvon Khasiala leads Keron Premier Properties with decades of local market experience and a passion for premium hospitality.</p>
            </section>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white p-6 shadow-soft">
            <Image src="/uploads/mlolongo/Balcony.png" alt="Luxury living" width={1200} height={700} className="h-80 w-full object-cover" />
            <div className="mt-4 text-sm text-slate-600">Premium service, curated experiences, and a focus on long-term client relationships.</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
