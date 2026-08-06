import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact — Keron Premier Properties",
  description: "Contact Keron Premier Properties for inquiries, viewings and bookings.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-16 xl:px-0">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-slate-600">Get in touch for viewings, bookings or partnership enquiries.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="font-semibold">Our Office</h3>
            <p className="mt-2 text-slate-600">Mombasa Coastal HQ</p>
            <p className="mt-2 text-slate-600">Phone: 0708 669 141</p>
            <p className="mt-2 text-slate-600">Email: keronpremierproperties@gmail.com</p>
            <div className="mt-4 h-52 w-full overflow-hidden rounded-lg">
              <iframe src="https://www.google.com/maps?q=Bamburi+Mombasa&output=embed" className="h-full w-full border-0" loading="lazy" />
            </div>
          </div>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
