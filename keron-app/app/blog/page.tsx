import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Blog — Keron Premier Properties",
  description: "Insights, guides and market trends for Kenya real estate.",
};

const posts = [
  { slug: "buying-property-in-mombasa", title: "Buying Property in Mombasa", excerpt: "A practical guide to buying seafront and coastal homes in Mombasa." },
  { slug: "land-investment-guide", title: "Land Investment Guide", excerpt: "How to evaluate land investments across Kenya’s coastal corridor." },
  { slug: "why-invest-in-vipingo", title: "Why Invest in Vipingo", excerpt: "Emerging opportunities and infrastructure updates making Vipingo attractive." },
  { slug: "market-trends", title: "Real Estate Market Trends", excerpt: "Recent trends and forecasts for residential and short-stay markets." },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-16 xl:px-0">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="mt-2 text-slate-600">Articles and insights to help you make informed property decisions.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="mt-4 inline-block text-sm font-semibold text-[#041d52]">Read more →</Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
