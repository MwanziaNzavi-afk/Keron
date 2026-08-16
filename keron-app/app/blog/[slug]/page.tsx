import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts, getBlogPostBySlug } from "@/app/blog/blogData";
import { ArrowRight, Clock3, ChevronDown } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const faqsBySlug: Record<string, { question: string; answer: string }[]> = {
  "buying-property-in-mombasa": [
    {
      question: "What should I check before buying property in Mombasa?",
      answer: "Start with ownership and title documentation, the seller's authority to transact, any encumbrances or restrictions, the physical condition of the property, access, utilities, service charges and the property's permitted use. Use qualified legal and property professionals for formal due diligence before committing funds.",
    },
    {
      question: "Which Mombasa areas are worth considering for property investment?",
      answer: "Nyali, Bamburi, Shanzu, Mtwapa, Tudor and Kizingo can serve different investment strategies. The right location depends on whether you are targeting family living, long-term rental, short stays, resale or a lifestyle purchase. Compare accessibility, amenities, rental demand and total acquisition cost rather than choosing on location name alone.",
    },
    {
      question: "Is a coastal property better for short-stay or long-term rental?",
      answer: "Neither model is automatically better. Short stays can produce higher gross revenue but require active management, marketing, cleaning and occupancy management. Long-term rental can provide more predictable income with less operational involvement. The best model depends on the property's location, furnishing, target market and operating costs.",
    },
    {
      question: "How can I estimate the return on a Mombasa property?",
      answer: "Estimate realistic rental income and subtract vacancy, service charges, utilities, maintenance, management, marketing and other operating costs. Then compare the resulting net income with your total invested capital. Test the calculation using conservative occupancy and rental assumptions rather than the best-case scenario.",
    },
    {
      question: "Can Keron help me find and evaluate a property?",
      answer: "Yes. Keron Premier Properties can help buyers identify suitable listings and navigate the property search. For legal, valuation or technical matters, buyers should also engage the appropriate qualified professionals for independent verification.",
    },
  ],
  "land-investment-guide": [
    {
      question: "What makes coastal land a good investment?",
      answer: "Strong opportunities generally combine clear ownership, practical road access, reliable or planned utilities, suitable development potential, nearby economic activity and a credible long-term exit strategy. The investment case should be based on verified fundamentals rather than future promises alone.",
    },
    {
      question: "What documents should I verify before buying land?",
      answer: "The exact documentation depends on the transaction and tenure, but buyers should independently verify ownership, the parcel identity, registered interests or restrictions and other relevant transaction records through qualified professionals and the appropriate authorities before completion.",
    },
    {
      question: "How important are roads and utilities when choosing land?",
      answer: "They are critical. Road access, electricity, water, drainage and telecommunications affect development cost, usability, tenant or buyer demand and future resale. Distinguish between infrastructure that already exists and infrastructure that is only proposed.",
    },
    {
      question: "Should I buy beachfront land because it is likely to appreciate faster?",
      answer: "Not automatically. Beachfront positioning can be valuable, but title, access, applicable restrictions, environmental considerations, development controls and the actual distance and relationship to the coast must be verified. A well-located inland parcel can sometimes provide a better risk-adjusted investment.",
    },
    {
      question: "What is the best exit strategy for land investment?",
      answer: "Possible strategies include holding for appreciation, developing the site, selling after infrastructure improves or entering a joint development arrangement. Define the intended exit before purchasing because it should influence the parcel size, location, financing and price you are willing to pay.",
    },
  ],
  "why-invest-in-vipingo": [
    {
      question: "Why are investors interested in Vipingo?",
      answer: "Vipingo offers a coastal lifestyle proposition that combines residential development, leisure uses, open space and access to the wider Mombasa-Kilifi corridor. Its appeal can suit lifestyle buyers, holiday-home owners and investors seeking longer-term growth, subject to the specific property's fundamentals.",
    },
    {
      question: "Is Vipingo suitable for rental investment?",
      answer: "It can be, but rental performance depends on the specific development, purchase price, target guest or tenant, occupancy, service charges, management and access to amenities. Model the investment using conservative assumptions before buying.",
    },
    {
      question: "What should I check when buying in a planned development?",
      answer: "Review ownership and transaction documents, developer credentials, completion status, management arrangements, service charges, maintenance provisions, development rules and restrictions affecting short stays, subletting or alterations. Inspect completed units and common areas where possible.",
    },
    {
      question: "Is Vipingo better for a family home or an investment property?",
      answer: "It can work for either. Families may prioritize space, security, community facilities and lifestyle, while investors will focus more heavily on occupancy, net yield, management and resale liquidity. Decide which objective has priority before selecting a property.",
    },
    {
      question: "How should I compare Vipingo with other coastal locations?",
      answer: "Compare purchase price, achievable rental rates, occupancy, service charges, amenities, transport access, property management and resale demand. The best location is the one that produces the strongest fit between your budget, investment objective and risk tolerance.",
    },
  ],
  "market-trends": [
    {
      question: "What are the major property trends in Kenya in 2026?",
      answer: "The market is increasingly segmented by location and property type. Buyers are placing more emphasis on quality, documentation, total cost of ownership, infrastructure, rental performance and professional management. Tourism-linked short stays remain important in coastal markets, while urban rental demand continues to depend heavily on transport and employment corridors.",
    },
    {
      question: "Is short-stay property still attractive in coastal Kenya?",
      answer: "It can be attractive where there is reliable visitor demand and the property is well located and professionally managed. Investors should not rely on peak-season occupancy alone. Cleaning, utilities, maintenance, platform fees, marketing, management and vacant periods all need to be included in the net-income calculation.",
    },
    {
      question: "Is land still a good investment in Kenya?",
      answer: "Land can remain compelling as a long-term asset when ownership is clear and the location has credible growth fundamentals. Investors should prioritize actual infrastructure, economic activity, planning and development momentum instead of relying on speculative claims about future growth.",
    },
    {
      question: "What should property investors focus on when calculating returns?",
      answer: "Focus on net returns rather than headline rent or advertised yield. Include vacancy, service charges, maintenance, utilities, management, financing and other operating costs, then stress-test the result using conservative assumptions.",
    },
    {
      question: "How important is professional property management?",
      answer: "It can be a major advantage, especially for owners who live away from the property or operate short-stay units. Good management can improve responsiveness, maintenance, guest experience and occupancy while reducing the owner's day-to-day workload.",
    },
  ],
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return notFound();

  const faqs = faqsBySlug[post.slug] ?? [];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(4,29,82,0.08),_transparent_28%),linear-gradient(180deg,_#f9fbfd,_#fff)]">
      <Navbar />
      <main className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 xl:px-0">
        <article className="overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-slate-200/70 sm:rounded-[2.5rem]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.5fr)] lg:items-stretch">
            <div className="p-6 sm:p-8 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b08a18]">{post.category}</p>
              <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#041d52] sm:text-4xl lg:text-5xl">{post.title}</h1>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />{post.minutes} min read</span>
              </div>
              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{post.excerpt}</p>
            </div>
            <div className="relative min-h-[260px] overflow-hidden bg-slate-100 sm:min-h-[360px] lg:min-h-full">
              <Image fill src={post.image} alt={post.title} className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041d52]/45 to-transparent" />
            </div>
          </div>

          <div className="grid gap-8 border-t border-slate-100 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:p-12">
            <div className="min-w-0 space-y-8">
              {post.sections.map((section, index) => {
                if (section.type === "paragraph") {
                  return <p key={index} className="text-base leading-8 text-slate-700 sm:text-[1.05rem]">{section.text}</p>;
                }
                return (
                  <ul key={index} className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700 sm:p-6 sm:text-base">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />{item}</li>
                    ))}
                  </ul>
                );
              })}
            </div>

            <aside className="h-fit rounded-[1.75rem] bg-[#041d52] p-6 text-white shadow-soft lg:sticky lg:top-24">
              <div className="space-y-5">
                <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f0d66b]">Need help deciding?</p><h2 className="mt-3 text-2xl font-semibold">Talk to our property experts.</h2></div>
                <p className="text-sm leading-7 text-slate-200/90">Our team can help you identify the right coastal or city property, verify documents, and support your purchase or rental journey.</p>
                <div className="space-y-4 rounded-2xl bg-white/10 p-5">
                  <div><p className="text-xs text-slate-300">Phone</p><p className="mt-1 text-lg font-semibold">0708 669 141</p></div>
                  <div><p className="text-xs text-slate-300">Email</p><p className="mt-1 break-words text-sm font-semibold">keronpremierproperties@gmail.com</p></div>
                </div>
                <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] px-5 py-3.5 text-sm font-semibold text-[#041d52] transition hover:bg-[#c79e2d]">Contact us now <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </aside>
          </div>

          <div className="border-t border-slate-100 px-6 pb-8 sm:px-8 lg:px-12 lg:pb-12">
            <div className="rounded-[1.75rem] border border-[#d4af37]/25 bg-[#f9f6ea] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b08a18]">Key takeaways</p>
              <p className="mt-3 text-base leading-7 text-[#10213d]">{post.conclusion}</p>
            </div>
          </div>

          {faqs.length > 0 && (
            <section className="border-t border-slate-100 bg-[#f8fafc] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14" aria-labelledby="faq-heading">
              <div className="mx-auto max-w-4xl">
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b08a18]">Frequently asked questions</p>
                  <h2 id="faq-heading" className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#041d52] sm:text-3xl">Questions buyers and investors often ask</h2>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">Clear answers to common questions related to this guide. For a specific property, our team can help you assess the details.</p>
                </div>

                <div className="mt-8 space-y-3">
                  {faqs.map((faq, index) => (
                    <details key={faq.question} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(4,29,82,0.04)]">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-left text-sm font-semibold leading-6 text-[#041d52] marker:hidden sm:px-6 sm:py-5 sm:text-base">
                        <span><span className="mr-3 text-xs font-bold text-[#b08a18]">0{index + 1}</span>{faq.question}</span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-[#b08a18] transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6">{faq.answer}</div>
                    </details>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#041d52] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b3474]">Have another question? Contact Keron <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
