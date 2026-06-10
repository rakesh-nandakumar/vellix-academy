import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ProgrammeCard from "@/components/ProgrammeCard";
import CtaBanner from "@/components/CtaBanner";
import { programmes } from "@/lib/data";

export const metadata = {
  title: "Programmes – Vellix Academy",
  description:
    "Explore enterprise IT programmes at Vellix Academy. Full-time bootcamps and part-time tracks in software development, data science, cloud computing and cybersecurity.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageBanner title="Our Programmes" breadcrumbs={[{ label: "Programmes" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Enterprise IT Programmes"
            subtitle="Choose from intensive full-time bootcamps or flexible part-time tracks. Every programme is built around production-grade enterprise skills and includes real project deliverables."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((prog) => (
              <ProgrammeCard key={prog.id} programme={prog} detailed />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Programme to Choose?"
        text="Talk to our admissions team and we'll help you find the right fit for your goals and background."
        primaryLabel="Talk to Admissions"
        primaryHref="/contact"
        secondaryLabel="Apply Now"
        secondaryHref="/register"
      />
    </>
  );
}
