import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { courses } from "@/lib/data";

export const metadata = {
  title: "Full-Stack Development & Software Delivery – Vellix Academy",
  description:
    "Build real-world software applications using modern development practices from frontend design to backend systems and deployment.",
};

const practicalActivities = [
  "Build Responsive User Interfaces",
  "Create Backend APIs",
  "Design Databases",
  "Implement Authentication Systems",
  "Team Collaboration with GitHub",
  "Application Deployment Exercises",
];

const careerPathways = [
  "Software Engineer",
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Junior Web Developer",
];

export default function FullStackCoursePage() {
  const course = courses.find((c) => c.slug === "full-stack-development-software-delivery");

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
                eyebrow="Professional Program"
                title={course.title}
                subtitle={course.description}
                align="left"
              />

              <div className="mt-10 space-y-10">
                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">Program Overview</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    This hands-on development program teaches students how to design, build, connect, document, and deploy modern web applications using industry-standard tools and workflows. Students will learn how software projects move from requirements to deployment while building a real-world business application.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">What You Will Learn</h3>
                  <ul className="space-y-2">
                    {course.topics.map((item, idx) => (
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
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">Final Project</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{course.finalProject}</p>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-950">Why Learn with Vellix Academy?</h3>
                  <ul className="space-y-2">
                    {[
                      "Industry-focused learning approach",
                      "Practical activities and workshops",
                      "Real business case studies",
                      "Small batch learning environment",
                      "Career guidance and mentorship",
                      "Weekend learning schedule",
                      "Project-based learning",
                      "Pathway to internships and industry opportunities for selected high-performing students",
                      "Learn from professionals with real industry experience",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-0.5 text-sky-500">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-navy-950/5">
                <div className="mb-6 aspect-video overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="clock" className="h-5 w-5 text-sky-500" />
                    <span className="font-medium text-navy-950">Duration</span>
                    <span className="text-slate-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="calendar" className="h-5 w-5 text-sky-500" />
                    <span className="font-medium text-navy-950">Schedule</span>
                    <span className="text-slate-600">{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="graduation-cap" className="h-5 w-5 text-sky-500" />
                    <span className="font-medium text-navy-950">Level</span>
                    <span className="text-slate-600">{course.level}</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-navy-950">Lecturer</h4>
                  <div className="space-y-3">
                    {course.lecturers.map((lecturer, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 font-semibold">
                          {lecturer.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-navy-950">{lecturer}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Button href="/register" className="w-full">
                    Enroll Now
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
