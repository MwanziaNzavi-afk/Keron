import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts, getBlogPostBySlug } from "@/app/blog/blogData";
import { ArrowRight, Clock3 } from "lucide-react";

type Props = {
  params: {
    slug: string;
  };
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(4,29,82,0.08),_transparent_28%),linear-gradient(180deg,_#f9fbfd,_#fff)]">
      <Navbar />
      <main className="container mx-auto px-6 py-16 xl:px-0">
        <article className="rounded-[3rem] bg-white p-10 shadow-soft ring-1 ring-slate-200/70">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">{post.category}</p>
              <h1 className="mt-4 text-4xl font-semibold text-slate-950">{post.title}</h1>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {post.minutes} min read
                </span>
              </div>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">{post.excerpt}</p>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 bg-slate-50">
              <div className="relative h-80 w-full">
                <Image fill src={post.image} alt={post.title} className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.45fr]">
            <div className="space-y-8">
              {post.sections.map((section, index) => {
                if (section.type === "paragraph") {
                  return (
                    <p key={index} className="text-base leading-8 text-slate-700">
                      {section.text}
                    </p>
                  );
                }

                return (
                  <ul key={index} className="list-inside list-disc space-y-3 text-slate-700">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              })}
            </div>

            <aside className="rounded-[2.5rem] bg-[#041d52] p-8 text-white shadow-soft">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-300">Need help deciding?</p>
                  <h2 className="mt-3 text-2xl font-semibold">Talk to our property experts.</h2>
                </div>
                <p className="text-sm leading-7 text-slate-200/90">
                  Our team can help you identify the right coastal or city property, verify documents, and support your purchase or rental journey.
                </p>
                <div className="space-y-4 rounded-[2rem] bg-white/10 p-6">
                  <div>
                    <p className="text-sm text-slate-300">Phone</p>
                    <p className="mt-2 text-lg font-semibold text-white">0708 669 141</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Email</p>
                    <p className="mt-2 text-lg font-semibold text-white">keronpremierproperties@gmail.com</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-5 py-4 text-sm font-semibold text-[#041d52] transition hover:bg-[#c79e2d]"
                >
                  Contact us now
                </Link>
              </div>
            </aside>
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Key takeaways</h2>
            <p className="mt-4 text-slate-700">{post.conclusion}</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
