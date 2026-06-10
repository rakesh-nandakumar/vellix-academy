import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";

export const metadata = {
  title: "Testimonials – Vellix Academy",
  description:
    "Read what Vellix Academy graduates say about their experience and how it transformed their IT careers.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        title="Student Testimonials"
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Success Stories"
            title="What Our Graduates Say"
            subtitle="Real feedback from students who built their IT careers at Vellix Academy."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
