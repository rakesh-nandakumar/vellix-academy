import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/data";

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
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
