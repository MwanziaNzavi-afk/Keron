import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ShortStayListings } from "@/components/short-stay-listings";

export const metadata = {
  title: "Short Stay | Keron Premier Properties",
  description: "Search short-stay apartments and serviced properties by location.",
};

export default function ShortStayPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-10 xl:px-0">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Short Stay</h1>
          <p className="mt-2 text-slate-600">Find a hand-picked short-stay apartment in the location that suits you.</p>
        </header>
        <ShortStayListings />
      </main>
      <Footer />
    </div>
  );
}
