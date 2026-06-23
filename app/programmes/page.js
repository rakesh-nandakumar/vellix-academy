import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import CourseExplorer from "@/components/CourseExplorer";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Programmes – Vellix Academy",
  description:
    "Browse enterprise IT programmes at Vellix Academy. Foundation, Business IT, Software Development, and Cybersecurity programmes.",
};

const futurePrograms = {
  technology: [
    "Cloud Computing",
    "Data Analytics & Power BI",
    "Mobile App Development",
    "UI/UX Design",
    "Artificial Intelligence & Automation",
  ],
  professionalSkills: [
    "Business English",
    "Career Development",
    "Professional Communication",
  ],
  digitalBusiness: [
    "Digital Marketing",
    "CRM & Customer Experience",
    "Project Management",
  ],
  businessManagement: [
    "Human Resource Management",
    "Entrepreneurship & Startup Development",
    "Business Operations",
  ],
};

export default function ProgrammesPage() {
  return (
    <>
      <PageBanner title="Our Programmes" breadcrumbs={[{ label: "Programmes" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industry Readiness"
            title="Programmes Built for Industry Readiness"
            subtitle="Our programmes are designed to bridge the gap between education and real-world industry requirements through practical learning, business scenarios, projects, and career-focused training."
          />
          <CourseExplorer />
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coming Soon"
            title="Future Programmes"
            subtitle="We are continuously expanding our curriculum to meet industry demands. Stay tuned for these upcoming programmes."
            dark
          />

          <div className="mt-12 overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...futurePrograms.technology, ...futurePrograms.professionalSkills, ...futurePrograms.digitalBusiness, ...futurePrograms.businessManagement, ...futurePrograms.technology, ...futurePrograms.professionalSkills, ...futurePrograms.digitalBusiness, ...futurePrograms.businessManagement].map((program, idx) => (
                <div
                  key={idx}
                  className="flex shrink-0 items-center gap-3 rounded-xl border border-sky-500/30 bg-navy-800/50 px-6 py-4 backdrop-blur-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                  <span className="text-sm font-medium text-sky-100">{program}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-sky-500/30 bg-navy-800/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                <Icon name="cpu" className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                School of Technology
              </h3>
              <ul className="mt-4 space-y-2">
                {futurePrograms.technology.map((program, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-500/30 bg-navy-800/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                <Icon name="user" className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                School of Professional Skills
              </h3>
              <ul className="mt-4 space-y-2">
                {futurePrograms.professionalSkills.map((program, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-500/30 bg-navy-800/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                <Icon name="globe" className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                School of Digital Business
              </h3>
              <ul className="mt-4 space-y-2">
                {futurePrograms.digitalBusiness.map((program, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-500/30 bg-navy-800/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                <Icon name="briefcase" className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                School of Business & Management
              </h3>
              <ul className="mt-4 space-y-2">
                {futurePrograms.businessManagement.map((program, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
