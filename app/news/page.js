import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/lib/data";

export const metadata = {
  title: "News & Blog – Vellix Academy",
  description:
    "Latest news, updates and blog posts from Vellix Academy — Sri Lanka's premier enterprise IT education provider.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <PageBanner title="News & Blog" breadcrumbs={[{ label: "News & Blog" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Latest Updates</span>
            <h2 className="section-title">News &amp; Blog</h2>
          </div>
          <div className="news-archive-grid">
            {newsArticles.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-card-img">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="news-card-body">
                  <span className="news-date">
                    <i className="fas fa-calendar-alt"></i> {article.date}
                  </span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link href={article.link} className="news-link">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <a href="https://wa.me/94771234567" className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <ScrollTopBtn />
    </>
  );
}
