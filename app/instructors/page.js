import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import InstructorCard from "@/components/InstructorCard";
import { instructors } from "@/lib/data";

export const metadata = {
  title: "Our Instructors – Vellix Academy",
  description:
    "Meet the expert instructors at Vellix Academy. Industry practitioners with real-world enterprise experience teaching the next generation of IT professionals.",
};

export default function InstructorsPage() {
  return (
    <>
      <PageBanner title="Our Instructors" breadcrumbs={[{ label: "Instructors" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet the Team"
            title="Learn From Industry Experts"
            subtitle="Our instructors are practitioners first. They've built real systems, led real teams, and they bring that experience into every session."
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {instructors.map((ins) => (
              <InstructorCard key={ins.slug} instructor={ins} showQualifications />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
