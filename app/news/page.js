import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/lib/data";

export const metadata = {
  title: "News & Blog – Vellix Academy",
  description:
    "Latest news, updates and blog posts from Vellix Academy — Sri Lanka's premier enterprise IT education provider.",
};

export default function NewsPage() {
  return (
    <>
      <PageBanner title="News & Blog" breadcrumbs={[{ label: "News & Blog" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest Updates" title="News & Blog" />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
