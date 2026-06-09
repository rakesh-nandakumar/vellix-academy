"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
      { label: "Enterprise Developer Track", href: "/programmes/enterprise-developer-track" },
      { label: "Data Science Bootcamp", href: "/programmes/data-science-bootcamp" },
      { label: "Cloud & DevOps Track", href: "/programmes/cloud-devops-track" },
      { label: "Part-Time Developer Program", href: "/programmes/part-time-software-developer" },
      { label: "Cybersecurity Track", href: "/programmes/cybersecurity-professional" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "All Courses", href: "/courses" },
      { label: "Full-Stack Web Development", href: "/courses/full-stack-web-development" },
      { label: "Enterprise Java & Spring Boot", href: "/courses/enterprise-java-spring-boot" },
      { label: "Data Science & Machine Learning", href: "/courses/data-science-machine-learning" },
      { label: "Cloud Architecture (AWS & Azure)", href: "/courses/cloud-architecture-aws-azure" },
      { label: "DevOps & CI/CD", href: "/courses/devops-cicd-pipeline" },
      { label: "Cybersecurity Fundamentals", href: "/courses/cybersecurity-fundamentals" },
    ],
  },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Events", href: "/events" },
      { label: "News & Blog", href: "/news" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setDrawerOpen(false);
      }
    };
    if (drawerOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [drawerOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span><i className="fas fa-phone-alt"></i> +94 112 123 456</span>
            <span><i className="fas fa-envelope"></i> info@vellixacademy.lk</span>
          </div>
          <div className="topbar-right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <Link href="/register" className="topbar-btn">Register Now</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header${scrolled ? " sticky" : ""}`}>
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <Image
              src="/images/logos/logo-dark.png"
              alt="Vellix Academy"
              width={180}
              height={55}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="main-nav">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="nav-item has-dropdown"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={item.href} className="nav-link">
                    {item.label} <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className={`dropdown-menu${openDropdown === item.label ? " visible" : ""}`}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="dropdown-link">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={item.label} className="nav-item">
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </div>
              )
            )}
          </nav>

          {/* Header CTA */}
          <div className="header-actions">
            <Link href="/login" className="btn-outline-sm">Login</Link>
            <Link href="/register" className="btn-primary-sm">Enroll Now</Link>
            {/* Mobile hamburger */}
            <button
              className="hamburger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />}

      {/* Mobile Drawer */}
      <div ref={drawerRef} className={`mobile-drawer${drawerOpen ? " open" : ""}`}>
        <div className="drawer-header">
          <Image
            src="/images/logos/logo-dark.png"
            alt="Vellix Academy"
            width={150}
            height={45}
            style={{ objectFit: "contain" }}
          />
          <button onClick={() => setDrawerOpen(false)} className="drawer-close" aria-label="Close">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="drawer-nav">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="drawer-item">
                <button
                  className="drawer-toggle"
                  onClick={() =>
                    setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <i className={`fas fa-chevron-${openMobileMenu === item.label ? "up" : "down"}`}></i>
                </button>
                <ul className={`drawer-submenu${openMobileMenu === item.label ? " open" : ""}`}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="drawer-sublink"
                        onClick={() => setDrawerOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div key={item.label} className="drawer-item">
                <Link href={item.href} className="drawer-link" onClick={() => setDrawerOpen(false)}>
                  {item.label}
                </Link>
              </div>
            )
          )}
        </nav>
        <div className="drawer-footer">
          <Link href="/register" className="btn-primary-full" onClick={() => setDrawerOpen(false)}>
            Enroll Now
          </Link>
          <Link href="/login" className="btn-outline-full" onClick={() => setDrawerOpen(false)}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
