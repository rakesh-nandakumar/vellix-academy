import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { events } from "@/lib/data";

export const metadata = {
  title: "Events – Vellix Academy",
  description:
    "Upcoming events at Vellix Academy — programme launches, hackathons, tech talks and open days.",
};

export default function EventsPage() {
  return (
    <>
      <PageBanner title="Events" breadcrumbs={[{ label: "Events" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's On"
            title="Upcoming Events"
            subtitle="Start Your Technology Journey with Vellix Academy. From foundation learning to professional specialization pathways, build the skills needed for a successful career in technology."
          />

          <div className="mx-auto max-w-4xl space-y-5">
            {events.map((event) => (
              <article
                key={event.id}
                className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10 sm:flex-row sm:items-center sm:p-7"
              >
                {/* Date block */}
                <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-lg shadow-sky-500/30">
                  <span className="text-[11px] font-bold uppercase tracking-widest opacity-90">
                    {event.month}
                  </span>
                  <span className="font-display text-3xl font-extrabold leading-none">
                    {event.day}
                  </span>
                  <span className="text-[11px] opacity-80">{event.year}</span>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-600 ring-1 ring-sky-100">
                    {event.category}
                  </span>
                  <h3 className="mt-2.5 font-display text-lg font-bold text-navy-950">
                    {event.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {event.description}
                  </p>
                  {event.lecturers && (
                    <p className="mt-2 text-xs text-slate-600">
                      <span className="font-semibold">Lecturers:</span> {event.lecturers.join(", ")}
                    </p>
                  )}
                  {event.pathways && (
                    <div className="mt-2 text-xs text-slate-600">
                      <span className="font-semibold">Pathways:</span>
                      <ul className="mt-1 ml-4 list-disc space-y-0.5">
                        {event.pathways.map((pathway, idx) => (
                          <li key={idx}>{pathway}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {event.tracks && (
                    <div className="mt-2 text-xs text-slate-600">
                      <span className="font-semibold">Available Tracks:</span>
                      <ul className="mt-1 ml-4 list-disc space-y-0.5">
                        {event.tracks.map((track, idx) => (
                          <li key={idx}>{track}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Icon name="map-pin" className="h-3.5 w-3.5 text-sky-500" />
                    {event.location}
                  </p>
                </div>

                <div className="shrink-0">
                  <Button href="/contact" size="sm">
                    {event.buttonText || "Register"}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
