import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Link from "next/link";
import { careers } from "@/lib/data";

export const metadata = {
  title: "Careers – Vellix Academy",
  description:
    "Join the Vellix Academy team. View open positions in instruction, operations and marketing.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <PageBanner title="Careers" breadcrumbs={[{ label: "Careers" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Join Our Team</span>
            <h2 className="section-title">Open Positions at Vellix Academy</h2>
            <p className="section-subtitle">
              We're looking for passionate people who care about education, technology and making
              an impact. Browse our open roles below.
            </p>
          </div>
          <div className="careers-list">
            {careers.map((job) => (
              <div key={job.id} className="career-item">
                <div className="career-info">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <div className="career-meta">
                    <span className="career-badge career-type">{job.type}</span>
                    <span className="career-badge career-location">
                      <i className="fas fa-map-marker-alt"></i> {job.location}
                    </span>
                  </div>
                </div>
                <div className="career-action">
                  <Link href="/contact" className="btn-primary">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta" style={{ marginTop: "48px" }}>
            <p style={{ marginBottom: "16px", color: "#555" }}>
              Don't see a role that fits? Send us your CV anyway.
            </p>
            <Link href="/contact" className="btn-outline">Get In Touch</Link>
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
