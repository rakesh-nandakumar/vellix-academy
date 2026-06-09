import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import { testimonials } from "@/lib/data";

export const metadata = {
  title: "Testimonials – Vellix Academy",
  description:
    "Read what Vellix Academy graduates say about their experience and how it transformed their IT careers.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <PageBanner title="Student Testimonials" breadcrumbs={[{ label: "Testimonials" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title">What Our Graduates Say</h2>
            <p className="section-subtitle">
              Real feedback from students who built their IT careers at Vellix Academy.
            </p>
          </div>
          <div className="testimonials-archive-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
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
