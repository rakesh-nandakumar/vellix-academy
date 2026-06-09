"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Link from "next/link";
import { faqs } from "@/lib/data";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Header />
      <PageBanner title="Frequently Asked Questions" breadcrumbs={[{ label: "FAQ" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about enrolling at Vellix Academy.
            </p>
          </div>
          <div className="faq-accordion" style={{ maxWidth: "860px", margin: "0 auto" }}>
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? " open" : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <i className={`fas fa-chevron-${openIndex === i ? "up" : "down"}`}></i>
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta" style={{ marginTop: "48px" }}>
            <p style={{ marginBottom: "16px", color: "#555" }}>
              Still have questions? We're happy to help.
            </p>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
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
