import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import CourseCarousel from "@/components/CourseCarousel";
import InstructorCarousel from "@/components/InstructorCarousel";
import TestimonialSlider from "@/components/TestimonialSlider";
import StatsCounter from "@/components/StatsCounter";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Image from "next/image";
import Link from "next/link";
import { newsArticles, programmes, galleryImages } from "@/lib/data";

export const metadata = {
  title: "Vellix Academy – Enterprise IT & Software Development Courses",
  description:
    "Sri Lanka's premier enterprise IT education provider. Master full-stack development, data science, cloud computing and cybersecurity with industry experts.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <HeroSlider />

      {/* About Section */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-img-main">
              <Image
                src="/images/cta-image.jpg"
                alt="Vellix Academy students"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          </div>
          <div className="about-content-col">
            <span className="section-label">About Vellix Academy</span>
            <h2 className="section-title">
              We Teach Enterprise-Grade IT
              <span className="highlight"> The Right Way</span>
            </h2>
            <p>
              Vellix Academy is Sri Lanka's premier enterprise IT education provider. Unlike
              traditional training centres, we teach software development, data science, cloud
              computing and cybersecurity the way it's actually practised at Fortune 500 companies —
              production-ready, end-to-end, and project-driven.
            </p>
            <p>
              Our programmes are designed with the industry, for the industry. Every module maps
              to a real-world skill employers hire for. Outstanding graduates receive direct
              introductions to our partner companies and startups.
            </p>
            <ul className="about-points">
              <li><i className="fas fa-check-circle"></i> 37+ industry-expert instructors</li>
              <li><i className="fas fa-check-circle"></i> Real enterprise project deliverables</li>
              <li><i className="fas fa-check-circle"></i> Career placement for top performers</li>
              <li><i className="fas fa-check-circle"></i> Campus &amp; online flexible options</li>
            </ul>
            <div className="about-btns">
              <Link href="/about" className="btn-primary">Discover More</Link>
              <Link href="/contact" className="btn-outline">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="programmes-section bg-light">
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Enterprise IT Programmes</h2>
            <p className="section-subtitle">
              Choose from intensive full-time bootcamps or flexible part-time tracks — all built
              around real enterprise skills.
            </p>
          </div>
          <div className="programmes-grid">
            {programmes.slice(0, 6).map((prog) => (
              <div key={prog.id} className="programme-card">
                <div className="programme-icon">
                  <i className={`fas ${prog.icon}`}></i>
                </div>
                <h3>{prog.title}</h3>
                <p>{prog.description}</p>
                <div className="programme-meta">
                  <span><i className="fas fa-clock"></i> {prog.duration}</span>
                  <span><i className="fas fa-graduation-cap"></i> {prog.type}</span>
                </div>
                <Link href={prog.link} className="programme-link">
                  View Programme <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/programmes" className="btn-primary">View All Programmes</Link>
          </div>
        </div>
      </section>

      {/* Courses Carousel */}
      <section className="courses-section">
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Featured Courses</span>
            <h2 className="section-title">Courses Built for the Industry</h2>
            <p className="section-subtitle">
              Practical, hands-on courses that align with what employers actually need. No
              outdated theory — just enterprise-ready skills.
            </p>
          </div>
          <CourseCarousel />
          <div className="section-cta">
            <Link href="/courses" className="btn-primary">Browse All Courses</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Instructors Carousel */}
      <section className="instructors-section">
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Meet Our Team</span>
            <h2 className="section-title">Learn From Industry Experts</h2>
            <p className="section-subtitle">
              Our instructors aren't just academics — they're practitioners who've built real
              systems at scale and bring that experience into the classroom.
            </p>
          </div>
          <InstructorCarousel />
          <div className="section-cta">
            <Link href="/instructors" className="btn-primary">View All Instructors</Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-section bg-light">
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Campus Life</span>
            <h2 className="section-title">Life at Vellix Academy</h2>
            <p className="section-subtitle">
              From hackathons and tech talks to graduation ceremonies — here's a glimpse of the
              Vellix Academy experience.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryImages.slice(0, 6).map((img, i) => (
              <div key={i} className="gallery-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="gallery-overlay">
                  <i className="fas fa-expand-alt"></i>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/gallery" className="btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Student Stories</span>
            <h2 className="section-title">What Our Graduates Say</h2>
            <p className="section-subtitle">
              Real stories from students who transformed their careers through Vellix Academy.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="cta-section"
        style={{ backgroundImage: "url(/images/about-bg.jpg)" }}
      >
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Ready to Start Your IT Career?</h2>
          <p>
            Join hundreds of graduates who launched their careers in software development, data
            science, cloud engineering and cybersecurity with Vellix Academy.
          </p>
          <div className="cta-btns">
            <Link href="/register" className="btn-cta-primary">Enroll Now</Link>
            <Link href="/contact" className="btn-cta-outline">Talk to Admissions</Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section bg-light">
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Latest Updates</span>
            <h2 className="section-title">News & Blog</h2>
          </div>
          <div className="news-grid">
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
          <div className="section-cta">
            <Link href="/news" className="btn-primary">View All News</Link>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="partners-section">
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Internationally Recognised</span>
            <h2 className="section-title">Our Academic Partners</h2>
          </div>
          <div className="partners-grid">
            {[
              { src: "/images/logos/edexcel.png", alt: "Pearson Edexcel" },
              { src: "/images/logos/cambridge.png", alt: "Cambridge" },
            ].map((logo) => (
              <div key={logo.alt} className="partner-logo">
                <Image src={logo.src} alt={logo.alt} width={160} height={60} style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp button */}
      <a
        href="https://wa.me/94771234567"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <ScrollTopBtn />
    </>
  );
}
