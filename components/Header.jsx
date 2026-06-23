"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Instructors", href: "/instructors" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "All Programmes", href: "/programmes" },
      { label: "Foundation in Information Technology (FIT)", href: "/programmes/foundation-in-information-technology" },
      { label: "Business IT & Digital Transformation", href: "/programmes/business-it-digital-transformation" },
      { label: "Full-Stack Development & Software Delivery", href: "/programmes/full-stack-development-software-delivery" },
      { label: "Cybersecurity Fundamentals & Defensive Security", href: "/programmes/cybersecurity-fundamentals-defensive-security" },
    ],
  },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Events", href: "/events" },
      { label: "News & Blog", href: "/news" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: "facebook", href: "https://web.facebook.com/profile.php?id=61588773834092", label: "Facebook" },
  { icon: "linkedin", href: "https://www.linkedin.com/company/115744342/", label: "LinkedIn" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-navy-950 text-xs text-slate-300 md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="tel:+94773208478" className="flex items-center gap-2 transition hover:text-white">
              <Icon name="phone" className="h-4 w-4 text-sky-400" />
              +94 77 320 8478
            </a>
            <a href="mailto:info@vellixacademy@gmail.com" className="flex items-center gap-2 transition hover:text-white">
              <Icon name="mail" className="h-4 w-4 text-sky-400" />
              info@vellixacademy@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-white/10 hover:text-white"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
            <span className="mx-3 h-4 w-px bg-white/15" />
            <Link
              href="/register"
              className="rounded-full bg-sky-500 px-3.5 py-1 font-semibold text-white transition hover:bg-sky-400"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0 bg-transparent">
            <Image
              src="/images/logo.png"
              alt="Vellix Academy"
              width={280}
              height={84}
              priority
              className="h-20 w-auto object-contain"
              style={{ backgroundColor: 'transparent' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-navy-950 transition hover:bg-sky-50 hover:text-sky-600"
                >
                  {item.label}
                  {item.children && (
                    <Icon
                      name="chevron-down"
                      className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className={`absolute left-0 top-full w-64 pt-2 transition-all duration-200 ${
                      openDropdown === item.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-2 opacity-0"
                    }`}
                  >
                    <ul className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-navy-950/10">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3.5 py-2.5 text-sm text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm font-semibold text-navy-950 transition hover:text-sky-600 sm:block"
            >
              Login
            </Link>
            <Button href="/register" size="sm" className="hidden sm:inline-flex">
              Enroll Now
            </Button>
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-950 transition hover:bg-slate-100 lg:hidden"
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-navy-950/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(22rem,90vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="bg-transparent">
            <Image
              src="/images/logo.png"
              alt="Vellix Academy"
              width={160}
              height={48}
              className="h-11 w-auto object-contain"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-navy-950 transition hover:bg-sky-500 hover:text-white"
          >
            <Icon name="x" className="h-4.5 w-4.5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-slate-100 last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)
                    }
                    className="flex w-full items-center justify-between px-3 py-3.5 text-left font-medium text-navy-950"
                  >
                    {item.label}
                    <Icon
                      name="chevron-down"
                      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                        openMobileMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openMobileMenu === item.label
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <ul className="overflow-hidden pb-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setDrawerOpen(false)}
                            className="block rounded-lg px-5 py-2.5 text-sm text-slate-500 transition hover:bg-sky-50 hover:text-sky-600"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-3.5 font-medium text-navy-950 transition hover:text-sky-600"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 border-t border-slate-100 px-5 py-5">
          <Button href="/register" onClick={() => setDrawerOpen(false)}>
            Enroll Now
          </Button>
          <Button href="/login" variant="outline" onClick={() => setDrawerOpen(false)}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
