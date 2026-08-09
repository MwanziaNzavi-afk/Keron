import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Clock3, Sparkles, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Blog — Keron Premier Properties",
  description: "Insights, guides and market trends for Kenya real estate.",
};

const posts = [
  {
    slug: "buying-property-in-mombasa",
    title: "Buying Property in Mombasa: A Coastal Investment Guide",
    excerpt:
      "Explore the most desirable seafront areas, legal checks, financing options, and negotiation tips for buyers pursuing coastal homes in Mombasa.",
    category: "Investment",
    date: "Aug 9, 2026",
    minutes: 6,
    image: "/images/hero-gallery.png",
  },
  {
    slug: "land-investment-guide",
    title: "Land Investment: Finding High-Growth Coastal Plots",
    excerpt:
      "Learn how to evaluate beachfront and commercial land in Kenya, from title searches to infrastructure, zoning and long-term returns.",
    category: "Land",
    date: "Jul 28, 2026",
    minutes: 5,
    image: "/uploads/bamburi/outside.png",
  },
  {
    slug: "why-invest-in-vipingo",
    title: "Why Invest in Vipingo Now",
    excerpt:
      "Vipingo is emerging as one of Kenya’s most promising coastal developments—discover what makes it ideal for rental income and family living.",
    category: "Market",
    date: "Jul 15, 2026",
    minutes: 4,
    image: "/uploads/kingston-nyali/Outside.png",
  },
  {
    slug: "market-trends",
    title: "Real Estate Market Trends for 2026",
    excerpt:
      "A clear review of rental demand, property values, and short-stay growth in coastal and Nairobi neighborhoods for strategic buyers.",
    category: "Insights",
    date: "Jun 30, 2026",
    minutes: 5,
    image: "/uploads/mlolongo/Sitting%20Room.png",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(4,29,82,0.08),_transparent_28%),linear-gradient(180deg,_#f9fbfd,_#fff)]">
      <Navbar />
      <main className="container mx-auto px-6 py-16 xl:px-0">
        <section className="rounded-[3rem] bg-white p-10 shadow-soft ring-1 ring-slate-200/70">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Market Intelligence</p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-950">Real estate insights that help you buy, rent and invest with confidence.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Read our latest guides, trend reports and expert commentary on Kenya’s coastal and city property markets. Everything is built to help you move faster and make smarter decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#041d52] px-5 py-3 text-sm font-semibold text-white">Investment tips</span>
                <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900">Market outlook</span>
                <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900">Short stay strategy</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#041d52] p-8 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.24),_transparent_40%)]" />
              <div className="relative z-10 grid gap-6">
                <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-200/90">Featured Guide</p>
                  <h2 className="mt-4 text-3xl font-semibold">The best coastal buys for high rental yield.</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Legal tips",
                    "Location insights",
                    "Financing paths",
                    "Professional support",
                  ].map((item) => (
                    <span key={item} className="rounded-3xl bg-white/10 px-4 py-4 text-sm font-semibold text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-slate-950">Latest Articles</h2>
              <p className="mt-3 text-slate-600">Fresh, in-depth content created for buyers, investors and guests exploring Kenya’s top property markets.</p>
            </div>

            <div className="grid gap-6">
              {posts.map((post) => (
                <article key={post.slug} className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-[#041d52]/20">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute left-6 top-6 rounded-full bg-[#d4af37] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#041d52]">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5" />
                        {post.minutes} min read
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-slate-950">{post.title}</h3>
                    <p className="mt-4 text-slate-600">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#041d52]">
                      Read full article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Trending topics</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">What our readers are reading</h2>
            </div>
            <div className="grid gap-4">
              {[
                "How to secure premium coastal rentals",
                "Checklist for first-time property buyers",
                "Top 5 neighborhoods for short-stay guests",
                "What to know before investing in land",
              ].map((item) => (
                <div key={item} className="rounded-[2rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] bg-[#041d52] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-300">Subscribe</p>
                  <p className="mt-3 text-lg font-semibold">Monthly market updates</p>
                </div>
                <Sparkles className="h-6 w-6 text-[#d4af37]" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200/90">
                Stay ahead of market moves with curated property insights, investment signals and exclusive listing alerts.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-[#041d52] transition hover:bg-[#c79e2d]">
                Get updates
              </Link>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
