import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/data";

export const metadata = {
  title: "Courses – Vellix Academy",
  description:
    "Browse enterprise IT courses at Vellix Academy. Full-stack development, data science, cloud, DevOps, cybersecurity and more.",
};

const categories = [
  { id: "all", label: "All Courses" },
  { id: "software-engineering", label: "Software Engineering" },
  { id: "data-science", label: "Data Science" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "security", label: "Cybersecurity" },
  { id: "management", label: "IT Management" },
];

export default function CoursesPage() {
  return (
    <>
      <Header />
      <PageBanner title="Our Courses" breadcrumbs={[{ label: "Courses" }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          <div className="section-head">
            <span className="section-label">Enterprise IT</span>
            <h2 className="section-title">Courses Built for the Industry</h2>
            <p className="section-subtitle">
              Every course is designed to teach what enterprise teams actually use. Hands-on,
              project-driven and constantly updated.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="course-filter-tabs">
            {categories.map((cat) => (
              <span key={cat.id} className="filter-tab" data-category={cat.id}>
                {cat.label}
              </span>
            ))}
          </div>

          {/* Courses grid */}
          <div className="courses-archive-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card" data-category={course.category}>
                <div className="course-card-img">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="course-badge">{course.categoryLabel}</span>
                </div>
                <div className="course-card-body">
                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-desc">{course.description}</p>
                  <div className="course-meta">
                    <span><i className="fas fa-user-tie"></i> {course.instructor}</span>
                    <span><i className="fas fa-clock"></i> {course.duration}</span>
                    <span><i className="fas fa-graduation-cap"></i> {course.type}</span>
                  </div>
                  <Link href={course.link} className="course-card-btn">
                    View Course <i className="fas fa-arrow-right"></i>
                  </Link>
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
