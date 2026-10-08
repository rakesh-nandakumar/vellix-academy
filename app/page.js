import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import CourseCarousel from "@/components/CourseCarousel";
import InstructorCarousel from "@/components/InstructorCarousel";
import TestimonialSlider from "@/components/TestimonialSlider";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import ProgrammeCard from "@/components/ProgrammeCard";
import NewsCard from "@/components/NewsCard";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import InstructorCard from "@/components/InstructorCard";
import { newsArticles, programmes, galleryImages, instructors, courses } from "@/lib/data";

export const metadata = {
  title: "Vellix Academy – Enterprise IT & Software Development Courses",
  description:
    "Sri Lanka's premier enterprise IT education provider. Master full-stack development, data science, cloud computing and cybersecurity with industry experts.",
};

const aboutPoints = [
  "3+ industry-expert instructors",
  "Real enterprise project deliverables",
  "Career placement for top performers",
  "Campus & online flexible options",
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* About */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/15 max-lg:aspect-[16/11]">
              <Image
                src="/images/about-vellix-academy.png"
                alt="Vellix Academy students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-navy-950/10 sm:flex lg:-right-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 text-white">
                <Icon name="award" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-navy-950">200+</p>
                <p className="text-xs font-medium text-slate-500">Graduates Employed</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About Vellix Academy"
              title={
                <>
                  We Teach Enterprise-Grade IT{" "}
                  <span className="text-sky-500">The Right Way</span>
                </>
              }
            />
            <p className="-mt-6 leading-relaxed text-slate-500">
              Vellix Academy is Sri Lanka&apos;s premier enterprise IT education
              provider. Unlike traditional training centres, we teach software
              development, data science, cloud computing and cybersecurity the
              way it&apos;s actually practised at Fortune 500 companies —
              production-ready, end-to-end, and project-driven.
            </p>
            <p className="mt-4 leading-relaxed text-slate-500">
              Our programmes are designed with the industry, for the industry.
              Every module maps to a real-world skill employers hire for.
              Outstanding graduates receive direct introductions to our partner
              companies and startups.
            </p>
            <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-navy-950">
                  <Icon name="check-circle" className="h-5 w-5 shrink-0 text-sky-500" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/about">
                Discover More
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Programmes"
            title="Programmes Built for the Industry"
            subtitle="Practical, hands-on programmes that align with what employers actually need. No outdated theory — just enterprise-ready skills."
          />
          <CourseCarousel />

          <div className="mt-12 text-center">
            <Button href="/programmes">
              Browse All Programmes
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Coming Soon Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 py-16 sm:py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 ring-1 ring-amber-200 animate-pulse">
                <Icon name="zap" className="h-3 w-3" />
                Coming 2027
              </span>
              <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
                Artificial Intelligence
                <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  The Future of Technology
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Master AI, machine learning, and automation. Our upcoming AI module will prepare you for the next generation of technology careers. Learn to build intelligent systems, work with large language models, and deploy AI solutions at scale.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
                <Button href="/programmes/artificial-intelligence" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/30">
                  Learn More
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="outline">
                  Get Notified
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-400 to-orange-500 opacity-20 blur-2xl animate-pulse" />
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

      {/* Stats */}
      <StatsCounter />

      {/* Instructors */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet Our Team"
            title="Learn From Industry Experts"
            subtitle="Our instructors aren't just academics — they're practitioners who've built real systems at scale and bring that experience into the classroom."
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {instructors.map((ins) => (
              <InstructorCard key={ins.slug} instructor={ins} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/instructors">
              View All Instructors
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      {/* <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus Life"
            title="Life at Vellix Academy"
            subtitle="From hackathons and tech talks to graduation ceremonies — here's a glimpse of the Vellix Academy experience."
          />
          <GalleryGrid images={galleryImages.slice(0, 6)} />
          <div className="mt-12 text-center">
            <Button href="/gallery">
              View Full Gallery
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Student Stories"
            title="What Our Graduates Say"
            subtitle="Real stories from students who transformed their careers through Vellix Academy."
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Ready to Start Your IT Career?"
        text="Join hundreds of graduates who launched their careers in software development, data science, cloud engineering and cybersecurity with Vellix Academy."
        primaryLabel="Enroll Now"
        primaryHref="/register"
        secondaryLabel="Talk to Admissions"
        secondaryHref="/contact"
      />

      {/* News */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest Updates" title="News & Blog" />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/news">
              View All News
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Internationally Recognised"
            title="Our Academic Partners"
          />
          <div className="flex flex-wrap items-center justify-center gap-12">
            {[
              { src: "/images/logos/vellix.png", alt: "Vellix" },
              { src: "/images/logos/vellix-point.png", alt: "Vellix Point" },
              { src: "/images/logos/pos.png", alt: "POS" },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="object-contain opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
