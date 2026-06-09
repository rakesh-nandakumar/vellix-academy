"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Link from "next/link";
import { programmes } from "@/lib/data";

export default function RegisterPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programme: "",
    intake: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Header />

      <section className="auth-section">
        <div className="auth-card auth-card-wide">
          <div className="auth-card-header">
            <h2>Apply to Vellix Academy</h2>
            <p>Fill in the form below and our admissions team will contact you within 24 hours.</p>
          </div>
          {sent ? (
            <div className="form-success">
              <i className="fas fa-check-circle"></i>
              <h3>Application Received!</h3>
              <p>
                Thank you for applying to Vellix Academy. We'll review your application and get back
                to you within 24 hours.
              </p>
              <Link href="/" className="btn-primary" style={{ marginTop: "20px", display: "inline-block" }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
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
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+94 XX XXX XXXX"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Programme of Interest *</label>
                  <select name="programme" value={form.programme} onChange={handleChange} required>
                    <option value="">Select a programme</option>
                    {programmes.map((p) => (
                      <option key={p.id} value={p.slug}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferred Intake</label>
                  <select name="intake" value={form.intake} onChange={handleChange}>
                    <option value="">Select intake</option>
                    <option value="july-2026">July 2026</option>
                    <option value="september-2026">September 2026</option>
                    <option value="january-2027">January 2027</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Anything else you'd like to tell us?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Previous experience, goals, questions..."
                />
              </div>
              <button type="submit" className="btn-primary btn-full">
                Submit Application <i className="fas fa-paper-plane"></i>
              </button>
              <p className="auth-footer-text">
                Already have an account? <Link href="/login">Login here</Link>
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <ScrollTopBtn />
    </>
  );
}
