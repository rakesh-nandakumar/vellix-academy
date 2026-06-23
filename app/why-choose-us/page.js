import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Why Choose Us – Vellix Academy",
  description:
    "Building future-ready technology professionals through practical learning, industry exposure, and career-focused development.",
};

const features = [
  {
    title: "Industry-Focused Learning",
    description: "Our programs are designed around real-world business and technology environments, helping students gain practical knowledge that extends beyond traditional classroom learning.",
  },
  {
    title: "Three Career Pathways",
    description: "Students gain exposure to Business IT, Software Development, and Cybersecurity before selecting a specialization that aligns with their interests and career goals.",
  },
  {
    title: "Hands-On Practical Experience",
    description: "Learn through workshops, case studies, projects, demonstrations, and industry-based scenarios designed to build confidence and practical skills.",
  },
  {
    title: "Professional Specialization Programs",
    description: "After completing the Foundation Program, students can continue into dedicated professional pathways in:",
    list: [
      "Business IT & Digital Transformation",
      "Full-Stack Development & Software Engineering",
      "Cybersecurity & Networking",
    ],
  },
  {
    title: "Industry Project Exposure",
    description: "Students enrolled in professional programs will work on practical business scenarios and project-based activities that reflect real industry requirements.",
  },
  {
    title: "Career Development Support",
    description: "We guide students in developing professional communication, presentation skills, project experience, and industry readiness throughout their learning journey.",
  },
  {
    title: "Internship & Industry Placement Opportunities",
    description: "Through Vellix Global, Vellix Point, and our professional network, selected students may receive opportunities for internships, industry exposure, and workplace experience based on performance, commitment, and available opportunities.",
    note: "Important: Opportunities are offered to eligible students and are not guaranteed for every participant.",
  },
  {
    title: "Employment Pathway Opportunities",
    description: "Outstanding students who successfully complete their programs may be considered for employment opportunities within our partner network or associated organizations, subject to performance, vacancies, and selection criteria.",
    note: "Important: Employment opportunities are merit-based and dependent on available positions.",
  },
  {
    title: "Learn Beyond Certifications",
    description: "Our goal is not only to provide certificates but to help students build practical skills, professional confidence, and industry awareness that support long-term career success.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageBanner
        title="Why Choose Us"
        breadcrumbs={[{ label: "Why Choose Us" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Vellix Academy?"
            title="Why Choose Vellix Academy?"
            subtitle="Building future-ready technology professionals through practical learning, industry exposure, and career-focused development."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-lg shadow-sky-500/30">
                  <Icon name="check" className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
                {feature.list && (
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    {feature.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {feature.note && (
                  <p className="mt-3 text-xs italic text-slate-500">
                    {feature.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-500 to-sky-700 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Your Journey Starts Here
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-lg font-semibold text-white/90 sm:gap-4">
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              Foundation Program
            </span>
            <Icon name="arrow-right" className="h-5 w-5" />
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              Professional Specialization
            </span>
            <Icon name="arrow-right" className="h-5 w-5" />
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              Industry Exposure
            </span>
            <Icon name="arrow-right" className="h-5 w-5" />
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              Career Development
            </span>
          </div>
          <p className="mt-8 font-display text-2xl font-bold text-white">
            Learn. Grow. Succeed.
          </p>
        </div>
      </section>
    </>
  );
}
