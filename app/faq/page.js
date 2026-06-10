import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";

export const metadata = {
  title: "FAQ – Vellix Academy",
  description:
    "Frequently asked questions about Vellix Academy programmes, admissions, fees, class sizes and career placement support.",
};

export default function FAQPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about enrolling at Vellix Academy."
          />
          <FaqAccordion />

          <div className="mt-14 text-center">
            <p className="mb-5 text-slate-500">
              Still have questions? We&apos;re happy to help.
            </p>
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
