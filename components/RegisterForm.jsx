"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { inputCls, labelCls } from "@/components/formStyles";
import { programmes } from "@/lib/data";

export default function RegisterForm() {
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

  if (sent) {
    return (
      <div className="flex flex-col items-center p-4 py-10 text-center">
        <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-sky-500 ring-1 ring-sky-100">
          <Icon name="check-circle" className="h-8 w-8" />
        </span>
        <h3 className="font-display text-2xl font-bold text-navy-950">
          Application Received!
        </h3>
        <p className="mt-2 max-w-md text-sm text-slate-500">
          Thank you for applying to Vellix Academy. We&apos;ll review your
          application and get back to you within 24 hours.
        </p>
        <Button href="/" className="mt-7">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-first" className={labelCls}>First Name *</label>
          <input
            id="reg-first"
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="reg-last" className={labelCls}>Last Name *</label>
          <input
            id="reg-last"
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="reg-email" className={labelCls}>Email Address *</label>
          <input
            id="reg-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="reg-phone" className={labelCls}>Phone Number *</label>
          <input
            id="reg-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+94 XX XXX XXXX"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="reg-programme" className={labelCls}>Programme of Interest *</label>
          <select
            id="reg-programme"
            name="programme"
            value={form.programme}
            onChange={handleChange}
            required
            className={inputCls}
          >
            <option value="">Select a programme</option>
            {programmes.map((p) => (
              <option key={p.id} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="reg-intake" className={labelCls}>Preferred Intake</label>
          <select
            id="reg-intake"
            name="intake"
            value={form.intake}
            onChange={handleChange}
            className={inputCls}
          >
            <option value="">Select intake</option>
            <option value="july-2026">July 2026</option>
            <option value="september-2026">September 2026</option>
            <option value="january-2027">January 2027</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="reg-message" className={labelCls}>
          Anything else you&apos;d like to tell us?
        </label>
        <textarea
          id="reg-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Previous experience, goals, questions..."
          className={inputCls}
        />
      </div>
      <Button type="submit" className="mt-6 w-full" size="lg">
        Submit Application
        <Icon name="send" className="h-4 w-4" />
      </Button>
      <p className="mt-5 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-sky-600 transition hover:text-sky-500">
          Login here
        </Link>
      </p>
    </form>
  );
}
