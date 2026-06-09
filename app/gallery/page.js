import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Image from "next/image";
import { galleryImages } from "@/lib/data";

export const metadata = {
  title: "Gallery – Vellix Academy",
  description:
    "Explore photos from Vellix Academy events, graduation ceremonies, hackathons and campus life.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <PageBanner title="Gallery" breadcrumbs={[{ label: "Gallery" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Campus Life</span>
            <h2 className="section-title">Life at Vellix Academy</h2>
            <p className="section-subtitle">
              From graduation ceremonies to intensive hackathons — here's a glimpse into what
              life looks like at Vellix Academy.
            </p>
          </div>
          <div className="gallery-archive-grid">
            {galleryImages.map((img, i) => (
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
