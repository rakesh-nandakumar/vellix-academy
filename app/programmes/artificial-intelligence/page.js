import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { courses } from "@/lib/data";

export const metadata = {
  title: "Artificial Intelligence & Machine Learning – Vellix Academy",
  description:
    "Master artificial intelligence, machine learning, and automation with Vellix Academy's upcoming AI module. Coming 2027.",
};

const whatYouWillLearn = [
  "AI Foundations & The Modern AI Landscape",
  "Machine Learning Fundamentals",
  "Generative AI & Large Language Models",
  "Prompt Engineering & AI Interaction",
  "AI Tools & Professional Productivity",
  "AI Automation & Business Workflows",
  "AI APIs & AI-Powered Applications",
  "RAG & Knowledge-Based AI",
  "AI Agents & Agentic Workflows",
  "Multimodal AI & Intelligent Interfaces",
  "Responsible AI, Security, Evaluation & Deployment",
];

const practicalActivities = [
  "AI Use-Case Mapping",
  "Machine Learning Problem Classification",
  "LLM Output Comparison & Analysis",
  "Building Professional Prompt Portfolio",
  "AI-Assisted Workflow Design",
  "Business Automation Workflow Prototyping",
  "AI API Integration & Testing",
  "RAG Knowledge Assistant Design",
  "AI Agent Design with Human Approval",
  "Multimodal Solution Storyboarding",
  "AI Risk Register & Evaluation",
  "Final AI Business Solution Capstone",
];

const careerPathways = [
  "AI Automation Specialist",
  "Prompt Engineer",
  "AI Integration Developer",
  "Business Process Automation Analyst",
  "AI Productivity Consultant",
  "Knowledge Systems Designer",
];

export default function AICoursePage() {
  const course = courses.find((c) => c.slug === "artificial-intelligence");

  return (
    <>
      <PageBanner
        title={course.title}
        breadcrumbs={[{ label: "Programmes", href: "/programmes" }, { label: course.shortTitle }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="AI Module"
                title={course.title}
                subtitle={course.description}
                align="left"
              />

              <div className="mt-10 space-y-10">
                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">Program Overview</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    This is a 3-month Saturday Industry Readiness Module designed for beginner to early-intermediate learners. Students will understand the complete modern AI landscape at a practical professional level, moving from AI literacy to practical use, automation, integration, knowledge systems, agents, multimodal AI, evaluation and responsible implementation. The program focuses on practical, activity-based, current-industry focused learning with tool-assisted and business-relevant exercises.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">What You Will Learn</h3>
                  <ul className="space-y-2">
                    {whatYouWillLearn.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">Practical Activities</h3>
                  <ul className="space-y-2">
                    {practicalActivities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">Who Should Join?</h3>
                  <ul className="space-y-2">
                    {course.perfectFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">Career Pathways</h3>
                  <p className="mb-3 text-sm text-slate-600">Graduates can pursue careers as:</p>
                  <ul className="space-y-2">
                    {careerPathways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Icon name="arrow-right" className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">Program Outcome</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{course.outcome}</p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="zap" className="h-5 w-5 text-amber-500" />
                    <h3 className="font-display text-xl font-bold text-navy-950">Why Learn with Vellix Academy?</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Cutting-edge AI curriculum",
                      "Hands-on projects with real datasets",
                      "Industry-standard ML frameworks (TensorFlow, PyTorch)",
                      "Learn from AI practitioners",
                      "Small batch learning environment",
                      "Career guidance in AI/ML field",
                      "Capstone AI project",
                      "Pathway to AI career opportunities",
                      "Weekend learning schedule",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-0.5 text-amber-500">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border-2 border-amber-400 bg-white p-6 shadow-lg shadow-amber-500/20">
                <div className="mb-6 aspect-video overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="clock" className="h-5 w-5 text-amber-500" />
                    <span className="font-medium text-navy-950">Duration</span>
                    <span className="text-slate-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="calendar" className="h-5 w-5 text-amber-500" />
                    <span className="font-medium text-navy-950">Schedule</span>
                    <span className="text-slate-600">{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="graduation-cap" className="h-5 w-5 text-amber-500" />
                    <span className="font-medium text-navy-950">Level</span>
                    <span className="text-slate-600">{course.level}</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-navy-950">Lecturers</h4>
                  <div className="space-y-3">
                    {course.lecturers.map((lecturer, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 font-semibold">
                          {lecturer.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-navy-950">{lecturer}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Button href="/contact" className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                    Join Waitlist
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
