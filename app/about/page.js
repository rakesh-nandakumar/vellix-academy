import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";

export const metadata = {
  title: "About Us – Vellix Academy",
  description:
    "Learn about Vellix Academy, Sri Lanka's premier enterprise IT education provider. Our mission, history, and what makes us different.",
};

const storyPoints = [
  "Founded by industry practitioners",
  "Curriculum updated every semester",
  "Real enterprise project deliverables",
  "Intensive career support",
];

const purpose = [
  {
    icon: "target",
    title: "Our Mission",
    desc: "To produce enterprise-ready IT professionals who can contribute meaningfully to world-class software teams from day one — by combining rigorous technical education with real-world project experience.",
  },
  {
    icon: "eye",
    title: "Our Vision",
    desc: "To become South Asia's most respected enterprise IT academy, known for the quality of its graduates and its contribution to the region's technology sector.",
  },
  {
    icon: "heart",
    title: "Our Values",
    desc: "Excellence, integrity, and continuous learning. We hold ourselves and our students to the highest standards because mediocre IT professionals cost companies millions.",
  },
];

const differentiators = [
  {
    icon: "building",
    title: "Enterprise-First Curriculum",
    desc: "Built by practitioners, aligned with how top companies actually build software.",
  },
  {
    icon: "network",
    title: "Real Project Deliverables",
    desc: "Every programme ends with a production-quality portfolio project you own.",
  },
  {
    icon: "users",
    title: "Small Cohorts",
    desc: "Max 25 students per batch means genuine attention and faster learning.",
  },
  {
    icon: "briefcase",
    title: "Career Placement",
    desc: "Top performers get direct introductions to our network of tech companies.",
  },
  {
    icon: "globe",
    title: "Flexible Learning",
    desc: "All programmes available on-campus and fully online with recorded sessions.",
  },
  {
    icon: "refresh",
    title: "Always Current",
    desc: "Curriculum is reviewed each semester — we cut outdated content, add what employers need.",
  },
];

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

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/15 max-lg:aspect-[16/11]">
            <Image
              src="/images/cta-image.jpg"
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
                  Building the Next Generation of{" "}
                  <span className="text-sky-500">Enterprise IT Talent</span>
                </>
              }
            />
            <p className="-mt-6 leading-relaxed text-slate-500">
              Vellix Academy was founded with a singular mission: to bridge the
              gap between academic education and what enterprise software
              companies actually need. We saw that graduates were coming out of
              traditional institutions without the skills to ship real software
              from day one.
            </p>
            <p className="mt-4 leading-relaxed text-slate-500">
              We built Vellix Academy to change that. Every programme, every
              module, every project is designed around what a senior engineer
              at a top tech company would need you to know. We don&apos;t teach
              theory for theory&apos;s sake — we teach you how to build things that
              work in production.
            </p>
            <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {storyPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-navy-950">
                  <Icon name="check-circle" className="h-5 w-5 shrink-0 text-sky-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Purpose" title="Mission & Vision" />
          <div className="grid gap-7 md:grid-cols-3">
            {purpose.map((item) => (
              <ValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Why choose us */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Vellix" title="What Makes Us Different" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <ValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Join the Next Cohort"
        text="Applications are open. Take the first step toward your enterprise IT career today."
        primaryLabel="Apply Now"
        primaryHref="/register"
        secondaryLabel="Contact Admissions"
        secondaryHref="/contact"
      />
    </>
  );
}
