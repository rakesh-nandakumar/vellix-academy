import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Link from "next/link";
import { events } from "@/lib/data";

export const metadata = {
  title: "Events – Vellix Academy",
  description:
    "Upcoming events at Vellix Academy — programme launches, hackathons, tech talks and open days.",
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <PageBanner title="Events" breadcrumbs={[{ label: "Events" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">What's On</span>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              From hackathons and tech talks to programme launch days and open campus events —
              there's always something happening at Vellix Academy.
            </p>
          </div>
          <div className="events-list">
            {events.map((event) => (
              <div key={event.id} className="event-item">
                <div className="event-date-box">
                  <span className="event-month">{event.month}</span>
                  <span className="event-day">{event.day}</span>
                  <span className="event-year">{event.year}</span>
                </div>
                <div className="event-details">
                  <span className="event-category">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-meta">
                    <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                  </div>
                </div>
                <div className="event-action">
                  <Link href="/contact" className="btn-primary">Register</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <a href="https://wa.me/94771234567" className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <ScrollTopBtn />
    </>
  );
}
