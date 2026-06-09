import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Link from "next/link";
import { programmes } from "@/lib/data";

export const metadata = {
  title: "Programmes – Vellix Academy",
  description:
    "Explore enterprise IT programmes at Vellix Academy. Full-time bootcamps and part-time tracks in software development, data science, cloud computing and cybersecurity.",
};

export default function ProgrammesPage() {
  return (
    <>
      <Header />
      <PageBanner title="Our Programmes" breadcrumbs={[{ label: "Programmes" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Enterprise IT Programmes</h2>
            <p className="section-subtitle">
              Choose from intensive full-time bootcamps or flexible part-time tracks. Every
              programme is built around production-grade enterprise skills and includes real project
              deliverables.
            </p>
          </div>
          <div className="programmes-archive-grid">
            {programmes.map((prog) => (
              <div key={prog.id} className="programme-card programme-card-large">
                <div className="programme-icon">
                  <i className={`fas ${prog.icon}`}></i>
                </div>
                <div className="programme-card-body">
                  <h3>{prog.title}</h3>
                  <p>{prog.description}</p>
                  <ul className="programme-highlights">
                    {prog.highlights.map((h, i) => (
                      <li key={i}><i className="fas fa-check-circle"></i> {h}</li>
                    ))}
                  </ul>
                  <div className="programme-meta">
                    <span><i className="fas fa-clock"></i> {prog.duration}</span>
                    <span><i className="fas fa-graduation-cap"></i> {prog.type}</span>
                  </div>
                  <Link href={prog.link} className="programme-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ backgroundImage: "url(/images/about-bg.jpg)" }}>
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Not Sure Which Programme to Choose?</h2>
          <p>Talk to our admissions team and we'll help you find the right fit for your goals and background.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn-cta-primary">Talk to Admissions</Link>
            <Link href="/register" className="btn-cta-outline">Apply Now</Link>
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
