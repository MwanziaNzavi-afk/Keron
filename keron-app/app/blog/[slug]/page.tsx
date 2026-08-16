import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts, getBlogPostBySlug } from "@/app/blog/blogData";
import { ArrowRight, Clock3 } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return notFound();

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
        </article>
      </main>
      <Footer />
    </div>
  );
}
