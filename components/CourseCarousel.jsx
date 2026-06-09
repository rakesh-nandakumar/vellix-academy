"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/data";

export default function CourseCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      navigation
      loop
      slidesPerView={1}
      spaceBetween={24}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="course-swiper"
    >
      {courses.map((course) => (
        <SwiperSlide key={course.id}>
          <div className="course-card">
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
              </div>
              <Link href={course.link} className="course-card-btn">
                View Course <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
