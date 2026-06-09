"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Header />
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Contact" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-col">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Contact Vellix Academy</h2>
              <p style={{ marginBottom: "32px", color: "#555" }}>
                Have a question about our programmes, fees or admissions? Fill in the form and
                we'll get back to you within 24 hours.
              </p>
              <ul className="footer-contact-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Bauddhaloka Mawatha, Kohuwala, Colombo 06</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+94112123456">+94 112 123 456</a>
                </li>
                <li>
                  <i className="fas fa-mobile-alt"></i>
                  <a href="tel:+94771234567">+94 77 123 4567</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@vellixacademy.lk">info@vellixacademy.lk</a>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Mon – Sat: 8:00 AM – 7:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="contact-form-col">
              {sent ? (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Programme enquiry, general question..."
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary btn-full">
                    Send Message <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              )}
            </div>
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
