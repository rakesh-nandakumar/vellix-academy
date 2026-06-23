import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { careers } from "@/lib/data";

export const metadata = {
  title: "Careers – Vellix Academy",
  description:
    "Join the Vellix Academy team. View open positions in instruction, operations and marketing.",
};

const futureLecturerPool = [
  "Cloud Computing",
  "UI/UX Design",
  "Mobile Application Development",
  "Project Management",
  "Accounting & Finance",
  "Entrepreneurship",
  "Tourism & Hospitality",
  "Business Management",
];

export default function CareersPage() {
  return (
    <>
      <PageBanner title="Careers" breadcrumbs={[{ label: "Careers" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Join Our Team"
            title="Join the Vellix Academy Team"
            subtitle="At Vellix Academy, we are building the next generation of technology and industry professionals. We are always interested in connecting with passionate educators, trainers, and industry experts who want to make a meaningful impact on students' careers."
          />

          <div className="mx-auto max-w-4xl space-y-6">
            {careers.map((job) => (
              <article
                key={job.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-navy-950">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 ring-1 ring-sky-100">
                        <Icon name="clock" className="h-3 w-3" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        <Icon name="map-pin" className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Button href="/apply" size="sm">
                    Apply Now
                  </Button>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-navy-950">Requirements:</h4>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-navy-950">Responsibilities:</h4>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <h3 className="font-display text-lg font-bold text-navy-950">
              Future Lecturer Pool Registration
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We are also interested in hearing from professionals in:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {futureLecturerPool.map((field, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  {field}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              If you are passionate about teaching and industry development, we welcome your CV and profile for future opportunities.
            </p>
          </div>

          <div className="mt-14 text-center">
            <Button href="/contact">Send Your CV</Button>
          </div>
        </div>
      </section>
    </>
  );
}
