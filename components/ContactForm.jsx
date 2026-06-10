"use client";
import { useState } from "react";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { inputCls, labelCls } from "@/components/formStyles";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-lg shadow-navy-950/5">
        <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-sky-500 ring-1 ring-sky-100">
          <Icon name="check-circle" className="h-8 w-8" />
        </span>
        <h3 className="font-display text-2xl font-bold text-navy-950">Message Sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-navy-950/5 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelCls}>Full Name *</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelCls}>Email Address *</label>
          <input
            id="contact-email"
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
          <label htmlFor="contact-phone" className={labelCls}>Phone Number</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+94 XX XXX XXXX"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className={labelCls}>Subject *</label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Programme enquiry, general question..."
            required
            className={inputCls}
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="contact-message" className={labelCls}>Message *</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="How can we help you?"
          required
          className={inputCls}
        />
      </div>
      <Button type="submit" className="mt-6 w-full" size="lg">
        Send Message
        <Icon name="send" className="h-4 w-4" />
      </Button>
    </form>
  );
}
