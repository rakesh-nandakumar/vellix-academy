import PageBanner from "@/components/PageBanner";
import { newsArticles } from "@/lib/data";
import Image from "next/image";
import Icon from "@/components/Icon";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageBanner title="News & Blog" breadcrumbs={[{ label: "News & Blog", href: "/news" }, { label: article.title }]} />

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <span className="flex items-center gap-2 text-sm font-semibold text-sky-600">
              <Icon name="calendar" className="h-4 w-4" />
              {article.date}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
          </header>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={article.img}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg prose-slate mx-auto mt-10 max-w-none">
            <p className="text-xl leading-relaxed text-slate-600">{article.excerpt}</p>
            
            <div className="mt-8 space-y-6 text-slate-600">
              {article.content ? (
                article.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    At Vellix Academy, we are committed to providing world-class IT education that prepares students for real-world challenges. Our programs are designed and delivered by industry experts who bring years of practical experience to the classroom.
                  </p>
                  <p>
                    Students benefit from hands-on learning experiences, industry-relevant projects, and a curriculum that evolves with the latest technological advancements. We believe in learning by doing, which is why our programs emphasize practical skills over theoretical knowledge alone.
                  </p>
                  <p>
                    Our state-of-the-art facilities provide the perfect environment for learning and innovation. With modern labs, high-speed internet, and the latest software and hardware, students have access to everything they need to succeed in their chosen field.
                  </p>
                  <p>
                    Join us at Vellix Academy and take the first step towards a successful career in technology. Whether you're a beginner looking to start your journey or a professional seeking to upgrade your skills, we have the right program for you.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
            >
              <Icon name="arrow-left" className="h-4 w-4" />
              Back to News & Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
