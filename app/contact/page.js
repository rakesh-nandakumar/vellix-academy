import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Contact Us – Vellix Academy",
  description:
    "Get in touch with Vellix Academy. Ask about programmes, fees and admissions — we'll respond within 24 hours.",
};

const contactDetails = [
  {
    icon: "map-pin",
    title: "Visit Us",
    content: "123 Bauddhaloka Mawatha, Kohuwala, Colombo 06",
  },
  {
    icon: "phone",
    title: "Call Us",
    content: "+94 112 123 456",
    href: "tel:+94112123456",
  },
  {
    icon: "smartphone",
    title: "Mobile / WhatsApp",
    content: "+94 77 123 4567",
    href: "tel:+94771234567",
  },
  {
    icon: "mail",
    title: "Email Us",
    content: "info@vellixacademy.lk",
    href: "mailto:info@vellixacademy.lk",
  },
  {
    icon: "clock",
    title: "Opening Hours",
    content: "Mon – Sat: 8:00 AM – 7:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Contact" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
          {/* Info column */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky-600 ring-1 ring-sky-200">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Contact Vellix Academy
            </h2>
            <p className="mt-4 leading-relaxed text-slate-500">
              Have a question about our programmes, fees or admissions? Fill in
              the form and we&apos;ll get back to you within 24 hours.
            </p>

            <ul className="mt-9 space-y-6">
              {contactDetails.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-950">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-slate-500 transition hover:text-sky-600"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-500">{item.content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form column */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
