import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Instructors", href: "/instructors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "News & Blog", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: "facebook", href: "https://web.facebook.com/profile.php?id=61588773834092", label: "Facebook" },
  { icon: "linkedin", href: "https://www.linkedin.com/company/115744342/", label: "LinkedIn" },
];

const contactItems = [
  {
    icon: "map-pin",
    content: "Academic Branch: No.16, King Street, Badulla",
  },
  { icon: "phone", content: "+94 77 320 8478", href: "tel:+94773208478" },
  {
    icon: "mail",
    content: "info@vellixacademy@gmail.com",
    href: "mailto:info@vellixacademy@gmail.com",
  },
];

function FooterHeading({ children }) {
  return (
    <h4 className="relative mb-6 pb-3 font-display text-base font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-9 after:rounded-full after:bg-sky-400 after:content-['']">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block bg-transparent">
              <Image
                src="/images/logo.png"
                alt="Vellix Academy"
                width={280}
                height={84}
                className="h-20 w-auto object-contain brightness-0 invert"
                style={{ backgroundColor: 'transparent' }}
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed">
              Vellix Academy is Sri Lanka&apos;s premier enterprise IT education
              provider. We teach software development, data science, cloud
              computing and cybersecurity the way it&apos;s done at the enterprise
              level.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-sky-500 hover:text-white hover:ring-sky-500"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 transition hover:text-sky-300"
                  >
                    <Icon name="chevron-right" className="h-3 w-3 text-sky-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="space-y-4 text-sm">
              {contactItems.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  {item.href ? (
                    <a href={item.href} className="transition hover:text-sky-300">
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Vellix Academy. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/about" className="transition hover:text-sky-300">About</Link>
            <Link href="/contact" className="transition hover:text-sky-300">Contact</Link>
            <Link href="/faq" className="transition hover:text-sky-300">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
