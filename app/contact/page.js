import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Contact Us – Vellix Academy",
  description:
    "Get in touch with Vellix Academy. Ask about programmes, fees and admissions — we'll respond within 24 hours.",
};

// Contact info sourced from Vellix Global (parent company)

const contactDetails = [
  {
    icon: "map-pin",
    title: "Academic Branch",
    content: "No.16, King Street, Badulla",
  },
  {
    icon: "phone",
    title: "Call / WhatsApp",
    content: "+94 77 320 8478",
    href: "tel:+94773208478",
  },
  {
    icon: "phone",
    title: "Secondary Contact",
    content: "+94 76 375 5374",
    href: "tel:+94763755374",
  },
  {
    icon: "mail",
    title: "Email Us",
    content: "info@vellixacademy@gmail.com",
    href: "mailto:info@vellixacademy@gmail.com",
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

            <a
              href="https://wa.me/94773208478"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form column */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
