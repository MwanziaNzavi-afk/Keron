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
        <div className="rounded-[3rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-8 rounded-[2.5rem] border border-slate-100 bg-[#041d52] p-10 text-white shadow-soft md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-300/80">Company Profile</p>
              <h1 className="text-4xl font-semibold">KERON Premier Properties</h1>
              <p className="max-w-2xl text-lg text-slate-200">Where Dreams Find an Address — delivering premium real estate, short stay, investment and property technology solutions across Kenya and East Africa.</p>
            </div>
            <div className="flex items-center justify-center rounded-[2rem] bg-white/10 p-6">
              <img src="/images/keron-premier-logo.svg" alt="Keron Premier Properties logo" className="h-28 w-auto" />
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-start">
            <div>
              <div className="space-y-6 text-slate-700">
                <p>KERON Premier Properties Ltd is a premier real estate, property investment, and technology-driven property solutions company headquartered in Mombasa, Kenya, with operations spanning all 47 counties and strategic expansion across East Africa.</p>
              <p>Founded on the principles of integrity, innovation, professionalism, and customer-centric service, the company is redefining how individuals, businesses, investors, and institutions interact with real estate by combining traditional property services with cutting-edge digital technologies.</p>
              <p>We believe that real estate is more than buying and selling land or buildings — it is about creating sustainable wealth, building communities, transforming cities, and improving lives.</p>
              <p>As the real estate industry rapidly evolves, KERON Premier Properties is positioning itself as one of Africa’s next-generation PropTech companies by integrating Artificial Intelligence (AI), digital platforms, smart property solutions, immersive property experiences, data analytics, and digital marketing into every aspect of our operations.</p>
              <p>Today, we serve homeowners, property developers, investors, landlords, tenants, institutions, financial organizations, diaspora investors, and government agencies — delivering comprehensive property solutions under one trusted brand.</p>
            </div>

            <section className="mt-10">
              <h2 className="text-2xl font-semibold">Vision & Mission</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                  <p className="mt-3 text-slate-600">To become Africa's leading technology-driven real estate company, transforming how people discover, invest in, develop, own, and manage property through innovation, trust, and exceptional customer experiences.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="mt-3 text-slate-600">To deliver innovative, transparent, and customer-focused real estate solutions that empower individuals, businesses, and communities while leveraging technology to simplify property transactions, maximize investment value, and shape the future of real estate across Africa.</p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-semibold">Our Core Values</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Integrity", text: "We uphold honesty, transparency, and ethical business practices in every transaction." },
                  { label: "Excellence", text: "We strive for exceptional service and quality in everything we do." },
                  { label: "Professionalism", text: "We maintain the highest standards of competence, accountability, and reliability." },
                  { label: "Innovation", text: "We embrace technology and continuously develop smarter ways of delivering property solutions." },
                  { label: "Customer First", text: "Our clients remain at the center of every decision we make." },
                  { label: "Collaboration", text: "We believe lasting success comes through strong partnerships and teamwork." },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                    <h4 className="font-semibold text-slate-950">{item.label}</h4>
                    <p className="mt-3 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-semibold">Sustainability</h2>
              <p className="mt-4 text-slate-600">We support responsible development that creates long-term value for communities and future generations.</p>
            </section>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-6 shadow-soft">
            <Image src="/uploads/mlolongo/Balcony.png" alt="Luxury living" width={1200} height={700} className="h-80 w-full object-cover" />
            <div className="mt-4 rounded-3xl bg-white/90 p-4 text-sm text-slate-600 shadow-soft">Premium service, curated experiences, and a focus on long-term client relationships.</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
