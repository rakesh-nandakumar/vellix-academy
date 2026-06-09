import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import StatsCounter from "@/components/StatsCounter";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us – Vellix Academy",
  description:
    "Learn about Vellix Academy, Sri Lanka's premier enterprise IT education provider. Our mission, history, and what makes us different.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageBanner title="About Us" breadcrumbs={[{ label: "About Us" }]} />

      {/* Mission & Story */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-img-main">
              <Image
                src="/images/cta-image.jpg"
                alt="Vellix Academy campus"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          </div>
          <div className="about-content-col">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              Building the Next Generation of
              <span className="highlight"> Enterprise IT Talent</span>
            </h2>
            <p>
              Vellix Academy was founded with a singular mission: to bridge the gap between
              academic education and what enterprise software companies actually need. We saw that
              graduates were coming out of traditional institutions without the skills to ship real
              software from day one.
            </p>
            <p>
              We built Vellix Academy to change that. Every programme, every module, every project
              is designed around what a senior engineer at a top tech company would need you to
              know. We don't teach theory for theory's sake — we teach you how to build things
              that work in production.
            </p>
            <ul className="about-points">
              <li><i className="fas fa-check-circle"></i> Founded by industry practitioners</li>
              <li><i className="fas fa-check-circle"></i> Curriculum updated every semester</li>
              <li><i className="fas fa-check-circle"></i> Real enterprise project deliverables</li>
              <li><i className="fas fa-check-circle"></i> Intensive career support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-light" style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title">Mission &amp; Vision</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div className="programme-card">
              <div className="programme-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>
                To produce enterprise-ready IT professionals who can contribute meaningfully to
                world-class software teams from day one — by combining rigorous technical education
                with real-world project experience.
              </p>
            </div>
            <div className="programme-card">
              <div className="programme-icon"><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>
                To become South Asia's most respected enterprise IT academy, known for the quality
                of its graduates and its contribution to the region's technology sector.
              </p>
            </div>
            <div className="programme-card">
              <div className="programme-icon"><i className="fas fa-heart"></i></div>
              <h3>Our Values</h3>
              <p>
                Excellence, integrity, and continuous learning. We hold ourselves and our students
                to the highest standards because mediocre IT professionals cost companies millions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Why Choose Us */}
      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Why Vellix</span>
            <h2 className="section-title">What Makes Us Different</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { icon: "fa-industry", title: "Enterprise-First Curriculum", desc: "Built by practitioners, aligned with how top companies actually build software." },
              { icon: "fa-project-diagram", title: "Real Project Deliverables", desc: "Every programme ends with a production-quality portfolio project you own." },
              { icon: "fa-users", title: "Small Cohorts", desc: "Max 25 students per batch means genuine attention and faster learning." },
              { icon: "fa-briefcase", title: "Career Placement", desc: "Top performers get direct introductions to our network of tech companies." },
              { icon: "fa-globe", title: "Flexible Learning", desc: "All programmes available on-campus and fully online with recorded sessions." },
              { icon: "fa-sync-alt", title: "Always Current", desc: "Curriculum is reviewed each semester — we cut outdated content, add what employers need." },
            ].map((item) => (
              <div key={item.title} className="programme-card">
                <div className="programme-icon"><i className={`fas ${item.icon}`}></i></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ backgroundImage: "url(/images/about-bg.jpg)" }}>
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Join the Next Cohort</h2>
          <p>Applications are open. Take the first step toward your enterprise IT career today.</p>
          <div className="cta-btns">
            <Link href="/register" className="btn-cta-primary">Apply Now</Link>
            <Link href="/contact" className="btn-cta-outline">Contact Admissions</Link>
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
