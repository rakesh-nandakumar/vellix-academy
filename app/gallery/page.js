import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Gallery – Vellix Academy",
  description:
    "Explore photos from Vellix Academy events, graduation ceremonies, hackathons and campus life.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner title="Gallery" breadcrumbs={[{ label: "Gallery" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus Life"
            title="Life at Vellix Academy"
            subtitle="From graduation ceremonies to intensive hackathons — here's a glimpse into what life looks like at Vellix Academy."
          />

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 p-12 text-center">
            <span className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 text-sky-500">
              <Icon name="image" className="h-10 w-10" />
            </span>
            <h3 className="font-display text-2xl font-bold text-navy-950">
              Coming Soon
            </h3>
            <p className="mt-3 text-slate-500">
              We&apos;re building our gallery to showcase life at Vellix Academy. Check back soon for photos from our events, graduation ceremonies, and campus activities!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
