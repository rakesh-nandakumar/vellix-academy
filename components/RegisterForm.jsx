"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { inputCls, labelCls } from "@/components/formStyles";
import { courses } from "@/lib/data";

/* ---------- Custom dropdown (white theme) ---------- */
function Dropdown({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false,
  leadingIcon,
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef(null);
  const listRef = useRef(null);

  const selected = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keep the highlighted option in view
  useEffect(() => {
    if (open && listRef.current && active >= 0) {
      listRef.current.children[active]?.scrollIntoView({ block: "nearest" });
    }
  }, [active, open]);

  const openMenu = () => {
    setOpen(true);
    const idx = options.findIndex((o) => o.value === value);
    setActive(idx >= 0 ? idx : 0);
  };

  const choose = (opt) => {
    onChange(opt.value);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) return openMenu();
        setActive((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) return openMenu();
        setActive((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!open) return openMenu();
        if (active >= 0) choose(options[active]);
        break;
      case "Escape":
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>

      {/* Hidden input so native "required" validation still works */}
      {required && (
        <input
          tabIndex={-1}
          aria-hidden="true"
          required
          value={value}
          onChange={() => {}}
          className="pointer-events-none absolute bottom-0 left-1/2 h-px w-px opacity-0"
        />
      )}

      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        className={`group flex w-full items-center gap-3 rounded-xl border bg-white px-4 py-3 text-left text-sm shadow-sm outline-none transition-all duration-200 ${
          open
            ? "border-sky-500 ring-4 ring-sky-100"
            : "border-slate-200 hover:border-sky-300 hover:shadow-md focus-visible:border-sky-500 focus-visible:ring-4 focus-visible:ring-sky-100"
        }`}
      >
        {leadingIcon && (
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
              open || selected
                ? "bg-sky-50 text-sky-600"
                : "bg-slate-50 text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500"
            }`}
          >
            {leadingIcon}
          </span>
        )}
        <span
          className={`flex-1 truncate ${
            selected ? "font-medium text-navy-950" : "text-slate-400"
          }`}
        >
          {selected ? selected.label : placeholder}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180 text-sky-500" : ""
          }`}
        >
          <path
            d="M5 7.5l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-0 right-0 z-30 mt-2 origin-top overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-black/5 transition-all duration-200 ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-95 opacity-0"
        }`}
      >
        <ul
          ref={listRef}
          role="listbox"
          aria-labelledby={id}
          className="max-h-64 overflow-y-auto p-1.5"
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            const isActive = i === active;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(opt)}
                className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isSelected
                    ? "bg-sky-50 font-semibold text-sky-700"
                    : isActive
                    ? "bg-slate-50 text-navy-950"
                    : "text-slate-600"
                }`}
              >
                <span className="flex-1">
                  <span className="block">{opt.label}</span>
                  {opt.hint && (
                    <span className="mt-0.5 block text-xs font-normal text-slate-400">
                      {opt.hint}
                    </span>
                  )}
                </span>
                {isSelected && (
                  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-sky-500">
                    <path
                      d="M4.5 10.5l3.5 3.5 7.5-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Static options ---------- */
const intakeOptions = [
  { value: "january-2027", label: "January 2027", hint: "New year intake" },
];

const cap = "h-4 w-4";
const BookIcon = (
  <svg viewBox="0 0 20 20" fill="none" className={cap}>
    <path
      d="M4 4.5A1.5 1.5 0 015.5 3H16v12H5.5A1.5 1.5 0 004 16.5v-12zM4 16.5A1.5 1.5 0 005.5 18H16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CalendarIcon = (
  <svg viewBox="0 0 20 20" fill="none" className={cap}>
    <rect x="3" y="4.5" width="14" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 8.5h14M7 3v3M13 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ---------- Form ---------- */
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
  const setField = (name) => (value) => setForm((f) => ({ ...f, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Application from Vellix Academy Website*

*Name:* ${form.firstName} ${form.lastName}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Programme:* ${form.programme}
*Intake:* ${form.intake}
*Message:* ${form.message || "No additional message"}`;

    const whatsappNumber = "94773208478";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const programmeOptions = courses.map((p) => ({ value: p.slug, label: p.title }));

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

        <Dropdown
          id="reg-programme"
          label="Programme of Interest *"
          value={form.programme}
          onChange={setField("programme")}
          options={programmeOptions}
          placeholder="Select a programme"
          leadingIcon={BookIcon}
          required
        />

        <Dropdown
          id="reg-intake"
          label="Preferred Intake"
          value={form.intake}
          onChange={setField("intake")}
          options={intakeOptions}
          placeholder="Select intake"
          leadingIcon={CalendarIcon}
        />
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
    </form>
  );
}