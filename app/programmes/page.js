import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import CourseExplorer from "@/components/CourseExplorer";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

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

      {/* AI Coming Soon Featured Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Icon name="zap" className="h-3 w-3" />
                Coming 2027
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
                Artificial Intelligence
                <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  The Future of Technology
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Understand the complete modern AI landscape at a practical professional level. Our upcoming AI module covers AI foundations, generative AI, prompt engineering, automation, APIs, RAG, AI agents, multimodal AI, and responsible implementation. Perfect for beginner to early-intermediate learners wanting practical AI exposure.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "AI Foundations & Modern AI Landscape",
                  "Generative AI & Large Language Models",
                  "Prompt Engineering & AI Interaction",
                  "AI Automation & Business Workflows",
                  "RAG & Knowledge-Based AI",
                  "AI Agents & Agentic Workflows",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <Icon name="check" className="h-4 w-4 text-amber-500" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/programmes/artificial-intelligence" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                  Learn More
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="outline">
                  Get Notified
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-400 to-orange-500 opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-amber-400 bg-white p-8 shadow-2xl shadow-amber-500/20">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                  <Icon name="cpu" className="h-10 w-10" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy-950">
                  Be the First
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Join our AI waitlist and be among the first to know when enrollment opens. Limited spots available for the inaugural batch.
                </p>
                <Button href="/contact" className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                  Join Waitlist
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
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
