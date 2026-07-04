import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

export const metadata = {
  title: "About Us – Vellix Academy",
  description:
    "Learn about Vellix Academy, Sri Lanka's premier enterprise IT education provider. Our mission, history, and what makes us different.",
};

function ValueCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10 sm:p-8">
      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-sky-600 group-hover:text-white group-hover:ring-transparent">
        <Icon name={icon} className="h-6.5 w-6.5" />
      </span>
      <h3 className="font-display text-xl font-bold text-navy-950">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{desc}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" breadcrumbs={[{ label: "About Us" }]} />

      {/* Section 1 - Our Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/15 max-lg:aspect-[16/11]">
            <Image
              src="/images/about-story.jpg"
              alt="Vellix Academy campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  Built from Industry.{" "}
                  <span className="text-sky-500">Designed for the Future.</span>
                </>
              }
            />
            <p className="-mt-6 leading-relaxed text-slate-500">
              Vellix Academy was established by the team behind Vellix Global and Vellix Point with a clear mission: to bridge the gap between education and industry.
            </p>
            <p className="mt-4 leading-relaxed text-slate-500">
              Through years of delivering business services, digital transformation solutions, software systems, and operational support to organizations, we identified a common challenge. Many learners graduate with theoretical knowledge but lack practical industry readiness.
            </p>
            <p className="mt-4 leading-relaxed text-slate-500">
              Vellix Academy was created to solve that challenge through practical, career-focused learning designed around real-world business and technology environments.
            </p>
            <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <h4 className="mb-3 font-display text-lg font-bold text-navy-950">Why We Started</h4>
              <p className="text-sm leading-relaxed text-slate-600">
                We believe students should not only learn technology but understand how technology is applied inside businesses to solve problems, improve efficiency, and create opportunities.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Our programs are built around practical learning, business scenarios, projects, collaboration, and career development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Mission, Vision & Values */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Purpose" title="Mission, Vision & Values" />
          <div className="grid gap-7 md:grid-cols-3">
            <ValueCard
              icon="target"
              title="Our Mission"
              desc="To provide practical, accessible, and industry-focused education that empowers learners with the skills, confidence, and professional mindset needed to succeed in the digital economy."
            />
            <ValueCard
              icon="eye"
              title="Our Vision"
              desc="To become a leading professional learning academy that bridges the gap between education and industry while developing future-ready technology and business professionals."
            />
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10 sm:p-8">
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-sky-600 group-hover:text-white group-hover:ring-transparent">
                <Icon name="heart" className="h-6.5 w-6.5" />
              </span>
              <h3 className="font-display text-xl font-bold text-navy-950">Our Values</h3>
              <ul className="mt-4 space-y-2">
                {["Practical Learning", "Innovation", "Professional Excellence", "Continuous Growth", "Industry Relevance", "Student Success"].map((value, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-sky-500">•</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Industry Behind Vellix Academy */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Foundation"
            title="The Industry Behind Vellix Academy"
            subtitle="Our programmes are backed by real industry experience and operational businesses."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-navy-950/5">
              <div className="mb-6 flex h-32 items-center justify-center">
                <Image
                  src="/images/logos/vellix-global.png"
                  alt="Vellix Global Logo"
                  width={200}
                  height={80}
                  className="max-h-24 w-auto object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-950 text-center">Vellix Global</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 text-center">
                Business Process Outsourcing, Customer Support, Back Office Operations, HR Solutions, Financial Operations, and Business Services.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-navy-950/5">
              <div className="mb-6 flex h-32 items-center justify-center">
                <Image
                  src="/images/logos/vellix-point.png"
                  alt="Vellix Point Logo"
                  width={200}
                  height={80}
                  className="max-h-24 w-auto object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-950 text-center">Vellix Point</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 text-center">
                Business Technology Solutions, POS Systems, CRM Platforms, Inventory Management, Payroll Systems, AI Solutions, and Business Automation.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-display text-lg font-bold text-navy-950">Real Industry Experience</h4>
                <p className="mt-1 text-sm text-slate-600">Programs designed with practical business and technology exposure in mind.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-display text-lg font-bold text-navy-950">Career-Focused Learning</h4>
                <p className="mt-1 text-sm text-slate-600">Helping students understand how technology is used in modern organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Why Choose Vellix Academy */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Advantage" title="Why Choose Vellix Academy?" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon="building"
              title="Industry-Backed Learning"
              desc="Programs developed with insights from real business operations and technology projects."
            />
            <ValueCard
              icon="code"
              title="Practical Skills First"
              desc="Focus on hands-on activities, case studies, workshops, and project-based learning."
            />
            <ValueCard
              icon="cpu"
              title="Technology & Business Combined"
              desc="Learn not only technical concepts but also how technology supports business growth."
            />
            <ValueCard
              icon="users"
              title="Small Batch Learning"
              desc="Personalized support and interactive learning environments."
            />
            <ValueCard
              icon="briefcase"
              title="Career Development Focus"
              desc="Professional communication, presentation skills, teamwork, and workplace readiness."
            />
            <ValueCard
              icon="arrow-up"
              title="Future Pathways"
              desc="Foundation programs, professional specializations, industry exposure, and career development opportunities."
            />
          </div>
        </div>
      </section>

      {/* Section 5 - The Vellix Learning Journey */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Path"
            title="The Vellix Learning Journey"
            subtitle="From foundation to professional, a clear pathway to your technology career."
          />
          <div className="mt-12 relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {[
                { step: "Foundation in Information Technology (FIT)", icon: "graduation-cap" },
                { step: "Choose Your Specialization", icon: "network" },
                { step: "Professional Program", icon: "target" },
                { step: "Industry Projects & Practical Experience", icon: "briefcase" },
                { step: "Career Development", icon: "arrow-up" },
                { step: "Future Professional", icon: "award" },
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center md:grid md:grid-cols-2 md:gap-12">
                  {idx % 2 === 0 ? (
                    <>
                      <div className="hidden md:block" />
                      <div className="relative md:pl-8">
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 z-10">
                          <Icon name={item.icon} className="h-5 w-5" />
                        </div>
                        <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-lg shadow-navy-950/5 hover:shadow-xl hover:shadow-navy-950/10 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="flex hidden md:hidden h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white text-sm font-bold">
                              {idx + 1}
                            </span>
                            <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">Step {idx + 1}</span>
                          </div>
                          <p className="font-display text-lg font-bold text-navy-950">{item.step}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative md:pr-8">
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 z-10">
                          <Icon name={item.icon} className="h-5 w-5" />
                        </div>
                        <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-lg shadow-navy-950/5 hover:shadow-xl hover:shadow-navy-950/10 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="flex hidden md:hidden h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white text-sm font-bold">
                              {idx + 1}
                            </span>
                            <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">Step {idx + 1}</span>
                          </div>
                          <p className="font-display text-lg font-bold text-navy-950">{item.step}</p>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Final Banner */}
      <CtaBanner
        title="Learn. Grow. Succeed."
        text="Whether you're starting your technology journey or preparing for your next career move, Vellix Academy provides practical learning experiences designed for the real world."
        primaryLabel="Explore Programmes"
        primaryHref="/programmes"
        secondaryLabel="Contact Admissions"
        secondaryHref="/contact"
      />
    </>
  );
}
