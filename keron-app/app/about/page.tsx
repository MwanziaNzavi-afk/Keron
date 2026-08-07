import Image from "next/image";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "About | Keron Premier Properties",
  description:
    "Learn about Keron Premier Properties: a technology-driven real estate and property investment company based in Mombasa, Kenya.",
};

const values = [
  ["Integrity", "We uphold honesty, transparency, and ethical business practices in every transaction."],
  ["Excellence", "We strive for exceptional service and quality in everything we do."],
  ["Professionalism", "We maintain the highest standards of competence, accountability, and reliability."],
  ["Innovation", "We embrace technology and continuously develop smarter ways of delivering property solutions."],
  ["Customer first", "Our clients remain at the centre of every decision we make."],
  ["Collaboration", "We believe lasting success comes through strong partnerships and teamwork."],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto px-6 py-12 xl:px-0 lg:py-16">
        <section className="overflow-hidden rounded-[3rem] bg-[#041d52] text-white shadow-soft">
          <div className="grid gap-10 px-8 py-12 md:px-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Company profile</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">Where dreams find an address.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                KERON Premier Properties delivers premium real estate, property investment and technology-driven property solutions across Kenya and East Africa.
              </p>
            </div>
            <div className="flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white p-6 shadow-soft md:h-44 md:w-44">
              <Image src="/images/keron-premier-logo.png" alt="Keron Premier Properties" width={160} height={160} className="h-auto w-full" priority />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-12 lg:grid-cols-[1.45fr_0.85fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b08f24]">Who we are</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Property expertise, elevated by technology.</h2>
            <div className="mt-7 space-y-5 leading-8 text-slate-600">
              <p>KERON Premier Properties Ltd is a premier real estate, property investment and technology-driven property solutions company headquartered in Mombasa, Kenya. We operate across all 47 counties and are strategically expanding throughout East Africa.</p>
              <p>Founded on integrity, innovation, professionalism and customer-focused service, we are redefining how individuals, businesses, investors and institutions interact with real estate by combining established property expertise with digital technology.</p>
              <p>For us, real estate is more than buying and selling land or buildings. It is about creating sustainable wealth, building communities, transforming cities and improving lives.</p>
              <p>As the industry evolves, we are building a next-generation PropTech business that brings artificial intelligence, digital platforms, smart property solutions, immersive property experiences, data analytics and digital marketing into our work.</p>
              <p>We serve homeowners, developers, investors, landlords, tenants, institutions, financial organisations, diaspora investors and government agencies with comprehensive property solutions under one trusted brand.</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-[#041d52] p-8 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37]">Our vision</p>
              <p className="mt-4 text-xl font-medium leading-8">To become Africa&apos;s leading technology-driven real estate company, transforming how people discover, invest in, develop, own and manage property through innovation, trust and exceptional customer experiences.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b08f24]">Our mission</p>
              <p className="mt-4 leading-7 text-slate-600">To deliver innovative, transparent and customer-focused real estate solutions that empower individuals, businesses and communities, while leveraging technology to simplify transactions, maximise investment value and shape the future of real estate across Africa.</p>
            </div>
          </aside>
        </section>

        <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b08f24]">What guides us</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Our core values</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {values.map(([title, description], index) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-sm font-semibold text-[#b08f24]">0{index + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
          <Image src="/uploads/mlolongo/Balcony.png" alt="A balcony at one of Keron Premier Properties' homes" width={1200} height={700} className="h-full min-h-72 w-full object-cover" />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b08f24]">Sustainable value</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Building value that lasts.</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-600">We support responsible development that creates enduring value for communities and future generations, while delivering premium service and curated experiences for every client.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
