import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import CourseExplorer from "@/components/CourseExplorer";

export const metadata = {
  title: "Courses – Vellix Academy",
  description:
    "Browse enterprise IT courses at Vellix Academy. Full-stack development, data science, cloud, DevOps, cybersecurity and more.",
};

export default function CoursesPage() {
  return (
    <>
      <PageBanner title="Our Courses" breadcrumbs={[{ label: "Courses" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Enterprise IT"
            title="Courses Built for the Industry"
            subtitle="Every course is designed to teach what enterprise teams actually use. Hands-on, project-driven and constantly updated."
          />
          <CourseExplorer />
        </div>
      </section>
    </>
  );
}
