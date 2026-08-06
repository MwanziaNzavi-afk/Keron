import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Services — Keron Premier Properties",
  description: "Comprehensive real estate services including sales, rentals, management and consultancy.",
};

const services = [
  "Property Sales",
  "Property Rentals",
  "Short Stay Apartments",
  "Land Sales",
  "Property Management",
  "Commercial Properties",
  "Real Estate Consultancy",
  "Property Marketing",
  "Property Valuation",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-16 xl:px-0">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="mt-3 text-slate-600">We provide end-to-end real estate services to buyers, sellers and investors.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="font-semibold">{s}</h3>
              <p className="mt-2 text-sm text-slate-600">Professional {s.toLowerCase()} with transparent pricing and experienced consultants.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
