import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Image from "next/image";
import { instructors } from "@/lib/data";

export const metadata = {
  title: "Our Instructors – Vellix Academy",
  description:
    "Meet the expert instructors at Vellix Academy. Industry practitioners with real-world enterprise experience teaching the next generation of IT professionals.",
};

export default function InstructorsPage() {
  return (
    <>
      <Header />
      <PageBanner title="Our Instructors" breadcrumbs={[{ label: "Instructors" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Meet the Team</span>
            <h2 className="section-title">Learn From Industry Experts</h2>
            <p className="section-subtitle">
              Our instructors are practitioners first. They've built real systems, led real teams,
              and they bring that experience into every session.
            </p>
          </div>
          <div className="instructors-archive-grid">
            {instructors.map((ins) => (
              <div key={ins.slug} className="instructor-card">
                <div className="instructor-img-wrap">
                  <Image
                    src={ins.img}
                    alt={ins.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="instructor-overlay">
                    <div className="instructor-socials">
                      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
                <div className="instructor-info">
                  <h3>{ins.name}</h3>
                  <p>{ins.subject}</p>
                  <span className="instructor-role">{ins.role}</span>
                  <p style={{ fontSize: "0.78rem", color: "#666", marginTop: "6px" }}>{ins.qualifications}</p>
                </div>
              </div>
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
