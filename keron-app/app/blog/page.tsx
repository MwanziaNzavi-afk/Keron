import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import { blogPosts } from "@/app/blog/blogData";

export const metadata = {
  title: "Blog — Keron Premier Properties",
  description: "Insights, guides and market trends for Kenya real estate.",
};

const posts = blogPosts;

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(4,29,82,0.07)]">
          <div className="grid lg:grid-cols-[1.15fr_.85fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b08a18]">Keron Journal</p>
              <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#041d52] sm:text-4xl lg:text-[2.7rem]">
                Property insights that help you make smarter moves.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Practical guides, market intelligence and investment ideas for buyers, owners and guests exploring Kenya’s property market.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Investment",
                  "Market outlook",
                  "Short stays",
                ].map((item, index) => (
                  <span key={item} className={`rounded-full px-4 py-2 text-xs font-semibold ${index === 0 ? "bg-[#041d52] text-white" : "bg-slate-100 text-slate-700"}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[240px] overflow-hidden bg-[#041d52] sm:min-h-[300px] lg:min-h-full">
              <Image
                src="/uploads/bamburi/outside.png"
                alt="Coastal property in Mombasa"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#041d52]/80 via-[#041d52]/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f0d66b]">Featured guide</p>
                <p className="mt-1 text-base font-semibold text-white sm:text-lg">Buying property in Mombasa</p>
                <p className="mt-1 text-xs text-white/75">Legal checks • Locations • Rental potential</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#b08a18]">Latest insights</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-[#041d52] sm:text-3xl">Latest Articles</h2>
              </div>
              <span className="hidden text-xs text-slate-500 sm:block">{posts.length} articles</span>
            </div>

            <div className="grid gap-5">
              {posts.map((post, index) => (
                <article key={post.slug} className="group overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_12px_35px_rgba(4,29,82,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(4,29,82,0.10)]">
                  <div className="grid sm:grid-cols-[260px_minmax(0,1fr)]">
                    <Link href={`/blog/${post.slug}`} className="relative block min-h-[210px] overflow-hidden bg-slate-100 sm:min-h-[230px]">
                      <Image src={post.image} alt={post.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute left-4 top-4 rounded-full bg-[#d4af37] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#041d52]">{post.category}</div>
                      {index === 0 ? <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-[#041d52] backdrop-blur">Featured</div> : null}
                    </Link>
                    <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" /> {post.minutes} min</span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold leading-7 tracking-[-0.015em] text-[#041d52] sm:text-[1.35rem]">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#041d52] transition hover:text-[#b08a18]">
                        Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-[1.75rem] border border-slate-200/90 bg-white p-5 shadow-[0_12px_35px_rgba(4,29,82,0.06)] sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#b08a18]">Trending topics</p>
              <h2 className="mt-2 text-xl font-semibold leading-7 text-[#041d52]">What readers are exploring</h2>
              <div className="mt-5 grid gap-2.5">
                {[
                  "How to secure premium coastal rentals",
                  "Checklist for first-time property buyers",
                  "Top 5 neighborhoods for short-stay guests",
                  "What to know before investing in land",
                ].map((item, index) => (
                  <Link key={item} href="/contact" className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#041d52]/15 hover:bg-white">
                    <span className="text-xs font-bold text-[#b08a18]">0{index + 1}</span>
                    <span className="text-sm font-semibold leading-5 text-slate-700 group-hover:text-[#041d52]">{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] bg-[#041d52] p-6 text-white shadow-[0_18px_45px_rgba(4,29,82,0.15)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#f0d66b]">Stay informed</p>
                  <h2 className="mt-2 text-xl font-semibold">Monthly market updates</h2>
                </div>
                <Sparkles className="h-5 w-5 shrink-0 text-[#d4af37]" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-200/80">Property insights, investment signals and selected listing updates from Keron.</p>
              <Link href="/contact" className="mt-5 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-5 py-2.5 text-xs font-bold text-[#041d52] transition hover:bg-[#f0cf54]">Get updates</Link>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
