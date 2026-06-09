"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <Header />

      <section className="auth-section">
        <div className="auth-card">
          <div className="auth-card-header">
            <h2>Student Login</h2>
            <p>Sign in to access your Vellix Academy student portal.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
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
              <label>Password *</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-meta">
              <label className="checkbox-label">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <button type="submit" className="btn-primary btn-full">
              Login <i className="fas fa-sign-in-alt"></i>
            </button>
            <p className="auth-footer-text">
              Don't have an account?{" "}
              <Link href="/register">Apply Now</Link>
            </p>
          </form>
        </div>
      </section>

      <Footer />
      <ScrollTopBtn />
    </>
  );
}
