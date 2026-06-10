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

export default function CareersPage() {
  return (
    <>
      <PageBanner title="Careers" breadcrumbs={[{ label: "Careers" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Join Our Team"
            title="Open Positions at Vellix Academy"
            subtitle="We're looking for passionate people who care about education, technology and making an impact. Browse our open roles below."
          />

          <div className="mx-auto max-w-4xl space-y-5">
            {careers.map((job) => (
              <article
                key={job.id}
                className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10 sm:flex-row sm:items-center sm:p-7"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <Icon name="briefcase" className="h-6 w-6" />
                </span>

                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-navy-950">
                    {job.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {job.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
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

                <div className="shrink-0">
                  <Button href="/contact" size="sm">
                    Apply Now
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="mb-5 text-slate-500">
              Don&apos;t see a role that fits? Send us your CV anyway.
            </p>
            <Button href="/contact" variant="outline">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
